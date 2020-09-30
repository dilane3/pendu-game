import React from 'react'

const Lettre = ({lettre, clickLetter}) => {
	return (
		<div className="lettre" id={`letters-${lettre.id}`}>
			<img src={lettre.url} alt={lettre.nom} id={`letter-${lettre.id}`} className="hover border lettre-image" onClick={clickLetter} />
		</div>
	)
}

export default Lettre