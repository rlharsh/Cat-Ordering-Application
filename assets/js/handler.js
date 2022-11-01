import { menuArray } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let modalShowing = false

function showInformationModal(val) {
    modalShowing = true

    const blackOutEl = document.getElementById("black-out")
    const modalEl = document.getElementById("information-modal")

    blackOutEl.style.visibility = "visible"
    modalEl.style.display = "block"
    
    const item = menuArray.filter((item) => item.uuid == val)[0]
    
    let modalImage = document.getElementById("modal-image")
    modalImage.setAttribute("src", item.image)

    let modalName = document.getElementById("modal-name")
    modalName.textContent = item.name

    let rawIngredients = ""

    for (let ingredient of item.ingredients) {
        rawIngredients += ingredient + ", "
    }

    let modalIngredients = document.getElementById("modal-ingredients")
    modalIngredients.textContent = rawIngredients

    let modalPrice = document.getElementById("modal-price")
    modalPrice.textContent = "$" + item.price

    let modalButton = document.getElementById("modal-button")
    modalButton.setAttribute('data-information', item.uuid)

    let modalDescription = document.getElementById("modal-description")
    modalDescription.textContent = item.detailedDescription

}

function hideModalInformation() {
    modalShowing = !modalShowing
    const blackOutEl = document.getElementById("black-out")
    const modalEl = document.getElementById("information-modal")

    blackOutEl.style.visibility = "hidden"
    modalEl.style.display = "none"
}

