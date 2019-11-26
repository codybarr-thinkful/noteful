import React from 'react'
import { useParams } from 'react-router-dom'

import NoteCard from './NoteCard'

import data from '../assets/data'

function NotesList() {
	const { notes } = data
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
