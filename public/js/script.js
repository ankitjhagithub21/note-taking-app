const noteForm = document.getElementById('noteForm')
const notesContainer = document.getElementById('notesContainer')
const titleInput = document.getElementById('title')
const descInput = document.getElementById('desc')
const testBtn = document.getElementById('testBtn')

noteForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm(titleInput.value, descInput.value)

})


const submitForm = async (title, desc) => {
    try {
        const res = await fetch("/api/notes/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, desc })
        })
        const data = await res.json()

        if (data.success) {
            displayNote(data.note)
            Swal.fire({
                title: "Good job!",
                text: "Note Added!",
                icon: "success"
              });
            titleInput.value = ""
            descInput.value = ""
        } else {
            alert(data.message)
        }
    } catch (error) {
        console.log(error)
    }
}
const displayNote = (note) => {
    const noteElement = document.createElement('div')
    noteElement.className = 'p-2 lg:w-1/3 md:w-1/2 w-full';
    noteElement.innerHTML = `<div class="p-3 rounded-lg shadow-lg bg-zinc-700">
    
    <h3 class="text-xl font-bold">${note.title}</h3>
    <p>${note.desc}</p>
    <button class="px-2 py-1 text-sm rounded-lg bg-red-500 delete-btn">Delete</button>
    <a class="px-2 py-1 text-sm rounded-lg bg-blue-500 edit-btn" href="/note/${note._id}">Edit</a>
    </div>
    `;

    notesContainer.appendChild(noteElement)

    noteElement.querySelector('.delete-btn').addEventListener('click', () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteNote(note._id, noteElement);
            }
        });

    });


}

const deleteNote = async (id, noteElement) => {
    try {
        const res = await fetch(`/api/notes/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();

        if (data.success) {
            notesContainer.removeChild(noteElement);
            Swal.fire({
                title: "Deleted!",
                text: "Your note has been deleted.",
                icon: "success"
            });
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.log(error);
    }
};



const fetchNotes = async () => {
    
    try {
        const res = await fetch(`/api/notes`)
        const data = await res.json()

        if (data.success) {
            data.notes.forEach((note) => displayNote(note))
        }

    } catch (error) {
        console.log(error)
    }
}

fetchNotes()