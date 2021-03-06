//import {TEST_METHODS} from "../methods/test-methods";


angular.module('testButton', [])
.component('testButton', {
  templateUrl: 'test_button/test_button.html',
  controller: function testButtonController($http) {
    let self = this;
    self.tests = TEST_METHODS;
    self.awaitingResponses = new Map();

    self.makeTest = () => {
      self.results = [];

      for (let test of self.tests) {
        self.awaitingResponses.set(test.request.method, test.responseStatus);
        $http(test.request)
            .then(response => {
              self.results.push({
                requestMethod: test.request.method,
                responseDone: response.data,
                result: response.status.toString() === self.awaitingResponses.get(test.request.method)
              });
            })
            .catch(err => {
              self.results.push({
                requestMethod: test.request.method,
                responseDone: err,
                result: err.status.toString() === self.awaitingResponses.get(test.request.method)
              });
            });
      }
    };
  }
});

const TEST_METHODS = [
  {
    request: {
      "async": true,
      "crossDomain": true,
      "url": "https://8b871866-25fa-4c9d-8211-9492fc0e772f.mock.pstmn.io/get",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "Postman-Token": "6520f194-890c-4f02-b88d-467bc6302d38"
      }
    },
    responseStatus: '200'
  },
  {
    request: {
      "async": true,
      "crossDomain": true,
      "url": "https://8b871866-25fa-4c9d-8211-9492fc0e772f.mock.pstmn.io/post",
      "method": "POST",
      "headers": {
        "User-Agent": "PostmanRuntime/7.15.2",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "0cc06538-25ec-43ba-91b9-8e81929c7043,3cdbfe4c-8d93-437a-bf2a-cb39550f18f8",
        "Host": "postman-echo.com",
        "Cookie": "sails.sid=s%3AwpP7FbN2exKhRqirtDgzNxF3w6qa8qhd.0UBv1BbRwKedH0PbIiDImJrbITUrBL3CQLx0qw5sj58",
        "Accept-Encoding": "gzip, deflate",
        "Content-Length": "",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
      }
    },
    responseStatus: '200'
  },
  {
    request: {
      "async": true,
      "crossDomain": true,
      "url": "https://8b871866-25fa-4c9d-8211-9492fc0e772f.mock.pstmn.io/put",
      "method": "PUT",
      "headers": {
        "User-Agent": "PostmanRuntime/7.15.2",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "e655c4c7-4825-4980-bb6e-349a9e9390e8,6b91ab9b-b50a-4b49-affd-3aac235e8519",
        "Host": "postman-echo.com",
        "Cookie": "sails.sid=s%3AwpP7FbN2exKhRqirtDgzNxF3w6qa8qhd.0UBv1BbRwKedH0PbIiDImJrbITUrBL3CQLx0qw5sj58",
        "Accept-Encoding": "gzip, deflate",
        "Content-Length": "",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
      }
    },
    responseStatus: '200'
  },
  {
    request: {
      "async": true,
      "crossDomain": true,
      "url": "https://8b871866-25fa-4c9d-8211-9492fc0e772f.mock.pstmn.io/patch",
      "method": "PATCH",
      "headers": {
        "User-Agent": "PostmanRuntime/7.15.2",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "9f506c73-7298-47b1-969d-363699b53e7d,6f3092c7-e423-4a64-aaec-aef950151edf",
        "Host": "postman-echo.com",
        "Cookie": "sails.sid=s%3AUJrbIiPM34u7B0qnf225GWBS76aHoYs3.BS5D%2BXB4pp4amuNg34wi1YANfBJZwLtwc1EjZlHsmsI",
        "Accept-Encoding": "gzip, deflate",
        "Content-Length": "",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
      }
    },
    responseStatus: '200'
  },
  {
    request: {
      "async": true,
      "crossDomain": true,
      "url": "https://8b871866-25fa-4c9d-8211-9492fc0e772f.mock.pstmn.io/delete",
      "method": "DELETE",
      "headers": {
        "User-Agent": "PostmanRuntime/7.15.2",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "c5cc8b1e-5980-497a-9f89-7e68088efe2e,8efa81e4-f1fc-42e8-8900-db8c0bbd3c07",
        "Host": "postman-echo.com",
        "Cookie": "sails.sid=s%3AkwCaAlGAwSpZhHciDgnbF6B3--TmdroF.R8ckD%2BxD8Z%2BuuGBf5YZp06atnluT%2FTpDo1TCg4pjzCY",
        "Accept-Encoding": "gzip, deflate",
        "Content-Length": "",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
      }
    },
    responseStatus: '200'
  }
];

