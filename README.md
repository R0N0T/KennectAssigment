﻿# Cypress Automation

## Overview
![Screenshot (134)](https://github.com/R0N0T/KennectAssigment/assets/71979637/c8f9e597-5c7f-482b-a6af-59d34eb5cccf)

This repository contains automated tests written using Cypress for testing the Blood Test application.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html)

## Installation

1. Clone this repository to your local machine:

git clone <repository-url>
npm install

## To run the the test

1. Navigate to the folder and run 

npx cypress open

## Test Suites
login.cy.js: Tests for the login functionality.
bloodTest.cy.js: Tests for the blood test user flow.
homepage.cy.js: Tests for the homepage functionality.

## Test Structure
cypress/e2e: Contains test files.
cypress/pageObjects: Contains page object files used to interact with application pages.
cypress/support: Contains support files such as commands and custom Cypress configuration.
