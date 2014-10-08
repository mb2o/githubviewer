(function () {

    angular.module( 'githubViewer' )
        .controller( 'UserController', function ($scope, github, $routeParams) {

            var onUserComplete = function (data) {
                $scope.user = data;
                github.getRepos( $scope.user ).then( onReposComplete, onError );
            };

            var onReposComplete = function (data) {
                $scope.repos = data;
            };

            var onError = function (err) {
                $scope.error = 'Could not fetch the data!';
            };

            $scope.username = $routeParams.username;
            $scope.repoSortOrder = '-stargazers_count';
            github.getUser( $scope.username ).then( onUserComplete, onError );
        } );

}());