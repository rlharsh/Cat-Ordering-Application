const cartEl = document.querySelector("#cart")
const dashboardEl = document.querySelector(".dashboard")
const cartTriggerEl = document.querySelector("#cart-a")

cartEl.addEventListener("click", processClick)
cartTriggerEl.addEventListener("click", processClick)

function processClick(e) {
    
    cartEl.checked = !cartEl.checked
    e.preventDefault()

    if (cartEl.checked) {
        document.getElementById("menu-container").style.paddingRight = "360px"
        document.getElementById("dashboard-order").style.display = "block"
    } else {
        document.getElementById("menu-container").style.paddingRight = "20px"
        document.getElementById("dashboard-order").style.display = "none"
    }
}