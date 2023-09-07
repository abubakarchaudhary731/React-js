import React from 'react'; 
import Main from './Finance App/Main';
import { AppProvider } from './Context';

function App() {
  return ( 
    <div>
      <AppProvider>
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;

/*
import React from 'react';
import ParentComponent from './Component/ParentComponent'; 

function App() {
  return ( 
    <div>
      <ParentComponent />
    </div>
  );
}

export default App;
*/
 