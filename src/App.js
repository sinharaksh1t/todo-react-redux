import React from 'react';
import './App.css';

// This functional component will manage 2 states but within a single object that will be stored in a single state object. The only way to update the state and still retain both the state elements is to update the state together in a single onClickHandler.
const App = () => {
  return(
    <div>
      <p>Hello world</p>
    </div>
  );
}

export default App;