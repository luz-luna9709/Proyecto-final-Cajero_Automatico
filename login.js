function iniciosesion(form){
	if(form.usuario.value=="eduardo" && form.password.value=="1234"){
		 window.location.href="perfil.html";
   }
		if(form.usuario.value=="karla" && form.password.value=="4567"){
			window.location.href="perfil.html";
		 }
			if(form.usuario.value=="mauricio" && form.password.value=="7890"){
				window.location.href="perfil.html";
		 }
			else if(form.usuario.value==""){
				alert("Error,usuario incorrecto");

		 }    else if(form.password.value==""){
			   alert("Error,password incorrecto");
		 }
		else{
			alert("Error,inicio incorrecto,Ingresa tu usuario correcto");
   }
   login.reset();
   
}