import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import AppContext from '../appContext'

function NotePage() {
	const { notes = [] } = useContext(AppContext)
	const { noteId } = useParams()
	const history = useHistory()

	const note = notes.find(note => note.id === noteId) || {}
	console.log(note)

	return (
		<>
			<aside>
				<button onClick={() => history.goBack()}>Go back</button>
			</aside>
			<main>
				{note.name ? (
					<>
						<h2>{note.name}</h2>
						<p>{note.content}</p>
					</>
				) : (
					<p>no note here</p>
				)}
			</main>
		</>
	)
}

export default NotePage
