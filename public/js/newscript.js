var filterContainer = document.getElementById("first-filter");
var alpha = document.getElementById("alpha");

alpha.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>"
  }
  filterContainer.insertAdjacentHTML('beforeend', htmlString);
}