import angular from 'angular';
import notificationComponent from './notification.component';

const notificationModule = angular.module('notification', [])

.component('notification', notificationComponent)

.name;

export default notificationModule;
