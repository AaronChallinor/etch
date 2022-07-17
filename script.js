const container = document.getElementById("container"); //Telling the JS where our container is.
let pixelCount = 0; //determines how many times the for loop runs
let submitButton = document.getElementById("submitButton");
let pixels = Array.from(container.children);



submitButton.addEventListener("click",() => {calcGrid();})
document.addEventListener("keyup",(e)=> {
    
    if(e.keyCode === 13){
    
    calcGrid();}})



function calcGrid(){
    let oneSide = document.getElementById("sizeInput").value
    pixelCount = oneSide*oneSide;
    container.style.maxWidth = oneSide * 20 + 'px';
    generateGrid()
    



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
    p.addEventListener("mouseover",() => {
        p.classList.add("pen");})
    }
    )}
    
    