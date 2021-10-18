var urlmapping = require('../url_mapping');
var request = require('request');
// console.log("URL",urlmapping.AUDIT_GET_TRANSACTION_ID)
module.exports = function (callback) {
    var api_url = process.env.AUDIT_URL + urlmapping['AUDIT_GET_TRANSACTION_ID'];
    var options = {
        rejectUnauthorized: false
    }
    return new Promise(function(resolve,reject){
    request({
       method: 'GET',
       uri:api_url,
       options:options

    }, function (error, response, body) {
        if (error){
           // console.log("Error while getting transactionId fro audit:",error)
            resolve("")
        }
        else if(response) {
            //console.log("inside transaction id response",JSON.parse(body));
            var json_body= JSON.parse(body)
            resolve(json_body.unique_id)
        }
    });
})
}