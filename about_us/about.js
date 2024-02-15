document.addEventListener("DOMContentLoaded", function () {
	// Get necessary elements
	const sliderWrapper = document.querySelector(".slider-wrapper")
	const slides = document.querySelectorAll(".about-sub-middle")
	const forwardBtns = document.querySelectorAll("#forward-btn")

	let currentIndex = 0

	// Function to handle sliding to the next slide
	function slideNext() {
		currentIndex++
		if (currentIndex >= slides.length) {
			currentIndex = 0
		}
		updateSlider()
	}

	// Function to update the slider position
	function updateSlider() {
		const translateValue = -currentIndex * 100 + "%"
		sliderWrapper.style.transform = "translateX(" + translateValue + ")"
	}

	// Attach click event to each forward button
	forwardBtns.forEach(function (btn) {
		btn.addEventListener("click", slideNext)
	})
})

//milk

document
	.querySelector("#popup-open-btn")
	.addEventListener("click", function () {
		document.querySelector(".popup").classList.add("active")
		moveMilkBottleDown(true)
	})

document
	.querySelector(".popup-close-btn")
	.addEventListener("click", function () {
		document.querySelector(".popup").classList.add("remove")
		setTimeout(() => {
			document.querySelector(".popup").classList.remove("active", "remove")
			moveMilkBottleDown(false)
		}, 1500) // Set the timeout to match the duration of the animation
	})

// dragable
let subMenu = document.getElementById("subMenu")

function toggleMenu() {
	subMenu.classList.toggle("open-menu")
}

// Function to move the milk bottle up or down
// function moveMilkBottleDown(moveDown) {
// 	const milkBottle = document.querySelector(".milk-bottle")
// 	if (moveDown) {
// 		milkBottle.style.transform = "translateY(50px)" // Adjust the value as needed
// 	} else {
// 		milkBottle.style.transform = "translateY(0)"
// 	}
// }

//navbar

const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	toggle.addEventListener("click", () => {
		// Add show-menu class to nav menu
		nav.classList.toggle("show-menu")

		// Add show-icon to show and hide the menu icon
		toggle.classList.toggle("show-icon")
	})
}

showMenu("nav-toggle", "nav-menu")

// drag
const milkBottle = document.querySelector(".milk-bottle")
const popup = document.querySelector(".popup")

let isDragging = false
let initialY

function handleMouseDown(event) {
	isDragging = true
	initialY = event.clientY
}

function handleMouseMove(event) {
	if (!isDragging) return

	const deltaY = event.clientY - initialY
	const currentHeight = popup.offsetHeight
	const newHeight = currentHeight + deltaY

	if (newHeight >= 0 && newHeight <= window.innerHeight) {
		popup.style.height = newHeight + "px"
	}

	initialY = event.clientY
}

function handleMouseUp() {
	isDragging = false
}

milkBottle.addEventListener("mousedown", handleMouseDown)
document.addEventListener("mousemove", handleMouseMove)
document.addEventListener("mouseup", handleMouseUp)

// about

// document
// 	.querySelector("#popup-open-btn")
// 	.addEventListener("click", function () {
// 		document.querySelector(".popup").classList.add("active")
// 	})
// document
// 	.querySelector(".popup-close-btn")
// 	.addEventListener("click", function () {
// 		document.querySelector(".popup").classList.add("remove")
// 		setTimeout(() => {
// 			document.querySelector(".popup").classList.remove("active", "remove")
// 		}, 1500) // Set the timeout to match the duration of the animation
// 	})

// dragable
// let subMenu = document.getElementById("subMenu")
// function toggleMenu() {
// 	subMenu.classList.toggle("open-menu")
// }
