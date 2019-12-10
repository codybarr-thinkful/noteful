import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import AppContext from '../appContext'

function NoteCard({ note }) {
	const { deleteNote = () => {} } = useContext(AppContext)

	function handleClick(noteId) {
		fetch(`http://localhost:9090/notes/${noteId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		}).then(() => deleteNote(noteId))
	}

	return (
		<article>
			<h2>
				<Link to={`/note/${note.id}`}>{note.name}</Link>
			</h2>
			<p>Date modified on {note.modified}</p>
			<button onClick={() => handleClick(note.id)}>Delete Note</button>
		</article>
	)
}

NoteCard.propTypes = {
	note: PropTypes.object.isRequired
}

export default NoteCard
