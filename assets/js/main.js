

// function findIt() {
//     event.preventDefault();
//     const searchInput = document.body.querySelector("#search-input").value;
//     const txt = document.body.querySelector("article");
//     let inputSearch = txt.textContent.indexOf(searchInput);
//     console.log(inputSearch);
//     let i = 0;
//     if(i <= txt.textContent.length) {
//         const articleInhalt = txt.innerHTML;
//         i += inputSearch
//         console.log(i)
//         txt.innerHTML = articleInhalt.replace(searchInput, `<span class = "highlight">${searchInput} </span>`);
    
//     }
// }



function findIt() {
    const searchInput = document.body.querySelector("#search-input").value;
    const txt = document.body.querySelector("article");
    const textContent = txt.textContent;
    console.log(textContent.split(searchInput))
    const newTextContent = textContent.split(searchInput).join(`<span class="highlight">${searchInput}</span>`);
    txt.innerHTML = newTextContent;
}