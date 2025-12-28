const container = document.querySelector("#container");
container.setAttribute("style","display: flex; flex-direction: column; justify-content: center; align-items: center")

for (let j = 0; j < 16; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id","row"+j.toString());
    row.style.display = "flex";

    for (let i = 0; i < 16; i++) {
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
}