webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(297)},297:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var r=t(298),n=s(r),a=t(300),c=s(a),l=t(332),i=s(l),o=t(363),d=s(o);t(368),n.default.module("app",[c.default,i.default]).component("app",d.default)},300:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),n=s(r),a=t(301),c=s(a),l=t(310),i=s(l),o=n.default.module("app.common",[c.default]).service("classes",i.default).name;exports.default=o},301:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),n=s(r),a=t(302),c=s(a),l=n.default.module("navbar",[]).component("navbar",c.default).name;exports.default=l},302:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(303),n=s(r),a=t(304),c=s(a);t(306);var l={template:n.default,controller:c.default};exports.default=l},303:function(e,exports){e.exports='<nav class="navbar">\r\n  <div class="logo">\r\n    <img src="./assets/books.png" alt="">\r\n    <h1>إعدادات المواد والفصول</h1>\r\n  </div>\r\n  <div class="back">\r\n    <img src="./assets/arrow-back.png" alt="">\r\n  </div>\r\n</nav>\r\n'},304:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(305),n=s(r),a=function e(){(0,n.default)(this,e),this.name="navbar"};exports.default=a},306:function(e,exports,t){var s=t(307);"string"==typeof s&&(s=[[e.id,s,""]]);t(309)(s,{});s.locals&&(e.exports=s.locals)},307:function(e,exports,t){exports=e.exports=t(308)(),exports.push([e.id,"@import url(//fonts.googleapis.com/earlyaccess/droidarabickufi.css);",""]),exports.push([e.id,"body{direction:rtl;height:100%;font:62.5% Droid Arabic Kufi,sans-serif!important}.navbar{max-height:8.6%;background-color:#f9f9f9;color:#ff512f;justify-content:space-between}.navbar,.navbar>div{display:flex;align-items:center}.navbar .back{cursor:pointer;margin-left:5%}.navbar .back img{height:30px}.navbar .logo>*{display:inline-block}.navbar .logo img{height:50px;margin-left:10px}.navbar .logo h1{font-size:15px}",""])},310:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(305),n=s(r),a=t(311),c=s(a),l=t(330),i=function(){function e(t){"ngInject";var s=this;(0,n.default)(this,e),this.getGrades=function(){return s.grades},this.$rootScope=t,this.grades=[{name:"grade for test 1",subjects:[{name:"المادة الرابعة",selected:!0,classes:[{name:"class for test 1",selected:!0},{name:"class for test 2",selected:!1},{name:"class for test 3",selected:!1},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]},{name:"المادة الخامسة",selected:!0,classes:[{name:"class for test 1",selected:!1},{name:"class for test 2",selected:!1},{name:"class for test 3",selected:!1},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]},{name:"المادة السابعة",selected:!1,classes:[{name:"class for test 1",selected:!1},{name:"class for test 2",selected:!1},{name:"class for test 3",selected:!1},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]}]},{name:"grade for test 2",subjects:[{name:"المادة الرابعة",selected:!0,classes:[{name:"class for test 1",selected:!1},{name:"class for test 2",selected:!1},{name:"class for test 3",selected:!1},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]},{name:"المادة الخامسة",selected:!1,classes:[{name:"class for test 1",selected:!1},{name:"class for test 2",selected:!0},{name:"class for test 3",selected:!1},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]},{name:"المادة السابعة",selected:!0,classes:[{name:"class for test 1",selected:!1},{name:"class for test 2",selected:!1},{name:"class for test 3",selected:!1},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]}]},{name:"grade for test 3",subjects:[{name:"المادة الرابعة",selected:!1,classes:[{name:"class for test 1",selected:!1},{name:"class for test 2",selected:!1},{name:"class for test 3",selected:!1},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]},{name:"المادة الخامسة",selected:!0,classes:[{name:"class for test 1",selected:!1},{name:"class for test 2",selected:!1},{name:"class for test 3",selected:!1},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]},{name:"المادة السابعة",selected:!0,classes:[{name:"class for test 1",selected:!1},{name:"class for test 2",selected:!1},{name:"class for test 3",selected:!0},{name:"class for test 4",selected:!1},{name:"class for test 5",selected:!1}]}]}]}return e.$inject=["$rootScope"],(0,c.default)(e,[{key:"getCurrentGrade",value:function(){return this.currentGrade}},{key:"setCurrentSubject",value:function(e){this.currentSubject=e}},{key:"getCurrentSubject",value:function(){return this.currentSubject}},{key:"setCurrentGrade",value:function(e){this.currentGrade=e,this.$rootScope.$broadcast("onCurrentGradeUpdated")}},{key:"updateGradesData",value:function(e){var t=(0,l.findIndex)(this.grades,this.currentGrade);this.grades[t]=e,this.$rootScope.$broadcast("onDataUpdated")}}]),e}();exports.default=i},332:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),n=s(r),a=t(333),c=s(a),l=t(339),i=s(l),o=t(345),d=s(o),u=n.default.module("app.components",[c.default,i.default,d.default]).name;exports.default=u},333:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),n=s(r),a=t(334),c=s(a),l=n.default.module("notification",[]).component("notification",c.default).name;exports.default=l},334:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(335),n=s(r),a=t(336),c=s(a);t(337);var l={bindings:{},template:n.default,controller:c.default};exports.default=l},335:function(e,exports){e.exports='<div class="notification">\r\n  <p><img src="./assets/tick.png" alt=""> البيانات محدثة</p>\r\n</div>\r\n'},336:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(305),n=s(r),a=function e(){(0,n.default)(this,e),this.name="notification"};exports.default=a},337:function(e,exports,t){var s=t(338);"string"==typeof s&&(s=[[e.id,s,""]]);t(309)(s,{});s.locals&&(e.exports=s.locals)},338:function(e,exports,t){exports=e.exports=t(308)(),exports.push([e.id,".notification p{background-color:#70c38c;padding-right:10px;color:#fff;display:flex;align-items:center;font-size:14px;margin:0}.notification p>*{display:inline-block}.notification p img{margin-left:4px;height:18px}",""])},339:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),n=s(r),a=t(340),c=s(a),l=n.default.module("grade",[]).component("grade",c.default).name;exports.default=l},340:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(341),n=s(r),a=t(342),c=s(a);t(343);var l={bindings:{},template:n.default,controller:c.default};exports.default=l},341:function(e,exports){e.exports='<div class="grade">\r\n  <div class="select" ng-click="$ctrl.toggleGrades()">\r\n    <p> {{ $ctrl.currentGrade.name }} </p>\r\n    <div class="arrow-down">\r\n      <img src="./assets/down-arrow.png" alt="">\r\n    </div>\r\n  </div>\r\n  <div class="grades-container" ng-click="$ctrl.showGrades=false" ng-show="$ctrl.showGrades">\r\n    <ul class="grades">\r\n      <li ng-click="$ctrl.setCurrentGrade(grade)"\r\n      class="item" ng-repeat="grade in $ctrl.grades"> {{ grade.name }} </li>\r\n    </ul>\r\n  </div>\r\n</div>'},342:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(305),n=s(r),a=t(311),c=s(a),l=function(){function e(t){"ngInject";(0,n.default)(this,e),this.name="grade",this.classes=t}return e.$inject=["classes"],(0,c.default)(e,[{key:"setCurrentGrade",value:function(e){this.classes.setCurrentGrade(e),this.currentGrade=this.classes.getCurrentGrade(),this.toggleGrades()}},{key:"toggleGrades",value:function(){this.showGrades=!this.showGrades}},{key:"getGrades",value:function(){this.grades=this.classes.getGrades(),this.classes.setCurrentGrade(this.grades[0]),this.currentGrade=this.classes.getCurrentGrade()}},{key:"$onInit",value:function(){this.getGrades()}}]),e}();exports.default=l},343:function(e,exports,t){var s=t(344);"string"==typeof s&&(s=[[e.id,s,""]]);t(309)(s,{});s.locals&&(e.exports=s.locals)},344:function(e,exports,t){exports=e.exports=t(308)(),exports.push([e.id,"@import url(//fonts.googleapis.com/earlyaccess/droidarabickufi.css);",""]),exports.push([e.id,"body{direction:rtl;height:100%;font:62.5% Droid Arabic Kufi,sans-serif!important}.grade{font-size:14px}.grade,.grade .select{width:100%}.grade .select{cursor:pointer;display:flex;justify-content:space-between;background-color:#f2f2f2;align-items:center}.grade .select p{padding-right:10px}.grade .select .arrow-down{display:flex;background-color:#ff512f;justify-content:center;width:50px;height:50px;align-items:center}.grade .select .arrow-down img{height:20px}.grade .grades-container{position:absolute;width:100%;padding:0 34px;box-sizing:border-box;margin-right:-34px;height:100%;margin-top:-168px;padding-top:168px}.grade .grades-container .grades{border:1px solid #f2f2f2;border-top:0;border-bottom:0;width:100%;box-sizing:border-box;position:relative}.grade .grades-container .grades .item{background-color:#fff;display:flex;height:50px;align-items:center;padding-right:10px;border-bottom:1px solid #f2f2f2;cursor:pointer}.grade .grades-container .grades .item:hover{background-color:#f2f2f2}",""])},345:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),n=s(r),a=t(346),c=s(a),l=t(351),i=s(l),o=t(357),d=s(o),u=n.default.module("editor",[i.default,d.default]).component("editor",c.default).name;exports.default=u},346:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(347),n=s(r),a=t(348),c=s(a);t(349);var l={bindings:{},template:n.default,controller:c.default};exports.default=l},347:function(e,exports){e.exports='<div class="editor">\r\n  <div class="subjects">\r\n    <h3>المواد</h3>\r\n    <ul>\r\n      <li ng-repeat="subject in $ctrl.currentGrade.subjects">\r\n        <subject bg="$ctrl.setBg($index)" ng-click="$ctrl.selectSubject(subject)" subject="subject"></subject>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class="classes">\r\n    <h3>الفصول</h3>\r\n    <ul>\r\n      <li ng-repeat="gpclass in $ctrl.currentSubject.classes">\r\n        <gpclass editable="$ctrl.currentSubject.selected" bg="$ctrl.setBg($index)" gpclass="gpclass"></gpclass>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class="save">\r\n    <button ng-click="$ctrl.saveData()">حفظ الإعدادات</button>\r\n  </div>\r\n</div>\r\n'},348:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(305),n=s(r),a=t(311),c=s(a),l=t(298),i=function(){function e(t,s){"ngInject";(0,n.default)(this,e),this.classes=t,this.$scope=s,this.name="editor"}return e.$inject=["classes","$scope"],(0,c.default)(e,[{key:"getCurrentGrade",value:function(){this.currentGrade=(0,l.copy)(this.classes.getCurrentGrade()),this.selectSubject(this.currentGrade.subjects[0]),this.currentSubject=this.classes.getCurrentSubject()}},{key:"selectSubject",value:function(e){this.classes.setCurrentSubject(e),this.currentSubject=this.classes.getCurrentSubject()}},{key:"saveData",value:function(){this.classes.updateGradesData(this.currentGrade)}},{key:"setBg",value:function(e){return(e+1)%2?"light":"dark"}},{key:"$onInit",value:function(){this.getCurrentGrade(),this.$scope.$on("onCurrentGradeUpdated",this.getCurrentGrade.bind(this))}}]),e}();exports.default=i},349:function(e,exports,t){var s=t(350);"string"==typeof s&&(s=[[e.id,s,""]]);t(309)(s,{});s.locals&&(e.exports=s.locals)},350:function(e,exports,t){exports=e.exports=t(308)(),exports.push([e.id,"@import url(//fonts.googleapis.com/earlyaccess/droidarabickufi.css);",""]),exports.push([e.id,"body{direction:rtl;height:100%;font:62.5% Droid Arabic Kufi,sans-serif!important}.editor{display:flex;flex-wrap:wrap;font-size:14px;width:100%;height:100%;margin-top:1.2vh}.editor>div:not(.save){width:50%;height:45%}.editor>div:not(.save) h3{height:10vh;display:flex;justify-content:center;align-items:center;color:#fff}.editor .subjects h3{background-color:#c974f4}.editor .classes h3{background-color:#20d2bb}.editor .save{flex-grow:2}.editor .save button{margin-top:1.8vh;height:10.1vh;width:100%;font-family:inherit;color:#fff;border:0;display:block;background-color:#20d2bb}.editor .save button:active{background-color:#19a694}",""])},351:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),n=s(r),a=t(352),c=s(a),l=n.default.module("subject",[]).component("subject",c.default).name;exports.default=l},352:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(353),n=s(r),a=t(354),c=s(a);t(355);var l={bindings:{subject:"<",bg:"<"},template:n.default,controller:c.default};exports.default=l},353:function(e,exports){e.exports='<div ng-class="{\'active\': $ctrl.isCurrentSubject()}" class="subject {{$ctrl.bg}} ">\r\n  <input type="checkbox" hidden id="subject-{{$ctrl.subject.name}}" ng-model="$ctrl.subject.selected">\r\n  <label for="subject-{{$ctrl.subject.name}}">\r\n    <img ng-show="$ctrl.subject.selected" class="checked" src="./assets/check-box.png" alt="">\r\n    <img ng-hide="$ctrl.subject.selected" class="unchecked" src="./assets/plain-square.png" alt="">\r\n  </label>\r\n  <span>{{ $ctrl.subject.name }}</span>\r\n</div>'},354:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(305),n=s(r),a=t(311),c=s(a),l=function(){function e(t){"ngInject";(0,n.default)(this,e),this.classes=t,this.name="subject"}return e.$inject=["classes"],(0,c.default)(e,[{key:"isCurrentSubject",value:function(){return this.subject===this.classes.getCurrentSubject()}}]),e}();exports.default=l},355:function(e,exports,t){var s=t(356);"string"==typeof s&&(s=[[e.id,s,""]]);t(309)(s,{});s.locals&&(e.exports=s.locals)},356:function(e,exports,t){exports=e.exports=t(308)(),exports.push([e.id,"@import url(//fonts.googleapis.com/earlyaccess/droidarabickufi.css);",""]),exports.push([e.id,"body{direction:rtl;height:100%;font:62.5% Droid Arabic Kufi,sans-serif!important}.subject{width:100%;font-size:16px!important;height:7.1vh;display:flex;align-items:center;cursor:pointer;justify-content:center;color:#20d2bb}.subject.dark{background-color:#f2f2f2}.subject.light{background-color:#f9f9f9}.subject.active{background-color:#919191}.subject img{display:inline-block;margin-left:5px}.subject img.checked,.subject img.unchecked{height:16px}",""])},357:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),n=s(r),a=t(358),c=s(a),l=n.default.module("gpclass",[]).component("gpclass",c.default).name;exports.default=l},358:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(359),n=s(r),a=t(360),c=s(a);t(361);var l={bindings:{gpclass:"<",bg:"<",editable:"<"},template:n.default,controller:c.default};exports.default=l},359:function(e,exports){e.exports='<div ng-class="{\'disabled\': !$ctrl.editable}" class="{{ $ctrl.bg }} gpclass">\r\n  <label for="gpswitch-{{$ctrl.gpclass.name}}">\r\n    <input hidden ng-disabled="!$ctrl.editable"\r\n    type="checkbox" ng-model="$ctrl.gpclass.selected" \r\n    id="gpswitch-{{$ctrl.gpclass.name}}" value="">\r\n    <img ng-show="$ctrl.gpclass.selected" class="checked" src="./assets/check-box.png" alt="">\r\n    <img ng-hide="$ctrl.gpclass.selected" class="unchecked" src="./assets/plain-square.png" alt="">\r\n    <span>فصل {{ $ctrl.gpclass.name }}</span>\r\n  </label>\r\n</div>'},360:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(305),n=s(r),a=function e(){(0,n.default)(this,e)};exports.default=a},361:function(e,exports,t){var s=t(362);"string"==typeof s&&(s=[[e.id,s,""]]);t(309)(s,{});s.locals&&(e.exports=s.locals)},362:function(e,exports,t){exports=e.exports=t(308)(),exports.push([e.id,"@import url(//fonts.googleapis.com/earlyaccess/droidarabickufi.css);",""]),exports.push([e.id,"body{direction:rtl;height:100%;font:62.5% Droid Arabic Kufi,sans-serif!important}.gpclass{width:100%;font-size:16px!important;height:7.1vh;display:flex;align-items:center;cursor:pointer;justify-content:center;color:#c974f4}.gpclass.dark{background-color:#f2f2f2}.gpclass.light{background-color:#f9f9f9}.gpclass.disabled label{color:#aaa;cursor:not-allowed}.gpclass label{cursor:pointer;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.gpclass label img{display:inline-block;margin-left:5px}.gpclass label img.checked,.gpclass label img.unchecked{height:16px}",""])},363:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(364),n=s(r),a=t(365),c=s(a);t(366);var l={template:n.default,controller:c.default};exports.default=l},364:function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\r\n<div class="app">\r\n  <navbar></navbar>\r\n  <notification ng-click="$ctrl.cancelNotify()" ng-show="$ctrl.notify"></notification>\r\n  <div class="note">\r\n    <p>اختر المادة ثم اختر الفصول التي تدرسها</p>\r\n    <div class="arrow-down"></div>\r\n  </div>\r\n  <main>\r\n    <grade></grade>\r\n    <editor></editor>\r\n  </main>\r\n</div>\r\n'},365:function(e,exports,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(305),n=s(r),a=t(311),c=s(a),l=function(){function e(t,s){"ngInject";(0,n.default)(this,e),this.$scope=s,this.$timeout=t}return e.$inject=["$timeout","$scope"],(0,c.default)(e,[{key:"cancelNotify",value:function(){this.notify=!1}},{key:"startNotify",value:function(){var e=this;this.notify=!0,this.$timeout(function(){return e.notify=!1},2e3)}},{key:"$onInit",value:function(){this.$scope.$on("onDataUpdated",this.startNotify.bind(this))}}]),e}();exports.default=l},366:function(e,exports,t){var s=t(367);"string"==typeof s&&(s=[[e.id,s,""]]);t(309)(s,{});s.locals&&(e.exports=s.locals)},367:function(e,exports,t){exports=e.exports=t(308)(),exports.push([e.id,"@import url(//fonts.googleapis.com/earlyaccess/droidarabickufi.css);",""]),exports.push([e.id,"body{direction:rtl;font:62.5% Droid Arabic Kufi,sans-serif!important}.app,body{height:100%}.app{background-color:#fff}.app main{padding-top:17px;padding-right:34px;padding-left:34px}.app .note p{color:#fff;background-color:#20d2bb;margin:0;font-size:16px;padding-right:15px}.app .note .arrow-down{margin-right:55px;width:0;height:0;border-left:20px solid transparent;border-right:20px solid transparent;border-top:20px solid #20d2bb}",""])}});