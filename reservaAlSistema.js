//elementos del documento
const inputNomApe = document.getElementById("input");
const inputTelf = document.getElementById("inputDos");
const inputMail = document.getElementById("inputTres");
const btnEnviar = document.getElementById("btnEnviar");
const miFormulario = document.getElementById("formulario");

//agregando eventos

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  validarFormulario();
  guardarReservas();
});

function reservarHabitacion() {
  const nuevaReserva = new Reserva(
    inputNomApe.value,
    inputTelf.value,
    inputMail.value
  );
  reservas.push(nuevaReserva);
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Perfecto! Nos contactaremos contigo a la brevedad!",
    showConfirmButton: false,
    timer: 1500,
  });
  limpiarFormulario(miFormulario);
}

function validarFormulario() {
  const validacion =
    inputNomApe.value !== "" &&
    inputNomApe.value !== null &&
    inputNomApe.value !== undefined &&
    inputTelf.value !== "" &&
    inputTelf.value !== null &&
    inputTelf.value !== undefined &&
    inputMail.value !== "" &&
    inputMail.value !== null &&
    inputMail.value !== undefined;
  validacion === true
    ? reservarHabitacion()
    : Swal.fire("Complete todos los campos!");
}

function limpiarFormulario(formulario) {
  formulario.reset();
}

function guardarReservas() {
  localStorage.setItem("reservas", JSON.stringify(reservas));
}

const contactenos = document.getElementById("contactenos");

contactenos.addEventListener("click", tostada);

function tostada() {
  Toastify({
    text: "Wpp: +54 11-2354-9897",
    duration: 5000,
    destination: "https://web.whatsapp.com/",
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}