function renderMenu() {
    var appetizerDataEl = document.querySelector("#appetizer-container")
    var entreeDataEl = document.querySelector("#entree-container")
    var dessertDataEl = document.querySelector("#dessert-container")


    const appetizerData = menuArray.filter((item) => item.category == 'appetizer')
    const entreeData = menuArray.filter((item) => item.category == 'entree')
    const dessertData = menuArray.filter((item) => item.category == 'dessert')

    appetizerData.map( item => {
        var itemCard = document.createElement('div')
        itemCard.setAttribute('class', 'card')
        itemCard.setAttribute('data-item', item.uuid)

        var imageContainer = document.createElement('div')
        imageContainer.setAttribute('class', 'card__image__container')

        var heartContainer = document.createElement('div')
        heartContainer.setAttribute('class', 'card__heart__container')


        var heartSpan = document.createElement('i')
        heartSpan.innerHTML = '<i class="fa-regular fa-heart"></i>'
        heartContainer.prepend(heartSpan)

        var cardImageDescription = document.createElement('div')
        cardImageDescription.setAttribute('class', 'card__image__description')
        cardImageDescription.innerText = item.description

        var cardButtton = document.createElement('button')
        cardButtton.setAttribute('class', 'btn btn--btn--detailedInformation')
        cardButtton.setAttribute('data-information', item.uuid)
        cardButtton.innerText = 'View Information '

        var infoFa = document.createElement('i')
        infoFa.innerHTML = '<i class="fa-solid fa-circle-info"></i> '
        cardButtton.prepend(infoFa)

        imageContainer.prepend(heartContainer)
        cardImageDescription.appendChild(cardButtton)

        var cardHeaderImage = document.createElement('img')
        cardHeaderImage.setAttribute('class', 'card__header__image')
        cardHeaderImage.setAttribute('src', item.image)

        imageContainer.appendChild(cardImageDescription)
        imageContainer.appendChild(cardHeaderImage)
        itemCard.appendChild(imageContainer)


        var cardDetails = document.createElement('div')
        cardDetails.setAttribute('class', 'card__details__container')

        var cardDetailsSubContainer = document.createElement('div')
        cardDetailsSubContainer.setAttribute('class', 'card__subdetails__container')

        var cardHeader = document.createElement('h1')
        cardHeader.setAttribute('class', 'card__details__title')
        cardHeader.innerText = item.name

        var cardLine = document.createElement('div')
        cardLine.setAttribute('class', 'card__details__line')

        cardDetailsSubContainer.appendChild(cardHeader)
        cardDetails.appendChild(cardDetailsSubContainer)

        var cardDetailedDescription = document.createElement('p')
        cardDetailedDescription.setAttribute('class', 'card__details__detailed__description')
        cardDetailedDescription.innerText = item.detailedDescription

        var priceDiv = document.createElement('div')
        priceDiv.setAttribute('class', 'card--details--price--container')

        var cardPrice = document.createElement('span')
        cardPrice.setAttribute('class', 'card__details__price')
        cardPrice.innerText =  '$' + item.price

        priceDiv.appendChild(cardPrice)

        var buyButtonContainer = document.createElement('div')
        buyButtonContainer.setAttribute('class', 'card-details-button-container')

        var cardButtonOrder = document.createElement('button')
        cardButtonOrder.setAttribute('class', 'btn')
        cardButtonOrder.innerText = 'Add to Order'
        cardButtonOrder.setAttribute('data-add', item.uuid)

        var infoFa = document.createElement('i')
        infoFa.innerHTML = '<i class="fa-solid fa-plus"></i> '
        cardButtonOrder.prepend(infoFa)

        buyButtonContainer.appendChild(cardButtonOrder)

        cardDetails.appendChild
        cardDetails.appendChild(cardDetailedDescription)

        itemCard.appendChild(cardDetails)
        itemCard.appendChild(priceDiv)        
        itemCard.appendChild(buyButtonContainer)

        let userLikes = item.likes
        let userDislikes = item.dislikes

        let zeroTotal = userDislikes * 0
        let fiveTotal = userLikes * 5

        let totalVotes = (item.likes + item.dislikes)
        let totalStars = (zeroTotal + fiveTotal)

        let avgStars = (totalStars/totalVotes)

        avgStars = avgStars.toPrecision(3)
        if (avgStars.toString().split("."[1]===0)) {
            //avgStars = Number(avgStars).toPrecision(1)
        }


        var starContrainer = document.createElement('div')
        starContrainer.setAttribute('class', 'card__star__rating')


        var starSpan = document.createElement('i')
        starSpan.innerHTML = '<i class="fa-regular fa-star"></i> ' + avgStars
        starContrainer.prepend(starSpan)

        var spicyContainer = document.createElement('div')
        spicyContainer.setAttribute('class', 'spicy-indicator-container')

        var spicySpan = document.createElement('i')
        spicySpan.innerHTML = '<i class="fa-solid fa-pepper-hot"></i>'
        spicyContainer.prepend(spicySpan)

        if (item.ingredients.includes('chilli')) {
            itemCard.appendChild(spicyContainer)
        }


        itemCard.appendChild(starContrainer)

        appetizerDataEl.appendChild(itemCard)

    })

    entreeData.map( item => {
        var itemCard = document.createElement('div')
        itemCard.setAttribute('class', 'card')
        itemCard.setAttribute('data-item', item.uuid)

        var imageContainer = document.createElement('div')
        imageContainer.setAttribute('class', 'card__image__container')

        var heartContainer = document.createElement('div')
        heartContainer.setAttribute('class', 'card__heart__container')


        var heartSpan = document.createElement('i')
        heartSpan.innerHTML = '<i class="fa-regular fa-heart"></i>'
        heartContainer.prepend(heartSpan)

        var cardImageDescription = document.createElement('div')
        cardImageDescription.setAttribute('class', 'card__image__description')
        cardImageDescription.innerText = item.description

        var cardButtton = document.createElement('button')
        cardButtton.setAttribute('class', 'btn btn--btn--detailedInformation')
        cardButtton.setAttribute('data-information', item.uuid)
        cardButtton.innerText = 'View Information '

        var infoFa = document.createElement('i')
        infoFa.innerHTML = '<i class="fa-solid fa-circle-info"></i> '
        cardButtton.prepend(infoFa)

        imageContainer.prepend(heartContainer)
        cardImageDescription.appendChild(cardButtton)

        var cardHeaderImage = document.createElement('img')
        cardHeaderImage.setAttribute('class', 'card__header__image')
        cardHeaderImage.setAttribute('src', item.image)

        imageContainer.appendChild(cardImageDescription)
        imageContainer.appendChild(cardHeaderImage)
        itemCard.appendChild(imageContainer)


        var cardDetails = document.createElement('div')
        cardDetails.setAttribute('class', 'card__details__container')

        var cardDetailsSubContainer = document.createElement('div')
        cardDetailsSubContainer.setAttribute('class', 'card__subdetails__container')

        var cardHeader = document.createElement('h1')
        cardHeader.setAttribute('class', 'card__details__title')
        cardHeader.innerText = item.name

        var cardLine = document.createElement('div')
        cardLine.setAttribute('class', 'card__details__line')

        cardDetailsSubContainer.appendChild(cardHeader)
        cardDetails.appendChild(cardDetailsSubContainer)

        var cardDetailedDescription = document.createElement('p')
        cardDetailedDescription.setAttribute('class', 'card__details__detailed__description')
        cardDetailedDescription.innerText = item.detailedDescription

        var priceDiv = document.createElement('div')
        priceDiv.setAttribute('class', 'card--details--price--container')

        var cardPrice = document.createElement('span')
        cardPrice.setAttribute('class', 'card__details__price')
        cardPrice.innerText =  '$' + item.price

        priceDiv.appendChild(cardPrice)

        var buyButtonContainer = document.createElement('div')
        buyButtonContainer.setAttribute('class', 'card-details-button-container')

        var cardButtonOrder = document.createElement('button')
        cardButtonOrder.setAttribute('class', 'btn')
        cardButtonOrder.innerText = 'Add to Order'

        var infoFa = document.createElement('i')
        infoFa.innerHTML = '<i class="fa-solid fa-plus"></i> '
        cardButtonOrder.prepend(infoFa)

        buyButtonContainer.appendChild(cardButtonOrder)

        cardDetails.appendChild
        cardDetails.appendChild(cardDetailedDescription)

        itemCard.appendChild(cardDetails)
        itemCard.appendChild(priceDiv)        
        itemCard.appendChild(buyButtonContainer)

        let userLikes = item.likes
        let userDislikes = item.dislikes

        let zeroTotal = userDislikes * 0
        let fiveTotal = userLikes * 5

        let totalVotes = (item.likes + item.dislikes)
        let totalStars = (zeroTotal + fiveTotal)

        let avgStars = (totalStars/totalVotes)

        avgStars = avgStars.toPrecision(3)
        if (avgStars.toString().split("."[1]===0)) {
            //avgStars = Number(avgStars).toPrecision(1)
        }


        var starContrainer = document.createElement('div')
        starContrainer.setAttribute('class', 'card__star__rating')


        var starSpan = document.createElement('i')
        starSpan.innerHTML = '<i class="fa-regular fa-star"></i> ' + avgStars
        starContrainer.prepend(starSpan)

        var spicyContainer = document.createElement('div')
        spicyContainer.setAttribute('class', 'spicy-indicator-container')

        var spicySpan = document.createElement('i')
        spicySpan.innerHTML = '<i class="fa-solid fa-pepper-hot"></i>'
        spicyContainer.prepend(spicySpan)

        if (item.ingredients.includes('chilli')) {
            itemCard.appendChild(spicyContainer)
        }


        itemCard.appendChild(starContrainer)

        entreeDataEl.appendChild(itemCard)

    })

    dessertData.map( item => {
        var itemCard = document.createElement('div')
        itemCard.setAttribute('class', 'card')
        itemCard.setAttribute('data-item', item.uuid)

        var imageContainer = document.createElement('div')
        imageContainer.setAttribute('class', 'card__image__container')

        var heartContainer = document.createElement('div')
        heartContainer.setAttribute('class', 'card__heart__container')


        var heartSpan = document.createElement('i')
        heartSpan.innerHTML = '<i class="fa-regular fa-heart"></i>'
        heartContainer.prepend(heartSpan)

        var cardImageDescription = document.createElement('div')
        cardImageDescription.setAttribute('class', 'card__image__description')
        cardImageDescription.innerText = item.description

        var cardButtton = document.createElement('button')
        cardButtton.setAttribute('class', 'btn btn--btn--detailedInformation')
        cardButtton.setAttribute('data-information', item.uuid)
        cardButtton.innerText = 'View Information '

        var infoFa = document.createElement('i')
        infoFa.innerHTML = '<i class="fa-solid fa-circle-info"></i> '
        cardButtton.prepend(infoFa)

        imageContainer.prepend(heartContainer)
        cardImageDescription.appendChild(cardButtton)

        var cardHeaderImage = document.createElement('img')
        cardHeaderImage.setAttribute('class', 'card__header__image')
        cardHeaderImage.setAttribute('src', item.image)

        imageContainer.appendChild(cardImageDescription)
        imageContainer.appendChild(cardHeaderImage)
        itemCard.appendChild(imageContainer)


        var cardDetails = document.createElement('div')
        cardDetails.setAttribute('class', 'card__details__container')

        var cardDetailsSubContainer = document.createElement('div')
        cardDetailsSubContainer.setAttribute('class', 'card__subdetails__container')

        var cardHeader = document.createElement('h1')
        cardHeader.setAttribute('class', 'card__details__title')
        cardHeader.innerText = item.name

        var cardLine = document.createElement('div')
        cardLine.setAttribute('class', 'card__details__line')

        cardDetailsSubContainer.appendChild(cardHeader)
        cardDetails.appendChild(cardDetailsSubContainer)

        var cardDetailedDescription = document.createElement('p')
        cardDetailedDescription.setAttribute('class', 'card__details__detailed__description')
        cardDetailedDescription.innerText = item.detailedDescription

        var priceDiv = document.createElement('div')
        priceDiv.setAttribute('class', 'card--details--price--container')

        var cardPrice = document.createElement('span')
        cardPrice.setAttribute('class', 'card__details__price')
        cardPrice.innerText =  '$' + item.price

        priceDiv.appendChild(cardPrice)

        var buyButtonContainer = document.createElement('div')
        buyButtonContainer.setAttribute('class', 'card-details-button-container')

        var cardButtonOrder = document.createElement('button')
        cardButtonOrder.setAttribute('class', 'btn')
        cardButtonOrder.innerText = 'Add to Order'

        var infoFa = document.createElement('i')
        infoFa.innerHTML = '<i class="fa-solid fa-plus"></i> '
        cardButtonOrder.prepend(infoFa)

        buyButtonContainer.appendChild(cardButtonOrder)

        cardDetails.appendChild
        cardDetails.appendChild(cardDetailedDescription)

        itemCard.appendChild(cardDetails)
        itemCard.appendChild(priceDiv)        
        itemCard.appendChild(buyButtonContainer)

        let userLikes = item.likes
        let userDislikes = item.dislikes

        let zeroTotal = userDislikes * 0
        let fiveTotal = userLikes * 5

        let totalVotes = (item.likes + item.dislikes)
        let totalStars = (zeroTotal + fiveTotal)

        let avgStars = (totalStars/totalVotes)

        avgStars = avgStars.toPrecision(3)
        if (avgStars.toString().split("."[1]===0)) {
            //avgStars = Number(avgStars).toPrecision(1)
        }


        var starContrainer = document.createElement('div')
        starContrainer.setAttribute('class', 'card__star__rating')


        var starSpan = document.createElement('i')
        starSpan.innerHTML = '<i class="fa-regular fa-star"></i> ' + avgStars
        starContrainer.prepend(starSpan)

        var spicyContainer = document.createElement('div')
        spicyContainer.setAttribute('class', 'spicy-indicator-container')

        var spicySpan = document.createElement('i')
        spicySpan.innerHTML = '<i class="fa-solid fa-pepper-hot"></i>'
        spicyContainer.prepend(spicySpan)

        if (item.ingredients.includes('chilli')) {
            itemCard.appendChild(spicyContainer)
        }


        itemCard.appendChild(starContrainer)

        dessertDataEl.appendChild(itemCard)

    })
}

