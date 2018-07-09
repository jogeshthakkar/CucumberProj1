package CucumberTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src\\main\\java\\Features",
		glue= {"TestDefinitions"},
		plugin = { "pretty", "html:target/cucumber-reports",
					"json:target/cucumber-reports/Cucumber.json",
					"junit:target/cucumber-reports/Cucumber.xml"},
		dryRun=false,
		monochrome=true
		)
		

public class CucumberTest {

}
