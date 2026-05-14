"use strict";
let notes = [];
//Add note
function addNote() {
    let input = document.getElementById("noteInput");
    let note = input.value;
    if (note !== "") {
        notes.push(note);
        input.value = "";
        displayNotes();
    }
}
function displayNotes() {
    let list = document.getElementById("noteList");
    list.innerHTML = "";
    notes.forEach((note, index) => {
        list.innerHTML += `
        <li>
            ${note}
            <button onclick="deleteNote(${index})">Delete</button>
        </li>
        `;
    });
}
//Delete note
function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}
window.addNote = addNote;
window.deleteNote = deleteNote;
