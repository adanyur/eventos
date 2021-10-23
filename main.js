$(document).ready(() => {
  $("#formEvent").submit((e) => {
    $.post("event.php", $("#formEvent").serialize(), (data) => {
      const { success, errors, message } = JSON.parse(data);
      !success && messageErrors(errors);
      success && messageSuccess(message);
    });
    e.preventDefault();
  });
});

$("#formEvent").keyup((e) => {
  removeMessage(e.target.id);
  $(`#${e.target.id}`).removeClass("invalid");
});

const messageSuccess = (message) => {
  let template = `<div class="group" ><span class="message__valid">${message}</span></div>`;
  $("#message__success").html(template);
};

const messageInvalid = ({ nameInput, message }) => {
  $(`#${nameInput}__required`).text(message);
  $(`#${nameInput}`).addClass("invalid");
};

const removeMessage = (nameInput) => {
  $(`#${nameInput}__required`).text("");
};

const messageErrors = (errors) => {
  $("#message__success").empty();
  for (const key in errors)
    messageInvalid({ nameInput: key, message: errors[key] });
};
