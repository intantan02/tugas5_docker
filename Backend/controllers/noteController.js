import Notes from "../models/noteModel.js";

// GET
async function getNotes(req, res) {
  try {
    const response = await Notes.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getNotesById = async(req, res) =>{
  try{
      const response = await Notes.findOne({
          where:{
              id: req.params.id
          }
      });
      res.status(200).json(response);
  } catch(error){
      console.log(error.message);
  }
}

// CREATE
async function createNotes(req, res) {
  try {
    const inputResult = req.body;
    await Notes.create(inputResult);
    res.status(201).json({ msg: "Note Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getNotes, createNotes};

export const updateNotes = async(req, res)=>{
  try{
    const inputResult = req.body;
    await Notes.update(inputResult,{
      where : {
        id : req.params.id
      }
    })
    res.status(200).json({msg:"Note berhasil diupdate"});
  }catch(error){
    console.log(error.message);
  }}

export const deleteNotes = async(req, res)=>{
  try{
    await Notes.destroy({
      where:{
        id: req.params.id
      }
    });
    res.status(200).json({msg:"Note berhasil dihapus"})
  } catch(error){
    console.log(error.message)
  }
}
