
const carsLinkByColor = {
    black:  "https://duckduckgo.com/?q=black+car&t=brave&iax=images&ia=images",
    red: "https://duckduckgo.com/?q=Red+car&t=brave&iar=images&iax=images&ia=images", 
    blue: "https://duckduckgo.com/?q=Blue+Car&t=brave&iar=images&iax=images&ia=images"
}

let currentCarsLink = carsLinkByColor.black; 
let redirectButton = document.getElementById("redirectTest")
console.log("link:",currentCarsLink)
console.log("button: ", redirectButton);

function buttonOnClickRedirect(e) {
    e.preventDefault(); 
    window.location.href=`${currentCarsLink}`;
}

redirectButton.addEventListener("click", buttonOnClickRedirect(e))