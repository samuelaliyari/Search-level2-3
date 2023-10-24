
function findIt() {
    const searchInput = document.body.querySelector("#search-input").value;
    const txt = document.body.querySelector("article");
    const textContent = txt.textContent;
    console.log(textContent.split(searchInput))
    const newTextContent = textContent.split(searchInput).join(`<span class="highlight">${searchInput}</span>`);
    txt.innerHTML = newTextContent;
}