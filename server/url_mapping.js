module.exports = {

    //this API is for Landing Page Submit Jobs
    '/users/demo_user/jobs': '/users/demo_user/jobs',

    //not using this one (big API)
    // '/reports/report_1': '/reports/report_1',

    // on view need to go to this API for metadata
    //'/users/demo_user/reports/:report_id': '/users/demo_user/reports/{0}?info=metadata',
    '/metadata/users/demo_user/reports/report_1': '/users/demo_user/reports/report_1?info=metadata',
    
    //url for getting username and all inputs 
    '/users/demo_user/projects': '/users/demo_user/projects',

    //url for Datatypes report
    //'/users/demo_user/reports/report_1': '/users/demo_user/reports/report_1?table={0}&analysis=datatypes'


    // this url is used to getting datatype analysis for a single table
   '/datatype/analysis/users/demo_user/reports/report_1': '/users/demo_user/reports/report_1?table=customer&analysis=datatypes'
}