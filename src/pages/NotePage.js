import React from 'react'
import { useParams } from 'react-router-dom'

import data from '../assets/data'

function NotePage() {
	const { notes } = data
	const { noteId } = useParams()

	const note = notes.find(note => note.id === noteId)
	console.log(note)

	return (
		<>
			<aside>Go back</aside>
			<main>
				<h2>{note.name}</h2>
				<p>{note.content}</p>
			</main>
		</>
	)
}

export default NotePage
