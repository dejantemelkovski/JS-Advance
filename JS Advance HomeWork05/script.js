function Academy(name, students, subjects, start, end) {
  this.name = name;
  this.students = students;
  this.subjects = subjects;
  this.start = start;
  this.end = end;
  this.numberOfClasses = subjects.length * 10;
  this.printStudents = function() {
    console.log(this.students);
  };
  this.printSubjects = function() {
    console.log(this.subjects);
  };
}
function Subject(title, isElective, academy, students) {
  this.title = title;
  this.numberOfClasses = 10;
  this.isElective = isElective;
  this.academy = academy;
  this.students = students;
  this.overrideClasses = function(number) {
    if (number >= 3) {
      this.numberOfClasses = number;
    } else {
      console.log('Number of classes can not be smaller than 3');
    }
  };
}
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;
  this.startAcademy = function(academy) {
    this.academy = academy;
    academy.students.push(this);
  };
  this.startSubject = function(subject) {
    if (this.academy === null) {
      console.log('You must start an academy first');
    } else if (this.academy.subjects.indexOf(subject) === -1) {
      console.log('This subject does not exist in this academy');
    } else {
      if (this.currentSubject !== null) {
        this.completedSubjects.push(this.currentSubject);
      }
      this.currentSubject = subject;
      subject.students.push(this);
    }
  };
}
const academy = new Academy('Dejan', ['Dejan', 'Petar', 'Tosho'], ['HTML', 'CSS', 'JS Basic', 'JS Advance'], '17.10.2022', '20.10.2023');
const subject = new Subject('Web Developer', true, 'SEDC', []);
const student = new Student('Dejan', 'Temelkovski', 36);
student.startAcademy(academy);
student.startSubject(subject);
console.log(academy);
console.log(subject);
console.log(student);
