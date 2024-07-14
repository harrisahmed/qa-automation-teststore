# Cypress-NextBasket-Assesment
This repo contains e2e tests written in Cypress for Next basket application.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. **Install Cypress**: Install Cypress as a development dependency by running:

    npm install cypress --save-dev

2. **Verify Cypress Installation**: To verify that Cypress has been installed correctly, run:

    npx cypress verify

## Run Tests
To run tests in interactive mode through test runner use following command

`npm run cypress:open`

To run Task1 directly use following command

`npm run cy:Task1`



## Patterns
Despite what Cypress says, Page Object Model is used because it improves code readability.
- POM pattern is used and every page at(https://teststoreforsouthafri.nextbasket.shop/) is represented as a single class  
- pages Folder contain all classes
- Integration Folders contains are E2E Tests.
- Data is fed from fixtures > userData.json 
- BBD-TestCases text files contains the 
- BUGS text file contain bugs find in application
- Video folder contains videos of Test running.
- Task2 text file contain link to postman collection


## Authur
    Harris Ahmed





