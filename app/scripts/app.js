(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('main-options', {
                url: '/',
                controller: 'MainCtrl as mainctrl',
                templateUrl: '/templates/main.html'
            })
            .state('to-from-options', {
                url: '/to-from',
                controller: 'ToFromCtrl as tofromctrl',
                templateUrl: '/templates/tofrom.html'
            })
           .state('verb-options', {
                url: '/verb-options',
            })
            .state('numbers-options', {
                url: '/numbers-options',
            })
            .state('vocab-options', {
                url: '/vocab-options',
            })
            .state('quiz-options', {
                url: '/quiz-options',
            })
            .state('quiz', {
                url: '/quiz',
                controller: 'QuizCtrl as quizctrl',
                templateUrl: '/templates/quiz.html'
            });
    }

    angular
        .module('spanish', ['ui.router', 'ngAnimate'])
        .config(config);
})();
