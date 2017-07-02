import angular from 'angular';
import notification from './notification/notification';
import grade from './grade/grade'
import editor from './editor/editor'

const componentModule = angular.module('app.components', [
  notification,
  grade,
  editor
])

.name;

export default componentModule;
