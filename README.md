[![Travis branch](https://img.shields.io/travis/Fluidbyte/twitter-stream-aggregator/master.svg)](https://travis-ci.org/Fluidbyte/twitter-stream-aggregator/)
[![Codecov](https://img.shields.io/codecov/c/github/Fluidbyte/twitter-stream-aggregator.svg)](https://codecov.io/gh/Fluidbyte/twitter-stream-aggregator)

# Twitter Stream & Aggregation

![Screenshot](./screenshot.png)

## Prerequisites

### Docker & Binci

In order to create a consistent development environment, [Docker](https://www.docker.com) is utilized to containerize the application.

In order to manage the Docker container(s), [Binci](https://github.com/binci/binci) is utilized. To install, run the following:

```
npm i binci -g
```

_Note: Binci can also be installed without NodeJS as a prerequisit by installing one of the [binary packages](https://github.com/binci/binci#binaries)._

### Environment Variables

In order to read from the Twitter API, credentials must be acquired by [creating a new Twitter app](https://apps.twitter.com/).

These credentials should be added to the corresponding environment variables:

- `TWITTER_ACCESS_TOKEN_KEY`
- `TWITTER_ACCESS_TOKEN_SECRET`
- `TWITTER_CONSUMER_KEY`
- `TWITTER_CONSUMER_SECRET`

These environment variables can be set on the host (local) system and will be automatically set on the container via the [`binci.yml`](./binci.yml)'s `env` property via the `<container-var>=${<host-var>}` convention.

## Quick Start

```
binci install up
```

This will run dependency installation and stand up the service for access at `http://localhost:8080`.

## Development

To install all dependencies for the project, run `binci install`. This will install all production and development dependencies.

**Deterministic Dependencies**: The application uses [Yarn](https://yarnpkg.com/en/) to enforce package locking and deterministic dependency versioning. This is in order to avoid conflicts or API changes that could lead to regressions in the codebase. The `binci upgrade` task utilizes Yarn's [`upgrade-interactive`](https://yarnpkg.com/en/docs/cli/upgrade-interactive) command to allow for deterministic management of dependency updates.

## Tasks

Tasks are defined in the [`binci.yml`](binci.yml) file and correspond closely to the `scripts` in the [`package.json`](package.json) configuration.

- `env`: runs the container and echos all available environment variables
- `shell`: starts an interactive shell in the container (with services)
- `install`: installs all development and production dependencies
- `upgrade`: interactively upgrade dependencies
- `lint`: runs [StandardJS](https://standardjs.com/) linting on all files
- `mocha`: runs the [Mocha](https://mochajs.org/) test-suite
- `cover`: runs [Istanbul](https://istanbul.js.org/) test coverage
- `test`: runs all linting and coverage
- `test:watch`: continuously runs (and reruns) test suite
- `bundle`: bundles the client app with webpack
- `dev`: runs service with hot module reloading (exposes client)
- `up`: starts the service (exposes client)


## User Interface

The application exposes a React client interface on `http://localhost:8080`. The application will always attempt a `bundle` operation on start, so please wait until Webpack sends a success message to the console.

## Notes

This project demonstrates a number of concepts, primarily streaming of data and its application to meaningful consumer interfaces. The purpose of this project is not a production application, so many decisions were made based on this fact.

### Dynamic Stream

The twitter stream is designed to be dynamically built by a series of available [`filters`](./src/lib/pipe/filters). Each of these filters is an independent `transform` which is attached to the stream via `pipe` to allow for the system to be easily expanded upon by simply adding more filters to parse the stream data.

## Building Docker Image

The project includes a [`Dockerfile`](./Dockerfile) to allow this system to be made into an image. To do so, run the following:

1. Ensure dependencies are installed and the app is bundled: 

```
binci install bundle
```

2. From the directory, build the image: 

```
docker build . -t twitter-stream-app
```

3. Run the image with environment variables specified:

```
docker run --rm -d 
  -e TWITTER_ACCESS_TOKEN_KEY=$TWITTER_ACCESS_TOKEN_KEY \
  -e TWITTER_ACCESS_TOKEN_SECRET=$TWITTER_ACCESS_TOKEN_SECRET \
  -e TWITTER_CONSUMER_KEY=$TWITTER_CONSUMER_KEY \
  -e TWITTER_CONSUMER_SECRET=$TWITTER_CONSUMER_SECRET \ 
  -e NODE_ENV=production \
  -p 8080:8080 \
  twitter-stream-app
```

## License

The code in this repository is distributed under the [ISC-Style License](https://opensource.org/licenses/ISC)
