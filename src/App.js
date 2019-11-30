import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import NotePage from './pages/NotePage'

import AppContext from './appContext'

class App extends Component {
	state = {
		folder: [],
		notes: []
	}

	fetchFolders() {
		fetch(`http://localhost:9090/folders`)
			.then(res => res.json())
			.then(resJSON => this.setState({ folders: resJSON }))
			.catch(err => {
				console.log(err)
			})
	}

	fetchNotes() {
		fetch(`http://localhost:9090/notes`)
			.then(res => res.json())
			.then(resJSON => this.setState({ notes: resJSON }))
			.catch(err => {
				console.log(err)
			})
	}

	deleteNote = noteId => {
		console.log(`Note deleted ${noteId}`)

		const newNotes = this.state.notes.filter(note => note.id !== noteId)
		this.setState({ notes: newNotes })
	}

	componentDidMount() {
		this.fetchFolders()
		this.fetchNotes()
	}

	render() {
		const contextValue = {
			...this.state,
			deleteNote: this.deleteNote
		}
		return (
			<AppContext.Provider value={contextValue}>
				<header>
					<h1>
						<Link to="/">Noteful</Link>
					</h1>
				</header>
				<div className="wrapper">
					<Switch>
						<Route exact path={['/', '/folder/:folderId']}>
							<Home />
						</Route>
						<Route exact path="/note/:noteId">
							<NotePage />
						</Route>
					</Switch>
				</div>
			</AppContext.Provider>
		)
	}
}

export default App
