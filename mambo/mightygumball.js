window.onload = init;


function init() {

/*
    var url = 'http://jakisserwer.com/dane.json';
    var request = new XMLHttpRequest();

    request.open('GET', url);

    request.onload = function () {
        if (request.status == 200) {
            alert(request.responseText);
        }
    };

    request.send();
*/

    var url = 'http://localhost/sales.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
        if(request.status == 200){
            updateSales(request.responseText);
        }
    };
    request.send(null);

    function updateSales(responseText) {
        var salesDiv = document.getElementById('sales');
        salesDiv.innerHTML = responseText;
    }
    
}