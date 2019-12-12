// function to validate search term input
function textAlphanumeric (inputText, alertMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (inputText.value.match(alphaExp)) {
        return true;
    } else {
        // displays validation rule for address
        document.getElementById('p5').innerText = alertMsg;
        inputText.focus();
        return false;
    }
}

// triggers upon search form submission
function formValidation () {
    var searchForm = document.getElementById('search').innerText;
    return textAlphanumeric(searchForm, 'error');
}