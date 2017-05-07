var add = document.getElementById('js-addElem'),
	list = document.getElementById('js-list');

add.addEventListener('click', function() {
	var getTags = document.getElementsByTagName('li'),
		getTagsLength = getTags.length;
	list.innerHTML += '<li>item ' + getTagsLength + '</li>';
});
