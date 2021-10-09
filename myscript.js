
const carsLinkByColor = {
    black:  "https://duckduckgo.com/?q=black+car&t=brave&iax=images&ia=images",
    red: "https://duckduckgo.com/?q=Red+car&t=brave&iar=images&iax=images&ia=images", 
    blue: "https://duckduckgo.com/?q=Blue+Car&t=brave&iar=images&iax=images&ia=images"
}

let currentCarsLink = '';
let currentColor = 'none';

$(document).ready(function(){
    $(".colorButton").click(function(e) {
        e.preventDefault();
        currentColor = e.target.innerText.toLowerCase();
        currentCarsLink = carsLinkByColor[currentColor];
        console.log(currentColor, currentCarsLink);
    })

    $("#redirectColorLink").click(function(e) {
        e.preventDefault(); 
        window.location.href=`${currentCarsLink}`;
    })
})

// function buttonOnClickRedirect() {
//     let redirectButton = document.getElementById("redirectColorLink")
//     redirectButton.onclick = function redirect(e) {
//         e.preventDefault;
//         window.location.href=`${currentCarsLink}`;
//     }
// }

function buttonNoRedirect() {
    console.log("back to home page")
    //function close the popup window
}

