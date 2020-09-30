import {useState} from 'react'

const mots = [
	'ARBRE',
	'ARDOISE',
	'ARME',
	'ARMOIRE',
	'BIDON',
	'BOIRE',
	'BOIS',
	'BOITE',
	'BLAGUE',
	'CABANE',
	'CARABINE',
	'CASE',
	'CASSE',
	'DANGER',
	'DOIGHT',
	'DONGEON',
	'DRIBBLE',
	'DROITE'
]

export const useLibrairieLettres = () => {

	const [lettres, setLettres] = useState([
		{id: 1, nom: 'A', url: './lettres/A.png'},
		{id: 2, nom: 'B', url: './lettres/B.png'},
		{id: 3, nom: 'C', url: './lettres/C.png'},
		{id: 4, nom: 'D', url: './lettres/D.png'},
		{id: 5, nom: 'E', url: './lettres/E.png'},
		{id: 6, nom: 'F', url: './lettres/F.png'},
		{id: 7, nom: 'G', url: './lettres/G.png'},
		{id: 8, nom: 'H', url: './lettres/H.png'},
		{id: 9, nom: 'I', url: './lettres/I.png'},
		{id: 10, nom: 'J', url: './lettres/J.png'},
		{id: 11, nom: 'K', url: './lettres/K.png'},
		{id: 12, nom: 'L', url: './lettres/L.png'},
		{id: 13, nom: 'M', url: './lettres/M.png'},
		{id: 14, nom: 'N', url: './lettres/N.png'},
		{id: 15, nom: 'O', url: './lettres/O.png'},
		{id: 16, nom: 'P', url: './lettres/P.png'},
		{id: 17, nom: 'Q', url: './lettres/Q.png'},
		{id: 18, nom: 'R', url: './lettres/R.png'},
		{id: 19, nom: 'S', url: './lettres/S.png'},
		{id: 20, nom: 'T', url: './lettres/T.png'},
		{id: 21, nom: 'U', url: './lettres/U.png'},
		{id: 22, nom: 'V', url: './lettres/V.png'},
		{id: 23, nom: 'W', url: './lettres/W.png'},
		{id: 24, nom: 'X', url: './lettres/X.png'},
		{id: 25, nom: 'Y', url: './lettres/Y.png'},
		{id: 26, nom: 'Z', url: './lettres/Z.png'},
	])

	return [lettres, setLettres]
}

export default mots