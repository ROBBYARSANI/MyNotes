const noteForm = document.getElementById('noteForm');
const urlParams = new URLSearchParams(window.location.search);
const noteIndex = urlParams.get('index');
const notes = JSON.parse(localStorage.getItem('notes')) || [];

if (noteIndex !== null) {
    const note = notes[noteIndex];
    if (note) {
        document.getElementById('noteIndex').value = noteIndex;
        document.getElementById('noteTitle').value = note.title;
        document.getElementById('noteContent').value = note.content;
    }
}

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const index = document.getElementById('noteIndex').value;
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;

    const note = { title, content };

    if (index) {
        notes[parseInt(index)] = note;
    } else {
        notes.push(note);
    }

    localStorage.setItem('notes', JSON.stringify(notes));
    window.location.href = '../index.html';
});
