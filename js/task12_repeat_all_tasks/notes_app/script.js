let notesApp = document.querySelector('.notesApp');
let createBtn = document.querySelector('#createBtn');

createBtn.addEventListener('click', addNote);

if (localStorage.getItem('appleNotes') != null) {
    showNotes();    
}

function showNotes(){
    notesApp.innerHTML = localStorage.getItem('appleNotes');
}

function updateStorage(){
    localStorage.setItem('appleNotes', notesApp.innerHTML);
}

function addNote(){
    const note = document.createElement('p');
    note.setAttribute('contenteditable','true');
    note.className = 'inputBox';
    const img = document.createElement('img');
    img.src = './delete.png';
    img.setAttribute('id','deleteBtn');
    notesApp.appendChild(note).appendChild(img);

}

notesApp.addEventListener('click',(e)=>{
    const check = e.target;
    if (check.tagName === 'IMG') {
        if (confirm("Are you sure?")) {
            check.parentElement.remove();
            updateStorage();
        }
    }
    else if (check.tagName === 'P') {
        let inputBox = document.querySelectorAll('.inputBox');
        inputBox.forEach(note => {
            note.onkeyup = ()=>{
                updateStorage();
            }
        });
    }
})

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})
