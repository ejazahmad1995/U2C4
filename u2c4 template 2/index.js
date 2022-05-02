// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",Addmatch)

var contactArr=JSON.parse(localStorage.getItem("schedule")) || [];
function Addmatch(){
    event.preventDefault();

    var contactObj={
        matchnum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date1:masaiForm.date.value,
        Venue:masaiForm.venue.value,

    }
    contactArr.push(contactObj);
    localStorage.setItem("schedule",JSON.stringify(contactArr));
    console.log(contactArr);
    window.location.href="matches.html"

}
