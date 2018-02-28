
function jsonToUI() {
    var developerList = JSON.parse(this.responseText);
    for (var i = 0; i < developerList.length; i++) {
        document.getElementById("demo0").innerHTML += developerList[i].Id + "<br><br>";
        document.getElementById("demo").innerHTML += developerList[i].Name + "<br><br>";
        document.getElementById("demo2").innerHTML += developerList[i].Email + "<br><br>";
        //console.log(developerList[i].Name);
    }
}

var oReq = new XMLHttpRequest();

oReq.addEventListener("load", jsonToUI);

oReq.open("GET", "http://dm.sof60.dk:84/api/Developer");

oReq.send();


