import {TEST_METHODS} from "../methods/test-methods";


angular.module('testButton', [])
.component('testButton', {
  templateUrl: 'test_button/test_button.html',
  controller: function testButtonController($http) {
    let self = this;
    self.tests = TEST_METHODS;
    self.results = [];
    self.makeTest = () => {
      for (let test of self.tests) {
        let awaitingResponse = test.responseStatus;
        $http(test.request)
            .then(response => {
              self.results.push({
                requestMethod: test.request.method,
                responseDone: response,
                result: response.statusCode === awaitingResponse
              });
            })
            .catch(err => {
              self.results.push({
                requestMethod: test.request.method,
                responseDone: err,
                result: false
              });
            });
      }
    };
  }
});

