const container = document.querySelector("#container");
container.setAttribute("style","display: flex; flex-direction: column; justify-content: center; align-items: center; border: solid; width:min-content;align-self:center")

function createGrid(size)
    {let pixels = 500 / size
    container.replaceChildren();
    for (let j = 0; j < size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("id","row"+j.toString());
        row.style.display = "flex";

        for (let i = 0; i < size; i++) {
            let square = document.createElement("div");
            square.setAttribute("style", "background-color: black; height: "+ pixels +"px; width: "+pixels+"px; opacity: 0.0");
            square.classList.add("square");
            square.setAttribute("id","square"+(i+j*6).toString());
            square.addEventListener("mouseenter", (e) => {
                let opacity = square.style.opacity;
                square.style.opacity = Number(opacity) + 0.1;
                /*square.style.backgroundColor = "black";*/
            })
            row.appendChild(square);
        }
        container.appendChild(row);
    }}

button = document.querySelector("#button")
button.addEventListener("click", (e) => {
    let size = prompt("Enter grid size:")
    if (size > 100 || size <= 0 || size % 1 != 0) {
        alert("invalid number.")
    }
    else {
        createGrid(size)
    }
})
createGrid(16)