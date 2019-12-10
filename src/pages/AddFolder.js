import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AppContext from '../appContext'

function AddFolder() {
	const history = useHistory()
	const { addFolder = () => {} } = useContext(AppContext)

	function handleSubmit(e) {
		e.preventDefault()
		addFolder(e.target.folder.value)
	}

	return (
		<>
			<aside>
				<button onClick={() => history.goBack()}>Go Back</button>
			</aside>
			<main>
				<form onSubmit={e => handleSubmit(e)}>
					<input
						type="text"
						aria-label="folder name"
						placeholder="folder name"
						name="folder"
					/>
					<button type="submit">Add Folder</button>
				</form>
			</main>
		</>
	)
}

export default AddFolder
