(function () {

    angular.module( 'githubViewer' )
        .controller( 'MainController', function ($scope, $interval, $location) {

            function init () {
                $scope.username = 'angular';
                $scope.countdown = 10;
                startCountdown();
            }

            var decrementCountdown = function () {
                $scope.countdown -= 1;
                if ( $scope.countdown < 1 ) {
                    $scope.search( $scope.username );
                }
            };

            var countdownInterval = null;
            var startCountdown = function () {
                countdownInterval = $interval( decrementCountdown, 1000, $scope.countdown );
            };

            $scope.search = function (username) {
                if ( countdownInterval ) {
                    $interval.cancel( countdownInterval );
                    $scope.countdown = null;
                }
                $location.path( '/user/' + username );
            };

            init();
        } );

}());