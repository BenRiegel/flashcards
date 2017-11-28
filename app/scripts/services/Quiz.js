(function() {
    function Quiz(Options, Numbers) {

      var Quiz = {
        score: "—",
        totalQuestions: Options.totalQuestions,
        currentQuestionNum: 1,
        numCorrectAnswers: 0,
        questions: [],
        currentQuestion: null,
        currentQuestionPromptHTML: "",
        currentQuestionResponseHTML: ""
      };


      Quiz.handleResponse = function(response){
          this.currentQuestionPromptHTML = "";
      }

      Quiz.handleNewCard = function(){
          this.currentQuestionNum++;
          this.currentQuestion = this.questions[this.currentQuestionNum-1];
          this.currentQuestionPromptHTML = this.currentQuestion.promptHTML;
          this.currentQuestionResponseHTML = this.currentQuestion.responseHTML;
      }

      for (var i = 0; i < 50; i++){
         var randomNum = Math.trunc(Math.random() * 1000);
         var obj = {
           promptHTML: randomNum,
           responseHTML: Numbers.getNumberTranslation(randomNum)
         }
         Quiz.questions.push(obj);
      }

      Quiz.currentQuestion = Quiz.questions[0];
      Quiz.currentQuestionPromptHTML = Quiz.currentQuestion.promptHTML;
      Quiz.currentQuestionResponseHTML = Quiz.currentQuestion.responseHTML;


      return Quiz;
    }

    angular
        .module('spanish')
        .factory('Quiz', ['Options', 'Numbers', Quiz]);
})();
