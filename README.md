# Twitter Streaming & Aggregation

## Prerequisits

In order to create a consistent development environment, [Docker](https://www.docker.com) is utilized to containerize all aspects.

In order to manage the Docker container(s), [Binci](https://github.com/binci/binci) is utilized. To install, run the following:

```
npm i binci -g
```

_Note: Binci can also be installed without NodeJS as a prerequisit by installing one of the [binary packages](https://github.com/binci/binci#binaries)._

## Getting Started

To install all dependencies for the project, run `binci install`. This will install all production and development dependencies. To only install production dependencies run `binci install:production`.

**Deterministic Dependencies**: The application uses [Yarn](https://yarnpkg.com/en/) to enforce package locking and deterministic dependency versioning. This is in attempt to prevent, and manage dependency versions to avoid conflicts or API changes that could lead to regressions in the codebase.

## Tasks

Tasks are defined in the [`binci.yml`](binci.yml) file and correspond closely to the `scripts` in the [`package.json`](package.json) configuration.

- `env`: runs the container and echos all available environment variables
- `shell`: starts an interactive shell in the container (with services)
- `install`: installs all development and production dependencies
- `install:production`: installs only development dependencies
- `lint`: runs [StandardJS](https://standardjs.com/) linting on all files
- `mocha`: runs the [Mocha](https://mochajs.org/) test-suite
- `cover`: runs [Istanbul](https://istanbul.js.org/) test coverage
- `test`: runs all linting and coverage
- `test:watch`: continuously runs (and reruns) test suite
- `up`: starts the service

## License

The code in this repository is distributed under the [ISC-Style License](https://opensource.org/licenses/ISC)
