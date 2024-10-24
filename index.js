document.addEventListener('DOMContentLoaded', function () {
	setTimeout(() => {
		document.body.classList.add('fade-in')
	}, 1)

	const links = document.querySelectorAll('.transition-link')

	links.forEach((link) => {
		link.addEventListener('click', function (event) {
			event.preventDefault() 
			const href = this.href 

			document.body.classList.remove('fade-in')
			document.body.classList.add('fade-out')

			setTimeout(() => {
				window.location.href = href
			}, 250)
		})
	})
})
