
import React ,{Component}from 'react';
import LoginD from "./Components/login_doctor"
import DoctorPage from "./Components/DoctorPage"
import ChooseDoc from './component/ChooseDoc';
const axios = require('axios');

class App extends Component{
  state={ }

  render(){
   
  return (
  <>
 

<DoctorPage />
  <ChooseDoc />


    </>
  );
}
}

export default App



  
