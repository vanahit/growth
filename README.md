
# ** Growth App **

Growth is a React application built with Vite, utilizing styled-components for custom component styling and theming, 
offering both light and dark themes. The entire project is written in TypeScript, leveraging enums, types, interfaces,
and generic types for enhanced type safety. It integrates Redux[README.md](..%2F..%2FDownloads%2FREADME.md) Toolkit with RTK Query for efficient API interactions and state management,
including caching mechanisms for better performance. 
React Router is used for routing, and the Context API is employed for state management within several components.

## Installation

To set up the project locally, follow these steps:

* Clone the repository - git clone https://github.com/vanahit/growth.git
* Navigate to the project directory - cd growth-app
* Install dependencies - npm install
* Start the development server - npm run dev

This will start the application on http://localhost:3000.


## Usage

The application consists of three main pages:

* Home Page: Displays a list of posts with the ability to create and delete posts.
* Users Data Table: Shows user data with functionality to sort columns, search within two columns, and delete users.
* User Details Page: Provides detailed user data with the option to delete the user.

## Features

### Styled Components

    Custom styling with support for dark and light themes.

### TypeScript:

    The entire project is written in TypeScript for enhanced type safety using enums, types, interfaces, and generic types.

### Redux Toolkit:

    Utilized with RTK Query for API handling and state management, 
    making API call handling easy and efficient with built-in caching mechanisms.

### Context API: 

    For state management within multiple components.

### React Router:

    Used for routing between pages.


Page Functionalities:
Home Page: Create and delete posts.
Users Data Table: Sort, search, and delete users.
User Details Page: View and delete user details.
Optimization
The project uses Rollup optimization techniques to significantly reduce the build size. The build size has been optimized from 1.33MB to 300KB for improved performance and faster load times. Additionally, bundle visualization has been integrated to help analyze and further optimize the bundle size.