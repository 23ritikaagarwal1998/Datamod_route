var insights_v2 = require("../../node_modules/express").Router();
var urlmapping = require("../../url_mapping");
var httpMethods = require("../httpMethods");

insights_v2.get("/jobs", getJobs);
// insights_v2.get("/report_1", getReportsPage);
insights_v2.get("/reports/report_1", getMetadata);
insights_v2.post("/projects", addUserInputs);
module.exports = insights_v2;

function getJobs(req, res) {
  console.log("Inside Submit Jobs Methods");
  var url = req.baseUrl + req.route.path;
  console.log("the get job url is ", url);
  var api_url = urlmapping[url];
  console.log("the insights api url is ", api_url);
  var analytics_api_url = process.env.API_URL + api_url;
  console.log("the get job analytics api_url is ", analytics_api_url);
  //calling the methods
  httpMethods
    .requestHTTPGetMethod(analytics_api_url)
    .then((success) => {
      res.send(success);
      console.log("the success is ", success);
    })
    .catch((error) => {
      res.send(error);
      console.log("the error is ", success);
    });
}

// function getReportsPage(req, res) {
//   console.log("Inside Get Report Page Methods");
//   var url = req.baseUrl + req.route.path;
//   console.log("the insights url is ", url);
//   var api_url = urlmapping[url];
//   console.log("the report Page api url is ", api_url);
//   var analytics_api_url = process.env.API_URL + api_url;
//   console.log("the report Page analytics api_url is ", analytics_api_url);
//   //calling the methods
//   httpMethods
//     .requestHTTPGetMethod(analytics_api_url)
//     .then((success) => {
//       res.send(success);
//       console.log("the success is ", success);
//     })
//     .catch((error) => {
//       res.send(error);
//       console.log("the error is ", success);
//     });
// }

//used to get Metadata 
function getMetadata(req, res) {
  console.log("Inside Metadata Methods");
  var url = req.baseUrl + req.route.path;
  console.log("the get Metadata url is ", url);
  var api_url = urlmapping[url];
  console.log("the insights api url is ", api_url);
  var analytics_api_url = process.env.API_URL + api_url;
  console.log("the get Metadata analytics api_url is ", analytics_api_url);
  //calling the methods
  httpMethods
    .requestHTTPGetMethod(analytics_api_url)
    .then((success) => {
      res.send(success);
      console.log("the metadata success is ", success);
    })
    .catch((error) => {
      res.send(error);
      console.log("the metadata error is ", success);
    });
}

//for taking all user inputs
function addUserInputs(req, res) {
  //console.log("the req is ",req, "and the res body for userinput is ",res)
  console.log("Inside UserInput method");
  var url = req.baseUrl + req.route.path;
  console.log("the post UserInput url is ", url);
  var api_url = urlmapping[url];
  console.log("the UserInput api url is ", api_url);
  var analytics_api_url = process.env.API_URL + api_url;
  console.log("the post UserInput analytics api_url is ", analytics_api_url);
  // var data = req.body;
  // console.log("the userinput data is ",data);
  //calling the methods
  httpMethods
    .requestHTTPPostMethod(analytics_api_url)
    .then((success) => {
      res.send(success);
      console.log("the userinput success is ", success);
    })
    .catch((error) => {
      res.send(error);
      console.log("the userinput error is ", success);
    });
}
