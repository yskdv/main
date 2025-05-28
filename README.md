# Playwright Test Automation Project

This project contains automated tests using Playwright Test framework for web testing. The tests are configured to run against multiple browsers (Chromium, Firefox, and WebKit) and support parallel execution.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd test1
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Configuration

The project uses the following configuration:

- Tests are located in the `./tests` directory
- Parallel execution is enabled by default
- HTML reporter is configured for test results
- Base URL is set to "https://pre.alacarte.ae"
- Tests run on browser engine:
  - Chromium (Desktop Chrome)

## Environment Variables

The project supports environment variables through `.env` file. Create a `.env` file in the root directory if you need to configure environment-specific variables.

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in a specific browser

````bash
# Run in Chromium
npx playwright test --project=chromium

### Run tests in UI mode
###pay attention to project

```bash
npx playwright test --ui
````

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Run a specific test file

```bash
npx playwright test tests/example.spec.ts
```

## Test Reports

After test execution, HTML reports are generated in the `playwright-report` directory. To view the report:

```bash
npx playwright show-report
```

## Traces

Traces are collected on the first retry of failed tests. You can view traces using Playwright's trace viewer:

```bash
npx playwright show-trace trace.zip
```

## Project Structure

```
├── tests/              # Test files
├── pages/              # Page object models
├── playwright-report/  # Test reports
├── test-results/      # Test artifacts
├── .auth/             # Authentication state storage
└── playwright.config.ts # Playwright configuration
```

## CI/CD Integration

The project is configured for CI environments with specific settings:

- Parallel execution is disabled
- Retries are set to 2
- `test.only()` is forbidden

## Contributing

1. Create a new branch for your changes
2. Write or update tests
3. Ensure all tests pass
4. Submit a pull request

## License

ISC
