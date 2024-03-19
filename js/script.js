const totalToPay = document.getElementById("total-to-pay");
const quantity = document.getElementById("quantity");
const category = document.getElementById("category");
const btnResumen = document.getElementById("btn-resumen");

const calculatePayment = () => {
  const ticketValue = 200;
  const discount = quantity.value * ticketValue * category.value;
  const total = quantity.value * ticketValue - discount;
  totalToPay.innerText = `Total a pagar: $${total}`;
};

btnResumen.addEventListener("click", calculatePayment);
