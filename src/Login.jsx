import React from 'react'
import LoginForm from './LoginForm'

const Login = ({onChangePlayer}) => {
	return (
		<div className="container" id="login-interface">
      <div className="row">
        <div className="form-login">
          <div className="card login-block">
            <div className="card-header header-card">
              <div className="row header-login-items">
                <div className="header-logo"></div>
                <div className="header-content">
                  <span>
                    {"Bienvenue sur notre interface d'inscription."}
                  </span>
                  <span>
                    Nous vous prions de nous fournir votre nom de joueur afin de profiter de notre jeu 
                    <span className="name-game">PENDU</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <LoginForm onPlayerAdd={onChangePlayer}/>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Login