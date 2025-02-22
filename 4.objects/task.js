function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marks) {
    if ('marks' in this === true) {
        this.marks.push(...marks)
      }
  
}

Student.prototype.getAverage = function () {
    if ('marks' in this === false || this.marks.length == 0) {
        return 0;
      }
      return this.marks.reduce((acc, item)=> acc + item, 0) / this.marks.length;
  
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
  delete this.marks;
  this.excluded = reason;
  
}
let student1 = new Student("Гарри", "мужской", 10);
  student1.setSubject("magic");
  console.log(student1.getAverage()); 
  student1.addMarks(4, 5, 4, 5);
  console.log(student1.getAverage());
  console.log(student1);
let student2 = new Student("Рон", "мужской", 10);
  student2.setSubject("levitation");
  student2.exclude('плохая учёба')
  console.log(student2)
let student3 = new Student("Гермиона", "женский", 10);
  student3.setSubject("potions");
  console.log(student3.getAverage());
  student1.addMarks(5, 5, 5, 5);
  console.log(student3.getAverage());
  console.log(student3);