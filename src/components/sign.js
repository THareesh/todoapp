import React from 'react';

class Sign extends React.Component{
    constructor(props){
        super(props);
        this.state={
             text:"",
             data:[],
             editable:false,
             indexUpdateTo:null
        }
    }
    onSumbit = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    addItem=()=>{
        this.setState({data:this.state.data.concat(this.state.text)})
        console.log(this.state.text)
    }

    removeButton= (index)=>{
       this.setState({
           data:this.state.data.filter((val,i)=>index !==i)
       })
    }
    upDateButton= (val,index)=>{
       this.setState({editable:true,indexUpdateTo:index,text:""}) 
    }
    render(){
        const {data} = this.state
        return(
            <div>
              <div className="form-group">
                  <input 
                    type="text"
                    placeholder="enter task"
                    name="text"
                    className="form-control"
                    value={this.state.text}
                    onChange={this.onSumbit}
                    />
              </div>
              <button type="submit" onClick={this.addItem}>Add</button>
                {
                   data.map((v,index)=>(
                      <li key={index}>{v}
                      <button type="submit" onClick={()=>this.removeButton(index)}>delete</button>
                      <button type="submit" onClick={()=>this.upDateButton(v,index)}>delete</button>
                      </li> 
                   )) 
                }
            </div>
        )
    }
}

export default Sign