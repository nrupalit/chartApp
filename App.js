import React from 'react';
import Routes from "./src/routes/Routes";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// const initalState = {
//   counter: 0
// }

// const reducer = (state = initalState , action) => {
//   switch (action.type){
//     case 'IN':
//       return { counter: state.counter + 1}
//   }
//   return state
// }

// const store = createStore(reducer)


const App = () => {
  return (
    // <Provider store={store}>
      <Routes />
    // </Provider>
  );
};



export default App;
