class Reserva {
  cliente;
  telefono;
  mail;
  constructor(cliente, telefono, mail) {
    this.cliente = cliente;
    this.telefono = telefono;
    this.mail = mail;
  }
}
const reservas = [];

function limpiarFormulario(formulario) {
  formulario.reset();
}

function guardarReservas() {
  localStorage.setItem("reservas", JSON.stringify(reservas));
}
