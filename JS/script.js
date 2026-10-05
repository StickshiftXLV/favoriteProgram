function welcomeUser() {    
    let user = document.getElementById("name").value;

    
if(user == ""){
    document.getElementById("message").textContent = "Please enter name";
}
 else{


      document.getElementById("message").textContent = "Welcome " + user
}

}

function favoriteCode() {

    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;

if(code == ""){
    document.getElementById("message").textContent = "Please enter your favorite coding language";
}
 else{


      document.getElementById("message").textContent = name + " your favorite language is " + code
}
}

function clearUser(){
    document.getElementById("name").value  = "" ;

    document.getElementById("message").textContent = "";
}


function showWelcome(name){
    const message = document.querySelector("#message");

    message.textContent = `Welcome ${name}`;
    
}

showWelcome(David)