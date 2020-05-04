import React, { Component } from "react"
import "./resources/styles.css"
import Header from "./components/Header"

class App extends Component {
	render() {
		return (
			<div className="App" style={{ height: "150vh", backgroundColor: "cornFlowerBlue" }}>
				<Header />
			</div>
		)
	}
}

export default App
