import { choose } from "./random.js";

export function setNewLine(line) {
    let words = separateWords(line);
    words = eraseWords(words);
    let newLine = displayLine(words).join(" ");
    return newLine;
}

export function checkLine(line) {
    let words = separateWords(line);
    let j = 0;
    let hasWords = false;
    for (let i in words){
        if (words[i].willDisplay == true){
            j ++;
        }
    }
    if (j > 0){
        hasWords = true
    };
    return hasWords;
}

function separateWords(line) {
    let words = [];
    let parts = line.split(" ");
    parts.forEach(part => {
        if (part.includes("_")) {
            words.push({text: part, willDisplay: false})
        }
        else{
            words.push({text: part, willDisplay: true})
        };
    });
    return words;
};

function eraseWords(words) {
    let willContinue = false;
    do {
        let random = choose(words);
        if (words[random].willDisplay == true){
            words[random].willDisplay = false;
            willContinue = true;
        };
    }
    while (willContinue == false);
    return words;
}

function displayLine(words) {
    let wordSet = [];
    for (let i in words)
        if (words[i].willDisplay == false) {
            let text = words[i].text.split("");
            let change = text.map((letter) => letter = "_");
            let newText = change.join(""); 
            wordSet.push(newText)
        }
        else {
            wordSet.push(words[i].text);
        }
    return wordSet;
};

    

