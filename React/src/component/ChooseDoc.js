import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

const END_POINT = 'http://localhost:9000/Doctor';


export default class ChooseDoc extends Component {
    state = {
        data: []
    };

    // getData = () => {
    //     axios
    //         .get(END_POINT)
    //         .then(result => {
    //             this.setState({
    //                 data: result.data
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    submitHandler  =  (e) => {
        // inputField  = document.querySelector('input');
        e.preventDefault()
        console.log(this.inputField.value)
        console.log(this.inputField1.value)
        // let docName = this.inputField.value;
        // let dayName = this.inputField1.value;

       axios.get(`${END_POINT}/booktable/${this.inputField1.value}/${this.inputField.value}`)
            .then (res => {
                console.log('res.data')
                console.log(res.data)
                this.setState({data: res.data});
            })
    }

    render() {
        const { data } = this.state
        return (
            <React.Fragment>
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <select ref={elem => this.inputField = elem} className="form-control">
                        <option>hala</option>
                        <option>doha</option>
                    </select>
                </div>
                <div className="form-group">
                    <select ref={elem => this.inputField1 = elem} className="form-control">
                        <option>Sun</option>
                        <option>Mon</option>
                        <option>Tue</option>
                        <option>Wed</option>
                        <option>Thu</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-info'>see what you got</button>
            </form>
                {data.length > 0 && data.map((data, i) => <User data={data} key={i} i={i} />)}
                {/* { Object.keys(data).map(function(key) {
                    return <User value={key} >{data[key]}</User>
                }) } */}
                {/* {for each(const key)} */}
            </React.Fragment>
        )
    }
}