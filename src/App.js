import React, {useState} from 'react'
import Login from './Login'
import Pendu from './Pendu'
import $ from 'jquery'

const App = () => {
	const [player, setPlayer] = useState('')

	const handleAdd = (username) => {
		setPlayer(username)

		$(document).ready(function(){
			const $login_success = $('#login-success'),
            $Continuer = $('#continuer'),
            $login_interface = $('#login-interface'),
            $pendu_interface = $('#pendu-interface')

      $login_success.modal()

      $Continuer.click(function() {
        $login_interface.addClass('d-none')
        $pendu_interface.removeClass('d-none')
      })
		})

	}

	return (
		<div className="App">

			{/*here we have modal component*/}
			<div className="modal fade" id="login-success">
    		<div className="modal-dialog" role="document">
    			<div className="modal-content">
    			<div className="modal-body login-modal-body">
    				<button className="close" data-dismiss="modal">
    					<span aria-hidden="true">&times;</span>
    				</button>
    				<p>
    					Votre nom a bien ete enregistre !<br/>
    					Cliquer sur <b>Continuer</b> pour enfin commencer a jouer a notre Jeu !
    				</p>
    			</div>
    			<div className="modal-footer">
    				<button className="btn btn-outline-danger disabled" data-dismiss="modal">Annuler</button>
    				<button className="btn btn-outline-primary" id="continuer" data-dismiss="modal">Continuer</button>
    			</div>
    			</div>
    		</div>
    	</div>

			{/*Interface accueillant les nouveux joueur et demandant leur noms*/}
      <Login 
        handleAdd={handleAdd}
      />

      {/*Interface de jeu*/}
      <Pendu 
        player={player}
      />
    </div>
	)
}

export default App
