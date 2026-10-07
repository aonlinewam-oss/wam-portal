import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import {
  StudentRecord,
  FeeStructure,
  CourseItem,
  GradeEntry,
  Announcement,
  parseStudentRecord,
  parseFeeStructure,
  parseCourseItem,
  parseAnnouncement,
} from "@/types/portal";

// --- Fee Management (Finance Hub) ---
export async function saveFeeStructure(feeData: FeeStructure) {
  const colRef = collection(db, "feeStructures");
  return await addDoc(colRef, feeData);
}

export async function getFeeStructures(): Promise<FeeStructure[]> {
  const colRef = collection(db, "feeStructures");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...parseFeeStructure(docSnap.data()),
  }));
}

// --- Course Catalog & Google Classroom Links (Registrar / Deans) ---
export async function saveCourse(course: CourseItem) {
  const colRef = collection(db, "courses");
  return await addDoc(colRef, course);
}

export async function updateCourseClassroomLink(
  courseId: string,
  classroomLink: string
) {
  const docRef = doc(db, "courses", courseId);
  return await updateDoc(docRef, { googleClassroomLink: classroomLink });
}

export async function getCourses(): Promise<CourseItem[]> {
  const colRef = collection(db, "courses");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...parseCourseItem(docSnap.data()),
  }));
}

// --- Student & Academic Records ---
export async function getStudentProfile(
  userId: string
): Promise<StudentRecord | null> {
  const q = query(collection(db, "students"), where("userId", "==", userId));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    const firstDoc = snapshot.docs[0];
    return { id: firstDoc.id, ...parseStudentRecord(firstDoc.data()) };
  }
  return null;
}

export async function saveGrade(grade: GradeEntry) {
  const colRef = collection(db, "grades");
  return await addDoc(colRef, grade);
}

// --- Institutional Announcements (President / VP Hubs) ---
export async function createAnnouncement(announcement: Announcement) {
  const colRef = collection(db, "announcements");
  return await addDoc(colRef, announcement);
}

export async function getAnnouncements(): Promise<Announcement[]> {
  const colRef = collection(db, "announcements");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...parseAnnouncement(docSnap.data()),
  }));
}