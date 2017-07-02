import angular from 'angular';
import notification from './notification/notification';
import grade from './grade/grade'

const componentModule = angular.module('app.components', [
  notification,
  grade
])

.name;

export default componentModule;
