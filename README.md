
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

## Usage

The application consists of three main pages:

* **Home Page**: Displays a list of posts with the ability to create and delete posts.
* **Users Data Table**: Shows user data with functionality to sort columns, search within two columns, and delete users.
* **User Details Page**: Provides detailed user data with the option to delete the user.

## Used technologies

### TypeScript

The entire project is written in TypeScript for enhanced type safety using enums, types, interfaces, and generic types.

### Styled Components

Custom styling with support for dark and light themes.

### Redux Toolkit

Utilized with RTK Query for API handling and state management, making API call handling easy and efficient with built-in caching mechanisms.
Redux RTK makes API call handling very easy and fast for development. It has a caching system for better performance, which can be updated after some calls or updated manually. Performance can be improved by updating front cache data first and then undoing the action if the server fails. This is a flexible tool to handle various problems, including API calls with side effects.

### Context API

For state management within multiple components.

### React Router

Used for routing between pages.


## Folder Structure

The folder structure follows a consistent pattern to separate concerns and layers effectively:

```
assets
components
  ├── Page
  ├     ├── Page.styles.ts
  ├     ├── Page.types.ts
  ├     └── index.tsx 
pages
  ├── Users
  ├    ├── Oter components
  ├    ├── Users.styles.ts
  ├    └── index.tsx 
routes
hooks
redux
  ├── apiSlices
  ├     ├── posts.slice.ts    
  ├── converters 
  ├     ├── posts.converters.ts
  ├   types 
  ├       ├── posts.types.ts
  ├   urls 
  ├       ├── posts.urls.ts
  ├   store.ts
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
