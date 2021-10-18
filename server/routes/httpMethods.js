var request = require("request");

module.exports.requestHTTPGetMethod = function (
  api_url,
  queryProperties,
  encoding = "utf-8"
) {
  var options = {
    rejectUnauthorized: false,
  };

  var headers = {};
  return new Promise(function (resolve, reject) {
    request(
      {
        method: "GET",
        uri: api_url,
        headers: headers,
        options: options,
        qs: queryProperties,
        encoding: encoding,
      },
      function (error, response, body) {
        if (error) {
          // console.log("Error while calling get method:", error)
          reject(error);
        } else if (response) {
          var json_body = "";
          if (
            response.caseless.get("Content-Type") ==
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
            response.caseless.get("Content-Type") ==
              "application/vnd.ms-excel" ||
            response.caseless.get("Content-Type") ==
              "application/octet-stream" ||
            response.caseless.get("Content-Type") == "application/text" ||
            response.caseless.get("Content-Type") == "application/yaml"
          )
            json_body = response.body;
          else
            json_body =
              typeof response.body == "string"
                ? response.body
                : JSON.parse(response.body);
          console.log("json_body", json_body);
          resolve(json_body);
        }
      }
    );
  });
};

module.exports.requestHTTPPostMethod = function (api_url,data) {
  console.log("analytics post method call",api_url);
  var options = {
    rejectUnauthorized: false,
  };
  var headers = {};
  return new Promise(function (resolve, reject) {
    request(
      {
        method: "POST",
        uri: api_url,
        headers: headers,
        options: options,
        json: data,
        qs: query_params,
      },
      function (error, response, body) {
        if (error) {
          // console.log("Error while calling get method:")
          reject(error);
        } else if (response) {
          var json_body = body;
          if (json_body.data) {
            resolve(json_body);
          } else {
            reject(json_body);
          }
        }
      }
    );
  });
};
module.exports.requestHTTPPutMethod = function (api_url, queryProperties) {
  // console.log("Trans", transactionId, accesstoken, api_url, data)
  var options = {
    rejectUnauthorized: false,
  };
  var headers = {};
  return new Promise(function (resolve, reject) {
    request(
      {
        method: "PUT",
        uri: api_url,
        headers: headers,
        options: options,
        json: data,
        qs: queryProperties,
      },
      function (error, response, body) {
        if (error) {
          // console.log("Error while calling get method:")
          reject(error);
        } else if (response) {
          var json_body = body;
          if (json_body.data) {
            resolve(json_body);
          } else {
            reject(json_body);
          }
        }
      }
    );
  });
};

module.exports.requestHTTPDeleteMethod = function (api_url) {
  // console.log("Trans", transactionId, accesstoken, api_url, data)
  var options = {
    rejectUnauthorized: false,
  };
  var headers = {};
  return new Promise(function (resolve, reject) {
    request(
      {
        method: "DELETE",
        uri: api_url,
        headers: headers,
        options: options,
      },
      function (error, response, body) {
        if (error) {
          // console.log("Error while calling get method:")
          reject(error);
        } else if (response) {
          var json_body = body;
          if (json_body.data) {
            resolve(json_body);
          } else {
            reject(json_body);
          }
        }
      }
    );
  });
};

module.exports.requestHTTPDeleteMethodWithJson = function (api_url) {
  var options = {
    rejectUnauthorized: false,
  };
  var headers = {};
  return new Promise(function (resolve, reject) {
    request(
      {
        method: "DELETE",
        uri: api_url,
        headers: headers,
        json: data,
        options: options,
      },
      function (error, response, body) {
        if (error) {
          // console.log("Error while calling get method:")
          reject(error);
        } else if (response) {
          var json_body = body;
          if (json_body.data) {
            resolve(json_body);
          } else {
            reject(json_body);
          }
        }
      }
    );
  });
};
