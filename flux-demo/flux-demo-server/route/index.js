var mockData = {
    react: 'React is a JavaScript library for building user interfaces.',

    angular: 'Angular is a development platform for building mobile and desktop web applications. This is the repository for Angular 2, both the JavaScript (JS) and Dart versions.',

    polymer: 'Polymer lets you build encapsulated, re-usable elements that work just like HTML elements, to use in building web applications.'
};

var index = function(router){
    router.get('/api/:browsers', function* (){
        this.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
        this.set('Access-Control-Allow-Origin', '*');
        this.type = 'application/json';
        this.body = {
            data: mockData[this.params.browsers]
        }
    });
};

module.exports = index;
