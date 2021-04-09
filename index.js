function getNoteId() {
    let noteObject = getExistingNotes();
    if (!noteObject) {
        return 1;
    }
    const keysArray = Object.keys(noteObject);
    const numberKeys = keysArray.map((key) => Number(key));
    console.log(numberKeys);
    return Math.max(...numberKeys) + 1;
}

function getExistingNotes() {
    let notes = localStorage.getItem('notes');
    if (!notes) {
        return null;
    }
    return JSON.parse(notes);
}
// read a list of all notes from local storage and return it
function getAllNotes() {
    let allNotes = JSON.parse(localStorage.getItem('notes'));
    if (!allNotes) {
        allNotes = [];
    }
    return allNotes; 
}