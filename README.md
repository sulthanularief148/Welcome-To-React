# Welcome to React World

Welcome to the React World! This guide will walk you through essential tools, concepts, and practices for working with React and its ecosystem.

## Extensions

Here are some helpful VS Code extensions for React development:

1. **Better Comments** – Improves code commenting with different colors and styles.
2. **Bracket Pair Colorization Toggler** – Adds color to matching brackets for better readability.
3. **ES7+ React/Redux** – Provides code snippets for React, Redux, and ES7+ features.
4. **Gitlens** – Enhances Git capabilities within VS Code, making it easier to visualize code history.
5. **Prettier** – Automatically formats your code to ensure consistency and readability.
6. **vscode-icons** – Adds icons to files and folders in VS Code for better visual identification.

## What is React?

React is a JavaScript library developed by Facebook for building user interfaces, specifically for single-page applications (SPAs). It allows developers to create reusable UI components and efficiently update and render the right components when data changes, using a **virtual DOM** for improved performance.

## What is ReactDOM?

**ReactDOM** is a package that provides **DOM-specific methods** used in web applications built with React. It allows React components to be rendered and updated in the browser.

## Difference Between Library and Framework

### **Library**:

- A library is a collection of pre-written code that provides specific functionality or utilities, allowing developers to call specific functions to perform tasks.

### **Framework**:

- A framework is a more structured platform that defines a foundation for building applications. It provides a complete architecture and often dictates how the application should be structured and how code should flow.

## What is a CDN?

A **CDN (Content Delivery Network)** is a network of geographically distributed servers that work together to deliver web content, such as images, scripts, and videos, to users more efficiently. By caching content on multiple servers worldwide, CDNs reduce latency, improve load times, and provide a better user experience by serving content from the server closest to the user’s location.

## What is NPM?

**NPM (Node Package Manager)** is a package manager for JavaScript that allows developers to install, share, and manage code packages (libraries or modules) for Node.js projects. It is widely used in the JavaScript ecosystem to manage dependencies and tools.

## What is package.json?

**package.json** is a JSON file in a Node.js project that contains metadata about the project and its dependencies. It includes:

- Project name, version, author, and description.
- Scripts for automating tasks (e.g., build, start).
- Dependencies and devDependencies, specifying the libraries needed for the project to run or develop.

## What is a Bundler?

A **bundler** is a tool that takes multiple JavaScript files and dependencies, combines them into a single (or a few) optimized files for the browser. It also minifies code and optimizes performance. Common bundlers include **Webpack**, **Parcel**, **Rollup**, and **Vite**.

## Types of Dependencies

### **Normal Dependency**:

- Packages that are essential for the application to run in production (e.g., React, Express).

### **Dev Dependency**:

- Packages that are needed only during development or testing (e.g., Babel, Webpack). These are not required in production.

## **what is package.lock.json?**

- package-lock.json is an automatically generated file in a Node.js project that locks the versions of the dependencies installed.
- It is created when you run npm install and records the exact version of each package, including all of its dependencies, ensuring consistent installations across different environments or systems.

## **What is Nodemodules?**

- This folder is created when you run npm install, and it contains both the project's direct dependencies (listed in package.json) and their sub-dependencies (i.e., dependencies of dependencies).

## **What is Transitive Dependency?**

- A transitive dependency is a dependency of a dependency in your project. In other words, it is not a direct dependency, but rather a package that gets installed as a result of installing another package. These dependencies are automatically included in your project by the package manager

## Difference Between Caret (^) and Tilde (~)

### **Caret (^)**:

- `^1.2.3` will match any version from `1.2.3` to `<2.0.0`. It allows minor and patch updates but prevents major updates.

### **Tilde (~)**:

- `~1.2.3` will match any version from `1.2.3` to `<1.3.0`. It only allows patch updates and prevents both minor and major updates.

## What is Parcel?

**Parcel** is a fast, zero-configuration JavaScript bundler that simplifies the process of building web applications. Key features include:
`https://parceljs.org`

- **Dev Build** – Simplifies the development build process.
- **Local Server** – Built-in server for running the app locally.
- **HMR (Hot Module Replacement)** – Allows live reloading and fast development iterations.
- **File Watching Algorithm** – Written in C++ for optimal performance.
- **Caching** – Faster builds by caching files.
- **Image Optimization** – Automatically optimizes image assets.
- **Minification** – Compresses files for production.
- **Bundling** – Combines multiple files into one optimized file.
- **Compressing** – Reduces file size for quicker downloads.
- **Consistent Hashing** – Ensures consistent file hashing for better caching.
- **Code Splitting** – Splits code into smaller, more efficient bundles.
- **Differential Bundling** – Supports older browsers with separate bundles.
- **Diagnostic & Error Handling** – Provides clear error messages and diagnostic tools.
- **HTTPS** – Supports secure connections in development.
- **Tree Shaking** – Removes unused code to reduce bundle size.
- **Different Dev and Prod Bundles** – Separates development and production builds for optimized performance.

## What is Type Module in Script Tag and Why?

## What is BrowserList?

## What is ReactElement and HTML Element?

## What is JSX?

## What is Babel?
