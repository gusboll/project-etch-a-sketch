const container = document.querySelector(".container");
let divs = [];
//for (let i = 0; i<256; i++){
    //const div = document.createElement("div")
    //div.style.width = "25px";
    //div.style.height = "25px";
    //container.appendChild(div);
    //divs.push(div);
//}



//popup asking the number of squares per side of the new grid

const button = document.querySelector(".btn");
button.addEventListener("click", function(){
    const userWidth = prompt("Set your width");
    const userHeight = prompt("Set your height");
    let gridNumber = userWidth * userHeight;

    if (gridNumber === 0){
        alert("Invalid numbers, set your grid again")
        return;
    } else if (userWidth !== userHeight){
        alert("You grid may be distorted. If you do not want it to be distorted, you must set the same width and lenght");
    }

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



