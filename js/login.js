
var login = document.getElementById("login")

login.addEventListener("click", function () {

    
    


    var user1 = JSON.parse(localStorage.getItem("user"))


    

       var realMail= document.getElementById("realMail").value
       var realPass= document.getElementById("realPass").value

    
    
    

    for (var i = 0; i < user1.length; i++) {

        if (realMail == user1[i].userMail && realPass == user1[i].userPass) {

            var makanalbut = document.getElementById("anchorr")
            makanalbut.setAttribute("href", "welcome.html")
        }
    
        else { document.getElementById("exist").classList.remove("d-none") }

    }

    







})