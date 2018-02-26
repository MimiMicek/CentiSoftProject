
function jsonToUI() {
    var developerList = JSON.parse(this.responseText);
    for(var i=0;i<developerList.length;i++) {
        document.getElementById("demo").innerHTML+=developerList[i].Name+"<br>";
        //console.log(developerList[i].Name);
    }
}

var oReq = new XMLHttpRequest();

oReq.addEventListener("load",jsonToUI);

oReq.open("GET","http://dm.sof60.dk:84/api/Developer");

oReq.send();


/*

$(document).ready(function() {
    $.get("http://dm.sof60.dk:84/api/Developer",function(data) {
        $("#demo").html(data.Name);
    },"json");
});
*/