# SOA-Microservices-Cloud

This repository contains the source code for a suite of interconnected microservices designed to provide a robust and scalable service-oriented architecture (SOA), built using Node.js, Express.js, PostgreSQL, and Docker. The application's main functions are user registration, user login, token generation, user management, email notifications, and logging services. This repository is part of a university project, Masters level at University of Prishtina https://fiek.uni-pr.edu/. 

## Table of Contents

1. [Getting Started](#getting-started)
2. [System Overview](#system-overview)
3. [Running the Application](#running-the-application)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the following installed on your local system:

- Node.js (version 14.x or later)
- Docker (version 19.x or later)
- PostgreSQL (version 13.x or later)

### Installation

1. Clone the repository:

`git clone https://github.com/your-github-username/SOA-Microservices-Cloud.git`

2. Change directory:

`cd SOA-Microservices-Cloud`

3. Install NPM dependencies in each service:
   
`cd user-registration-service && npm install`

`cd user-login-service && npm install`

`cd token-service && npm install`

`cd user-management-service && npm install`

`cd logging-service && npm install`

## System Overview

The system is composed of several microservices:

- User Registration Service: Handles user registration.
- User Login Service: Handles user authentication.
- Token Service: Generates and validates JWT tokens for authentication and authorization.
- User Management Service: Manages user profiles.
- Logging Service: Logs system events and user activity.

These services are designed to run in individual Docker containers, and they communicate with each other through RESTful APIs. A PostgreSQL database is used for data persistence.

## Running the Application

1. Build Docker images:

`docker-compose build`

2. Run Docker containers:

`docker-compose up`

The application is now accessible at `http://localhost:{port}`, where `{port}` is the port number assigned to each service in the `docker-compose.yml` file.

