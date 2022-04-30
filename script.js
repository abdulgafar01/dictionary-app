const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const random = "https://random-words-api.vercel.app/word";
const result = document.getElementById("result")
const sound = document.getElementById("sound")
const btn = document.getElementById("search-btn")

btn.addEventListener("click",() => {
    let inpWord = document.getElementById("inp-word").
    value
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            result.innerHTML = 
            `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick = "playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].
                definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].
                    example || ""}
            </p>
            `;
        sound.setAttribute("src",`${data[0].
        phonetics[0].audio}`)
        })
        .catch(() => {
            result.innerHTML = `
            <h4 class = "error"> Please check your spelling</h4>`

        })
});

playSound  = () =>{
    sound.play()
}
 
 window.addEventListener('load',()=>{
    fetch(random)
    .then((response) => response.json())
    .then((data) => {console.log(data[0].definition)
        random.innerHTML = `
        <div class="word">${data[0].word}</div>
            <div class="pronunciation">/${data[0].pronunciation}/</div>
            <div class="definitions">
            ${data[0].definition}
   
            </div>
            `
    
           }) 

 })