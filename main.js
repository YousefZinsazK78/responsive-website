let body = document.querySelector("h1");
const html = document.querySelector("html")

body.style.backgroundColor = "lightblue";

body.addEventListener('click' , () => {
    console.log("this is tesg")
})
html.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = "yellow";
})