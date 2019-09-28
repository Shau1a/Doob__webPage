let langInUse = document.getElementById('language-change__inUse');
let langChooseArrow = document.querySelector('.language-change__arrow');
let langNotInUse = document.getElementById('language-change__notInUse');


document.addEventListener('click', function(e) {
	if (e.target == langInUse || e.target == langChooseArrow) {
		if (checkClass(langNotInUse, 'hideScale')) {
			langNotInUse.classList.remove('hideScale');
		}
		else {
			langNotInUse.classList.add('hideScale');	
		}
	}
});

langNotInUse.addEventListener('click', function() {
	let lang_1 = langNotInUse.innerHTML;
	let lang_2 = langInUse.innerHTML;
	langInUse.innerHTML = lang_1;
	langNotInUse.innerHTML = lang_2;
	langNotInUse.classList.add('hideScale');
});

function checkClass(domItem, className) {
	if (domItem.classList.contains(className)) return true;
	return false;
}