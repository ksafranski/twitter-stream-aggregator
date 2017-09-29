[![Travis branch](https://img.shields.io/travis/Fluidbyte/twitter-stream-aggregator/master.svg)](https://travis-ci.org/Fluidbyte/twitter-stream-aggregator/)
[![Codecov](https://img.shields.io/codecov/c/github/Fluidbyte/twitter-stream-aggregator.svg)](https://codecov.io/gh/Fluidbyte/twitter-stream-aggregator)

# Twitter Streaming & Aggregation

## Prerequisits

### Docker & Binci

In order to create a consistent development environment, [Docker](https://www.docker.com) is utilized to containerize all aspects.

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

## Getting Started

To install all dependencies for the project, run `binci install`. This will install all production and development dependencies. To only install production dependencies run `binci install:production`.

**Deterministic Dependencies**: The application uses [Yarn](https://yarnpkg.com/en/) to enforce package locking and deterministic dependency versioning. This is in order to avoid conflicts or API changes that could lead to regressions in the codebase. The `binci upgrade` task utilizes Yarn's [`upgrade-interactive`](https://yarnpkg.com/en/docs/cli/upgrade-interactive) command to allow for deterministic management of dependency updates.

## Tasks

Tasks are defined in the [`binci.yml`](binci.yml) file and correspond closely to the `scripts` in the [`package.json`](package.json) configuration.

- `env`: runs the container and echos all available environment variables
- `shell`: starts an interactive shell in the container (with services)
- `install`: installs all development and production dependencies
- `install:production`: installs only development dependencies
- `upgrade`: interactively upgrade dependencies
- `lint`: runs [StandardJS](https://standardjs.com/) linting on all files
- `mocha`: runs the [Mocha](https://mochajs.org/) test-suite
- `cover`: runs [Istanbul](https://istanbul.js.org/) test coverage
- `test`: runs all linting and coverage
- `test:watch`: continuously runs (and reruns) test suite
- `up`: starts the service

## License

The code in this repository is distributed under the [ISC-Style License](https://opensource.org/licenses/ISC)
