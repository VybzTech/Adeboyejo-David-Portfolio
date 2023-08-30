import { QUESTIONS } from '../Utils'
import FAQuestion from './FAQuestion'
import React, { useState } from 'react'

const FAQs = () => {
	const [count, setCount] = useState(3)
	const [subCount, setSubCount] = useState(0)

	return (
		<div id='FAQs'>
			<h1>FAQs</h1>
			<div className='FAquestions'>
				{QUESTIONS.map((qn) => {
					if (qn.id > count) {
						return false
					} else {
						return (
							<FAQuestion
								key={qn.id}
								question={qn}
								count={count}
								setCount={setCount}
								subCount={subCount}
								setSubCount={setSubCount}
							/>
						)
					}
				})}
			</div>
		</div>
	)
}

export default FAQs
