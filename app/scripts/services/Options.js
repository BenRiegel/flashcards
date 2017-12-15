(function() {
    function Options($cookies, $rootScope) {

        $rootScope.$on('primary-option-selected', function(evt, option) {
            Options.primary = option;
        });

        $rootScope.$on('primary-option-cleared', function() {
            Options.primary = null;
        });


        var Options = {
            primary:null,
            quiz: {totalQuestions: $cookies.get('totalQuestions') || "50",
                   redoMissed: $cookies.get('redoMissed') || "yes"},
            numbers: {toFrom: $cookies.get('toFrom') || "to",
                      numbersRange: $cookies.get('numbersRange') || "0-999"},
            vocab: {listName: $cookies.get('listName') || "animals"},
            verbs: {tense: $cookies.get('tense') || "presentIndicative"},
        };

        Options.save = function(){
            $cookies.put('totalQuestions', this.quiz.totalQuestions);
            $cookies.put('redoMissed', this.quiz.redoMissed);
            $cookies.put('toFrom', this.numbers.toFrom);
            $cookies.put('numbersRange', this.numbers.numbersRange);
            $cookies.put('listName', this.vocab.listName);
            $cookies.put('tense', this.verbs.tense);
        }

        return Options;
    }

    angular
        .module('spanish')
        .factory('Options', ['$cookies', '$rootScope', Options]);
})();
