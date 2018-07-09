$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature1.feature");
formatter.feature({
  "line": 1,
  "name": "this is feature1",
  "description": "",
  "id": "this-is-feature1",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "this-is-feature1;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 153259424,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 74006,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 65903,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 65904,
  "status": "passed"
});
});