package TestDefinitions;

import cucumber.api.java.en.*;

public class TestSteps {
	
	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() {
	System.out.println("Home page");   
	}

	@When("^User Navigate to LogIn Page$")
	public void user_Navigate_to_LogIn_Page()  {
		System.out.println("Login page");  
	}

	@When("^User enters UserName and Password$")
	public void user_enters_UserName_and_Password()  {
		System.out.println("enters username and password");  
	}

	@Then("^Message displayed Login Successfully$")
	public void message_displayed_Login_Successfully()  {
		System.out.println("Login successfully");  
	}
	
}
