class SubjectController {
  constructor($log, classes) {
    "ngInject";
    this.$log = $log;
    this.classes = classes;
    this.name = 'subject';
  }
  isCurrentSubject() {
    return this.subject === this.classes.getCurrentSubject();
  }
}

export default SubjectController;
