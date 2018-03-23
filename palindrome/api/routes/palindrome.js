const express = require("express");
const router = express.Router();

const PalindromeService = require("../../services/palindromeService").PalindromeService;
const palindromeService = new PalindromeService();

router.get("/:term", (req, res, next) => {
    const originalTerm = req.params.term;
    const term = originalTerm.replace(/ /g, "");
    const isPalindrome = palindromeService.isPalindrome(term);
    
    const response = (statusCode, message) => res.status(statusCode).json({message: `${originalTerm} ${message}`});

    if (isPalindrome)
        response(200, "is a palindrome");
    else
        response(400, "is not a palindrome");
});

module.exports = router;