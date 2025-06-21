const notesContainer = document.getElementById('notesContainer');
const notes = JSON.parse(localStorage.getItem('notes')) || [];

notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = 'note';

    noteElement.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <button onclick="deleteNote(${index}, event)"><img src="../assets/trash_icon.png" alt="Hapus"></button>
    `;

    noteElement.addEventListener('click', (event) => {
        if (!event.target.closest('button')) { // Prevent triggering on button click
            window.location.href = `../pages/create.html?index=${index}`;
        }
    });

    notesContainer.appendChild(noteElement);
});

function deleteNote(index, event) {
    event.stopPropagation(); // Prevent the parent click event
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    window.location.reload();
}
