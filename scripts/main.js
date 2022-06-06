
let arr =[]
let arr2 =[]
let userData = JSON.parse(localStorage.getItem("user")) || []

let walletAmount = JSON.parse(localStorage.getItem("amount")) || []

function myFunction(){

    let walletAmount = document.getElementById("amount").value;
    let userData = document.getElementById("form").value
    arr2.push(userData)

    arr.push(walletAmount)
    //console.log(arr)

    var sum =0
    for(let i=0;i<arr.length; i++)
    {
        sum = sum + arr[i]
    }
    //console.log(sum)
    

    localStorage.setItem("amount",JSON.stringify(arr))
    localStorage.setItem("user",JSON.stringify(arr2))
    

}