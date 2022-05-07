$(document).ready(function() {
    $('#basic-form').validate( {
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        age: {
          required: true,
          number: true,
          min: 18
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        },
        password_confirmation: {
          required: true,
          minlength: 6,
          equalTo: "#password"
        },
      },
      messages : {
            name: {
              minlength: "Nombre no valido",
              required: "Nombre requerido",
            },
            age: {
              required: "Por favor ingrese su edad",
              number: "Tiene que ser un numero",
              min: "Tienes que ser mayor de 18 años"
            },
            email: {
              email: "Tu correo no tiene un formato correcto",
              requited: "Correo requerido"
            },
            password: {
              required: "Contraseña requerida",
              minlength: "La contraseña debe tener al menos 6 caracteres"
            },
            password_confirmation: {
              required: "Confirmacion de contraseña requerida",
              minlength: "La contraseña debe tener al menos 6 caracteres",
              equalTo: "Las contraseñas no coinciden"
          }
      },
        });
      });