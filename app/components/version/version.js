'use strict';

angular.module('myApp.version', [
  'dailyTasksApp.version.interpolate-filter',
  'dailyTasksApp.version.version-directive'
])

.value('version', '0.1');
