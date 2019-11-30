import React, { useContext } from 'react'
import AppContext from '../appContext'

import { NavLink } from 'react-router-dom'

function FolderList() {
	const { folders = [] } = useContext(AppContext)

	const folderLinks =
		folders.map(folder => (
			<li key={folder.id}>
				<NavLink to={`/folder/${folder.id}`} activeClassName="active">
					{folder.name}
				</NavLink>
			</li>
		)) || null

	return (
		<aside>
			<nav>
				<ul>{folderLinks}</ul>
			</nav>
		</aside>
	)
}

export default FolderList
