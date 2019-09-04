import React , {Component} from "react"
import RowDoctor from './RowOfDoctorPage'
import { Button } from "react-bootstrap";
class DoctorPage extends Component {
    state ={
        nameOfDoctor:"Rashed Migdady"
    }

    change(){
        this.setState({
            nameOfDoctor:"ali"
        })
    }
    render(){
        return(
        <div>
            <p>welcome Dr.{this.change.setState}</p>
            <label>Select The Day</label>
            <select>
              <option >Sunday</option>
              <option >Monday</option>
              <option >Tuesday</option>
              <option >Wednesday</option>
              <option >Thursday</option>
            </select>

            <table className = "table table-striped">
                <thead>
                    <th scope="col">The Name</th>
                    <th scope="col" >Time</th>
                    
                </thead>

                {/* <RowDoctor /> */}
            </table>


        </div>
    )}
}

export default DoctorPage