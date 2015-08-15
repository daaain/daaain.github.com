document.addEventListener('DOMContentLoaded', function(event) {
	// Image caption + full size
	var entryNodeList = document.querySelectorAll('.entry img');
	for (var i = 0; i < entryNodeList.length; ++i) {
		var image = entryNodeList[i];
		var alt = image.getAttribute('alt');
		if (alt !== '' || typeof alt !== 'undefined') {
			var caption = image.parentNode.insertBefore(document.createElement('span'), image.nextSibling);
			caption.innerHTML = alt;
			caption.setAttribute('class', 'caption');
		}
	}
});