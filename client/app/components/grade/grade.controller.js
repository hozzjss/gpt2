class GradeController {
  currentGrade
  constructor(classes) {
    "ngInject";

    this.name = 'grade';
    this.classes = classes;
  }

  setCurrentGrade(grade) {
    this.classes.setCurrentGrade(grade);
    this.currentGrade = this.classes.getCurrentGrade();
    this.toggleGrades();
  }

  toggleGrades() {
    this.showGrades = !this.showGrades;
  }

  getGrades() {
    this.grades = this.classes.getGrades();
    this.classes.setCurrentGrade(this.grades[0]);
    this.currentGrade = this.classes.getCurrentGrade();
  }

  $onInit() {
    this.getGrades();
  }
}

export default GradeController;
