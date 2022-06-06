

async function purchase(){
    try{
        let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
        //console.log(res)
        let data = await res.json()
        console.log("data:",data.vouchers)
        append(data)

        // let voucherData = data.vouchers
        // console.log("voucherData:",voucherData)
        //return voucherData

        
        
        


    }
    catch(err){
        console.log(err)
    }
}
purchase()

function append(data){
    data.map(function(el,index){
        let div = document.createElement("div")
        div.innerHTML = null

        let images = document.createElement("img")
        images.src = el.image

        let names =document.createElement("h3")
        names.innerText = el.name

        let prices = document.createElement("h3")
        prices.innerText = el.price

        let buy = document.createElement("button")
        buy.innerText = "Buy Voucher"
        buy.setAttribute("class","buy_voucher")
        buy.addEventListener("click", function(){
            buyVoucher(el,index)
        })
        div.append(images,names,prices,buy)
        document.getElementById("voucher_list").append(div)

    })
}
let arr = JSON.parse(localStorage.getItem("purchase")) || []
function buyVoucher(el,index){
    arr.push(el)
    console.log(arr)
    localStorage.setItem("purchase",JSON.stringify(arr))
    window.location.href = "./purchase.html"

    let takeWallet = JSON.parse(localStorage.getItem("amount"))
    document.getElementById("wallet_balance").innerHTML = takeWallet

    let x = walletAmount

    if(takeWallet >= x)
    {
        alert ("Hurray! purchase successful")
    
     
    let remaining = document.getElementById("balance").innerHTML = takeWallet - x;
    localStorage.setItem("amount",JSON.stringify(remaining))
    window.location.reload()
    }
    else
    {
        alert ("Sorry! insufficient balance")
    }

    

}

