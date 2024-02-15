// For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("nav")
const menu = document.getElementById("menu")

menu.addEventListener("click", () => {
	navigation.style.setProperty("--childenNumber", navigation.children.length)

	//    Casually Toggling Classes to make them animate on click
	//   Regular stuff ;)
	navigation.classList.toggle("active")
	menu.classList.toggle("active")
})

var dropdown = document.getElementsByClassName("dropdown-btn")
var i

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		var dropdownContent = this.nextElementSibling
		closeAllDropdownsExcept(this) // Close all dropdowns except the current one
		this.classList.toggle("active")
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none"
		} else {
			dropdownContent.style.display = "block"
		}
	})
}

// Function to close all dropdowns except the current one
function closeAllDropdownsExcept(currentDropdown) {
	var dropdowns = document.getElementsByClassName("dropdown")
	for (var j = 0; j < dropdowns.length; j++) {
		var openDropdown = dropdowns[j]
		var dropdownButton = openDropdown.previousElementSibling
		if (
			openDropdown.style.display === "block" &&
			dropdownButton !== currentDropdown
		) {
			openDropdown.style.display = "none"
			// Remove the 'active' class from the corresponding dropdown button
			dropdownButton.classList.remove("active")
		}
	}
}

function showBanner(bannerNumber) {
	// Hide all banners
	for (let i = 1; i <= 6; i++) {
		document.querySelector(`.banner${i}`).style.display = "none"
	}

	// Show the selected banner
	const selectedBanner = document.querySelector(`.banner${bannerNumber}`)
	selectedBanner.style.display = "block"

	// Add rotation class to pro-img
	const proImg = selectedBanner.querySelector(".pro-img")
	proImg.classList.remove("rotate")

	// Triggering reflow to restart the animation
	void proImg.offsetWidth

	proImg.classList.add("rotate")

	// Delay the appearance of the next image
	setTimeout(() => {
		// Reset all images to remove the 'active' class
		var images = document.querySelectorAll(".product-choice img")
		images.forEach(function (img) {
			img.classList.remove("active")
		})

		// Add 'active' class to the clicked image
		var selectedImage = document.querySelector(
			`.product-choice img:nth-child(${bannerNumber})`
		)
		selectedImage.classList.add("active")

		// Your other logic for showing the banner based on the choice
		// ...

		// Example: You can console log the choice for testing
		console.log("Selected banner:", bannerNumber)
	}, 500) // Adjust the delay (in milliseconds) based on your animation duration
}

// locomotive js

//navbar
// const showMenu = (toggleId, navId) => {
// 	const toggle = document.getElementById(toggleId),
// 		nav = document.getElementById(navId)

// 	toggle.addEventListener("click", () => {
// 		// Add show-menu class to nav menu
// 		nav.classList.toggle("show-menu")

// 		// Add show-icon to show and hide the menu icon
// 		toggle.classList.toggle("show-icon")
// 	})
// }

// showMenu("nav-toggle", "nav-menu")
