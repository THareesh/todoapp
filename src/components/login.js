import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            arr: [],
            editable: false,
            indexToUpdate: null,
            error:""
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleButton = () => {
        const { name, arr, editable } = this.state;
        if (editable) {
            this.setState(prevState => {
                prevState.arr[prevState.indexToUpdate] = prevState.name;
                return {
                    ...prevState,
                    name: '',
                    editable: false,
                    indexToUpdate: null,
                }
            })
        } else {
            if(name){
                this.setState({ arr: arr.concat(name), name: "" ,error:""})
            }else{
                this.setState({error:"please enter name"})
            }
            
        }
    }
    remove = (index) => {
        console.log(index)
        this.setState({
            arr: this.state.arr.filter((val, i) => index !== i)
        })
    }
    edit = (val, index) => this.setState({ editable: true, indexToUpdate: index, name: val })
    render() {
        return (
            <div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="enter a task"
                        className="form-control"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                </div>
                <button type="submit" onClick={this.handleButton}>Add</button>
                {
                    this.state.error?<h1>{this.state.error}</h1>:null
                }
                <ul className="list-group">
                    {
                        this.state.arr.map((v, index) => (
                            <li key={index} className="list-group-item"  >
                                {v}
                                <button type="submit" onClick={() => this.remove(index)}>remove</button>
                                <button type="submit" onClick={() => this.edit(v, index)}>Edit</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Login