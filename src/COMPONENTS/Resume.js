import React from 'react'
import ReactDOM from 'react-dom'
import { Fade, Zoom } from 'react-awesome-reveal'
import FileSaver from 'file-saver'
import ResumePic from '../IMAGES/RESUME.png'
// import { IconButton } from '@material-ui/core'
// import { CloudDownloadRounded } from '@material-ui/icons'

const Resume = (props) => {
	const handleDownload = () => {
		return FileSaver.saveAs(
			process.env.PUBLIC_URL + 'dist/RESUME.pdf',
			"Adeboyejo David's Resume.pdf"
		)
	}

	const { showCV, setShowCV } = props

	if (showCV) {
		return ReactDOM.createPortal(
			<Zoom big delay={100}>
				<div id='Resume'>
					<button
						title='Close'
						onClick={() => {
							setShowCV((CV) => !CV)
						}}
					>
						<svg
							focusable='false'
							viewBox='0 0 24 24'
							aria-hidden='true'
						>
							<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
						</svg>
					</button>
					<Fade big duration={750} delay={300}>
						<div className='ResumeImg'>
							<img
								src={ResumePic}
								alt='My Resume'
							/>
						</div>
					</Fade>
					<div className='ResumeDwn'>
						<p>Download resume</p>
						<button
							onClick={handleDownload}
							title='Download Resume'
						>
							{/* <CloudDownloadRounded /> */}
						</button>
					</div>
				</div>
			</Zoom>,
			document.getElementById('portals')
		)
	}
	return ''
}
export default Resume
