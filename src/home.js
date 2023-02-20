import projectListener from "./onclick";

const buildHome = function(){
    const content = document.getElementById("content");
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.innerHTML = `
            <div id="header">
                <h2>todo.list</h2>
                <img src="../src/photos/addwhite.png" alt="">
            </div>
            <div id="sidebar">
                <div><img src="../src/photos/box.png" alt=""><p>Inbox</p></div>
                <div><img src="../src/photos/day.png" alt=""><p>Today</p></div>
                <div><img src="../src/photos/week.png" alt=""><p>This Week</p></div>
                <h3>Projects</h3>
                <div><img src="../src/photos/add.png" alt=""><p id="newProj">Add project</p></div>
            </div>
            <div id="main">
                <h1 id="heading">Today</h1>
            </div>
    `
    content.appendChild(grid);

    projectListener();

    };
    
    export default buildHome;