function addItemToCart(val) {
    const item = menuArray.filter((item) => item.uuid == val)[0]
    const orderEl = document.getElementById('order-summary-items')

    let orderItem = document.createElement('div')
    orderItem.setAttribute('class', 'order-item')

    let imageContainer = document.createElement('div')
    imageContainer.setAttribute('class', 'order__item__image__container')
    imageContainer.style.backgroundImage = `url(${item.image})`

    let orderSummary = document.createElement('div')
    orderSummary.setAttribute('class', 'order__item__summary')

    let itemHeader = document.createElement('h3')
    itemHeader.setAttribute('class', 'order__item__summary__header')
    itemHeader.textContent = item.name

    orderSummary.appendChild(itemHeader)
    
    let itemp = document.createElement('p')

    let xSpan = document.createElement('span')
    xSpan.setAttribute('class', 'large-text')
    xSpan.textContent = '1'

    let xInput = document.createElement('input')
    xInput.type = 'text'
    xInput.setAttribute('class', 'order__item__summary__total')
    xInput.setAttribute('placeholder', '1')

    itemp.appendChild(xSpan)
    itemp.appendChild(xInput)

    orderSummary.appendChild(itemp)

    orderItem.appendChild(imageContainer)
    orderItem.appendChild(orderSummary)

    let orderPrice = document.createElement('div')
    orderPrice.setAttribute('class', 'order__item__price__container')
    orderPrice.textContent = item.price

    orderItem.appendChild(orderPrice)

    orderEl.appendChild(orderItem)
    updateTotal(item.price)
}

function updateTotal(val) {
    let subtotalEl = document.getElementById("subtotal")
    let deliveryEl = document.getElementById("delivery-fee")
    let taxesEl = document.getElementById("taxes")

    let subTotal = parseInt(subtotalEl.textContent)

    let subtotal = subTotal + val
    let taxTotal = (subTotal * 0.1) 
    let deliveryTotal = 5.00

    subtotalEl.textContent = subtotal
    deliveryEl.textContent = deliveryTotal
    taxesEl.textContent = taxTotal
}

document.addEventListener("click", function(e) {

    e.preventDefault()

    if (e.target.dataset.information) {
        showInformationModal(e.target.dataset.information)
    }else if (e.target.dataset.add) {
        addItemToCart(e.target.dataset.add)
        
    } else if (modalShowing) {
        hideModalInformation()
    }
})

renderMenu()

const blackOutEl = document.getElementById("black-out")
const modalEl = document.getElementById("information-modal")

blackOutEl.classList.remove("black--out--show")