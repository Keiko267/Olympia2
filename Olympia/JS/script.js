/*const expresiones = {
  nombre: /^<a-zA-ZÀ-ÿ\s]{1,16}-$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-p-.]+$/,
  telefono: /^\d{9}/
} */

const res = require("express/lib/response");

// El nombre no puede estar en blanco.
function validartxtNombre() {
  var enviar = false;
  var objeto = document.getElementById("txtNombre");
  var spanerror = document.getElementById("txtNombreError");
  if ((objeto.value).length > 0) {
    if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(objeto.value)) {
      // ocultar el span
      spanerror.className = 'error0';
      // Cumple la condición, se cambia el estado de enviar a true
      return enviar = true;
    }
    else {
      spanerror.innerHTML = "Error, el campo nombre no puede incluir símbolos";
      spanerror.className = 'error1';
      return enviar = false
    }
  }
  else {
    // No cumple, se lanza error y se muestra span con mensaje de error
    spanerror.innerHTML = "Error, el campo nombre no puede estar en blanco.";
    // activar visibilidad del span error
    spanerror.className = "error1";
    // Se cambia el estado de enviar a false por no cumplir requisitos
    return enviar = false;
  }
}

// Los apellidos no pueden estar en blanco y se deben introducirse al menos dos apellidos.
function validartxtApellidos() {
  var enviar = false;
  var objeto = document.getElementById("txtApellidos");
  var spanerror = document.getElementById("txtApellidosError");
  if ((objeto.value).length > 0) {
    // Cumple la condición, comprobar que tiene espacio. 
    if (/^([a-zA-ZÀ-ÿ]+[\s]*)+$/.test(objeto.value)) {
      // ocultar el span
      spanerror.className = "error0";
      // Cumple la condición, se cambia el estado de enviar a true
      return enviar = true;
    } else {
      // No cumple, se lanza error y se muestra span con mensaje de error
      spanerror.innerHTML = "Error los apellidos no pueden contener símbolos.";
      // activar visibilidad del span error
      spanerror.className = "error1";
      // Se cambia el estado de enviar a false por no cumplir requisitos
      return enviar = false;
    }

  } else {
    // No cumple, se lanza error y se muestra span con mensaje de error
    spanerror.innerHTML = "Error, el campo apellido no puede estar en blanco.";
    // activar visibilidad del span error
    spanerror.className = "error1";
    // Se cambia el estado de enviar a false por no cumplir requisitos
    return enviar = false;
  }
}
// Email no puede estar en blanco y tiene que ser del estilo de la expresión
function validartxtEmail() {
  var enviar = false;
  var objeto = document.getElementById("txtEmail");
  var spanerror = document.getElementById("txtEmailError");
  if ((objeto.value).length > 0) {
    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-p-.]+$/.test(objeto.value)) {
      spanerror.className = "error0";
      return enviar = true;
    }
    else {
      spanerror.innerHTML = "Error, compruebe que es una dirección de email válida";
      spanerror.className = "error1";
      return enviar = false;
    }
  }
  else {
    spanerror.innerHTML = "Error, el campo email no puede estar en blanco";
    spanerror.className = "error1";
    return enviar = false;
  }
}
//Personas no puede ser nulo, el mínimo y máximo están controlados en el HTML
function validarPersonas() {
  var enviar = false;
  var objeto = document.getElementById("Personas_input").value;
  var spanerror = document.getElementById("Personas_inputError");
  if (objeto >= 1) { // Porque la opción por defecto es " "
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, el campo no puede estar en blanco";
    spanerror.className = "error1";
    return enviar = false;
  }

}

function validarTelefono() {
  var enviar = false;
  var objeto = document.getElementById("numTelefMovil");
  var spanerror = document.getElementById("numTelefMovilError");
  if ((objeto.value == 0)) {
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    if (/^[7|6]{1}([\d]{2}[-]*){3}[\d]{2}$/.test(objeto.value)) {
      spanerror.className = "error0";
      return enviar = true;
    }
    else {
      spanerror.innerHTML = "Error, el formato del teléfono no es apropiado, use el teléfono móvil";
      spanerror.className = "error1";
      return enviar = false;
    }
  }
}


