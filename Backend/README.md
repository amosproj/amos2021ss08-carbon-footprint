# Carbon Footprint | AMOS Project 8

## [Backend](/backend) Folder Structure

### base folder: [/backend](/backend):

-: Includes the git files, Solution.sln, and a [project] folder for every [project].csproj.

 **/backend**:
 includes the general source code files for the backend project.

  **/backend/Controllers**:
 includes source code files of the REST-API controllers that receive and handle the incoming HTTP requests.

 **/backend/Security**:
 includes source code files that handle security-related issues.

 **/backend/Properties**:
 includes the launch settings.

 **/Test**:
 includes the source code files of the unit test project for the backend.

 ## Current dependencies:

[Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/): JSON handling.

[AspNetCore.Proxy](https://www.nuget.org/packages/AspNetCore.Proxy/): REST-API proxy.

[xunit](https://www.nuget.org/packages/xunit/): Unit testing framework.

[Moq](https://www.nuget.org/packages/moq/) Mocking framework.

## General

- For the backend to correctly proxy incoming HTTP requests to the SimaPro API and return the request results, it needs to receive valid SimaPro API credentials and base URL.
	- In a hosting environment, these would be given by adding the following Key/Value Pairs to the environment variables:
		- "BaseUrl": "https://apps.simapro.com/api/"
		- "User": "[insert SimaPro User here]"
		- "Password": "[insert SimaPro password here]"
	- In a local environment, these will be added by including them as JSON Key/Value pairs in the secrets.json file of the backend project.

## Testing

- Existing unit tests can be found, modified, and via the Test Project.

## Launch

- It is recommended to launch the backend in Visual Studio via IIS Express. The launch settings can be found in the launchSettings.json file in the [/Properties](/backend/backend/properties) folder.
- The launch settings specify the base URL for the REST-API of the backend. Currently these are "http://localhost:16294" (without SSL) and "https://localhost:44323" (with SSL).
These are determined by the key/value pairs with the keys "applicationUrl" and "sslPort" in the launchSettings.json
- The route of the proxy is determined in the Route annotation in the SimaProController.cs file. Currently the full URLs of the backend proxy for the SimaPro API is "https://localhost:44323/SimaPro/api".
- Once the Solution is running you can send requests to it via Postman, or use it to proxy incoming requests from the frontend. 

## CI/CD

- The CI pipeline for the backend is configured in Github Actions as "Backend CI".
- The CI pipeline will execute the unit tests from the Test Project.

## License

This software is released under the MIT License