(function() {
    function Options() {

        var Options = {};

        Options.mainOption = null;
        Options.toFromOption = null;
        Options.totalQuestions = 50;

        return Options;
    }

    angular
        .module('spanish')
        .factory('Options', Options);
})();
