import React from 'react'

const Lettre = ({lettre, onClickLetter}) => {
	return (
		<div className="lettre" id={`letters-${lettre.id}`}>
			<img src={lettre.url} alt={lettre.nom} id={`letter-${lettre.id}`} className="hover lettre-image" onClick={() => onClickLetter(lettre.id)} />
		</div>
	)
}

export default Lettre