## React vd Redux
  React control the UI, Redux control the data / states
  The components work as a container should be connected to redux.

## Redux middleware: Redux promise
  npm install redux-promise
  ```
  import ReduxPromise from 'redux-promise';
  ...
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  ...
  

  ```