let inicio = "salir";
let escamas = 1;
let granos = 2;
let papillas = 3;

let alimento = 1;
let iluminacion = 2;
let equipos = 3;

let precioIluminacion = 0;
let precioIluminacion2 = 0;
let precioAlimento = 0;
let precioAlimento2 = 0;
let precioEquipos = 0;
let precioEquipos2 = 0;

const suma = (
  precioIluminacion,
  precioIluminacion2,
  precioAlimento,
  precioAlimento2,
  precioEquipos,
  precioEquipos2
) => {
  let sumaTotal =
    precioAlimento +
    precioAlimento2 +
    precioIluminacion +
    precioIluminacion2 +
    precioEquipos +
    precioEquipos2;
  return sumaTotal;
};

function opcionAlimento(a, b, c) {
  if (a === b) {
    precioAlimento = c;
    return precioAlimento;
  }
}

function opcionAlimento2(a, b, c) {
  if (a === b) {
    precioAlimento2 = c;
    return precioAlimento2;
  }
}

function opcionIluminacion(a, b, c) {
  if (a === b) {
    precioIluminacion = c;
    return precioIluminacion;
  }
}

function opcionIluminacion2(a, b, c) {
  if (a === b) {
    precioIluminacion2 = c;
    return precioIluminacion2;
  }
}

function opcionEquipos(a, b, c) {
  if (a === b) {
    precioEquipos = c;
    return precioEquipos;
  }
}

function opcionEquipos2(a, b, c) {
  if (a === b) {
    precioEquipos2 = c;
    return precioEquipos2;
  }
}

inicio = alert(
  "Bienvenidx! Esto es BLUE, una empresa comprometida con la acuariofilia, estamos aquí para asesorarte en este aposionante hobby"
);

