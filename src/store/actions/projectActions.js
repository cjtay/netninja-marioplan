export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async calls
        const firestore = getFirestore();
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: 'Net',
                authorLastName: 'Ninja',
                createdAt: new Date(),
            })
            .then(() => {
                //dispatch actions
                dispatch({ type: 'CREATE_PROJECT', project: project });
            })
            .catch((err) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err });
            });
    };
};
