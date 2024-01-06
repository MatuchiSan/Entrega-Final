//funcion creadorar de habitaciones para un hotel
class Habitaciones {
  constructor(nombre, capacidad, precio, info) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.precio = precio;
    this.info = info;
  }
}
//habitaciones
const zeus = new Habitaciones(
  "ZEUS",
  "1 o 2 personas",
  10000,
  "Su imponente vista a la laguna a través del bow-window, su sillón chaise Longue, hacen de esta suite, una de las preferidas de nuestros huéspedes."
);
const afrodita = new Habitaciones(
  "AFRODITA",
  "2 personas",
  15000,
  "El ingreso a esta suite es a través de la galería de las glicinas. Los muebles de época y su ambientación ofrecen un marco ideal para disfrutar de una estadía romantica."
);
const apolo = new Habitaciones(
  "APOLO",
  "4 personas",
  20000,
  "Consta de dos habitaciones, conectadas como las antiguas “casas chorizo”, por una puerta. Sus muebles originales en estilo Italiano hacen de esta esta suite una de las preferidas entre las familias que nos visitan. La vista que ofrece es al bellísimo Patio de Apolo"
);
const dioniso = new Habitaciones(
  "DIONISO",
  "4 personas",
  24000,
  "A travesando la vinoteca, podemos ingresar a esta suite en donde priman los tonos negros, blancos y colorados. Muebles estilo “Renacimiento Holandés”, como el respaldo de la cama con boiserie, ropero y cómoda originales del siglo XIX son parte de la ambientación. Desde el ventanal, se puede apreciar la Laguna, el Patio de Apolo. Consta de dos habitaciones y un jacuzzi."
);

function mostrarHabitacion(habitacion) {
  Swal.fire({
    title: habitacion.nombre,
    text: `${habitacion.info}\n // Capaciadad: ${habitacion.capacidad} // Precio: \$${habitacion.precio}`,
    imageUrl: "./imagenes/" + habitacion.nombre + ".jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}

function mostrarHabitacionZeus() {
  mostrarHabitacion(zeus);
}

function mostrarHabitacionAfrodita() {
  mostrarHabitacion(afrodita);
}

function mostrarHabitacionApolo() {
  mostrarHabitacion(apolo);
}

function mostrarHabitacionDioniso() {
  mostrarHabitacion(dioniso);
}

const verZeus = document.getElementById("verZeus");
verZeus.addEventListener("click", mostrarHabitacionZeus);

const verAfrodita = document.getElementById("verAfrodita");
verAfrodita.addEventListener("click", mostrarHabitacionAfrodita);

const verApolo = document.getElementById("verApolo");
verApolo.addEventListener("click", mostrarHabitacionApolo);

const verDioniso = document.getElementById("verDioniso");
verDioniso.addEventListener("click", mostrarHabitacionDioniso);
