const container = document.querySelector("#container");
container.setAttribute("style","display: flex; flex-direction: column; justify-content: center; align-items: center; border: solid; width:min-content;align-self:center")

function createGrid(size)
    {let pixels = Math.floor(480 / size)
    for (let j = 0; j < size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("id","row"+j.toString());
        row.style.display = "flex";

        for (let i = 0; i < size; i++) {
            let square = document.createElement("div");
            square.setAttribute("style", "border-style: solid; background-color: black; height: 30px; width: 30px; opacity: 0.0");
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

createGrid(16)