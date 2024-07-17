const Note = require("../model/noteModel")

const addNote = async(req,res) =>{
    try{
        const note = new Note({
            title:req.body.title,
            desc:req.body.desc
        })

        await note.save()
        res.json({success:true,message:"Note added." ,note})

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const removeNote = async(req,res)=>{
    try{
        const noteId = req.params.id;

        const note = await Note.findByIdAndDelete(noteId)

        if(!note){
            return res.status(404).json({
                success:false,
                message:"Note not found."
            })
        }

        res.status(200).json({
            success:true,
            message:"Note deleted."
        })



    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

const updateNote = async(req,res)=>{
    try{

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

module.exports = {
    addNote,
    removeNote,
    updateNote
}