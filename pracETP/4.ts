let notes: string[]=[]

//Add note
function addNote(): void{
    let input = document.getElementById("noteInput") as HTMLInputElement
    let note: string= input.value;

    if(note!==""){
        notes.push(note);
        input.value="";
        displayNotes();
    }
}


function displayNotes(): void {

    let list = document.getElementById("noteList") as HTMLUListElement;

    list.innerHTML = "";

    notes.forEach((note: string, index: number) => {

        list.innerHTML += `
        <li>
            ${note}
            <button onclick="deleteNote(${index})">Delete</button>
        </li>
        `;

    });
}


//Delete note
function deleteNote(index: number): void {
    notes.splice(index, 1);
    displayNotes();
}

(window as any).addNote = addNote;
(window as any).deleteNote = deleteNote;