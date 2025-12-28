const container = document.querySelector("#container");
container.setAttribute("style","display: flex; flex-direction: column; justify-content: center; align-items: center")

for (let j = 0; j < 16; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id","row"+j.toString());
    row.style.display = "flex";

    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.setAttribute("style", "border-style: solid; border-color: black; border-width: 1px; height: 30px; width: 30px");
        square.classList.add("square");
        square.setAttribute("id","square"+(i+j*6).toString());
        row.appendChild(square);
    }
    container.appendChild(row);
}