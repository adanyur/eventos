$(document).ready(() => {
  $("#formEvent").submit((e) => {
    $.post("event.php", $("#formEvent").serialize(), (data) => {
      const { success, errors } = JSON.parse(data);
      !success && message(errors);
      success && console.log("registrar");
    });
    e.preventDefault();
  });
});

const message = (errors) => {
  if (errors.nombre) {
    $(`#Nombre-required`).text(errors.nombre);
  }
  if (errors.apellido) {
    $(`#Apellido-required`).text(errors.apellido);
  }
  if (errors.documento) {
    $(`#Documento-required`).text(errors.documento);
  }
  if (errors.celular) {
    $(`#Celular-required`).text(errors.celular);
  }
  if (errors.correo) {
    $(`#Correo-required`).text(errors.correo);
  }
  if (errors.iafas) {
    $(`#Iafas-required`).text(errors.iafas);
  }
  if (errors.clinica) {
    $(`#Clinica-required`).text(errors.clinica);
  }
};
