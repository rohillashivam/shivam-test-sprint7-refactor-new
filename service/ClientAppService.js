angular.module('testServiceModule', [])
  .service('ClientAppService', function () {
      this.call = function () {
        console.log('In ClientAppService :: methodName :: call');
        return "hello world";
      }
  });
