const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("input");
const submitLink = document.getElementById("submitLink");

const baseUrl = "mailto:info@itismusavirlik.com";
const subject = "İtiş Müşavirlik İletişim";

submitLink.href = baseUrl;

function sendMail() {
  let urlParams = `?subject=${subject}&body=${message.value}%0D%0A%0D%0A${name.value}%0D%0A${phone.value}%0D%0A${email.value}`;
  submitLink.href = baseUrl + urlParams;
  window.location.href = baseUrl + urlParams;
}
