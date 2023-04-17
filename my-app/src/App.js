import React from 'react';
import home from './home.jpg';

function MyButton(){
  function handleClick(){
    alert('You clicked this button');
  }
  return (
    <button onClick={handleClick}>click here</button>
  )
}
function App() {
  return (
    <div>
      <h1>A peaceful home always begins with the heart.</h1> 
      <img src={home} alt="welcome home" />
      <MyButton />
    </div>
  );
}

export default App;
