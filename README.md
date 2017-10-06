# React Native Employee Manager App
> The goal of this project is to minimize the responsibilities of every component. Fitting with the 'pure function' paradigms, we will extract component logic into Redux. This project also explores view-to-view navigation in React Native.

`Why?` React is the **V**iew Layer in MVC, so it should only be responsible for taking logic and rendering it.

## Installation
``` bash
$ npm install
```

## Run-time
``` bash
$ react-native run-android
```

## React-Native-Router-Flux

Install dependencies:
``` bash
$ npm install --save react-navigation
$ npm install --save react-native-router-flux
$ npm install --save mobx
$ npm install --save mobx-react
$ npm install --save prop-types
```

Change your Router.js to:
``` javascript
const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
        </Router>
    )
}
```

If any issues:
- https://github.com/aksonov/react-native-router-flux#breaking-changes-compared-to-v3

## React-Navigation
> This package.json snippet was added for unit test purposes:

See: https://reactnavigation.org/docs/guides/redux

``` javascript
"jest": {
    "preset": "react-native",
    "transformIgnorePatterns": [
        "node_modules/(?!(jest-)?react-native|react-navigation)"
    ]
},
```

## React-Dev-Tools
> Used for efficient data collection and CSS editing

See: https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source

### Install
``` bash
$ npm install --save-dev babel-plugin-transform-react-jsx-source
```

### .babelrc
``` javascript
{
    "plugins": ["transform-react-jsx-source"]
}
```