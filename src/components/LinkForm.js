import React, { useState } from 'react'

export default function LinkForm() {

  const initialStateValues = ({
    url: '',
    name: '',
    description: '',
  })
  const [values, setValues] = useState(initialStateValues)

  const handleInputChange = e => {
    const { name, value } = e.target
    // console.log(e.target.value);
    // console.log(name, value);
    setValues({...values, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(values);
  }

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <div className="material-icons">insert_link</div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://someurl.com"
          name="url"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <div className="material-icons">create</div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Website name"
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          className="form-control"
          placeholder="Write a description"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block">
        Save
      </button>
    </form>
  );
}
