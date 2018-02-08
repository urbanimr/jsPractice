window.onload = init;


function init() {


    var url = 'http://jakisserwer.com/dane.json';
    var request = new XMLHttpRequest();

    request.open('GET', url);

    request.onload = function () {
        if (request.status == 200) {
            alert('Dane zostały odebrane.');
        }
    };

    request.send();


}