import React, { Component } from 'react';

export default class User extends Component {
    render() {
        const { elem ,i} = this.props
        console.log(elem)
        return (
            <React.Fragment>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'> Time </th>
                            <th scope='col'> confirmation </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>{elem[i] ? "Reserved" : "i"}</option>
                                </select>
                            </div>
                            </td>
                
                            <td> <button className='btn btn-primary'> Deal </button> </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}