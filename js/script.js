$(function () {
	$('.slider').slick({
		speed: 800,
		infinity: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		points: true,
		dots: true
	});
});

(() => {
	const inputFields = document.querySelectorAll('input')
	const form = document.querySelector('form')
	let count = 0

	function formLogic() {
		form.addEventListener('submit', event => {
			inputFields.forEach(input => {
				if(input.value.trim() === '') {
					input.classList.add('signals')
					event.preventDefault()
					const timeout = window.setTimeout(() => {
						input.classList.remove('signals')
						clearTimeout(timeout)
					}, 2000)
					return
				} else {
					count++
				}
				
			})
			if(count === 5) {
				
				if(window.confirm('Отправить форму?')) {
					event.preventDefault()
					window.alert('Форма отправлена!')
					inputFields.forEach(input => {
						input.value = ''
					})
				} else {
					window.alert('Форма отменена!')
					event.preventDefault()
				}
			} else {
				count = 0
				return
			}
		})
	}

	document.addEventListener('DOMContentLoaded', () => {
		formLogic()
	})
})()

