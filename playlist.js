
window.onload = init;


function handleButtonClick() {
    //alert('Kliknąłeś przycisk');
    var textInput = document.getElementById('songTextInput');
    var songName = textInput.value;
    var li = document.createElement('li');
    var ul = document.getElementById('playlist');



    if (songName.length === 0){
        alert('nie wpisałeś tekstu piosenki');
    }
    else {
        //alert('Dodana piosenka: ' + songName);
        li.innerHTML = songName;
        ul.appendChild(li);
        save(songName);
    }


}

function init() {
    var button = document.getElementById('addButton');
    button.onclick = handleButtonClick;
    loadPlaylist();
}

