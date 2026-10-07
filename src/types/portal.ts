export interface StudentRecord {
  id?: string;
  userId: string;
  fullName: string;
  matricNumber: string;
  level: string; // e.g., "100", "200", "300", "400"
  department: string;
  feeCleared: boolean;
  totalOutstanding: number;
}

export interface FeeStructure {
  id?: string;
  academicYear: string;
  level: string;
  department: string;
  tuitionFee: number;
  acceptanceFee: number;
  departmentalFee: number;
  dueDate: string;
}

export interface CourseItem {
  id?: string;
  courseCode: string;
  courseTitle: string;
  units: number;
  lecturerId: string;
  lecturerName: string;
  department: string;
  googleClassroomLink?: string;
}

export interface GradeEntry {
  id?: string;
  studentId: string;
  studentName: string;
  courseCode: string;
  score: number;
  grade: string;
  semester: string;
}

export interface Announcement {
  id?: string;
  title: string;
  content: string;
  authorRole: string;
  date: string;
  targetRole: "all" | "student" | "staff";
}
// --- Runtime parsing / validation helpers ---
// Firestore documents are untyped at runtime, so every read is validated here
// instead of being blindly asserted with `as`.

export class DocumentParseError extends Error {
  constructor(
    public readonly collectionName: string,
    public readonly issues: string[]
  ) {
    super(
      `Invalid document in "${collectionName}" collection: ${issues.join("; ")}`
    );
    this.name = "DocumentParseError";
  }
}

type FieldCheck = (value: unknown, key: string, issues: string[]) => void;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const stringField: FieldCheck = (value, key, issues) => {
  if (typeof value !== "string") {
    issues.push(`${key} must be a string`);
  }
};

const numberField: FieldCheck = (value, key, issues) => {
  if (typeof value !== "number" || Number.isNaN(value)) {
    issues.push(`${key} must be a number`);
  }
};

const booleanField: FieldCheck = (value, key, issues) => {
  if (typeof value !== "boolean") {
    issues.push(`${key} must be a boolean`);
  }
};

const optionalStringField: FieldCheck = (value, key, issues) => {
  if (typeof value !== "string") {
    issues.push(`${key} must be a string when provided`);
  }
};

function createFieldEntry(
  check: FieldCheck,
  optional = false
): { check: FieldCheck; optional: boolean } {
  return { check, optional };
}

type Schema<T> = {
  collectionName: string;
  fields: Record<keyof T & string, { check: FieldCheck; optional: boolean }>;
};

function defineSchema<T extends Record<string, unknown>>(
  collectionName: string,
  fields: Schema<T>["fields"]
): Schema<T> {
  return { collectionName, fields };
}

function parseWithSchema<T>(schema: Schema<T>, data: unknown): T {
  if (!isRecord(data)) {
    throw new DocumentParseError(schema.collectionName, [
      "document data is not an object",
    ]);
  }

  const issues: string[] = [];
  for (const [key, rule] of Object.entries(schema.fields)) {
    const value = data[key];
    if (rule.optional && (value === undefined || value === null)) {
      continue;
    }
    (rule.check as FieldCheck)(value, key, issues);
  }

  if (issues.length > 0) {
    throw new DocumentParseError(schema.collectionName, issues);
  }

  return { ...(data as T) };
}

export const studentRecordSchema = defineSchema<StudentRecord>("students", {
  userId: createFieldEntry(stringField),
  fullName: createFieldEntry(stringField),
  matricNumber: createFieldEntry(stringField),
  level: createFieldEntry(stringField),
  department: createFieldEntry(stringField),
  feeCleared: createFieldEntry(booleanField),
  totalOutstanding: createFieldEntry(numberField),
});

export const feeStructureSchema = defineSchema<FeeStructure>("feeStructures", {
  academicYear: createFieldEntry(stringField),
  level: createFieldEntry(stringField),
  department: createFieldEntry(stringField),
  tuitionFee: createFieldEntry(numberField),
  acceptanceFee: createFieldEntry(numberField),
  departmentalFee: createFieldEntry(numberField),
  dueDate: createFieldEntry(stringField),
});

export const courseItemSchema = defineSchema<CourseItem>("courses", {
  courseCode: createFieldEntry(stringField),
  courseTitle: createFieldEntry(stringField),
  units: createFieldEntry(numberField),
  lecturerId: createFieldEntry(stringField),
  lecturerName: createFieldEntry(stringField),
  department: createFieldEntry(stringField),
  googleClassroomLink: createFieldEntry(optionalStringField, true),
});

export const announcementSchema = defineSchema<Announcement>("announcements", {
  title: createFieldEntry(stringField),
  content: createFieldEntry(stringField),
  authorRole: createFieldEntry(stringField),
  date: createFieldEntry(stringField),
  targetRole: createFieldEntry((value, key, issues) => {
    if (value !== "all" && value !== "student" && value !== "staff") {
      issues.push(`${key} must be one of "all" | "student" | "staff"`);
    }
  }),
});

export function parseStudentRecord(data: unknown): StudentRecord {
  return parseWithSchema(studentRecordSchema, data);
}

export function parseFeeStructure(data: unknown): FeeStructure {
  return parseWithSchema(feeStructureSchema, data);
}

export function parseCourseItem(data: unknown): CourseItem {
  return parseWithSchema(courseItemSchema, data);
}

export function parseAnnouncement(data: unknown): Announcement {
  return parseWithSchema(announcementSchema, data);
}

export type PortalUserRole =
  | "student"
  | "staff"
  | "president"
  | "vp"
  | "registrar"
  | "dean"
  | "finance"
  | "ict";

export interface PortalUserProfile {
  uid: string;
  email: string;
  fullName: string;
  role: PortalUserRole;
  department?: string;
}

const userRoleField: FieldCheck = (value, key, issues) => {
  const roles: PortalUserRole[] = [
    "student",
    "staff",
    "president",
    "vp",
    "registrar",
    "dean",
    "finance",
    "ict",
  ];
  if (typeof value !== "string" || !roles.includes(value as PortalUserRole)) {
    issues.push(`${key} must be one of ${roles.join(" | ")}`);
  }
};

export const userProfileSchema = defineSchema<PortalUserProfile>("users", {
  uid: createFieldEntry(stringField),
  email: createFieldEntry(stringField),
  fullName: createFieldEntry(stringField),
  role: createFieldEntry(userRoleField),
  department: createFieldEntry(optionalStringField, true),
});

export function parseUserProfile(data: unknown): PortalUserProfile {
  return parseWithSchema(userProfileSchema, data);
}
