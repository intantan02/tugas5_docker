import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from "../utils";

const EditNotes = () => {
  const [Judul, setJudul] = useState("");
  const [Isi, setIsi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getNotesById = useCallback(async () => {
    try {
      console.log("Fetching data for ID:", id);
      const response = await axios.get(`${BASE_URL}/Notes/${id}`);
      setJudul(response.data.Judul || ""); 
      setIsi(response.data.Isi || "");
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  }, [id]);

  useEffect(() => {
    getNotesById();
  }, [getNotesById]);

  const UpdateNotes = async (e) => {
    e.preventDefault();
    if (!Judul.trim() || !Isi.trim()) {
      alert("Judul dan Isi tidak boleh kosong!");
      return;
    }
    
    try {
      console.log("Updating note with ID:", id);
      const response = await axios.patch(`${BASE_URL}/edit-Notes/${id}`, { Judul, Isi });

      console.log("Response dari server:", response);
      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("Gagal mengupdate catatan, kode status:", response.status);
      }
    } catch (error) {
      console.error("Gagal mengupdate data:", error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className="title">Edit Catatan</h1>
        <form onSubmit={UpdateNotes}>
          <div className="field">
            <label className="label">Judul</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Isi</label>
            <div className="control">
              <textarea
                className="textarea"
                value={Isi}
                onChange={(e) => setIsi(e.target.value)}
                placeholder="Isi catatan"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
            <button type="button" className="button is-light ml-2" onClick={() => navigate("/")}>
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNotes;
