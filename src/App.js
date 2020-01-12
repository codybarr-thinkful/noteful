import React, { Component } from 'react'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import config from './config'

import './App.css'

import Home from './pages/Home'
import AddFolder from './pages/AddFolder'
import AddNote from './pages/AddNote'
import NotePage from './pages/NotePage'

import ErrorBoundary from './components/ErrorBoundary'

import AppContext from './appContext'

class App extends Component {
	state = {
		folders: [],
		notes: [],
		addFolder: () => {},
		addNote: () => {},
		deleteNote: () => {}
	}

	fetchFolders() {
		fetch(`${config.API_ENDPOINT}/folder`)
			.then(res => res.json())
			.then(resJSON => this.setState({ folders: resJSON }))
			.catch(err => {
				console.log(err)
			})
	}

	fetchNotes() {
		fetch(`${config.API_ENDPOINT}/note`)
			.then(res => res.json())
			.then(resJSON => this.setState({ notes: resJSON }))
			.catch(err => {
				console.log(err)
			})
	}

	addFolder = folderName => {
		fetch(`${config.API_ENDPOINT}/folder`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name: folderName })
		})
			.then(res => res.json())
			.then(resJSON => {
				const newFolders = [...this.state.folders, resJSON]
				this.setState({ folders: newFolders })

				this.props.history.push('/')
			})
			.catch(err => {
				console.log(err)
			})
	}

	addNote = note => {
		fetch(`${config.API_ENDPOINT}/note`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(note)
		})
			.then(res => res.json())
			.then(newNote => {
				console.log({ newNote })
				const newNotes = [...this.state.notes, newNote]
				this.setState({ notes: newNotes })

				this.props.history.push('/')
			})
			.catch(err => {
				console.log(err)
			})
	}

	deleteNote = (noteId, cb) => {
		fetch(`${config.API_ENDPOINT}/note/${noteId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		}).then(() => {
			const newNotes = this.state.notes.filter(note => note.id !== noteId)
			this.setState({ notes: newNotes })
			cb && cb()
		})
	}

	componentDidMount() {
		this.fetchFolders()
		this.fetchNotes()

		this.setState({
			addFolder: this.addFolder,
			addNote: this.addNote,
			deleteNote: this.deleteNote
		})
	}

	render() {
		console.log({ env: process.env })
		return (
			<AppContext.Provider value={this.state}>
				<header>
					<h1>
						<Link to="/">Noteful</Link>
					</h1>
				</header>
				<div className="wrapper">
					<Switch>
						<Route exact path={['/', '/folder/:folderId']}>
							<ErrorBoundary message="Failed to load the home page">
								<Home />
							</ErrorBoundary>
						</Route>
						<Route exact path="/add/folder">
							<ErrorBoundary message="Could not load Add Folder page">
								<AddFolder />
							</ErrorBoundary>
						</Route>
						<Route exact path="/add/note">
							<ErrorBoundary message="Failed to load the home page">
								<AddNote />
							</ErrorBoundary>
						</Route>
						<Route exact path="/note/:noteId">
							<ErrorBoundary message="Failed to load note">
								<NotePage />
							</ErrorBoundary>
						</Route>
					</Switch>
				</div>
			</AppContext.Provider>
		)
	}
}

export default withRouter(App)
