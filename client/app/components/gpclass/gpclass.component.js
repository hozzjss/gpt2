import template from './gpclass.html';
import controller from './gpclass.controller';
import './gpclass.scss';

const gpclassComponent = {
  bindings: {
    gpclass: '<',
    bg: '<',
    editable: '<'
  },
  template,
  controller
};

export default gpclassComponent;
