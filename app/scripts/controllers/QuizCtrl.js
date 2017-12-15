(function() {
    function QuizCtrl(Quiz) {
        this.quiz = Quiz;
        this.quiz.createNewQuiz();
    }

    angular
        .module('spanish')
        .controller('QuizCtrl', ['Quiz', QuizCtrl]);
})();
