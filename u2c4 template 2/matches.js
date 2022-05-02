// write js code here corresponding to matches.html

var contactArr=JSON.parse(localStorage.getItem("schedule"))

var favouriteArr=JSON.parse(localStorage.getItem("favourites")) ||[];

displayData(contactArr)

function displayData(contactArr){
    contactArr.forEach(function(elem){

        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.MatchNumber;

        var td2=document.createElement("td");
        td2.innerText=elem.TeamA,
      
        td3=document.createElement("td");
        td3.innerText=elem.TeamB

        var td4=document.createElement("td");
        td4.innerText=elem.Date

        var td5=document.createElement("td");
        td5.innerText=elem.Venue

        var td6=document.createElement("td");
        td6.innerText=elem.Favourites

        td6.style.color="green";
        td6.style.cursor="pointer";

        td6.addEventListener("click",function(){
            favouritefunction(elem)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);






        
    });
    function favouritefunction(elem){
        matchesArr.push(elem);
        localStorage.setItem("favourites",JSON.stringify(favouriteArr));
    }
}