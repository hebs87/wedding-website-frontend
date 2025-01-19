# BuyDesign Portal

This is the frontend repo for the BuyDesign portal.

## First Installation

Complete the below steps to run the project locally:

1. Ensure you've installed and activated Node version 22
2. Checkout the `develop` branch
3. Add the `.env` and `.env.production` files in the project's root directory
4. Run `npm install` to install the project's dependencies
5. To run the project:
   1. Run `vite` from the terminal and wait for the environment to fully install and start
   2. Head to `http://localhost:3000` to access the site
6. To run storybook
    1. Run `npm run storybook` from the terminal and wait for the environment to fully install and start
    2. Head to `http://localhost:6006` to access storybook

## Subsequent Installation

After stopping a container following the first installation, complete the below steps to run the relevant container again:

1. To run the project:
    1. Run `vite` from the terminal and wait for the environment to fully install and start
    2. Head to `http://localhost:3000` to access the site
2. To run storybook
    1. Run `npm run storybook` from the terminal and wait for the environment to fully install and start
    2. Head to `http://localhost:6006` to access storybook
## Installing npm Packages

1. Run `npm install <package_name>` from the terminal

## Uninstalling npm Packages

Complete the below steps to uninstall a npm package while the `web-1` container is running:

1. Run `npm uninstall <package_name>` from the terminal

## Creating Components Using GRC

1. Create a standard component
    1. Run `npm run grc:component <ComponentName>` from the terminal
        1. This will create the following templates in the src/components/<ComponentName> directory
            1. <ComponentName>.jsx
            2. <ComponentName>.module.scss
            3. <ComponentName>.stories.jsx
    2. Remove extend-expect import line to fix error
2. Create a page component
    1. Run `npm run grc:page <PageName>` from the terminal
        1. This will create the following templates in the src/pages/<PageName> directory
            1. <PageName>.jsx
            2. <PageName>.module.scss
            3. <PageName>.stories.jsx

## Configuring Environment Variables

Complete the below steps to create and import environment variables in the project:

1. Add the environment variable to the relevant `.env` file in the following format:
    1. `VITE_<VARIABLE_NAME>`, e.g. `VITE_BASE_URL`
2. Import the relevant variable in the project in the following format:
    1. `import.meta.env.VITE_<VARIABLE_NAME>`, e.g. `import.meta.env.VITE_BASE_URL`
