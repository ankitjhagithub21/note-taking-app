const noteForm = document.getElementById('noteForm')
const notesContainer = document.getElementById('notesContainer')
const titleInput = document.getElementById('title')
const descInput = document.getElementById('desc')

noteForm.addEventListener('submit', (e)=>{
    e.preventDefault()
   
    submitForm(titleInput.value,descInput.value)

})


const submitForm = async(title,desc) =>{
    try{
        const res = await fetch("/api/notes/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,desc})
        })
        const data = await res.json()

        if(data.success){
            displayNote(data.note)
            titleInput.value = ""
            descInput.value = ""
        }else{
            alert(data.message)
        }
    }catch(error){
        console.log(error)
    }
}
const displayNote= (note) =>{
    const noteElement = document.createElement('div')
    noteElement.className = 'p-2 lg:w-1/3 md:w-1/2 w-full';
    noteElement.innerHTML = `<div class="p-3 rounded-lg shadow-lg bg-zinc-700">
    
    <h3 class="text-xl font-bold">${note.title}</h3>
    <p>${note.desc}</p>
    
    </div>
    `;
    notesContainer.appendChild(noteElement)
}

const fetchNotes = async() =>{
    try{
        const res = await fetch(`/api/notes`)
        const data = await res.json()

        if(data.success){
            data.notes.forEach((note)=>displayNote(note))
        }

    }catch(error){
        console.log(error)
    }
}

fetchNotes()