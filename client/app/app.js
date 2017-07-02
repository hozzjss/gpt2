import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'reset-css/_reset.scss';

angular.module('app', [
    Common,
    Components
  ])

  .component('app', AppComponent);
