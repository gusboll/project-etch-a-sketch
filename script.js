const container = document.querySelector(".container");
let divs = [];

//button 0
const button = document.querySelector(".btn");
button.addEventListener("click", function(){
    const userWidth = prompt("Set your width");
    const userHeight = prompt("Set your height");
    let gridNumber = userWidth * userHeight;

//checks if the user input was in the limits below
    if (gridNumber === 0){
        alert("Invalid numbers, set your grid again")
        return;
    } else if (userHeight >=100){
        alert("Impossible to generate a grid bigger than 99x99, please set the measures again");
        gridNumber = 0
    } else if (userWidth >= 100){
        alert("Impossible to generate a grid bigger than 99x99, please set the measures again");
        gridNumber = 0
    } else if (userWidth !== userHeight){
        alert("You grid may be distorted. If you do not want it to be distorted, you must set the same width and lenght");
    }

//after the button and the checking, sets and executes the function
    function setGrid(){
        container.innerHTML = "";
        divs = [];
        const baseWidthPercent = 100 / userWidth;

        for (let i = 0; i<gridNumber; i++){
            const div = document.createElement("div");
            div.style.flexBasis = `${baseWidthPercent}%`;
            div.style.aspectRatio = "1 / 1";
            container.appendChild(div);
            divs.push(div);
        }
        divs.forEach(function(div){
            div.addEventListener("mouseover", function(){
                div.style.backgroundColor = "black";
            })
        })
    }
    setGrid();
})

//button 1
const button1 = document.querySelector(".btn1");
button1.addEventListener("click", function(){
    const userWidth1 = prompt("Set your width");
    const userHeight1 = prompt("Set your height");
    let gridNumber1 = userWidth1 * userHeight1;

//checks if the user input was in the limits below
    if (gridNumber1 === 0){
        alert("Invalid numbers, set your grid again")
        return;
    } else if (userHeight1 >=100){
        alert("Impossible to generate a grid bigger than 99x99, please set the measures again");
        gridNumber = 0
    } else if (userWidth1 >= 100){
        alert("Impossible to generate a grid bigger than 99x99, please set the measures again");
        gridNumber = 0
    } else if (userWidth1 !== userHeight1){
        alert("You grid may be distorted. If you do not want it to be distorted, you must set the same width and lenght");
    }
 
//after the button and the checking, sets and executes the function of colored grid
    function setGridColored(){
        container.innerHTML = "";
        divs = [];
        const baseWidthPercent1 = 100 / userWidth1;

        for (let i = 0; i<gridNumber1; i++){
            const div = document.createElement("div");
            div.style.flexBasis = `${baseWidthPercent1}%`;
            div.style.aspectRatio = "1 / 1";
            container.appendChild(div);
            divs.push(div);
        }
        divs.forEach(function(div){
            div.addEventListener("mouseover", function(){
                let symbols = "0123456789ABCDEF";
                let color = "#";
                for (let i = 0; i<6;i++){
                    color += symbols[Math.floor(Math.random() * 16)];
                }
                div.style.backgroundColor = color;
                //div.style.backgroundColor = "black";
            })
        })
    }
    setGridColored();
})


//button 2
const button2 = document.querySelector(".btn2");
button2.addEventListener("click", function(){
    const userWidth2 = prompt("Set your width");
    const userHeight2 = prompt("Set your height");
    let gridNumber2 = userWidth2 * userHeight2;

//checks if the user input was in the limits below
    if (gridNumber2 === 0){
        alert("Invalid numbers, set your grid again")
        return;
    } else if (userHeight2 >=100){
        alert("Impossible to generate a grid bigger than 99x99, please set the measures again");
        gridNumber = 0
    } else if (userWidth2 >= 100){
        alert("Impossible to generate a grid bigger than 99x99, please set the measures again");
        gridNumber = 0
    } else if (userWidth2 !== userHeight2){
        alert("You grid may be distorted. If you do not want it to be distorted, you must set the same width and lenght");
    }
 
//after the button and the checking, sets and executes the function of colored grid
    function setGridDarken(){
        container.innerHTML = "";
        divs = [];
        const baseWidthPercent2 = 100 / userWidth2;

        for (let i = 0; i<gridNumber2; i++){
            const div = document.createElement("div");
            div.style.flexBasis = `${baseWidthPercent2}%`;
            div.style.aspectRatio = "1 / 1";
            container.appendChild(div);
            divs.push(div);
        }
        divs.forEach(function(div){
            div.addEventListener("mouseover", function(){
                if (div.style.opacity <= 0.9){
                    div.style.opacity = +div.style.opacity + 0.1;
                }
                div.style.backgroundColor = "black";
            })
        })
    }
    setGridDarken();
})