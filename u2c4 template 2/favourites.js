// write js code here corresponding to favourites.html

var favouriteArr=JSON.parse(localStorage.getItem("favourites")) ||[];

displayData(favouriteArr)

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
        td6.innerText=elem.RemoveFavourites

        var btn=document.querySelector("button")
        btn.innerText="Delete";
        btn.addEventListener("click",deleteRow)

        tr.append(td1,td2,td3,td4,td5,td6,btn)
        document.querySelector("tbody").append(tr);

        function deleteRow(){
            event.target.parentNode.remove();
        }
        

       

});

// tr.append(td1,td2,td3,td4,td5,td6,btn)
// document.querySelector("tbody").append(tr);
// function deleteRow(){
//     event.target.parentNode.remove();
// }


       
        
    };