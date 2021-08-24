let price=Number(document.getElementById("price").innerHTML)
let plus=document.getElementById("plus")
let minus=document.getElementById("minus")
let qty=document.getElementById("qty").innerHTML
let sub=Number(document.getElementById("subtotal").innerHTML)
let del=document.getElementById("delete")
console.log(price,plus,minus,qty,sub,del)

plus.addEventListener("click",function(){
    qty++
    document.getElementById("qty").innerHTML=qty
    document.getElementById("subtotal").innerHTML=price*qty
})
minus.addEventListener("click",function(){
    if(qty>0){
        qty--
        document.getElementById("qty").innerHTML=qty
        document.getElementById("subtotal").innerHTML=price*qty
    }
    
})
del.addEventListener("click",function(){
    document.getElementById("row").remove()
})