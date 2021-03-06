(function () {

    var module = angular.module( 'githubViewer' );

    module.controller( 'RepoController', function ($scope, $routeParams, github) {

        var onRepoDetailsComplete = function (data) {
            $scope.repo = data;
        };

        var onError = function (err) {
            $scope.error = err;
        };

        github.getRepoDetails( $routeParams.username, $routeParams.reponame )
            .then( onRepoDetailsComplete, onError );

    } );

}());