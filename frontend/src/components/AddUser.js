import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../utils";

const AddUser = () => {
  const [Judul, setJudul] = useState("");
  const [Isi, setIsi] = useState("");
  const navigate = useNavigate(); 

  const saveNotes = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`${BASE_URL}/add-Notes`, { 
        Judul, 
        Isi });
      navigate("/"); // gunakan navigate, bukan Navigate
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveNotes}>
          <div className='field'>
            <label className="label">Judul</label>
            <div className="control">
              <input 
                type="text" 
                className="input" 
                value={Judul} 
                onChange={(e) => setJudul(e.target.value)}
                placeholder='Judul' />
            </div>
          </div>
          <div className='field'>
            <label className="label">Isi</label>
            <div className="control">
              <input 
                type="text" 
                className="input" 
                value={Isi} 
                onChange={(e) => setIsi(e.target.value)}
                placeholder='Isi' />
            </div>
          </div>
          <div className='field'>
            <button type='submit' className='button is-success'>
                Save
                </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
