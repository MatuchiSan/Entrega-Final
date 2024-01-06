//elementos del documento
const inputNomApe = document.getElementById("input");
const inputTelf = document.getElementById("inputDos");
const inputMail = document.getElementById("inputTres");
const btnEnviar = document.getElementById("btnEnviar");
const miFormulario = document.getElementById("formulario");

//agregando eventos

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  reservarHabitacion();
  guardarReservas();
  alert(
    "¡Se enviaron sus datos correctamente, nos comunicaremos con usted a la brevedad!"
  );
  limpiarFormulario(miFormulario);
  alert(JSON.stringify(reservas));
});

function reservarHabitacion() {
  const nuevaReserva = new Reserva(
    inputNomApe.value,
    inputTelf.value,
    inputMail.value
  );
  reservas.push(nuevaReserva);
}
