const formularioLogin = document.getElementById("formulario_login");
const formularioRegistro = document.getElementById("formulario_registro");
const registroLink = document.getElementById("registro_link");
const botonLogin = document.getElementById("boton_login");
const botonRegistro = document.getElementById("boton_registro");

registroLink.addEventListener("click", () => {
 formularioLogin.style.display = "none";
 formularioRegistro.style.display = "block";
});

botonRegistro.addEventListener("click", (e) => {
 e.preventDefault();
 const usuario = document.getElementById("usuario_registro").value;
 const contraseña = document.getElementById("contraseña_registro").value;
 // Aquí debes agregar la lógica para crear un nuevo usuario y guardar sus credenciales
 alert("Usuario creado con éxito");
 formularioRegistro.style.display = "none";
 formularioLogin.style.display = "block";
});

botonLogin.addEventListener("click", (e) => {
 e.preventDefault();
 const usuario = document.getElementById("usuario").value;
 const contraseña = document.getElementById("contraseña").value;
 // Aquí debes agregar la lógica para verificar las credenciales del usuario y permitir el acceso
 alert("Iniciaste sesión con éxito");
});
