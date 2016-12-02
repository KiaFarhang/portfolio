'use strict';

var items = document.querySelectorAll('h4');

if (screen.width < 768) {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', toggleDisplayMobile);
    }
} else {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', toggleDisplay);
    }
}

function toggleDisplayMobile(e) {
    var div = e.target.parentElement;
    var contents = div.getElementsByTagName('div');
    var content = contents[0];
    var heading = div.firstChild.nextSibling;
    console.log(heading);

    content.classList.toggle('show');
    heading.classList.toggle('selected');
}



function toggleDisplay(e) {

    var div = e.target.parentElement;
    var contents = div.getElementsByTagName('div');
    var content = contents[0];
    var heading = div.firstChild.nextSibling;
    var display = document.getElementById('displayZone');
    // var captions = display.querySelectorAll('img');
    // var caption = captions[0];
    // console.log(caption);


    if (display.firstChild) {
        if (isAlreadyDisplayed(display)) {
            display.removeChild(display.firstChild);
            // heading.classList.toggle('selected');
        } else {
            display.removeChild(display.firstChild);
            addThisContent(content);
            // heading.classList.toggle('selected');
            // caption.scrollIntoView(false);
        }
    } else {
        addThisContent(content);
        // heading.classList.toggle('selected');
        // caption.scrollIntoView(false);
    }


    function addThisContent(e) {
        var fragment = document.createDocumentFragment();
        fragment.appendChild(e.cloneNode(true));

        fragment.firstChild.classList.toggle('show');

        display.appendChild(fragment);
    }

    function isAlreadyDisplayed(e) {
        var displayedText = e.getElementsByTagName('p');
        var oldText = displayedText[0];
        var otherText = content.getElementsByTagName('p');
        var newText = otherText[0];

        return (oldText.isEqualNode(newText));
    }



}