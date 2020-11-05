/**
 * @author Jorge Iglesias/Spain/IBM@ES
 * @description
 * <p>
 * Express routes.
 * </p>
 */

var fs = require('fs');
const log4js = require('log4js');

// Load variables context
var CONTEXT = require(global._appDir + '/util/context.js');

var appRouter = function(app) {

  /**
   * Root, redirect to login page
   */
  app.get("/", function(req, res) {
    res.redirect('/v1/login');
  });

  /**
   * Login
   */
  app.get("/v1/login", function(req, res) {
    var statusCode = CONTEXT.RESPONSE_STATUS_CODE_OK; // by defaut 200 OK
    var nav = "login"; // default response page

    var app = {};
    app.name = CONTEXT.APP_NAME;

    var error = {};
    error.message = '';

    res.status(statusCode).render(nav, {
      "app": app,
      "error": error,
    }); // Render a view template.
  });

  /**
   * Auth
   */
  app.post("/v1/auth", function(req, res) {
    var statusCode = CONTEXT.RESPONSE_STATUS_CODE_OK; // by defaut 200 OK
    var response = {};

    var data = req.body;

    if (data.login == undefined || data.password == undefined) {
      statusCode = CONTEXT.RESPONSE_STATUS_CODE_SERVICE_UNAVAILABLE;
      response.message = "Incorrect data parameters";
    }
    else {
      if (data.login == 'admin' && data.password == 'admin') {
        statusCode = CONTEXT.RESPONSE_STATUS_CODE_OK;
        response.message = "User " + data.login + " login";
      }
      else {
        statusCode = CONTEXT.RESPONSE_STATUS_CODE_UNAUTHORIZED;
        response.message = "Invalid username or password";
      }
    }

    res.status(statusCode).json(response);
    res.end(); //End the response process.
  });

  /**
   * Page 1
   */
  app.post("/v1/page1", function(req, res) {
    var statusCode = CONTEXT.RESPONSE_STATUS_CODE_OK; // by defaut 200 OK
    var nav = "page1"; // default response page

    var app = {};
    app.name = CONTEXT.APP_NAME;
    app.nav = {};
    app.nav.name = 'Hardware';

    var error = {};
    error.message = '';

    res.status(statusCode).render(nav, {
      "app": app,
      "error": error,
    }); // Render a view template.
  });

  /**
   * Data backend
   */
  app.post("/v1/data", function(req, res) {
    var statusCode = CONTEXT.RESPONSE_STATUS_CODE_OK; // by defaut 200 OK
    var response = {};

    var data = req.body;

    var url = process.env.API_URL;
    var port = process.env.API_PORT;

    // execute sync, wait end process
    var exec = require('child_process').execSync;
    var cmd = 'curl'
      + ' --request POST http://'+url+':'+port+'/v1/data';

    try {
      var output = exec(cmd).toString();
      var json = JSON.parse(output);
      response.message = json.message;
    }
    catch (err) {
      statusCode = CONTEXT.RESPONSE_STATUS_CODE_SERVICE_UNAVAILABLE;
      response.message = 'Failed to connect to ' + url;
    }

    res.status(statusCode).json(response);
    res.end(); //End the response process.
  });

}

module.exports = appRouter;
