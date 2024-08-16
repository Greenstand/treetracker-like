# Like RESTful API

This api give Greenstand the ability to `like` anything, for example: like a tree, like a grower.

# Development toolkit

This repository was created from Greenstand's template for microservice projects. This means it comes with many development tools that we use for development and deployment. As a contributor to this repository, you should learn and use these tools. They are outlined below.

- NestJS
- Yarn
- Prisma
- Conventional Commits
- husky
- prettier / lint
- GitHub actions
- Jest
- TypeScript

# Getting Started

## Project Setup
Please join our slack channel to get help with setting up the database.

# Workflow with Github

[check out the workflow guide](https://github.com/Greenstand/treetracker-web-map-client#workflow-with-github)

# Project architecture
The TreeTracker Like System is Greenstand's new experiment using a monorepo structure. A monorepo is a single repository containing multiple distinct projects with well-defined relationships.

In the Like System, both the backend and frontend implementations are located in the `apps` folder. The backend is built on the NestJS framework. Shared resources for the backend and frontend are placed in the `libs` folder. Shared resources include objects, utilities, constants, etc.

# Database Design
The database design for the backend like project could be find [here](https://github.com/Greenstand/treetracker-like/blob/main/prisma/schema.prisma).
![Treetracker like ER Diagram](https://github.com/user-attachments/assets/48c74d6d-5a15-40a2-bcd4-9725ae3e1107)

We are using Prisma to implement our database and the DBMS is Postgres. 

# How to test
In Greenstand, we value test driven development. 
## Unit test

To run the unit tests:

```
npm run test-unit
```

## Integration test

All the integration tests are located under folder `__tests__`

To run the integration test:

Run tests:

```
npm run test-integration
```


## connect db for local development


```
to build the image run
docker-compose build

to run the image background run
docker-compose up -d
```


after the image runs up in the background , u need to then define a `DATABASE_URL` in the env

the format of the  `DATABASE_URL` has to be like this

postgresql://username:password@host:port/database

e.g `DATABASE_URL=postgresql://easyuser:easypassword@localhost:5432/treetracker-like`