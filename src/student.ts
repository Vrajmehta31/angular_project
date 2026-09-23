export class Student {
  id: number;
  name: string;
  course: string;
  marks: number;

  constructor(id: number, name: string, course: string, marks: number) {
    this.id=id;
    this.name=name;
    this.course=course;
    this.marks=marks;
  }
}
