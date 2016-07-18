function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        myFunction(xhttp.responseText);
    }
  };
  xhttp.open("GET", "people.xml", true);
  xhttp.send();
}

function getSubjects(){
    var subs_arr = [];
    return subs_arr;
}

function getAs(){
    var a_arr = []
    
    return a_arr;
}

function getImgs(){
    var imgs_arr = [];
    
    return imgs_arr;
}


function loadSubjects(){
    var h2_subs = document.getElementsByTagName('h2');
    var imgs = document.getElementsByTagName('img');
    var a = document.getElementsByTagName('a');
    var subs_arr = getSubjects();
    var a_arr = getAs();
    var imgs_arr = getImgs();
//    for(var i = 0; i <  h2_subs.length; i++){
//        h2_subs[i].innerHTML = subs_arr[i];
//        a.href = a_arr[i];
//        imgs.src = imgs_arr[i];
//    }
}