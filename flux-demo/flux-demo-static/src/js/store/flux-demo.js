import dispatcher from '../dispatcher/dispatcher';

const data = {
    introduction: {}
};

const createStore = (methods) => {
    let name;

    class Store extends EventEmitter {};

    for (name in methods) {
        Store.prototype[name] = methods[name];
    }

    return new Store();
};

const fluxDemoStore = createStore({
    getIntroduction (name) {
        return data.introduction[name];
    }
});

fluxDemoStore.dispatchToken = dispatcher.register((action) => {
    switch(action.type) {
        case 'FETCH_INTRODUCTION':
            // do something
        break;

        case 'FETCH_INTRODUCTION_SUCCESS':
            data.introduction[action.name] = action.response.data;
            fluxDemoStore.emit('change');
        break;

        case 'FETCH_INTRODUCTION_ERROR':
            // do something
        break;
    }
});

export default fluxDemoStore;
