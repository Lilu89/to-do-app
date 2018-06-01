document.addEventListener('DOMContentLoaded', function() {
	var button = document.querySelector('.addBtn');

	button.addEventListener('click', function() {
        var item = document.getElementById('task').value;
        var text = document.createTextNode(item);
        var newItem = document.createElement('li');
        newItem.appendChild(text);
        document.querySelector('ul').appendChild(newItem);
	});
});