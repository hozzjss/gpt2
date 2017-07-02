import {copy} from 'angular';

class EditorController {
  currentGrade
  currentSubject
  constructor(classes, $log, $scope) {
    "ngInject";

    this.classes = classes;
    this.$log = $log;
    this.$scope = $scope;
    this.name = 'editor';
  }

  getCurrentGrade() {
    this.currentGrade = copy(this.classes.getCurrentGrade());
    this.selectSubject(this.currentGrade.subjects[0]);
    this.currentSubject = this.classes.getCurrentSubject();
    this.$log.log('ctrl', this.currentGrade);
    this.$log.log('srv', this.classes.getCurrentGrade());
  }

  selectSubject(subject) {
    this.classes.setCurrentSubject(subject);
    this.currentSubject = this.classes.getCurrentSubject();
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