while (inicio != "salir") {
  let acuario = parseInt(
    prompt(
      "seleccione el tipo de acuario que usted posee ingresando el número que le corresponde: 1= Acuario plantado, 2 = Acuario tropical"
    )
  );

  while (acuario > 2) {
    alert("Opción incorrecta, seleccione nuevamente porfavor");
    acuario = parseInt(
      prompt(
        "Seleccione el tipo de acuario que usted posee ingresando el número que le corresponde: 1= Acuario plantado, 2 = Acuario tropical"
      )
    );
  }

  entrada = alert("Usted ha ingresado al area de compras!");

  while (entrada != "salir") {
    switch (acuario) {
      case 1:
        alert("¡Benvendix a la sección de acuarios plantados!");
        productos = parseInt(
          prompt(
            "Ingrese el tipo de producto que usted está buscando: 1 = Alimento, 2 = Iluminacion, 3 = Equipos"
          )
        );

        while (productos > 3) {
          alert("Opcion incorrecta, seleccione un opción nuevamente");
          productos = parseInt(
            prompt(
              "Ingrese el tipo de producto que usted está buscando: 1 = Alimento, 2 = Iluminacion, 3 = Equipos"
            )
          );
        }

        if (productos === alimento) {
          tipoAlimento = parseInt(
            prompt(
              "Contamos con una amplia variedad de alimentos, seleccione su preferido: 1 = escamas, 2 = granos, 3 = papillas"
            )
          );
          while (tipoAlimento > 3) {
            alert("Opcion incorrecta, seleccione un opción nuevamente");
            tipoAlimento = parseInt(
              prompt(
                "Contamos con una amplia variedad de alimentos, seleccione su preferido: 1 = escamas, 2 = granos, 3 = papillas"
              )
            );
          }
          opcionAlimento(tipoAlimento, 1, 400);

          opcionAlimento(tipoAlimento, 2, 200);

          opcionAlimento(tipoAlimento, 3, 600);
        } else if (productos === iluminacion) {
          tipoIluminacion = parseInt(
            prompt(
              "Contamos con una amplia variedad de pantallas, seleccione su preferida: 1 = led50w, 2 = led90w, 3 = led110w"
            )
          );
          while (tipoIluminacion > 3) {
            alert("Opcion incorrecta, seleccione un opción nuevamente");
            tipoIluminacion = parseInt(
              prompt(
                "Contamos con una amplia variedad de pantallas, seleccione su preferida: 1 = led50w, 2 = led90w, 3 = led110w"
              )
            );
          }

          opcionIluminacion(tipoIluminacion, 1, 400);

          opcionIluminacion(tipoIluminacion, 2, 700);

          opcionIluminacion(tipoIluminacion, 3, 500);
        } else if (productos === equipos) {
          equipos = parseInt(
            prompt(
              "Contamos con una amplia variedad de equipos, seleccione su preferido: 1 = equipo1, 2 = equipo2, 3 = equipo3"
            )
          );
          while (equipos > 3) {
            alert("Opcion incorrecta, seleccione un opción nuevamente");
            equipos = parseInt(
              prompt(
                "Contamos con una amplia variedad de equipos, seleccione su preferido: 1 = equipo1, 2 = equipo2, 3 = equipo3"
              )
            );
          }

          opcionEquipos(equipos, 1, 400);

          opcionEquipos(equipos, 2, 700);

          opcionEquipos(equipos, 3, 500);
        }
        break;

      case 2:
        alert("¡Benvendix a la sección de acuarios tropicales!");
        productos = parseInt(
          prompt(
            "Ingrese el tipo de producto que usted está buscando: 1 = Alimento, 2 = Iluminacion, 3 = Equipos"
          )
        );
        while (productos > 3) {
          alert("Opcion incorrecta, seleccione un opción nuevamente");
          productos = parseInt(
            prompt(
              "Ingrese el tipo de producto que usted está buscando: 1 = Alimento, 2 = Iluminacion, 3 = Equipos"
            )
          );
        }
        if (productos === alimento) {
          tipoAlimento = parseInt(
            prompt(
              "Contamos con una amplia variedad de alimentos, seleccione su preferido: 1 = escamas, 2 = granos, 3 = papillas"
            )
          );
          while (tipoAlimento > 3) {
            alert("Opcion incorrecta, seleccione un opción nuevamente");
            tipoAlimento = parseInt(
              prompt(
                "Contamos con una amplia variedad de alimentos, seleccione su preferido: 1 = escamas, 2 = granos, 3 = papillas"
              )
            );
          }

          opcionAlimento2(tipoAlimento, 1, 400);

          opcionAlimento2(tipoAlimento, 3, 700);

          opcionAlimento2(tipoAlimento, 2, 500);
        } else if (productos === iluminacion) {
          tipoIluminacion = parseInt(
            prompt(
              "Contamos con una amplia variedad de pantallas, seleccione su preferida: 1 = led50w   , 2 = led90w, 3 = led110w"
            )
          );
          while (tipoIluminacion > 3) {
            alert("Opcion incorrecta, seleccione un opción nuevamente");
            tipoIluminacion = parseInt(
              prompt(
                "Contamos con una amplia variedad de pantallas, seleccione su preferida: 1 = led50w, 2 = led90w, 3 = led110w"
              )
            );
          }

          opcionIluminacion2(tipoIluminacion, 1, 400);

          opcionIluminacion2(tipoIluminacion, 2, 600);

          opcionIluminacion2(tipoIluminacion, 3, 500);
        } else if (productos === equipos) {
          equipos = parseInt(
            prompt(
              "Contamos con una amplia variedad de equipos, seleccione su preferido: 1 = equipo1, 2 = equipo2, 3 = equipo3"
            )
          );
          while (equipos > 3) {
            alert("Opcion incorrecta, seleccione un opción nuevamente");
            equipos = parseInt(
              prompt(
                "Contamos con una amplia variedad de equipos, seleccione su preferido: 1 = equipo1, 2 = equipo2, 3 = equipo3"
              )
            );
          }

          opcionEquipos2(equipos, 1, 400);

          opcionEquipos2(equipos, 2, 700);

          opcionEquipos2(equipos, 3, 500);
        }
        break;
    }

    entrada = prompt(
      "Gracias por su compra! Si desea realizar compras en otra sección o ir al carrito, escriba SALIR. Si desea continuar comprando en esta sección presione enter"
    ).toLowerCase();
  }

  inicio = prompt(
    "Si desea realizar compras en otra sección precione ENTER, para dirigirse al carrito ingrese salir"
  ).toLowerCase();
}

console.log(
  `Usted debe abonar ${suma(
    precioIluminacion,
    precioIluminacion2,
    precioAlimento,
    precioAlimento2,
    precioEquipos,
    precioEquipos2
  )}$`
);
