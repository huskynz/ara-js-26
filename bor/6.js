class AnagramChecker {
    constructor(anagramWord){
        this.anagramWord = anagramWord
    }

    function anagram(anagramWord) {
        
    }

        
}

// Simple case
let anagram = new AnagramChecker("earth");
console.log(anagram.checkAnagram("heart"));
console.log(anagram.checkAnagram("hater"));
console.log(anagram.checkAnagram("hearth"));
console.log(anagram.checkAnagram("tired"));

// // With Capital letters
// let anagram = new AnagramChecker("Please");
// console.log(anagram.checkAnagram("Elapse"));
// console.log(anagram.checkAnagram("Asleep"));
// console.log(anagram.checkAnagram("Leased"));
// console.log(anagram.checkAnagram("Pleas"));


// // How about multiple words?
// let anagram = new AnagramChecker("anagram");
// console.log(anagram.checkAnagram("nag a ram"));

// // Surely you won't get it with punctuation!
// let anagram = new AnagramChecker("A decimal point.");
// console.log(anagram.checkAnagram("I'm a dot in place..."));


