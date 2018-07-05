// 
// functions for managing the textarea content and localstorage read/write
//
var t = document.getElementById('textarea');

// load text from localstorage and insert into textarea
if ( localStorage['scratchText'] === undefined ) {
	t.innerHTML = "Welcome to Scratch!";
} else {
	t.innerHTML = localStorage['scratchText'];
}

// put the cursor at the beginning of the textarea
t.setSelectionRange(0,0);
t.focus();

// save textarea text to localstorage on change (keyup)
document.addEventListener('keyup', function(){
	localStorage['scratchText'] = t.value;
});


//
// functions for increasing/decreasing font size
//
var b1 = document.getElementById('fontSizeUp');
var b2 = document.getElementById('fontSizeDn');
b1.addEventListener('click', function() {
	var style = window.getComputedStyle(t, null).getPropertyValue('font-size');
	var fontSize = parseInt(style);
	t.style.fontSize = (fontSize + 2) + 'px';	
});
b2.addEventListener('click', function() {
	var style = window.getComputedStyle(t, null).getPropertyValue('font-size');
	var fontSize = parseInt(style); 
	t.style.fontSize = (fontSize - 2) + 'px';	
});
