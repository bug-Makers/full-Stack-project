import React , {Component} from "react"
import { Form } from 'react-bootstrap';
 class LoginD extends Component {
     state ={
         ID:"",
         Password:""
         
     }

     validateForm(){
         return this.state.ID.length>0 && this.state.Password.length>0;
     }

     handleChange =(e)=>{       
         this.setState({
             [e.target.name]:e.target.value
         })
         console.log(this.state)
     }

     handleSubmit = event => {
         event.preventDefault()
     }

     
    render(){
        return(
            <div>
               <Form onSubmit={this.handleSubmit} className="col-md-6 col-md-offset-3"
            >
                
                <label>ID:</label>
                <input onChange={this.handleChange} value = {this.state.ID} type="number"min="0" max="5" placeholder="Your id"  name="ID"></input>
                <label>PASSWORD:</label>
                <input onChange={this.handleChange} value={this.state.password} type="password" name="Password" placeholder="Password" ></input>
                <button disabled={!this.validateForm()} className="btn btn-primary" role="button" >LogIn</button>
                
              </Form>
            </div>
        )
    }
}
export default LoginD