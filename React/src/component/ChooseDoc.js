import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

const END_POINT = 'http://localhost:9000/Doctor';


export default class ChooseDoc extends Component {
    state = {
        data: [],
        key:[]
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
        this.setState({day:this.inputField1.value})
        // let docName = this.inputField.value;
        // let dayName = this.inputField1.value;

       axios.get(`${END_POINT}/booktable/${this.inputField1.value}/${this.inputField.value}`)
            .then (res => {
                // console.log('res.data')
                console.log(res.data)
                this.setState({data: res.data});})

                .then( ()=>
                 {
                var arr =[]
                for(let key in this.state.data){
                    console.log(key);
                   if (this.state.data === true){

                   }else

                  arr.push(key);
        
                  console.log(arr)
                }
                console.log(arr)
                this.setState({key: arr})

            })
    }
    
    click = (i) => {
        console.log(i)

       axios
        .put(`${END_POINT}/put/${i}/${this.state.day}`)
        .then(res => {
            console.log(res.data)
        })
       
    }

    // click = (e, _id) => {
    //     // console.log(_i)
    //     e.preventDefault()
    //     console.log(_id);

    //     axios
    //         .put(`${END_POINT}` )
    //         .then(res => {

    //         })
    // }

    // submitHandler = (e, _id) => {
    //     e.preventDefault();
    //     console.log(_id)

        // axios
            // .put(`${END_POINT} + id`)
    // }
    
    render() {
        // const { data } = this.state
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
                {/* {this.state.data.length > 0 && this.state.data.map((data, i) => <User data={data} key={i} i={i} />)} */}
                
                {/* { Object.keys(data).map(function(key) {
                    return <User value={key} >{data[key]}</User>
                }) } */}

                {/* {for each(const key)} */}
                
                {/* { Object.keys(this.state.data).map(function(keyName, keyIndex) {
                    <User keyName={keyName} />
                })} */}


                {/* {Object.keys(this.state.data).map((keyName, i) => {
                    <User keyName={keyName} i={i} />
                })} */}


                {/* <User key/> */}
                {this.state.key.map((elem, i) => <User click={this.click}  time = {elem} key={i} i={i} />)}
                {/* submitHandler={this.submitHandler} */}

            </React.Fragment>
        )
    }
}