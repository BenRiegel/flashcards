(function() {
    function QuizCtrl(Quiz) {
        this.quiz = Quiz;
    }

    angular
        .module('spanish')
        .controller('QuizCtrl', ['Quiz', QuizCtrl]);
})();
