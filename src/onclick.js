/*function addTask(){
    const container = document.getElementById("main");
    const form = document.createElement("form");
    form.innerHTML=`
        <input type="text" id="reminder" name="reminder"><br>
        <div>
            <button class="add">Add</button>
            <button class="cancel">Cancel</button>
        </div>
        `;

    container.appendChild(form);   
}; */

function addProject(){
    const box = document.getElementById("sidebar");
    const next = document.createElement("div");
    next.classList.add("next");
    /*next.innerHTML = `
        <input type="text" id="reminder" name="reminder" id="newProject"><br>
        <nav>
            <button id="add">Add</button>
            <button id="cancel" type="submit">Cancel</button>
        </nav>  
    `;*/

    next.insertAdjacentHTML('beforeend', ` <input type="text" id="reminder" name="reminder" id="newProject"><br>
        <nav>
            <button id="add">Add</button>
            <button id="cancel" >Cancel</button>
        </nav> 
        `);
    box.appendChild(next);
    addOrRemove();
};

function projectListener(){
    const click = document.getElementById("newProj");
    click.addEventListener("click", function(){
        addProject()
    });
};

function addOrRemove(){
    const green = document.getElementById("add");
    const red = document.getElementById("cancel");
    const form = document.querySelector(".next");
    const box = document.getElementById("sidebar");


   green.addEventListener("click", function(){
        console.log("!!!");
        const val = document.getElementById("newProject");
        console.log(val.value);
        const project = document.createElement("div");
        project.innerHTML = `
            <div><p>${val}</p></div>
            `;
        box.appendChild(project);        

    }); 

    red.addEventListener("click", function(){
        box.remove(form);
    });
};

export default projectListener;