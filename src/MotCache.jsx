import React from 'react'

const MotCache = ({letter}) => {

	return (
		<div className="lettre-cache">
			<img src={letter.url} alt={letter.nom} />
		</div>
	)
}

export default MotCache