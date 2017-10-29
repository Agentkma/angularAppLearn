'use strict';

//attach to todoListApp module
angular.module('todoListApp')
//service added as dependency in controller
.service ('dataService', function($http){
    this.helloConsole = function(){
        console.log('this is the hello console service!');
    };

    this.getTodos = function (callback) {
        $http.get('../mock/todos.json')
        .then(callback);
    };

    this.deleteTodo = function (todo){
        console.log("The " + todo.name + " todo has been deleted!");
        // other logic if had a real database to update

    };

    this.saveTodo = function (todo){
        console.log("The " + todo.name + " todo has been saved!");
        // other logic if had a real database to update
    };
});
