(function () {

    var app = angular.module( 'githubViewer', ['ngRoute'] );

    app.config( function ($routeProvider) {
        $routeProvider
            .when( '/main', {
                templateUrl: 'app/views/main.html',
                controller: 'MainController'
            } )
            .when( '/user/:username', {
                templateUrl: 'app/views/user.html',
                controller: 'UserController'
            } )
            .when( '/repo/:username/:reponame', {
                templateUrl: 'app/views/repo.html',
                controller: 'RepoController'
            } )
            .otherwise( {
                redirectTo: '/main'
            } )
    } );

}());