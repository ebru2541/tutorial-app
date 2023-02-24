import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ tutorials, getTutorials }) => {
  const [edit, setEdit] = useState(false);
  // const tutorials = [
  //   {
  //     id: 1,
  //     title: "JS",
  //     description: "JS is a programming language",
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     description: "JS library for UI design",
  //   },
  // ];

  const deleteTutorial = async (id) => {
    try {
      const BASE_URL = `https://tutorial-api.fullstack.clarusway.com/tutorials/${id}`;
      await axios.delete(BASE_URL);
    } catch (err) {
      console.log(err);
    }
    getTutorials();
  };

  const editTutorial = async ({ id, title, description }) => {
    setEdit(!edit);
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
    try {
      await axios.put(`${BASE_URL}/${id}/`, { title, description });
    } catch (error) {
      console.log(error);
    }
   
    getTutorials();
    addtutorials({id, title, description });
  };

const addtutorials = ({ id, title, description }) => {
  console.log(title);
  
};

  console.log(edit);
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-tutor"
                    onClick={() =>
                      editTutorial({
                        id: id,
                        title: title,
                        description: description,
                      })
                    }
                  />

                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial
        edit={edit}
        tutorials={tutorials}
       addtutorials={addtutorials}
      />
    </div>
  );
};

export default TutorialList;
