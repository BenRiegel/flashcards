(function() {
    function FlashcardCtrl(Quiz) {
        this.quiz = Quiz;
    }

    angular
        .module('spanish')
        .controller('FlashcardCtrl', ['Quiz', FlashcardCtrl]);
})();
