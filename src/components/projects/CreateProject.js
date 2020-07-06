import React, { Component } from 'react';

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input
                            type="text"
                            id="title"
                            onChange={this.onChangeHandler}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Description</label>
                        <textarea
                            className="materialize-textarea"
                            id="content"
                            onChange={this.onChangeHandler}
                        ></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProject;
