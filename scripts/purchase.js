let takeData = JSON.parse(localStorage.getItem("purchase"))
console.log(takeData)

takeData.map (function(el,index){

    let div = document.createElement("div")

    let images = document.createElement("img")
    images.src = el.image

    let names = document.createElement("h3")
    names.innerText = el.name

    let prices = document.getElementById("h3")
    prices.innerText = el.price

    div.append(images,names,prices)
    document.getElementById("purchased_vouchers").append(div)


})

let takeWallet = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet_balance").innerHTML = takeWallet
