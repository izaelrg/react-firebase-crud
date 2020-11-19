import React from 'react'
import LinkForm from "./LinkForm";
import { db } from "../firebase";


export default function Links() {

  const addOrEditLink = async (linkObject) => {
    // console.log('new task');

    // Conjunto de datos llamado links
    // .doc genera un nuevo documento con un id unico
    // .set guarda los datos que vienen de linkObject
    await db.collection('links').doc().set(linkObject)
    console.log('nueva tarea agregada');
  }

  return (
    <>
      <LinkForm addOrEditLink={addOrEditLink} />
    </>
  )
}
