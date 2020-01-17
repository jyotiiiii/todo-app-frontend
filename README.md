# Kinda

_A To-Do App_

### React Component Tree

<img src="https://raw.githubusercontent.com/jyotiiiii/todo-app-frontend/master/public/images/react_components.png" alt="React Components" width="800"/>

```
kinda-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── css
│   │   └── styles.css
│   └── images
└── src
    ├── index.js
    └── components
        └── App.js
            ├── Navbar.js
            │   ├── Score.js
            │   ├── MenuButton.js
            │   └── Hamburger.js
            │       ├── MenuItem.js
            │       └── MenuSearch.js
            ├── Header.js
            │   ├── Brand.js
            │   ├── Logo.js
            │   ├── AddTask.js
            │   └── AddRandom.js
            │
            ├── TaskForm.js
            ├── TaskList.js
            │   └── TaskItem.js
            │       ├── DeleteButton.js
            │       └── DoneButton.js
            └── Footer.js
                ├── SocialIcon.js
                └── Copyright.js
```

Component Template

```
import React from 'react';

class xxx extends React.Component {
  render() {
    return (

    );
  }
}

export default xxx;
```

### Bootstrap Structure

<img src="https://raw.githubusercontent.com/jyotiiiii/todo-app-frontend/master/public/images/bootstrapStructure.png" alt="Image of Bootstrap Structure Sketch" width="400"/>

### Bootstrap Grid

<img src="https://raw.githubusercontent.com/jyotiiiii/todo-app-frontend/master/public/images/bootstrapGrid.png" alt="Image of Bootstrap Grid Sketch" width="400"/>

### React Components

<img src="https://raw.githubusercontent.com/jyotiiiii/todo-app-frontend/master/public/images/reactComponents.png" alt="Image of React Components Sketch" width="400"/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the fileclassNames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

```

```
