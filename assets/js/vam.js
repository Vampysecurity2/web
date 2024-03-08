function loguear()
{
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;



if(user == "Vampy" && password == "admin")
{
    window.location = "indexado.html";
}

else
{
    alert("datos incorrectos wey");
}

}
