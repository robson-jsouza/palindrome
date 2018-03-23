PalindromeService = function() {
    
    this.isPalindrome = function(term) {
        let invertedTerm = "";

        for (let index = term.length -1; index >= 0; index--) {
            const character = term.charAt(index);
            invertedTerm += character;
        }

        return term.toLowerCase() === invertedTerm.toLowerCase();
    };
  };
  
  exports.PalindromeService = PalindromeService;