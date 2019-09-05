import React, { Component } from 'react';

export default class User extends Component {
    render() {
        const { time, i } = this.props
        // console.log(keys)
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
                                {/* <div className="form-group">
                                    <select className="form-control"> */}
                                    {time ? time: "Reserved"}
                                    {/* </select>
                                </div> */}
                                </td>
                    
                                <td> <button onClick={this.props.click.bind(this,time)} className='btn btn-primary'> Deal </button> </td>
                            </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}



// onClick={this.props.click.bind(this._id)}
// onSubmit = {this.props.submitHandler.bind(this._id)}