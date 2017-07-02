import angular from 'angular';
import navbar from './navbar/navbar';
import classesService from './classes/classes.service'
 
const commonModule = angular.module('app.common', [
  navbar
])
.service('classes', classesService)
  
.name;

export default commonModule;
