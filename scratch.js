// grab the textarea
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

