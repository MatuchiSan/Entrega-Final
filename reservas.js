class Reserva {
  cliente;
  telefono;
  mail;
  habitacion;

  /**
   * Constructor que genera una cuenta de banco con los datos iniciales del asociado
   * @param {String} cliente Nombre del titular de la cuenta
   * @param {String} telefono Contacto, ya sea numero de telefono o email
   * @param {String} mail Saldo inicial de la cuenta
   * @param {String} habitacion Limite de extraccion de la cuenta
   */

  constructor(cliente, telefono, mail, habitacion) {
    this.cliente = cliente;
    this.telefono = telefono;
    this.mail = mail;
    this.habitacion = habitacion;
  }
}

const reservas = [];

const inputNomApe = document.getElementById("input");
const inputTelf = document.getElementById("inputDos");
const inputMail = document.getElementById("inputTres");
const inputOpciones = document.getElementById("opciones");
const btnEnviar = document.getElementById("btnEnviar");
const miFormulario = document.getElementById("formulario");

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  reservarHabitacion();
  alert(
    "¡Se enviaron sus datos correctamente, nos comunicaremos con usted a la brevedad!"
  );
  limpiarFormulario(miFormulario);
});

function reservarHabitacion() {
  const nuevaReserva = new Reserva(
    inputNomApe.ariaValueMax,
    inputTelf.ariaValueMax,
    inputMail.ariaValueMax
  );
  reservas.push(nuevaReserva);
}

function limpiarFormulario(formulario) {
  formulario.reset();
}
