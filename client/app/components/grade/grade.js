import angular from 'angular';
import gradeComponent from './grade.component';

const gradeModule = angular.module('grade', [])

.component('grade', gradeComponent)

.name;

export default gradeModule;
