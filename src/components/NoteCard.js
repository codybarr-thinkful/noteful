import React from 'react'
import { Link } from 'react-router-dom'

function NoteCard({ note }) {
	return (
		<article>
			<h2>
				<Link to={`/note/${note.id}`}>{note.name}</Link>
			</h2>
			<p>Date modified on {note.modified}</p>
		</article>
	)
}

export default NoteCard
