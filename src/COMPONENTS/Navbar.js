import Logo from './Logo'
import Navigation from './Navigation'
import { withRouter } from 'react-router-dom'
import { Fade, Flip, Zoom } from 'react-awesome-reveal'
import React, { useState, useEffect } from 'react'

const Navbar = withRouter(({ history }) => {
	const [navBg, setNavBg] = useState(false)
	const [navControl, setNavControl] =
		useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 50) {
				setNavBg(true)
			} else setNavBg(false)
		})
		return window.removeEventListener(
			'scroll',
			() => {}
		)
	}, [])

	return (
		<div className={`navbar ${navBg && 'white'}`}>
			<Fade
				left
				big
				appear
				spy={navBg}
				duration={600}
				delay={150}
			>
				<div
					className='logo'
					onClick={() => {
						history.push('/')
					}}
				>
					<Logo />
				</div>
			</Fade>
			<>
				<Zoom
					right
					big
					appear
					spy={navBg}
					duration={800}
					delay={150}
				>
					<button
						className='navBtn'
						onClick={() => {
							setNavControl((shown) => !shown)
						}}
					>
						{navControl ? (
							<svg
								focusable='false'
								viewBox='0 0 24 24'
								aria-hidden='true'
							>
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
							</svg>
						) : (
							<svg
								focusable='false'
								viewBox='0 0 24 24'
								aria-hidden='true'
							>
								<path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
							</svg>
						)}
					</button>
				</Zoom>
			</>

			<div
				className={`navigation ${
					navControl && 'show'
				}`}
			>
				<Flip
					top
					appear
					spy={navBg}
					duration={950}
					delay={150}
				>
					<Navigation
						setNavControl={setNavControl}
					/>
				</Flip>
			</div>
		</div>
	)
})

export default Navbar
