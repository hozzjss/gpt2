import {copy} from 'angular';

class EditorController {
  currentGrade
  currentSubject
  constructor(classes, $scope) {
    "ngInject";

    this.classes = classes;
    this.$scope = $scope;
    this.name = 'editor';
  }

  getCurrentGrade() {
    this.currentGrade = copy(this.classes.getCurrentGrade());
    this.selectSubject(this.currentGrade.subjects[0]);
    this.currentSubject = this.classes.getCurrentSubject();
  }

  selectSubject(subject) {
    this.classes.setCurrentSubject(subject);
    this.currentSubject = this.classes.getCurrentSubject();
  }
  saveData() {
    this.classes.updateGradesData(this.currentGrade);
  }

  setBg(index) {
    return (index + 1) % 2 ? 'light' : 'dark';
  }

  $onInit() {
    this.getCurrentGrade();
    this.$scope.$on('onCurrentGradeUpdated', this.getCurrentGrade.bind(this))
  }
}

export default EditorController;
