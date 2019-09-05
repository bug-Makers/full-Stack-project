
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import Auth from './Auth';
import Login from './Login';
import Register from './Register';
import Home from './home'
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Login {...props} />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/auth" render={props => <Auth {...props} />} />
    </Switch>
  </BrowserRouter>
);
































// import React from 'react';
// import {
//   BrowserRouter,
//   Route,
//   Switch,
// } from 'react-router-dom'

// import Auth from './Auth';
// import Login from './Login';
// import Register from './Register';
// import home from './home';

// export default () => (
//   <BrowserRouter>
//     {/* <Switch> */}
//     <Route exact path="/" component={home} />
//     <Route path="/Login" component={Login} />
//     <Route path="/Register" component={Register} />
//   {/* <Route exact path="/auth" render={props => <Auth {...props} />} />  */}
  
  
//         {/* <Route exact path="/home" render={props => <home {...props} />} /> } */}
//       {/* { <Route exact path="/" render={props => <Login {...props} />} /> } */}
//       {/* <Route exact path="/register" render={props => <Register {...props} />} /> */}
//       {/* <Route exact path="/auth" render={props => <Auth {...props} />} /> */}
//     {/* </Switch> */}
//   </BrowserRouter>
// );
