import React from 'react'
import Vybz1 from '../../IMAGES/DHARVO.jpg'

const ImageMe = () => {
	return (
		<div className='imgX2'>
			<img src={Vybz1} alt="David's Pic1" />
		</div>
	)
}

export default React.memo(ImageMe)
