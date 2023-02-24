import React, { useState } from "react";

const EditTutorial = ({ edit, tutorials,addTutorials }) => {
    const [titleModal, setTitleModal] = useState("")
    const [descModal, setDescModal] = useState("")
  console.log(edit);
  console.log(tutorials);
  const handleTitle = (e) => {
    setTitleModal(e.target.value)
  };
  const handleDesc = (e) => {
    setDescModal(e.target.value)
  };

  return (
    <div className="modal" tabindex="-1" id="edit-tutor">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Tutorial</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="m-3">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic">
                Title
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Title"
                aria-describedby="basic"
                onChange={handleTitle}
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Description
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Description"
                aria-describedby="basic-addon1"
                onChange={handleDesc}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
