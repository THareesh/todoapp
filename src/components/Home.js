import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div className ="container-fluid">
                <div className="row">
                    <form>
                        <div className="form-group">
                          <label for="exampleId"></label>
                          <input 
                           type="text"
                           className="form-control"
                           placeholder="user name"
                            id="exampleId"
                            />
                           <i class="fa fa-address-book" aria-hidden="true"></i>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home