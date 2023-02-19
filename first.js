import logo from './logo.svg';

import React from 'react';

const blog = () => {
    
return(

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    )
}

let firstname = 'Raisdeen'; // variable 
let lastname = 'yatim@gmail.com'; // variable 

export default blog;
export {firstname}; // when you are exporting any variables - {}
export {lastname}; // need to be specified inside the  flower braces