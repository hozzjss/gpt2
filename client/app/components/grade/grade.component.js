import template from './grade.html';
import controller from './grade.controller';
import './grade.scss';

const gradeComponent = {
  bindings: {
    selected: '&'
  },
  template,
  controller
};

export default gradeComponent;
