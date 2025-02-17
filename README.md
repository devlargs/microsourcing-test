# Drone Challenge

## 🚀 Tech Stack Used

-   [Vite](https://vite.dev/) - A fast build tool for modern frontend development
-   [React Context](https://react.dev/reference/react/createContext) - lets components pass information deep down without explicitly passing props
-   [Mantine](https://mantine.dev/) - A fully featured React components library
-   [Typescript](https://www.typescriptlang.org/) - ensuring type safety and better developer experience
-   [Vitest](https://vitest.dev/) - A vite-native testing framework
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components

## 🛠️ Setting up the project

```sh
# install dependencies
yarn install
```

## 🤖 Running the App

```sh
# You must first run the api
yarn watch:api
```

The api will start running at `http://localhost:4001`.

```sh
# Then run the dev command for the frontend
yarn dev
```

### Optional

```sh
# To run tests, we are using vitest & react testing library . To check for component unit tests, just run
yarn test
```

This will start the app on a local development server.

## 🔗 Productionizing the app

-   For the frontend, I've used [Vercel](https://vercel.com/) to cater vite app.
-   For the backend, I've used [Render](https://render.com/) to cater the web service.

Demo Link: https://microsourcing-code-test.vercel.app/
