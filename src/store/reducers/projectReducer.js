const initialState = {
    projects: [
        { id: '1', title: 'Help me find peach', content: 'blah blah' },
        { id: '2', title: 'Collect all stars', content: 'blah blah' },
        { id: '3', title: 'Egg hunt with yoshi', content: 'blah blah' },
    ],
};

const projectReducer = (state = initialState, action) => {
    return state;
};

export default projectReducer;
