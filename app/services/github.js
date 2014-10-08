(function () {

    var module = angular.module( 'githubViewer' );

    module.factory( 'github', function ($http) {

        var getUser = function (username) {
            var userUrl = 'https://api.github.com/users/' + username;
            return $http.get( userUrl )
                .then( function (response) {
                    return response.data; // will be wrapped in a promise!
                } );
        };

        var getRepos = function (user) {
            return $http.get( user.repos_url )
                .then( function (response) {
                    return response.data; // will be wrapped in a promise!
                } );
        };

        var getRepoDetails = function (username, reponame) {
            var repo; // repo details + collaborators
            var repoUrl = 'https://api.github.com/repos/' + username + '/' + reponame;

            return $http.get( repoUrl )
                .then( function (response) {
                    repo = response.data;
                    return $http.get( repoUrl + '/collaborators' );
                } )
                .then( function (response) {
                    repo.collaborators = response.data;
                    return repo;
                } );
        };

        // public API
        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };

    } );

}());