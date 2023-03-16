// Initialize counters
let length = 0;
let num_words = 1;
let num_vowels = 0;

// Read input sentence
let sentence = prompt("Enter a sentence: ");

// Loop through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
    // Increment length counter
    length++;

    // Check if current character is a vowel
    if (/[aeiou]/i.test(sentence[i])) {
        num_vowels++;
    }

    // Check if current character is a space
    if (sentence[i] === ' ') {
        num_words++;
    }
}

// Print results
console.log("Length of sentence: ", length);
console.log("Number of words: ", num_words);
console.log("Number of vowels: ", num_vowels);

