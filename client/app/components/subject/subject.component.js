import template from './subject.html';
import controller from './subject.controller';
import './subject.scss';

const subjectComponent = {
  bindings: {
    subject: '<',
    bg: '<'
  },
  template,
  controller
};

export default subjectComponent;
