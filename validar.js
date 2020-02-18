/*
En javascript se programa de acuerdo a los siguientes paradigmas, orientado a objetos, a funciones y a venteos,  
para lo cual se debe de establecer una serie de fuciones las cuales pueden o no recibir prametros y 
su funcionamiento es parecido a un metodo de programación una de las virtudes de javascript es que es un lenguaje no tipado 
significa que no es necesario especificar el tipo de dato por lo cual todas las variables son var


*/
function validar(formulario){
   //body
   var checkStr = formulario.nombre.value;
   alert(checkStr);
/*
Para la programación en javascrpit se puede utilizar la misma logica que en java y solo cambia sutilmente la sintaxis asi que se puede programar condiciones, bucles y sentencias de control de la misma forma

javascript se interpreta mas no se compila

*/
   if(checkStr.length < 5){
   	alert("Favor de escribir más de 3 carácteres en el campo nombre");
   	formulario.nombre.focus();
   	return(false);
   }

   var checkOk="qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
   var allValido= true;

   for (var i = 0; i < checkStr.length; i++) {
   	var ch=checkStr.charAt(i);
   	for (var j = 0; j < checkOk.length; j++) {
   		if (ch == checkOk.charAt(j))
   			break;
   	}

   	if(j==checkOk.length){
   		allValido=false;
   		break;
   	}
   }

   if (!allValido){
   	  alert("Escriba solo letras en el campo nombre");
   	  formular.nombre.focus();
   	  return(false);
   }

   /*
   en javascript se pueden sobrecargar las variables
   */
   var checkStr=formulario.edad.value;
   alert(checkStr);

   var checkOk="01234567890";
   var allValido= true;

   for (var i = 0; i < checkStr.length; i++) {
   	var ch=checkStr.charAt(i);
   	for (var j = 0; j < checkOk.length; j++) {
   		if (ch == checkOk.charAt(j))
   			break;
   	}

   	if(j==checkOk.length){
   		allValido=false;
   		break;
   	}
   }

   if (!allValido){
   	  alert("Escriba solo digitos en el campo edad");
   	  formular.edad.focus();
   	  return(false);
   }

   if(formulario.email.value.length<2){
   	alert("Escriba el correo de la forma xxx.@xx.xxx")
   }
  
  //correo  \s cadena 
  var txt = formulario.email.value;
  var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

  alert("Email"+(b.test(txt)?"":" no ")+" valido");  //operador ternario

  return b.test(txt);


}