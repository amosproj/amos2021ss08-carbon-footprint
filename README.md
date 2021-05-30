# Carbon Footprint Visualization | AMOS Project 8

![Carbon Footpront Visuakization Banner-Logo](https://github.com/amosproj/amos-ss2021-carbon-footprint/blob/main/deliverables/Proj8-AMOS-Banner-Logo-Carbon-Footprint-Black.png?raw=true)


## Software Build and Deployment Document

- [Introduction](#introduction)
- [Project Repository](#project-repository)
- [Current Dependencies:](#current-dependencies)
- [Build Process](#build-process)
  * [Setup and start the Frontend](#setup-and-start-the-frontend)
  * [Setup and start of the Backend](#setup-and-start-of-the-backend)
    + [General](#general)
    + [Launching](#launching)
  * [Testing](#testing)
  * [CI](#ci)

# Introduction

This document describes how to build and deploy an application to visualize, compare and analyze the impacts such as global warming, ozone layer depletion, acidification, etc that come from the production, use, and end-of-life of a product or service. The carbon footprint is calculated in the application which helps the customers to understand the impacts and risks associated with it.
All the information that is essential to the build and deployment process is unfolded: how to build and verify the various deliverables, library dependencies, how to install and run the software, and the system requirements.


# Project Repository


## [Frontend](/frontend) Folder Structure

### base folder: [/src](/frontend/src):

-   **/assets**:
    /icons: SVGs icons
    other assets (i.e. images)

-   **/components**:
    generic components, or components that will be used by multiple routes
    i.e.: form components, tables, cards

-   **/hooks**:
    every hook should be in this folder, and its name should start with the prefix "use":
    i.e.: useSidebar, useQuery, etc.

-   **/interface**:
    every functionality that handles communication between front-end and back-end
    i.e.: getting data for the charts, getting products, etc.

-   **/resources**:
    -   slugs.js: a list of the routes that will be used in the app
    -   theme.js: an object with the theme structure, colors, typographies.
    -   utilities.js: any utility function, for example "convertSlugToUrl", which is used in conjunction with "history.push" (react router) for redirects and links.

-   **/routes**:
    We have 2 types of routes, public and private.
    public: are all those that do not require the user to be logged into the app, such as Login, Signup, etc.
    private: to access these routes the user must be logged in.
    Each main section of the application has its own route:
    -   auth (for login, signup, etc)
    -   dashboard
    -   categories
    -   generation, transmission, industrial applications
    -   products, solutions, services
    -   details
    -   settings

-   **/utilities**:
    code that purely functional
    - PdfReport.js: create the PDF report

## [Backend](/backend) Folder Structure

### base folder: [/backend](/backend):

Includes the git files, Solution.sln, and a [project] folder for every [project].csproj.

*  **/backend**:
  includes the general source code files for the backend project.

*   **/backend/Controllers**:
  includes source code files of the REST-API controllers that receive and handle the incoming HTTP requests.

*  **/backend/Security**:
  includes source code files that handle security-related issues.

*  **/backend/Properties**:
  includes the launch settings.

*  **/Test**:
  includes the source code files of the unit test project for the backend.

# Current Dependencies

**Frontend**:

- [react-hook-form](https://www.npmjs.com/package/react-hook-form): form handling.

- [react-jss](https://www.npmjs.com/package/react-jss): styles.

- [react-router-dom](https://www.npmjs.com/package/react-router-dom): routing.

- [simple-flexbox](https://www.npmjs.com/package/simple-flexbox): flexbox utility.

- [react-grid-system](https://www.npmjs.com/package/react-grid-system): page layout

- [react-apexcharts](https://www.npmjs.com/package/react-apexcharts): pie and column chart

- [jsPDF](https://www.npmjs.com/package/jspdf):  library to generate PDFs in JavaScript

- [jQuery](https://www.npmjs.com/package/jquery): JavaScript library for DOM operations

- [axios](https://www.npmjs.com/package/axios): frontend and backend connection

**Backend**:

- [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/): JSON handling.

- [AspNetCore.Proxy](https://www.nuget.org/packages/AspNetCore.Proxy/): REST-API proxy.

- [xunit](https://www.nuget.org/packages/xunit/): Unit testing framework.

- [Moq](https://www.nuget.org/packages/moq/) Mocking framework.


# Build Process
## Setup and start the Frontend
  * Clone the current project
  * In a CLI navigate to the frontend folder
  * Run yarn install to install all used dependencies
  * Run yarn start to start the development server


## Setup and start of the Backend

### General
- For the backend to correctly proxy incoming HTTP requests to the SimaPro API and return the request results, it needs to receive valid SimaPro API credentials and base URL.
	- In a hosting environment, these would be given by adding the following Key/Value Pairs to the environment variables:
		- "BaseUrl": "https://apps.simapro.com/api/"
		- "User": "[insert SimaPro User here]"
		- "Password": "[insert SimaPro password here]"
	- In a local environment, these will be added by including them as JSON Key/Value pairs in the secrets.json file of the backend project.

### Launching
 - It is recommended to launch the backend in Visual Studio via IIS Express. The launch settings can be found in the launchSettings.json file in the [/Properties](/backend/backend/properties) folder.
- The launch settings specify the base URL for the REST-API of the backend. Currently these are "http://localhost:16294" (without SSL) and "https://localhost:44323" (with SSL).
These are determined by the key/value pairs with the keys "applicationUrl" and "sslPort" in the launchSettings.json
- The route of the proxy is determined in the Route annotation in the SimaProController.cs file. Currently the full URLs of the backend proxy for the SimaPro API is "https://localhost:44323/SimaPro/api".
- Once the Solution is running you can send requests to it via Postman, or use it to proxy incoming requests from the frontend. 


## Testing

Frontend: Unit tests will automatically be executed by the CI pipeline.

Backend: Existing unit tests can be found, modified, and executed via the Test Project.

## CI
Frontend:

Currently, there is no real deployment planned as this project is a proof-of-concept to show the end-to-end process of the described project.
However, a CI pipeline running implemented tests and building the software to allow fast feedback to the software developers when implementing features is in place.

Backend:
- The CI pipeline for the backend is configured in Github Actions as "Backend CI".
- The CI pipeline will execute the unit tests from the Test Project.

## License
This software is released under the [MIT License](https://github.com/amosproj/amos-ss2021-carbon-footprint/blob/main/LICENSE).
