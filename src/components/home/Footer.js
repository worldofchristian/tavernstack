import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-100 text-gray-900">
        <div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center mb-6">
				<span>©2023 tavernstack</span>
                <span>101-733 Broadway Avenue</span>
                <span>Saskatoon, SK</span>
				<a rel="noopener noreferrer" href="/">
					<span>Terms of service</span>
				</a>
			</div>
        </div>
    </footer>
    </>
  )
}

export default Footer