//Salas no puede ser nulo, el número de salas está controlado en el HTML
function validarSala() {
  var enviar = false;
  var objeto = document.getElementById("Salas_input").value;
  var spanerror = document.getElementById("Salas_inputError");
  if (objeto >= 1) {
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, el campo no puede estar en blanco";
    spanerror.className = "error1";
  }
}
// Fecha no puede ser nulo ni ser anterior a la de hoy
function validarFecha() {
  var enviar = false;
  var objeto = document.getElementById("Fecha_input");
  var spanerror = document.getElementById("Fecha_inputError");
  var date = new Date(objeto.value); //date = La string que pido de día y hora
  var validated = date > Date.now(); // Se puede poner mayor porque se mide en ms a partir de una fecha
  if (validated) {
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, la fecha escogida no puede ser anterior a la de hoy";
    spanerror.className = "error1";
    return enviar = false;
  }
}

function validarNHoras() {
  var enviar = false;
  var objeto = document.getElementById("NHoras");
  var objeto2 = document.getElementById("NHoras2");
  var objeto3 = document.getElementById("NHoras3");
  var spanerror = document.getElementById("NHorasError");
  if (objeto.checked || objeto2.checked || objeto3.checked) { //Para ver si ha marcado al menos una de las opciones
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, debe seleccionar al menos una opción";
    spanerror.className = "error1";
    return enviar = false;
  }
}

function validarPrivacidad() {
  var enviar = false;
  var objeto = document.getElementById("Privacidad_input");
  var spanerror = document.getElementById("Privacidad_inputError");
  if (objeto.checked) { // Checked es un valor que te permite saber si está... checked
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, debe aceptar la política de privacidad";
    spanerror.className = "error1";
    return enviar = false;
  }
}
// Función para obtener los datos del formulario y ponerlos de forma que el POST funcione
function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};
  $.map(unindexed_array, function (n, i) {
    indexed_array[n['name']] = n['value'];
  });


  return indexed_array;
}


// "nombre": "carlos",
// "apellido": "de la Torre"

// funcion a ejecutar cuando se pulse el boton enviar
function enviarFormulario() {
  var contador = 0;
  if (validartxtNombre()) {
    contador++;
  }
  if (validartxtApellidos()) {
    contador++;
  }
  if (validartxtEmail()) {
    contador++;
  }
  if (validarTelefono()) {
    contador++;
  }
  if (validarFecha()) {
    contador++;
  }
  if (validarPersonas()) {
    contador++;
  }
  if (validarSala()) {
    contador++;
  }
  if (validarNHoras()) {
    contador++;
  }

  if (validarPrivacidad()) {
    contador++;
  }

  if (contador == 9) {
    // si ha pasado la valición mostrar alert y enviar formulario
    alert("Reserva hecha, gracias");
    var $form = $("#formulario1");
    var data = getFormData($form);
    var formData = JSON.stringify(data);
    // Llamada a la función que hace un POST desde el formulario
    postReservaForm(formData);
    document.formulario1.submit();
    window.location.href = ("./index.html");


  }
  else alert("Error, revise los campos");
}




