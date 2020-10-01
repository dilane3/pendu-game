import React, {useState} from 'react'

const LoginForm = (props) => {
	const [newPlayer, setNewPlayer] = useState('')

	const handleChange = (event) => {
		const value = event.target.value

		setNewPlayer(value)
	} 

	const handleSubmit = (event) => {
		event.preventDefault()

		if(newPlayer.length > 0) {
			console.log(newPlayer)
			props.onPlayerAdd(newPlayer)
		}else {
			alert('Le champ est vide')
		}
	}

	return (
		<form action="" onSubmit={handleSubmit} id="login-form">
			<div className="row body-login-items">
	      <div className="form-text">
	        <input type="text" name="username" id="name" placeholder="votre nom" className="form-control" onChange={handleChange} />
	      </div>
	      <div className="form-button">
	        <button type="submit" className="btn btn-success btn-block">Valider</button>
	      </div>
    	</div>
		</form>
	)
}

export default LoginForm