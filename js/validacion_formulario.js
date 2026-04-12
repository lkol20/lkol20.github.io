document.getElementById("btnEnviar").addEventListener("click", function (e) {
    e.preventDefault() // anulamos el comportamiento por defecto del botón de envío; de esta forma no se mandan datos al servidor ni se recarga la página
    
    const errores = []; // aquí iremos guardando los distintos mensajes/enlaces de error
    const resumenErrores = document.getElementById("resumenErrores"); // parte del documento donde mostraremos los mensajes de error
    resumenErrores.innerHTML = ""; // vaciamos los posibles mensajes
    resumenErrores.style.display = "none"; // por ahora, ocultamos los mensajes de error
  
    // Obtenemos una referencia a cada uno de los campos del formulario para comprobar sus valores
    const nombreUsuario = document.getElementById("nombreUsuario");
    const email = document.getElementById("email");
    const comentarios = document.getElementById("comentarios");
  
    // Validación de campos
    if (nombreUsuario.value.length < 8) {
      errores.push({ campo: "nombreUsuario", mensaje: "El nombre de usuario debe tener al menos 8 caracteres." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errores.push({ campo: "email", mensaje: "El correo electrónico no es válido." });
    }

     if (observaciones.value.length < 8) {
      errores.push({ campo: "observaciones", mensaje: "Las observaciones deben tener al menos 10 caracteres." });
    }
  
    // Si la longitud del array de errores es > 0, significa que hay algún error)
    if (errores.length > 0) {
        let h3 = document.createElement('h3')
        h3.id='encabezado_errores' // creamos un h3 para indicar que hay errores
        h3.innerHTML = `Hay ${errores.length} errores en el formulario`
        resumenErrores.appendChild(h3)

        let ol = document.createElement('ol')
        errores.forEach(error => {
            const enlaceError = document.createElement("a");
            enlaceError.href = "#";
            enlaceError.textContent = error.mensaje;
            enlaceError.addEventListener("click", function (event) {
                event.preventDefault();
                document.getElementById(error.campo).focus();
            });
            const errorLi = document.createElement("li");
            errorLi.appendChild(enlaceError);
            ol.appendChild(errorLi)
      });
      resumenErrores.appendChild(ol);
      resumenErrores.style.display = "block";
      resumenErrores.focus();
    } else {
      alert("Formulario enviado con éxito");
    }
  });
