import dispatcher from '../dispatcher/dispatcher';

const fluxDemoActions = {
    fetchIntroduction (name, path) {
        const url = `http://127.0.0.1:3002${path}`;

        dispatcher.dispatchAsync(url, {
            request: 'FETCH_INTRODUCTION',
            success: 'FETCH_INTRODUCTION_SUCCESS',
            failure: 'FETCH_INTRODUCTION_ERROR'
        },{
            name
        });
    }
};

export default fluxDemoActions;
