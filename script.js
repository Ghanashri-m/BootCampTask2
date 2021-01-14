var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response) // same as request.response
    for(var i = 0; i < data.length; i++) // no need to enclose in flower braces, since there is only 1 line after loop
    console.log(data[i].name); // prints all the country names in console.
}