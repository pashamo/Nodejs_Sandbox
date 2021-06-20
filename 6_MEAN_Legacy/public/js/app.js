angular.module('MeanApp', []);

angular.module('MeanApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = 'Hello';

    this.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jene Doe'
        }
    ]
}