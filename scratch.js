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

// Load and apply the font size from localstorage if it exists
if ( localStorage['scratchFontSize'] === undefined ) {
	localStorage['scratchFontSize'] = 10;
	t.style.fontSize = '10pt';
}
t.style.fontSize = localStorage['scratchFontSize'] + 'pt';

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
	var fontSize = parseInt(localStorage['scratchFontSize']);
	console.log("fontSize = " + fontSize);
	fontSize += 2;
	console.log("fontSize + 2 = " + fontSize);
	localStorage['scratchFontSize'] = fontSize;
	t.style.fontSize = fontSize + 'pt';	
});
b2.addEventListener('click', function() {
	var fontSize = parseInt(localStorage['scratchFontSize']);
	fontSize -= 2;
	localStorage['scratchFontSize'] = fontSize;
	t.style.fontSize = fontSize + 'pt';	
});
