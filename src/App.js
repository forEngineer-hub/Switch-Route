import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

// with switch, we can avoid render mutiple components.
// path='/hats' will render both path='/' page and the path='/hats' page.
// we can solve this by add exact in <Route  like <Route exact path='/' component={HomePage} />
// function App() {
//   return (
//     <div>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/hats' component={HatsPage} />
//     </div>
//   );
// }

export default App;
