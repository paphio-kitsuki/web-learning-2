const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgs = Array.from(Array(5), (v, i) => 'images/pic' + (i + 1) + '.jpg');

/* Declaring the alternative text for each image file */

const alts = Array.from(Array(5), (v, i) => 'pic' + (i + 1) + '.jpg');


/* Looping through images */

function setDisplayedImage(src, alt) {
	displayedImage.setAttribute('src', src)
	displayedImage.setAttribute('alt', alt)
}

for (let i = 0; i < imgs.length; i++) {
	// console.log(imgs[i]);
	const newImage = document.createElement('img');
	newImage.setAttribute('src', imgs[i]);
	newImage.setAttribute('alt', alts[i]);
	newImage.addEventListener('click', (e) => {
		setDisplayedImage(e.target.getAttribute('src'), e.target.getAttribute('alt'))
	})
	thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
	if (btn.getAttribute('class') !== 'dark') {
		btn.setAttribute('class', 'dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'transparent';
	} else {
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgb(0%, 0%, 0%, 50%)';
	}
})