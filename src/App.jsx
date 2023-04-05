import React, { Component } from "react";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiTwotoneStar } from 'react-icons/ai';
import { FcStart } from 'react-icons/fc';
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { GrAdd } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './style.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            todo: [

            ]
        }

    }



    //access input value
    handlechg = (val) => {
        this.setState({
            value: val
        })

    }

// get data from local storage
    componentDidMount() {



        let data = localStorage.getItem("Todo_List")
        console.log(data)


        if (data == null) {
            this.state.todo = []
        }

        else {

            this.state.todo = JSON.parse(data)

            this.setState({})

        }

    }


    //data submit function 
    setdata = () => {

        if (this.state.value == "") {
            alert("value")
        }
        else {
            let obj = {
                title: this.state.value,
                s: 0
            }
            this.state.todo = [...this.state.todo, obj]

            localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))


        }
        console.log(this.state.value)




        this.setState({

            value: ""
        })

        // 

        console.log(this.state.todo)




    }

    //data delete function
    deletedata = (ind) => {





        this.state.todo.splice(ind, 1)
        localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))
        this.setState({})


    }


    edit = (ind) => {
        for (var i = 0; i < this.state.todo.length; i++) {
            this.state.todo[i].s = 0
        }

        this.state.todo[ind].s = 1
        this.setState({})



    }

    //new value
    setnewtext = (val, ind) => {
        this.state.todo[ind].title = val
        this.setState({

        })


    }
    //update value
    update = (i) => {
        this.state.todo[i].s = 0
        localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))

        this.setState({

        })
    }



    render() {
        return (
            <div className="mainbody">
                <h1>Todo List </h1>
                <div className="insidebody">

                    <input value={this.state.value} style={{ width: 200 + "px" }} className="maininput" onChange={(e) => this.handlechg(e.target.value)} placeholder="Item Name" type="text" />
                    <button  onClick={() => this.setdata()}>
                        Add Item
                    </button>






                    {
                        this.state.todo.map((v, i) => {
                            return (

                                v.s == 0 ?
                                    //text 

                                    <li key={i} style={{ listStyle: "none ", margin: 12 + "px" }}>
                                        <i ><AiOutlineCheckSquare /></i>
                                        <input type="text" className="input2" style={{ width: 120 + "px" }} readOnly value={v.title} />
                                        <button onClick={() => this.edit(i)}><AiFillEdit /></button>
                                        <button onClick={() => this.deletedata(i)} ><AiFillDelete /></button>
                                    </li>

                                    :
                                    <li key={i} style={{ listStyle: "none", margin: 12 + "px" }}>
                                        <i><AiOutlineArrowRight /></i>
                                        <input type="text" value={v.title} onChange={(e) => this.setnewtext(e.target.value, i)} />
                                        <button onClick={() => this.update(i)}><GrUpdate /></button>

                                    </li>




                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default App