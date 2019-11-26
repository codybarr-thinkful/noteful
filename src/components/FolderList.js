import React from 'react'
import { NavLink } from 'react-router-dom'

import data from '../assets/data'

function FolderList() {
	const { folders } = data

	const folderLinks = folders.map(folder => (
		<li key={folder.id}>
			<NavLink to={`/folder/${folder.id}`} activeClassName="active">
				{folder.name}
			</NavLink>
		</li>
	))

	return (
		<aside>
			<nav>
				<ul>{folderLinks}</ul>
			</nav>
		</aside>
	)
}

export default FolderList
