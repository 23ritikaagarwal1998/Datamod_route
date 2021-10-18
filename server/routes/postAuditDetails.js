var urlmapping = require('../url_mapping');
var request = require('request');
var FormData = require('form-data')

module.exports = function (transactionId,api_url, data){
    var options = {
        rejectUnauthorized: false
      }
      var headers = {
        contentType:'application/x-www-form-urlencoded',
        TransactionId: transactionId || 'defaultTxnId'
      }
      // const formData = new FormData();
      // formData.append('inputJson',JSON.stringify(data))
      return new Promise(function (resolve, reject) {
        request({
          method: 'POST',
          uri:  api_url,
          headers: headers,
          options: options,
          form:    { 'inputJson' : JSON.stringify(data) }
        }, function (error, response, body) {
          if (error) {
              console.log("Error",error)
            reject(error)
          }
          else{
            var json_body = body
            console.log("Success",body)
              resolve(json_body)
          }
        });
      })
}