// Recupera una reserva y la introduce en una tabla
function getReserva(reservaId) {
  $("#MiTabla tr td").remove();
  var myUrl = "http://localhost:8080/reservas/" + reservaId;
  $.ajax({
    type: "GET",
    dataType: "json",
    url: myUrl,
    success: function (data) {
      var row = $('<tr><td>' + data[0]._id + '</td><td>' + data[0].txtNombre + '</td><td>' + data[0].txtApellidos + '</td><td>' + data[0].txtEmail + '</td><td>' + data[0].numTelefMovil + '</td><td>' + data[0].Personas_input + '</td><td>' + data[0].Salas_input + '</td><td>' + data[0].Fecha_input + '</td><td>' + data[0].NHoras + '</td><td>' + data[0].Adicional + '</td></tr>');
      $("#MiTabla").append(row);
    },
    error: function (res) {
      let mensaje = JSON.parse(res.responseText);
      alert("ERROR: " + mensaje.msg);
    }
  })
}
// Borra todas las reservas
function deleteAllReserva() {
  var myUrl = "http://localhost:8080/reservas/";
  $.ajax({
    type: "DELETE",
    dataType: "json",
    url: myUrl,
    success: function (data) {
      $("#resReserva").html(JSON.stringify(data));
    },
    error: function (res) {
      alert("ERROR " + res.statusText);
    }
  });
}
// Añade una Reserva
function postReserva() {
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/reservas/",
    contentType: "application/json",
    dataType: "text",
    data: JSON.stringify({
      "txtNombre": "Nombre",
      "txtApellidos": "Apellidos",
      "txtEmail": "Email",
      "numTelefMovil": "666777888",
      "Personas_input": "1",
      "Salas_input": "1",
      "Fecha_input": "0000-00-00T00:00",
      "NHoras": "1",
      "Adicional": "Adicional",
      "Privacidad_input": "Privacidad"
    }),
    success: function (data) {
      $("#resReserva").html(JSON.stringify(data));
    },
    error: function (res) {

      alert("ERROR: " + res.statusText);
    }
  });
}

// Añade una reserva desde un formulario
function postReservaForm(formData) {
  var myUrl = "http://localhost:8080/reservas/";
  $.ajax({
    type: "POST",
    url: myUrl,
    contentType: "application/json",
    dataType: "json",
    data: formData,
    success: function (data) {
      $("#resReserva").html(JSON.stringify(data));
    },
    error: function (res) {
      alert("ERROR: " + res.statusText);
    }
  });
}


/*function getAllReservas() {
  var myUrl = "http://localhost:8080/reservas/";
  $.ajax({
      type: "GET",
      dataType: "json",
      url: myUrl,
      success: function(data) {
      $("#resReserva").html(JSON.stringify(data));
      },
      error: function(res) {
          alert("ERROR " + res.statusText);
      }
  });
}
*/
// Recupera todas las reservas y las muestra en formato tabla
function getAllReservas2() {
  $("#MiTabla tr td").remove()
  var myUrl = "http://localhost:8080/reservas/"
  $.ajax({
    type: "GET",
    dataType: "json",
    url: myUrl,
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var row = $('<tr><td>' + data[i]._id + '</td><td>' + data[i].txtNombre + '</td><td>' + data[i].txtApellidos + '</td><td>' + data[i].txtEmail + '</td><td>' + data[i].numTelefMovil + '</td><td>' + data[i].Personas_input + '</td><td>' + data[i].Salas_input + '</td><td>' + data[i].Fecha_input + '</td><td>' + data[i].NHoras + '</td><td>' + data[i].Adicional + '</td></tr>');
        $("#MiTabla").append(row);
      }
    },
    error: function (res) {
      let mensaje = JSON.parse(res.responseText);
      alert("ERROR: " + mensaje.msg);
    }
  });
}
// Borra una reserva
function deleteReserva(reservaId) {
  var myUrl = "http://localhost:8080/reservas/" + reservaId;
  $.ajax({
    type: "DELETE",
    url: myUrl,
    dataType: "json",
    success: function (data) {
      $("#resReserva").html(JSON.stringify(data));
    },
    error: function (res) {
      let mensaje = JSON.parse(res.responseText);
      alert("ERROR: " + mensaje.msg);
    }
  });
}
// Actualiza una reserva
function updateReserva(reservaId) {
  var myUrl = "http://localhost:8080/reservas/" + reservaId;
  $.ajax({
    type: "PUT",
    url: myUrl,
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({
      "txtNombre": "Nombre",
      "txtApellidos": "Apellidos",
      "txtEmail": "Email",
      "numTelefMovil": "666777888",
      "Personas_input": "1",
      "Salas_input": "1",
      "Fecha_input": "0000-00-00T00:00",
      "NHoras": "1",
      "Adicional": "Adicional",
      "Privacidad_input": "Privacidad"
    }),
    success: function (data) {
      $("#resReserva").html(JSON.stringify(data));
    },
    error: function (res) {
      let mensaje = JSON.parse(res.responseText);
      alert("ERROR: " + mensaje.msg);
    }
  });
}
