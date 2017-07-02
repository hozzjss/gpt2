class SubjectController {
  constructor(classes) {
    "ngInject";
    this.classes = classes;
    this.name = 'subject';
  }
  isCurrentSubject() {
    return this.subject === this.classes.getCurrentSubject();
  }
}

export default SubjectController;
