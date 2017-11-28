(function() {
    function Numbers() {

        var Numbers = {};

        var getLastDigitsTranslation = function(num, accent){
            var lookupObj = {
                0: "cero",
                1: "uno",
                2: (accent)? "dós" : "dos",
                3: (accent)? "trés" : "tres",
                4: "cuatro",
                5: "cinco",
                6: (accent)? "séis" : "seis",
                7: "siete",
                8: "ocho",
                9: "nueve",
                10: "diez",
                11: "once",
                12: "doce",
                13: "trece",
                14: "catorce",
                15: "quince"
            }
            return lookupObj[num];
        }

        //----------------------------------------------------------------------

        var getHundredsTranslation = function(hundredsDigit){
            var thirdDigitLookupObj = {
                0: "",
                1: "ciento",
                2: "doscientos",
                3: "trescientos",
                4: "cuatrocientos",
                5: "quinientos",
                6: "seiscientos",
                7: "setecientos",
                8: "ochocientos",
                9: "novecientos",
            }
            return thirdDigitLookupObj[hundredsDigit];
        }

        //------------------------------------------------------------------------

        Numbers.getNumberTranslation = function(num){

            if (num == 100){
                return "cien";
            }

            var hundredsDigit = Math.trunc(num / 100);
            var numText = getHundredsTranslation(hundredsDigit);

            var twoDigitNum = (num % 100);

            if ((hundredsDigit > 0) && (twoDigitNum > 0)){
                numText += " ";
            }

            if ((twoDigitNum >= 1) && (twoDigitNum <= 15)){
                return numText + getLastDigitsTranslation(twoDigitNum, false);
            }

            if ((twoDigitNum >= 16) && (twoDigitNum <= 19)){
                return numText + "dieci" + getLastDigitsTranslation(twoDigitNum % 10, true);
            }

            if (twoDigitNum == 20){
                return numText + "veinte";
            }

            if ((twoDigitNum >= 21) && (twoDigitNum <= 29)){
                return numText + "veinti" + getLastDigitsTranslation(twoDigitNum % 10, true);
            }

            tensDigit = Math.trunc(twoDigitNum / 10);
            onesDigit = (twoDigitNum % 10);

            var tensLookupObj = {
                3: "treinta",
                4: "cuarenta",
                5: "cincuenta",
                6: "sesenta",
                7: "setenta",
                8: "ochenta",
                9: "noventa"
            }

            if (twoDigitNum >= 30){
                numText += tensLookupObj[tensDigit];
                if (onesDigit > 0){
                  numText += " y " + getLastDigitsTranslation(onesDigit, 0);
                }
                return numText;
            }
        }

        return Numbers;
    }


    angular
        .module('spanish')
        .factory('Numbers', Numbers);
})();
