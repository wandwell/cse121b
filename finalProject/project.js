import { checkLine, setNewLine } from "./words.js";
import { choose } from "./random.js";

const authorElement = document.querySelector("#author");
const titleElement = document.querySelector("#title");
const poemElement = document.querySelector("#poem");
const originalElement = document.getElementById("original")
let isVisible = false;
let authorList = [];
let poemList = [];
let author = "";
let lines = [];

const getAuthor = async() => {
    const response = await fetch("https://poetrydb.org/author")
    let object = await response.json();
    authorList = object.authors;
    author = authorList[choose(authorList)];
    authorElement.innerText = author
    getPoems(author);
}

const getPoems = async(author) => {
    let url = `https://poetrydb.org/author/${author}/all.json`
    const response = await fetch(url)
    poemList = await response.json();
    let poem = poemList[choose(poemList)]
    lines = poem.lines;
    titleElement.innerText = poem.title;
    displayPoem(poemElement);
    displayPoem(originalElement);
}

function displayPoem(id) {
    lines.forEach(line => {
        let p = document.createElement("p");
        if (line == "") {
            p.innerHTML = "<br></br>";
        }
        else { 
            p.textContent = line;
        }
        id.appendChild(p);
    });
}

function clearPoem() {
    poemElement.innerHTML = ""
}

function eraseLine() {
    for( let i = 0; i < 5; i ++) {
        let hasWords = true;
        do{
            let j = choose(lines);
            if (lines[j] == "" || checkLine(lines[j]) == false){
                hasWords = false;
            }
            else{
                lines[j]= setNewLine(lines[j]);
            }
        }while (hasWords = false)
    }

    clearPoem();
    displayPoem(poemElement);
}

function changeVisibility() {
    if (isVisible == false) {
        document.querySelector("#show").value = "Hide Solution"
        originalElement.style.visibility = "visible"
        isVisible = true;
    }else {
        document.querySelector("#show").value = "Show Solution"
        originalElement.style.visibility = "hidden"
        isVisible = false;
    }
}


getAuthor();

document.querySelector("#memorize").addEventListener("click", eraseLine);

document.querySelector("#show").addEventListener("click", changeVisibility);
