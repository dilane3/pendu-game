import React, {useState} from 'react'
import Counter from './Counter'
import Lettre from './Lettre'
import mots, {useLibrairieLettres} from './Mots'
import MotCache from './MotCache'
import $ from 'jquery'

const Pendu = (props) => {

	const [counter, setCounter] = useState(59)
	const [motMask, setMotMask] = useState([])
	const [lettres, setLettres] = useLibrairieLettres()
	const letters = [...lettres]
	const m = [...mots]

	const generateWordImage = () => {
		const mot = []
		let j = 0

		for (let nameLetter of m[Math.floor(Math.random()*m.length)]) {
			letters.find((letter) => {
				if (letter.nom === nameLetter) {
					mot[j] = {id: letter.id, id_mot: j, nom: letter.nom, url: './lettres/unknow.png'}
					j++
				}
			})
		}
		setMotMask(mot)
	}

	const chrono = (count) => {
		setCounter(count-1)
	}

	const clickLetter = () => {
		$(document).ready(function(){
			const $letters = $('.lettre-image')
			const motCache = [...motMask]

			$letters.click(function(){
				const identifiant = $(this).attr('id')
				const $letter = $('#' + identifiant)
				const id = identifiant.substr(7)

				//actions a realiser apres avoir cliquer sur une lettre

				for(let letter of motCache) {
					if(letter.id === id) {
						console.log(letter.id + ' - ' + id)
						letter.nom = $letter.attr('alt')
						console.log(motMask)
						alert("vous avez cliquer sur la touche " + $letter.nom)
						letter.url = './lettres/' + letter.nom + '.png'

						$letter.removeClass('lost')
						$letter.removeClass('hover')
						$letter.addClass('win')
					}else {

						$letter.removeClass('win')
						$letter.removeClass('hover')
						$letter.addClass('lost')
					}
				}
			})

			setMotMask(motCache)
		})

		
	}

	//gestion des evenements ici
	$(document).ready(function() {
		const $start = $('#start-pendu'),
					$letters = $('.lettre-image')


		$start.click(function() {

			$letters.addClass('hover')
			$letters.removeClass('win')
			$letters.removeClass('lost')
		})
	})

	

	return (
		<div className="container-fluid" id="pendu-interface">
      <div className="row">
        <div className="pendu-game">
        	<div className="card">
        		<div className="card-header pendu-header"></div>
        		<div className="card-body pendu-body">
        			<div className="row">
        				<div className="pendu-interface-header">
        					<div>
        						<h4 className="username-player">{props.player}</h4>
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
        							<button className="btn btn-primary" id="start-pendu" onClick={generateWordImage}>Start</button>
        							<button className="btn btn-warning" id="stop-pendu">Stop</button>
        						</div>
        					</div>
        				</div>

        				<div className="section-gauche-pendu">
        					<div className="row">
        						{
		        					lettres.map((lettre) => (
		        						<Lettre 
			        						key={lettre.id}
			        						lettre={lettre}
	        								clickLetter={clickLetter}
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