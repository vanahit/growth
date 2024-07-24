# **Growth App**

Growth is a React application built with Vite, utilizing styled-components for custom component styling and theming,
offering both light and dark themes. The entire project is written in TypeScript, leveraging enums, types, interfaces,
and generic types for enhanced type safety. It integrates Redux Toolkit with RTK Query for efficient API interactions and state management,
including caching mechanisms for better performance.
React Router is used for routing, and the Context API is employed for state management within several components.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Build and Preview](#build-and-preview)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [API and Business Logic](#api-and-business-logic)
- [Build Optimization](#build-optimization)
- [Contact](#contact)

## Description

Growth is a React application built with Vite, utilizing styled-components for custom component styling and theming, offering both light and dark themes. The entire project is written in TypeScript, leveraging enums, types, interfaces, and generic types for enhanced type safety. It integrates Redux Toolkit with RTK Query for efficient API interactions and state management, including caching mechanisms for better performance. React Router is used for routing, and the Context API is employed for state management within several components.

## Installation

To set up the project locally, follow these steps:

* Clone the repository - `git clone https://github.com/vanahit/growth.git`
* Navigate to the project directory - `cd growth`
* Install dependencies - `npm install`
* Start the development server - `npm run start`

This will start the application on [http://localhost:3000](http://localhost:3000).

## Build and Preview

To build the project, run:

```
npm run build
```

To preview the built project, run:

```
npm run preview
```

## Error Handling

App employs several error handling strategies to ensure robust and user-friendly application behavior:

1. **Error Boundary**: An error boundary is implemented to catch and handle unexpected JavaScript errors in the future, possibly integrating with error reporting tools.
2. **404 Not Found Page**: A custom 404 not found page is provided to handle cases where routes do not match any defined paths.
3. **API Interactions**: For API interactions, try-catch blocks are used along with error handling within useEffect hooks, as Redux RTK hooks provide error states.
4. **Enums and Objects**: When dealing with objects or enums, a switch statement is used with a default case to handle unexpected values.
6. **Redux RTK Middleware**: Middleware is will be implemented for Redux RTK to handle errors based on their type, such as 500 or other HTTP status codes.

## Testing

The project is set up for testing using Jest and React Testing Library.

- **Running Tests**: You can run tests using the command:
  ```
  npm run test
  ```
- **Test Coverage**: To view test coverage, run:
  ```
  npm run test:coverage
  ```
- **Mocking APIs**: For future integration tests, the Mock Service Worker library can be used to mock APIs.

## Usage

The application consists of various components and features. Here is how you can use the application:

* Navigate through different sections using the navigation bar.
* Create, read, update, and delete posts and users through the respective pages.
* Toggle between light and dark themes using the theme switcher.

## Features

* **Light and Dark Themes**: Toggle between light and dark themes.
* **CRUD Operations**: Create, read, update, and delete posts and users.
* **Responsive Design**: The application is fully responsive and works on all devices.
* **State Management**: Efficient state management using Redux Toolkit and Context API.
* **Type Safety**: Comprehensive use of TypeScript for type safety.

## Folder Structure

The project has a well-organized folder structure:

```
src
├── assets
├── components
│   ├── Button
│   │   ├── Button.styles.ts
│   │   └── index.tsx
│   ├── Page
│   │   ├── Page.styles.ts
│   │   └── index.tsx
│   ├── Posts
│   │   ├── PostItem.tsx
│   │   ├── PostsList.tsx
│   │   └── index.tsx
│   └── Users
│       ├── DeleteUser.tsx
│       ├── UsersList.tsx
│       └── index.tsx
├── hooks
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
├── pages
│   ├── Home.tsx
│   ├── Posts
│   │   ├── CreatePost.tsx
│   │   ├── Posts.styles.ts
│   │   └── index.tsx
│   ├── Users
│   │   ├── Users.styles.ts
│   │   └── index.tsx
├── redux
│   ├── apiSlices
│   │   ├── posts.slice.ts
│   │   ├── users.slice.ts
│   ├── converters
│   │   ├── posts.converter.ts
│   │   ├── users.converter.ts
│   ├── types
│   │   ├── posts.types.ts
│   │   ├── users.types.ts
│   ├── store.ts
├── routes
│   ├── index.tsx
│   └── routes.types.ts
└── index.tsx
```

## API and Business Logic

For separating all layers such as API and business logic, the structure is as follows:

* **API**: Written within Redux RTK slices which provide hooks with all states used in components.
* **Converters**: For abstraction between backend and frontend data, converters are used to transform data from backend to frontend and vice versa. This makes backend changes less impactful to the client side and centralizes data transformation, such as getting readable addresses, constructing full names, or updating dates.

This layer works for both client-to-backend and backend-to-client transformations, as illustrated in:

```
redux/converters/users.converters.ts
```

This will allow you to see the bundle analysis and test the application with Lighthouse.

## Build Optimization

To ensure optimal performance and efficient bundling, several build optimization techniques are used:

* **Code Splitting**: Utilizing dynamic imports to split code into smaller chunks that are loaded on-demand.
* **Efficient Bundling**: Using Rollup plugins like `rollup-plugin-terser` for minification and configuring manual chunks to split vendor libraries into separate bundles.
* **Tree Shaking**: Ensuring that unused code is eliminated through tree shaking by using ES6 modules and proper configuration.
* **Performance Monitoring**: Regularly analyzing the bundle with tools like the Rollup visualizer plugin and testing performance with Lighthouse.
* **Caching Strategies**: Implementing caching at various levels to enhance responsiveness and reduce load times.

## Contact

Project Link: [https://github.com/vanahit/growth](https://github.com/vanahit/growth)

