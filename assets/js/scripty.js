function myFunction(xml) {
    var i;
    var table="<tr><th>Name</th><th>Age</th></tr>";
    var x = xml.getElementsByTagName("doc");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("age")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType('text/xml');
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {

        var xml = xhttp.response;
    //        var doc = xhttp.getElementById('doc');
    //        console.log(doc);
        console.log(xml);
        console.log(xhttp.responseXML);
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