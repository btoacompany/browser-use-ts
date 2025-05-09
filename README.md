# Browser-Use TypeScript

This is a TypeScript port of the [browser-use](https://github.com/browser-use/browser-use) Python library, which provides a framework for building autonomous browser agents.

> **Note**: This is a best-effort port of the Python library and is not yet ready for production use. Credit for the original implementation goes to the creators of [browser-use](https://github.com/browser-use/browser-use).

## About

This TypeScript port was created as part of an initiative by [Vadavision](https://www.vadavision.com). The goal is to provide the same functionality as the original Python library in a TypeScript/JavaScript environment.

## Project Structure

The project follows a standard TypeScript project structure:

```
browser-use-ts/
├── dist/           # Compiled JavaScript files
├── src/            # TypeScript source files
│   ├── agent/      # Agent implementation
│   ├── controller/ # Browser controller
│   └── utils/      # Utility functions
├── examples/       # Example usage
├── package.json    # Project dependencies and scripts
├── tsconfig.json   # TypeScript configuration
└── README.md       # This file
```

## Features

- 🤖 Build autonomous browser agents using LLMs
- 🌐 Control web browsers programmatically
- 🔄 Execute complex workflows on websites
- 📊 Extract and process web data
- 🧩 Modular architecture for customization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Running Examples

The repository includes several examples to help you get started:

```bash
# Clone the repository
git clone https://github.com/vadavision/browser-use-ts.git

# Navigate to the project directory
cd browser-use-ts

# Install dependencies
npm install

# Run an example
npx ts-node examples/simple-example.ts
```

## Development

```bash
# Build the project
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the same license as the original browser-use project.

## Acknowledgements

- Original [browser-use](https://github.com/browser-use/browser-use) creators for the Python implementation
- [Vadavision](https://www.vadavision.com) for supporting the initiative

# IDE
Copy vscode to .vscode (and custom any if you want)
