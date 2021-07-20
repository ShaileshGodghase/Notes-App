// WHEN USER ADDS A NOTE ADD TO LOCAL STORAGE
displayNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
    let addText = document.getElementById('new-note');
    let notes = localStorage.getItem('notes');
    
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addText.value = "";
    const styles = {
        "font-family": "Ubuntu,sans-serif",
        "color": "#FFD523",
        "padding": "15px 0" 
    };
    let obj = document.getElementById("note-added");
    obj.innerText = "Note Added Successfully";
    Object.assign(obj.style, styles);
    displayNotes();
})

function displayNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element,index){
        html = html + `<div class="card-body">
            <h5>Note ${index + 1}</h5>
            <p>${element}</p>
            <button id="${index}" class="del-btn" onclick="deleteNote(this.id)"> Delete</button>
        </div>`;
    });
    let noteselem = document.getElementById('notes');
    if(notesObj.length !=0)
    {
        noteselem.innerHTML = html;
    }
    else{
        noteselem.innerHTML = `<h1 class="no-notes">Your Notes Will Appear Here.....!<h1>`;
    }
}

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    displayNotes();
}

let search = document.getElementById('search');
search.addEventListener("input", function(){
    let inputval = search.value;
    let card_body = document.getElementsByClassName('card-body');
    Array.from(card_body).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval))
        {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})


function thank(){
    let thank = document.getElementById('thank');
    thank.innerText =  "Thank You For Message...."
}