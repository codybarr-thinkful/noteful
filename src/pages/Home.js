import React from 'react'
import FolderList from '../components/FolderList'
import NotesList from '../components/NotesList'

function Home() {
	return (
		<>
			<FolderList />
			<main>
				<NotesList />
			</main>
		</>
	)
}

export default Home
