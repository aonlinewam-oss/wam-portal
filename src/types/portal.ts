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