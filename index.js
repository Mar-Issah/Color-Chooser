const colors = [ "Green", "Red", "Blue", "Pink", "Orange", "Violet", "Yellow", "Grey", "Brown" ];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () { 
    //get random numbers from the colors array
    const randomNumber = getRandomNumber();

    //random number chisen will be the indes of the array whivh will pass in as the background color
    document.body.style.backgroundColor = colors[ randomNumber ];
    color.textContent = colors[ randomNumber ];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}