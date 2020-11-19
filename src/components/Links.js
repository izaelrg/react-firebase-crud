import React, { useEffect, useState } from 'react'
import LinkForm from "./LinkForm";
import { db } from "../firebase";


export default function Links() {

  const [links, setLinks] = useState([])

  const addOrEditLink = async (linkObject) => {
    // console.log('new task');

    // Conjunto de datos llamado links
    // .doc genera un nuevo documento con un id unico
    // .set guarda los datos que vienen de linkObject
    await db.collection('links').doc().set(linkObject)
    console.log('nueva tarea agregada');
  }

  const getLinks = async () => {
    // Obtener todos los datos de firebase
    // Con onSnapshot obtiene los datos cada que que hay una actualizacion en el db firebase
    db.collection('links').onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach(doc => {
        // console.log(doc.data());
        docs.push({...doc.data(), id:doc.id})
      })
      console.log(docs);
      setLinks(docs)
    })
  }

  useEffect(() => {
    // Cada que carga la aplicación obtenemos los siguientes datos
    console.log('obteniendo datos...');
    getLinks()
  }, [])

  return (
    <>
      <div className="col-md-4 p-2">
        <LinkForm addOrEditLink={addOrEditLink} />
      </div>
      <div className="col-md-8 p-2">
        {/* Recorre links */}
        {links.map(link => (
          <div className="card mb-1">
            <div className="card-body">
              <h4>{link.name}</h4>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">Go to website</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
