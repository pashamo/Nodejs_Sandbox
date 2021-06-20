angular.module('MeanApp', []);

angular.module('MeanApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.people = clientPeople
}