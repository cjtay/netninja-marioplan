const initialState = {
    projects: [
        { id: '1', title: 'Help me find peach', content: 'blah blah' },
        { id: '2', title: 'Collect all stars', content: 'blah blah' },
        { id: '3', title: 'Egg hunt with yoshi', content: 'blah blah' },
    ],
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
