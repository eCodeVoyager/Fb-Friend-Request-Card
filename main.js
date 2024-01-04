var btnConfirm = document.querySelector("#btn1");
var btnDelete = document.querySelector("#btn2");

btnConfirm.addEventListener("click", function () {
  console.log("Confirm");
});
btnDelete.addEventListener("click", function () {
  btnConfirm.style.display = "none";
  btnDelete.style.backgroundColor = "#505151";
  btnDelete.style.color = "#7c8686";
  btnDelete.innerHTML = "Request Deleted";
  btnDelete.style.marginTop = "43px";
  setTimeout(function () {
    btnConfirm.style.display = "block";
    btnDelete.style.backgroundColor = "#3a3b3c";
    btnDelete.style.color = "#fff";
    btnDelete.innerHTML = "Delete";
    btnDelete.style.marginTop = "4px";
  }, 10000);
});

btnConfirm.addEventListener("click", function () {
  btnConfirm.style.display = "none";
  btnDelete.style.backgroundColor = "#505151";
  btnDelete.style.color = "#7c8686";
  btnDelete.innerHTML = "Request Accepted";
  btnDelete.style.marginTop = "43px";
  setTimeout(function () {
    btnConfirm.style.display = "block";
    btnDelete.style.backgroundColor = "#3a3b3c";
    btnDelete.style.color = "#fff";
    btnDelete.innerHTML = "Delete";
    btnDelete.style.marginTop = "4px";
  }, 10000);
});
