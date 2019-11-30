import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import NoteCard from './NoteCard'

import AppContext from '../appContext'

function NotesList() {
	const { notes = [] } = useContext(AppContext)
	const { folderId } = useParams()

	const filteredNotes = folderId
		? notes.filter(note => note.folderId === folderId)
		: notes

	const noteCards = filteredNotes.map(note => (
		<NoteCard key={note.id} note={note} />
	))

	return <>{noteCards}</>
}

export default NotesList
