import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../appContext'

function handleClick(noteId, cb) {
	fetch(`http://localhost:9090/notes/${noteId}`, {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json'
		}
	}).then(() => cb(noteId))
}

function NoteCard({ note }) {
	const { deleteNote = () => {} } = useContext(AppContext)

	return (
		<article>
			<h2>
				<Link to={`/note/${note.id}`}>{note.name}</Link>
			</h2>
			<p>Date modified on {note.modified}</p>
			<button onClick={() => handleClick(note.id, deleteNote)}>
				Delete Note
			</button>
		</article>
	)
}

export default NoteCard
