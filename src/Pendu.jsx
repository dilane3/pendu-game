import React, {useState, useEffect} from 'react'
import Counter from './Counter'
import Lettre from './Lettre'
import mots, {useLibrairieLettres} from './Mots'
import MotCache from './MotCache'
import $ from 'jquery'

const Pendu = (props) => {

	const [counter, setCounter] = useState(59)
	const [motMask, setMotMask] = useState([])
	const [motChoisi, setMotChoisi] = useState([])
	const [lettres, setLettres] = useLibrairieLettres()

	const handleGenerateWord = () => {
		$(document).ready(function() {
			const $letters = $('.lettre > img')

			//on rend accessible les touches representant les lettres
			$letters.addClass('hover')

			$letters.removeClass('win')
			$letters.removeClass('lost')
		})

		const words = mots.slice()

		const index = Math.floor(Math.random()*words.length)
		let word = words[index]

		let i = 0
		const mot1 = []
		const mot2 = []

		for(i; i < word.length; i++) {
			lettres.forEach(lettre => {
				if(lettre.nom === word[i]) {
					mot1[i] = {id: lettre.id, nom: lettre.nom, url: lettre.url}
					mot2[i] = {id: lettre.id, id_mot: i, nom: '*', url: './lettres/unknow.png'}
				}
			})
		}

		setMotMask(mot2)
		setMotChoisi(mot1)
		props.onResumeScore(props.player)
	}

	const handleClickLettre = (id) => {
		$(document).ready(function(){
			//copie du tableau des lettres
			const letters = lettres.slice()

			//recuperation du mot masquer
			const mot = motMask.slice()

			//selection des elements du DOM
			const $letter = $('#letter-' + id)
			let count = 0

			//on parcours les lettres du mot cache et on compare avec la lettre clique
			mot.find(letter => {
				if(letter.id == id) {
					letter.url = $letter.attr('src')
					letter.nom = $letter.attr('alt')

					$letter.removeClass('hover')
					$letter.addClass('win')
				}else {
					count++

					$letter.removeClass('hover')
					$letter.addClass('lost')
				}
			})

			if(count === mot.length) {
				if(motMask !== []) {
					if(!$letter.hasClass('win') || !$letter.hasClass('lost')) {
						props.onChangeScore(props.player)
					}
				}
			}

			setMotMask(mot)

			handleComparaison(motChoisi, motMask)
		})
	}

	const handleComparaison = (mot1, mot2) => {
		let word1 = ''
		let word2 = ''
		let termine = false

		mot1.forEach(letter => {
			word1 += letter.nom
		})

		mot2.forEach(letter => {
			word2 += letter.nom
		})

		if(word1 === word2 && props.player.score > 0) {
			termine = true
		}else if(props.player.score == 0) {
			termine = true
		}

		if(termine) {
			$(document).ready(function() {
				//selection de la modal de fin de jeu
				const $modal_partie_termine = $('#partie-termine')

				$modal_partie_termine.modal(); 
			})
		}
	}

	return (
		<div className="container-fluid d-none" id="pendu-interface">
			{/*here we have modal component for the login page*/}
      <div className="modal fade" id="partie-termine">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
          	<div className="modal-body login-modal-body">
              <button className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4>Partie Terminee</h4>
              {
                props.player.score > 0 ? (
                  <p>Bravo, bien jouer <b>{props.player.nom}</b> vous obtenez <b>{props.player.score} point{props.player.score > 1? 's':''}</b></p>
                ):(
                  <p>Dommage <b>{props.player.nom}</b>, vous n'avez pas bien jouer, veillez recommencer</p>
                )
              }
            </div>
            <div className="modal-footer">
            	{
                props.player.score > 0 ? (
                  <button className="btn btn-outline-danger disabled" data-dismiss="modal">Continuer</button>
                ):(
                  <button className="btn btn-outline-danger disabled" data-dismiss="modal">Recommencer</button>
                )
              }
              <button className="btn btn-outline-primary" id="continuer" data-dismiss="modal">Abandonner</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="pendu-game">
        	<div className="card">
        		<div className="card-header pendu-header"></div>
        		<div className="card-body pendu-body">
        			<div className="row">
        				<div className="pendu-interface-header">
        					<div>
        						<h4 className="username-player">{props.player.nom}</h4>
        						<h5>score: {motMask !== [] ? props.player.score:0}</h5>
        						<h5>
        							<Counter
        								className="compteur"
        								counter="59"
        							/>
        						</h5>
        					</div>
        				</div>
        			</div>

        			<div className="row">
        				<div className="section-droite-pendu">
        					<div className="row pendu-mot-cache-zone">
        						<div className="pendu-mot-cache border border-info">
        							<div className="row mot-cache">
        								{
	        								motMask.map((letter) => (
	        									<MotCache
	        										key={letter.id_mot}
	        										letter={letter}
	        									/>
	        								))
	        							}
        							</div>
        						</div>
        					</div>
        					<div className="row control">
        						<div className="button-controle">
        							<button className="btn btn-primary" id="start-pendu" onClick={handleGenerateWord}>Start</button>
        							<button className="btn btn-warning" id="stop-pendu">Stop</button>
        						</div>
        					</div>
        				</div>

        				<div className="section-gauche-pendu">
        					<div className="row alphabet">
        						{
		        					lettres.map((lettre) => (
		        						<Lettre 
			        						key={lettre.id}
			        						lettre={lettre}
			        						onClickLetter={handleClickLettre}
			        					/>
		        					))
	        					}
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
      </div>
    </div>
	)
}

export default Pendu