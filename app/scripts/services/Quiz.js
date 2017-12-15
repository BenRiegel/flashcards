(function() {
    function Quiz($rootScope, Options, Numbers) {

        var Quiz = {
            state: "question",
            score: "—",
            totalQuestions: Options.totalQuestions,
            currentQuestionNum: 1,
            numAnswers: 0,
            numCorrectAnswers: 0,
            questions: [],
            questionInstructions: "",
            currentQuestion: null,
            currentResponseCorrect: false,
        };

       $rootScope.$on('end-state-event', function(evt, param){
           if (Quiz.state == "question"){
               Quiz.scoreAnswer(param);
               Quiz.state = "answer";
           } else {
               Quiz.state = "question";
               if (Quiz.currentQuestionNum < Quiz.totalQuestions){
                   Quiz.currentQuestion = Quiz.questions[Quiz.currentQuestionNum+1];
              }
           }
           $rootScope.$broadcast('quiz-state-change', Quiz.state);
       });


      $rootScope.$on('flipping-ended', function(){
          if (Quiz.state == "question"){
              Quiz.currentQuestionNum++;
          } else {
            if (Quiz.currentResponseCorrect){
              Quiz.numCorrectAnswers++;
            }
            Quiz.numAnswers++;
            Quiz.updateScore();
          }
      });


      Quiz.updateScore = function(){
          var percent = (this.numCorrectAnswers / this.numAnswers) * 100;
          this.score = percent.toFixed(1) + "%";
      }

      Quiz.scoreAnswer = function(answer){
        //  this.numAnswers++;
          this.currentResponseCorrect = (this.currentQuestion.answer == answer);
          if (this.currentResponseCorrect){
          //    this.numCorrectAnswers++;
              $rootScope.$broadcast('quiz-answer-correct');
          } else {
              $rootScope.$broadcast('quiz-answer-incorrect', this.currentQuestion.answer);
          }
      }




      Quiz.createNewQuiz = function(){
          this.questions = [];
          this.currentQuestionNum = 1;
          this.totalQuestions = Options.quiz.totalQuestions;

          if (Options.primary == "Numbers"){
            this.questions = Numbers.createCards(this.totalQuestions, "to", "0-999");
            this.questionInstructions = Numbers.getInstructions("to");
          }
          Quiz.currentQuestion = this.questions[0];
      }

      return Quiz;
    }

    angular
        .module('spanish')
        .factory('Quiz', ['$rootScope', 'Options', 'Numbers', Quiz]);
})();
