
var signUp = document.getElementById("signup")
var alluser=[]

signUp.addEventListener("click", function () {

    var User = {

        userName: document.getElementById("userName").value,
        userMail: document.getElementById("userMail").value,
        userPass: document.getElementById("userPass").value,
    }

    
    alluser.push(User)

    container = ""

    for (var i = 0; i < alluser.length; i++) {
        container +=alluser

    }

    


    localStorage.setItem("user", JSON.stringify(alluser))

    var sucess = document.getElementById("sucess")

    sucess.classList.remove("d-none")

    

    

})







