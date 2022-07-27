function iniciosesion(form){
    if(form.usuario.value=="pedro" && form.password.value=="1234"){
         window.location.href="perfil_pedro.html";
    }
     if(form.usuario.value=="karla" && form.password.value=="4567"){
         window.location.href="perfil_karla.html";
      }
     if(form.usuario.value=="mauricio" && form.password.value=="6789"){
         window.location.href="perfil_mauricio.html";
      }
      else if(form.usuario.value==""){
         alert("Error,usuario incorrecto");
     } else if(form.password.value==""){
         alert("Error,password incorrecto");
    }
     else{
         alert("Error,inicio incorrecto,Ingresa tu usuario correcto");
    }
 }