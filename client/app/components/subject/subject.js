import angular from 'angular';
import subjectComponent from './subject.component';

const subjectModule = angular.module('subject', [])

.component('subject', subjectComponent)

.name;

export default subjectModule;
