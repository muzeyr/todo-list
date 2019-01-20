import React, { Component } from 'react';

class AddForm  extends Component {
    state={
        icerik:""
    }

    handleChange=(e)=>{
        this.setState({
            icerik:e.target.value
       })

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({icerik:''});


    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Yapılacak iş</label>
                    <input type="text" value={this.state.icerik} onChange={this.handleChange}></input>
                </form>
            </div>

        )

    }

}
export default AddForm;