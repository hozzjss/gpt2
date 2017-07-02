class GradeController {
  currentOption
  constructor(classes) {
    "ngInject";

    this.name = 'grade';
    this.classes = classes;
  }
  setCurrentOption(option) {
    this.currentOption = option;
    this.toggleOptions();
  }
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
  $onInit() {
    this.options = this.classes.getGrades();
    this.currentOption = this.options[0];
    this.selected({option: this.currentOption})
  }
}

export default GradeController;
