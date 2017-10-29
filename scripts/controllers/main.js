'use strict';


//attach to todoListApp module
angular.module('todoListApp')
// dataService is defined as depedency in the controller by passing as param in ()=>
.controller('mainCtrl', function($scope, dataService) {

    $scope.learningNgChange = function() {
    console.log("An Input Changed!");
    };


    $scope.addTodo = function (){
        var todo = {name: 'This is a new todo'};
        $scope.todos.unshift(todo);
    };
    //create helloConsole method based on dataService
    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function(response){

        $scope.todos = response.data;
    });

    $scope.deleteTodo = function (todo, $index){
        dataService.deleteTodo(todo);
        $scope.todos.splice($index,1);
    };

    $scope.saveTodo = function (todo){
        dataService.saveTodo(todo);
    };
});
