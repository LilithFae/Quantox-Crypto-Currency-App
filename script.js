function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      displayText(xhttp.responseText);
        console.log(xhttp.responseText);
    }
  };
  xhttp.open("GET", "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", true);
    
  xhttp.setRequestHeader("X-CMC_PRO_API_KEY", "9f97e8bd-656c-4dc8-8494-b8909d308afc");
  xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  xhttp.setRequestHeader("Access-Control-Max-Age", "10000");
  xhttp.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with, Content-Type, origin, authorization, accept, client-security-token");
  xhttp.send();
}
function loadTable(){
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        
    xobj.open('GET', 'data.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
           
            displayText(xobj.responseText);
          }
    };
    xobj.send(null);  
}
function displayText(response){
    var data = JSON.parse(response);
    var e= document.getElementById("table");
    for(var elem in data){
    console.log(elem);
    e.innerHTML+="<tr class='row'><td><img src='img/"+data[elem].symbol+".png' alt='"+data[elem].name+"' class='ico-img' class='name'>"+data[elem].name+"</td><td class='symbol'>"+data[elem].symbol+"</td><td class='value'>"+data[elem].price_usd+"</td><td class='last24'>"+data[elem].percent_change_24h+"</td>       <td><input type='number' required class='submitBtn'><button>Submit</button></td><td class='valueOfCoin'></td></tr>";
    }
}
