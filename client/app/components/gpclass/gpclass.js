import angular from 'angular';
import gpclassComponent from './gpclass.component';

const gpclassModule = angular.module('gpclass', [])

.component('gpclass', gpclassComponent)

.name;

export default gpclassModule;
