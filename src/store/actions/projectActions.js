export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async calls

        //dispatch actions
        dispatch({ type: 'CREATE_PROJECT', project: project });
    };
};
