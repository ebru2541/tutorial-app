// Child'lar arası güncelleme istiyoruz. Global State ile bunu yapabiliriz. Lokal olarak da state ve prop'larla yapılır.
// Lifting State Up: Ortak olan State'leri yukarı taşıyoruz. (Tutorials, getTutorial)
// Child'larda lazım olan state'leri de prop vasıtasıyla aşağı gönderiyoruz.
// State'i güncelleyen fonksiyonu prop aracılığıyla child'lara gönderiyoruz. Bu fonksiyonu aşağıda kullandığımızda state güncellendiği için child'daki state de güncellenmiş oluyor.



import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutorial = { title, description };
    console.log(newTutorial);
    postTutorial(newTutorial);
    setTitle("");
    setDescription("");
  };

  const postTutorial = async (newTutorial) => {
    try {
      const BASE_URL =
        "https://tutorial-api.fullstack.clarusway.com/tutorials/";
      await axios.post(BASE_URL, newTutorial);
    } catch (err) {
      console.log(err);
    }
    getTutorials();
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default AddTutorial;
