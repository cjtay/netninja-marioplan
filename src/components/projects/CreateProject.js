import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.makeProject(this.state);
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

const mapDispatchtoProps = (dispatch) => {
    return {
        makeProject: (project) => dispatch(createProject(project)),
        // same as...
        // makeProject: (project) =>
        //     dispatch({ type: 'CREATE_PROJECT', project: project }),
    };
};

export default connect(null, mapDispatchtoProps)(CreateProject);
