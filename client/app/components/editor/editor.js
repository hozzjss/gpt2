import angular from 'angular';
import editorComponent from './editor.component';
import subject from '../subject/subject';
import gpclass from '../gpclass/gpclass';


const editorModule = angular.module('editor', [
    subject,
    gpclass
])

.component('editor', editorComponent)

.name;

export default editorModule;
