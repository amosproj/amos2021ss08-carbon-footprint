# Carbon Footprint | AMOS Project 8

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


## Current dependencies:

[react-hook-form](https://www.npmjs.com/package/react-hook-form): form handling.

[react-jss](https://www.npmjs.com/package/react-jss): styles.

[react-router-dom](https://www.npmjs.com/package/react-router-dom): routing.

[simple-flexbox](https://www.npmjs.com/package/simple-flexbox): flexbox utility.

[react-grid-system](https://www.npmjs.com/package/react-grid-system): page layout

[react-apexcharts](https://www.npmjs.com/package/react-apexcharts): pie and column chart

[jsPDF](https://www.npmjs.com/package/jspdf):  library to generate PDFs in JavaScript

[jQuery](https://www.npmjs.com/package/jquery): JavaScript library for DOM operations

## License

This software is released under the MIT License
