function jsonToUI() {
    var customerList = JSON.parse(this.responseText);
    for(var i=0;i<customerList.length;i++) {
        document.getElementById("demo").innerHTML+=customerList[i].Id+"<br><br>";
        document.getElementById("demo1").innerHTML+=customerList[i].Name+"<br><br>";
        document.getElementById("demo2").innerHTML+=customerList[i].Address+"<br><br>";
        document.getElementById("demo3").innerHTML+=customerList[i].Address2+"<br><br>";
        document.getElementById("demo4").innerHTML+=customerList[i].Zip+"<br><br>";
        document.getElementById("demo5").innerHTML+=customerList[i].City+"<br><br>";
        document.getElementById("demo6").innerHTML+=customerList[i].Country+"<br><br>";
        document.getElementById("demo7").innerHTML+=customerList[i].Email+"<br><br>";
        document.getElementById("demo8").innerHTML+=customerList[i].Phone+"<br><br>";
        console.log(customerList);
    }
}

var oReq = new XMLHttpRequest();

oReq.addEventListener("load",jsonToUI);

oReq.open("GET","http://www.centisoft.dk/api/Customer");

oReq.send();
