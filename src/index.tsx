import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from "webfontloader";

import { createGlobalStyle } from 'styled-components';

import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './store/rootReducer';
import { sagaWatcher } from './store/sagas/firstLoadingSaga';
import { updateDataWatcher } from './store/sagas/updateDataSaga';
import { updateCityCardsWatcher } from './store/sagas/updateWeatherCardsCitySaga';
import { updateNearbyCardsWatcher } from './store/sagas/updateWeatherCardsNearbySaga';


const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
header,
footer,
aside {
  display: block;
}

html,
body {
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  text-size-adjust: 100%;
  font-family: 'Inter', sans-serif;
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#edf5e1;
  min-height: 100vh;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

.done {
    text-decoration: line-through;
    color: #ccc;
}
`

WebFont.load({
  google: {
    families: ["Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"],
  },
});

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(saga),
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  ));

  saga.run(sagaWatcher);
  saga.run(updateDataWatcher);
  saga.run(updateCityCardsWatcher);
  saga.run(updateNearbyCardsWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Global/>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();