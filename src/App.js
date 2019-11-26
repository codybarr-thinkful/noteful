import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import NotePage from './pages/NotePage'

import data from './assets/data'

class App extends Component {
	state = {
		...data
	}

	render() {
		return (
			<>
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
			</>
		)
	}
}

export default App
