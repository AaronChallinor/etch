const container = document.getElementById("container"); //Telling the JS where our container is.
let pixelCount = 0; //determines how many times the for loop runs

let submitButton = document.getElementById("submitButton");
let rainbowButton = document.getElementById("rainbow");
let blackButton = document.getElementById("black");
let eraser = document.getElementById("eraser");
let pixels = Array.from(container.children);
let colorMode = 0;
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let hexValue = document.getElementById("hexValue");
let mouseDown = false;

document.body.onmousedown = ()=> (mouseDown = true); /*Parenthesis are used in an arrow function to return an object*/
document.body.onmouseup = ()=> (mouseDown = false); 




submitButton.addEventListener("click",() => {calcGrid();})
document.addEventListener("keyup",(e)=> {
    
    if(e.keyCode === 13){
    
    calcGrid();}})


rainbowButton.addEventListener("click",() => {colorMode = 1;})
blackButton.addEventListener("click",() => {colorMode = 0;})
eraser.addEventListener("click",() => {colorMode = 2;})





    

function calcGrid(){
    let oneSide = document.getElementById("sizeInput").value
    let pixelWidth = 400 / oneSide
    if (oneSide > 100){alert("Unable to generate grid larger than 100x100");
        return;}
    else{
    pixelCount = oneSide*oneSide;
    container.style.gridTemplateColumns = `repeat(${oneSide}, ${pixelWidth}px)`;
    container.style.gridTemplateRows = `repeat(${oneSide}, ${pixelWidth}px)`;
    generateGrid()}
    



}


function generateGrid(){
    container.innerHTML = "";
for (let i = 0; i < pixelCount;i++){
    let pixel = document.createElement("div"); //create a div
    pixel.id = `pixel${i}`; //assign it a unique id
    pixel.className = "pixel"; //give it the pixel class to pick up the css styling
    //pixel.innerText = `${i}`; //stick it's loop number in there (just a test)
    container.appendChild(pixel); //append it to the container
   
}
draw();
}

function draw(){
pixels = Array.from(container.children);
    
pixels.forEach(p => {
    
    p.addEventListener("mouseenter",() => {
        genRandNo();

        if(colorMode === 0 && mouseDown){
            p.style.backgroundColor = "#000000";
            p.style.border ="0px";

        }
        else if(colorMode === 1 && mouseDown){
            p.style.backgroundColor = "#" + randomColor;
            p.style.border ="0px";

        } 

        else if(colorMode === 2 && mouseDown){
            p.style.backgroundColor = "white";
            p.style.border = "1px solid rgb(236, 233, 233)"

        } 
        else return;

    })

    


    



        
        
    
    })
    }


    
    

    function genRandNo () {
    randomColor = Math.floor(Math.random()*16777215).toString(16);

    }


    let intervalId = window.setInterval(function(){

        if(colorMode === 1 && mouseDown){

            hexValue.innerText = `hexvalue: #${randomColor}`
        
        }

        else if(colorMode === 2){

            hexValue.innerText = `hexvalue: #ffffff`;
        
        }

        else if(colorMode === 0){

            hexValue.innerText = `hexvalue: #000000`;
        
        }

        
      }, 1);