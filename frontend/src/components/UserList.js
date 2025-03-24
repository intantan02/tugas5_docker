import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../utils";

const UserList = () => {
  const [Notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get(`${BASE_URL}/Notes`);
    setNotes(response.data);
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/Notes/${id}`);
      getNotes(); // Perbarui daftar setelah delete
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to="add" className="button is-success">Add New</Link>
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Isi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Notes.map((note, index) => (
              <tr key={note.id}>
                <td>{index + 1}</td>
                <td>{note.Judul}</td>
                <td>{note.Isi}</td>
                <td>
                  <Link to={`edit/${note.id}`} className='button is-small is-info'>Edit</Link>
                  <button 
                    onClick={() => deleteNote(note.id)} 
                    className='button is-small is-danger'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
