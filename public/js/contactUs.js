const name = document.getElementById("name");
const phone = document.getElementById("phone");
const message = document.getElementById("input");
const submitLink = document.getElementById("submitLink");

const baseUrl = "mailto:info@itismusavirlik.com";

submitLink.href = baseUrl;

function sendMail() {
  let urlParams = `?subject=Website&body=${name.value}%0D%0A${phone.value}%0D%0A${message.value}`;
  submitLink.href = baseUrl + urlParams;
  window.location.href = baseUrl + urlParams;
}


