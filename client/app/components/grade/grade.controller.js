class GradeController {
  currentGrade
  constructor(classes) {
    "ngInject";

    this.name = 'grade';
    this.classes = classes;
  }

  setCurrentGrade(grade) {
    this.currentGrade = grade;
    this.classes.setCurrentGrade(grade);
    this.toggleGrades();
  }

  toggleGrades() {
    this.showGrades = !this.showGrades;
  }

  getGrades() {
    this.grades = this.classes.getGrades();
    this.currentGrade = this.grades[0];
  }

  $onInit() {
    this.getGrades();
  }
}

export default GradeController;
