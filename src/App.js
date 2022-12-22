import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AmplifyComponent from './AmplifyComponent';
import { Button, Card } from '@aws-amplify/ui-react';

import { ThemeProvider } from '@aws-amplify/ui-react';




function App() {
  return (
 
<ThemeProvider>
    <div className="App">
     
    <header className="App-header">
    <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and saves to blow up the bomb.
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
      <AmplifyComponent />
       
        

      <AmplifyComponent />
    </div>
    </ThemeProvider>
  );
}

export default App;
