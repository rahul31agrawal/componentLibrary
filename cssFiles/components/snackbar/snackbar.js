
const bottombtn = document.querySelector("#btn-bottom");
const bottomsnackbar = document.querySelector(".bottom")
const closeBottom = document.querySelector("#close-bottom")

function showSnackbar(e) {
    bottomsnackbar.classList.add("show")
    setTimeout(function () { bottomsnackbar.classList.remove("show"); }, 3000)
}


function hideSnackbar(e) {
    bottomsnackbar.classList.remove("show")
}

bottombtn.addEventListener("click", e => showSnackbar(e))
closeBottom.addEventListener("click", e => hideSnackbar(e))