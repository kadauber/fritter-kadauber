(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homepage.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\n<html>\n<head>\n  <title>Fritter!</title>\n\n  <!-- Custom CSS -->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"css/index.css\">\n\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n\n  <!-- jQuery 3.1.1 -->\n  <script   src=\"https://code.jquery.com/jquery-3.1.1.min.js\" integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\" crossorigin=\"anonymous\"></script>\n\n  <!-- Bootstrap Core JavaScript -->\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n\n  <!-- Font Awesome -->\n  <script src=\"https://use.fontawesome.com/6f663e586d.js\"></script>\n\n  <!-- Handlebars runtime -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.runtime.min.js\"></script>\n\n  <!-- Handlebars template destination -->\n  <script src=\"/js/templates.js\"></script>\n\n  <!-- Document Load JavaScript -->\n  <script src=\"/js/navbar-controller.js\"></script>\n  <script src=\"/js/index-controller.js\"></script>\n  <script src=\"/js/index.js\"></script>\n\n  <!-- Custom CSS -->\n  <style>\n  body {\n      padding-top: 50px;\n      /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */\n  }\n  </style>\n</head>\n<body>\n  <div id=\"navbar-content\"></div>\n  <div class=\"container\" id=\"main-content\">\n<h1 class=\"page-header\">Welcome to Fritter</h1>\n<!--\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"page-header\">Welcome to Fritter</h1>\n      </div>\n    </div>\n    -->\n\n    <div class=\"row\">\n    <div class=\"col-mid-12\">\n    <div id=\"starting-point\"></div>\n    </div>\n    </div>\n\n    <div class=\"row\">\n    <div class=\"col-mid-12\">\n    <div id=\"freet-container\"></div>\n    </div>\n    </div>\n\n\n  </div>\n\n  \n\n</body>\n</html>";
},"useData":true});
templates['display_freet.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"panel panel-default\" id=\"freet-div-id\">\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <h4>Author: </h4>\n        <p>Content: </p>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"pull-right\">\n          <button class=\"btn btn-default \" id=\"refreet-freet-id\"><i class=\"fa fa-retweet\" aria-hidden=\"true\"></i></button>\n          <button class=\"btn btn-default \" id=\"delete-freet-id\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n        </div>\n      </div\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['enter_freet.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\n<div class=\"form-group\">\n  <input type=\"text\" class=\"form-control\" id=\"freet-input\" placeholder=\"Freet here!\">\n</div>\n</form>";
},"useData":true});
templates['freet_container.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n  <div class=\"col-md-12\">\n"
    + ((stack1 = container.invokePartial(partials["display_freet.hbs"],depth0,{"name":"display_freet.hbs","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"usePartial":true,"useData":true});
templates['navbar.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <!-- Navigation -->\n"
    + ((stack1 = container.invokePartial(partials["set_username.hbs"],depth0,{"name":"set_username.hbs","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Fritter!</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul id=\"site-navigation\" class=\"nav navbar-nav\">\n"
    + ((stack1 = container.invokePartial(helpers.lookup.call(depth0 != null ? depth0 : {},depth0,"username_selector",{"name":"lookup","hash":{},"data":data}),depth0,{"data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "          <!--\n          <li>\n            <a href=\"#\">Services</a>\n          </li>\n          <li>\n            <a href=\"#\">Contact</a>\n          </li> -->\n        </ul>\n      </div>\n\n      <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n  </nav>";
},"usePartial":true,"useData":true});
templates['no_username.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<li>\n  <a id=\"login-or-register\" data-toggle=\"modal\" href=\"#change-username-modal\">Login or Register</a>\n</li>";
},"useData":true});
templates['prompt_username.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <!-- Username Prompt -->\n<h2>Who could this be?</h2>\n<div class=\"row\">\n\n  <div class=\"col-md-6\">\n    <p>If you already have an account, log in here.</p>\n    <form>\n    <div class=\"form-group\" id=\"username-login-prompt-group\">\n      <label for=\"username-prompt-input\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username-login-prompt-input\" placeholder=\"Username\">\n    </div>\n    <div class=\"form-group\" id=\"password-login-prompt-group\">\n      <label for=\"username-prompt-input\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password-login-prompt-input\" placeholder=\"Password\">\n      <span class=\"help-block\" id=\"invalid-login-prompt-message\">Username and password do not match.</span>\n      <span class=\"help-block\" id=\"login-error-prompt-message\">Something went wrong with your login. Try again.</span>\n    </div>\n    <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-default\" id=\"login-prompt-btn\">Login</button>\n    </div>\n    </form>\n  </div>\n\n  <div class=\"col-md-6\">\n    <p>Register a new account and start Freeting!</p>\n    <form>\n    <div class=\"form-group\" id=\"username-prompt-register-group\">\n      <label for=\"username-prompt-register-input\">Choose your Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username-prompt-register-input\" placeholder=\"Enter your new username\">\n      <span class=\"help-block\" id=\"non-unique-user-prompt-message\">Username not unique.</span>\n    </div>\n    <div class=\"form-group\" id=\"password-prompt-register-group\">\n      <label for=\"password-prompt-register-input\">Choose your Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password-prompt-register-input\" placeholder=\"Enter your new password\">\n    </div>\n    <div class=\"form-group\" id=\"password-prompt-check-register-group\">\n      <label for=\"password-prompt-check-register-input\">Check Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password-prompt-check-register-input\" placeholder=\"Enter your password again\">\n      <span class=\"help-block\" id=\"non-matching-passwords-prompt-message\">Passwords do not match.</span>\n    </div>\n    <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-default\" id=\"register-prompt-btn\">Register</button>\n    </div>\n    </form>\n  </div>\n\n</div>";
},"useData":true});
templates['set_username.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<!-- Modal -->\n<div class=\"modal fade\" id=\"change-username-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Manage Account</h4>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"row\">\n\n          <div class=\"col-md-6\">\n            <h3>Login</h3>\n            <div class=\"form-group\" id=\"username-group\">\n              <label for=\"newUsername\">Username</label>\n              <input type=\"text\" class=\"form-control\" id=\"username-input\" placeholder=\"Username\">\n            </div>\n            <div class=\"form-group\" id=\"password-group\">\n              <label for=\"newPassword\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"password-input\" placeholder=\"Password\">\n              <span class=\"help-block\" id=\"invalid-login-message\">Username and password do not match.</span>\n              <span class=\"help-block\" id=\"already-logged-in-message\">You're already logged in.</span>\n              <span class=\"help-block\" id=\"login-error-message\">Something went wrong with your login. Try again.</span>\n            </div>\n            <button type=\"button\" class=\"btn btn-default\" id=\"login-btn\">Login</button>\n          </div>\n\n          <div class=\"col-md-6\">\n            <h3>Register a new account</h3>\n            <div class=\"form-group\" id=\"username-register-group\">\n              <label for=\"username-register-input\">Choose your Username</label>\n              <input type=\"text\" class=\"form-control\" id=\"username-register-input\" placeholder=\"Enter your new username\">\n              <span class=\"help-block\" id=\"non-unique-user-message\">Username not unique.</span>\n            </div>\n            <div class=\"form-group\" id=\"password-register-group\">\n              <label for=\"password-register-input\">Choose your Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"password-register-input\" placeholder=\"Enter your new password\">\n            </div>\n            <div class=\"form-group\" id=\"password-check-register-group\">\n              <label for=\"password-check-register-input\">Check Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"password-check-register-input\" placeholder=\"Enter your password again\">\n              <span class=\"help-block\" id=\"non-matching-passwords-message\">Passwords do not match.</span>\n            </div>\n            <button type=\"button\" class=\"btn btn-default\" id=\"register-btn\">Register</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['username.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li>\n  <a id=\"log-out\" data-toggle=\"modal\" href=\"#change-username-modal\">Currently Freeting as <b>"
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "</b>. Click to log out.</a>\n</li>";
},"useData":true});
})();