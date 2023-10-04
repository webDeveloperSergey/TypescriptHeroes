export function isMarksArr(marks: unknown): marks is unknown[] {
  return Array.isArray(marks);
}
