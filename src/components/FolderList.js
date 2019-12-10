import React, { useContext } from 'react'
import AppContext from '../appContext'

import { Link, NavLink } from 'react-router-dom'

function FolderList() {
	const { folders = [] } = useContext(AppContext)
	const folderList = folders.map(folder => (
		<li key={folder.id}>
			<NavLink to={`/folder/${folder.id}`} activeClassName="active">
				{folder.name}
			</NavLink>
		</li>
	))

	return (
		<aside>
			<h2>Folders</h2>
			<Link to="/add/folder">Add Folder +</Link>
			<nav>
				<ul>{folderList}</ul>
			</nav>
		</aside>
	)
}

export default FolderList
