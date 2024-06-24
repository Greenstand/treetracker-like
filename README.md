# Like RESTful API

This api give Greenstand the ability to `like` anything, for example: like a tree, like a grower.

# Development toolkit

This repository was created from Greenstand's template for microservice projects. This means it comes with many development tools that we use for development and deployment. As a contributor to this repository, you should learn and use these tools. They are outlined below.

- NestJS
- Nx
- Prisma
- Conventional Commits
- husky
- prettier / lint
- github actions
- Jest
- TypeScript

# Getting Started

## Project Setup



Please join our slack channel to get help with setting up the database.

# Workflow with Github

[check out here](https://github.com/Greenstand/treetracker-web-map-client#workflow-with-github)

# Development Specification

- Every endpoint should have a e2e test to cover the main use cases.

- For edge cases, we can use unit tests to test the edge cases, don't need to use e2e test to cover all cases, e2e just cover main workflow.

- Class name should be capitalized.

- Do not write SQL directly in `router` and `model` files, there is a function called `delegateRepository` can help to simplify some simple cases;

- Please use `loglevel` to replace `console.log`, and always use appropriate log level to log.

# Architecture of this project


# About the documentation/specification

We use OpenAPI 3.0 to document the API.

You can copy the yaml file and import to swagger-ui to see the API.

# How to test

## Unit test

To run the unit tests:

```
npm run test-unit
```

## End to End test

All the end to end tests are located under folder `__tests__/e2e`, the test will run against the dev database.

To run the integration test:

Run tests:

```
npm run test-e2e
```

**If errors:**

```

DATABASE_URL is undefined

or

{ "code": 500,"message": "Unknown error (self signed certificate in certificate chain)" }
```

**Follows those steps:**

1- Go to the .env file, copy the DATABASE_URL with its value.

2- Add it with NODE_TLS_REJECT_UNAUTHORIZED='0' , npm run test-e2e, and run the tests.

For example:

```

DATABASE_URL=[the link provided] NODE_TLS_REJECT_UNAUTHORIZED='0' npm run test-e2e
```

.
.
.
.
.
.
.