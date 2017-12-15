(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('primary-options', {
                url: '/',
                templateUrl: '/templates/primary_options.html',
            })

            .state('secondary-options', {
                url: '/options',
                controller: 'OptionsCtrl as OptionsCtrl',
                templateUrl: '/templates/secondary_options.html'
            })
            .state('quiz', {
                url: '/quiz',
                controller: 'QuizCtrl as QuizCtrl',
                templateUrl: '/templates/quiz.html'
            })

            .state('quiz.numbers', {
                url: '/numbers',
                controller: 'FlashcardCtrl as FlashcardCtrl',
                templateUrl: '/templates/quiz_numbers.html'
            });



    }

    angular
        .module('spanish', ['ui.router', 'ngAnimate', "ngCookies"])
        .config(config);
})();
