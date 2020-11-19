import React, { useState } from 'react'

export default function LinkForm(props) {

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

    // borra los datos de los inputs
    setValues({...values, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(values);
    props.addOrEditLink(values)

    setValues({...initialStateValues})
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
          value={values.url}
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
          value={values.name}
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
          value={values.description}
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block">
        Save
      </button>
    </form>
  );
}
