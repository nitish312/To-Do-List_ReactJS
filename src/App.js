import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './components/Plan';

class App extends Component {
  
    state = {
        items: [],
        text:""
    }

    handleChange = e => {
        this.setState({text: e.target.value})
    }

    handleAdd = e => {
        if(this.state.text !== ""){
            const items = [...this.state.items, this.state.text]
            this.setState({items: items, text:""})
        }
    }

    handleDelete = id => {
        const oldItems = [...this.state.items]
        const items = oldItems.filter((element, i) => {
            return i != id
        })
        this.setState({items: items})
    }

  render() {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
                    <h2 className="text-center">Your Tasks</h2>
                    <div className="row">
                        <div className="col-9">
                            <input type="text" className="form-control" placeholder='add your tasks' value={this.state.text} onChange={this.handleChange}/>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-warning px-5 fw-bold" onClick={this.handleAdd}>Add</button>
                        </div>
                        <div className="container-fluid cls2">
                            <ul className="list-unstyle row m-5">
                                {
                                    this.state.items.map((value, i)=>{
                                        return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default App