var user2 = JSON.parse(localStorage.getItem("user"))

for (var i = 0; i < user2.length; i++) {


var x = document.getElementById("welcomee").innerHTML=`"welcome "${user2[i].userName}`
console.log(x)

}