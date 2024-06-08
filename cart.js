function get_all_products() {
    var archive = [];
    for (var i = 0; i < localStorage.length; i++) {
        archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    console.log(archive.length)
    for (var i = 0; i < archive.length; i++) {

        // set the products in page
        let prd = document.getElementById('products');
        prd.innerHTML += `<div class="card mb-3 mb-lg-0">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div>
                <img
                  src="${archive[i].product_image}"
                  class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
              </div>
              <div class="ms-3">
                <h4 class="prd-name">${archive[i].product_name}</h4>
                <h5 class=" mb-0">1TB, Graphite</h5>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center">
              <div style="width: 50px;">
              <div class="main">
                <span class="minus"><i class="fa-solid fa-minus fa-2xs"></i></span>
                <span class="num">1</span>
                <span class="plus"><i class="fa-solid fa-plus fa-2xs"></i></span>
                </div>
              </div>
              <div style="width: 80px;" class="product_price">
                <h3 class="mb-0 ">$<span class="product_pri" style="color:black">${archive[i].product_price}</span></h5>
              </div>
               <a href="#!" style="color: #cecece;" class="del"><i class="fas fa-trash-alt fa-xl"></i></a>
            </div>
          </div>
        </div>
      </div>`
    }
    console.log(archive[0].product_name)

let num = document.getElementsByClassName("num");


function updateSubtotals() {
    let subtotals = 0;

    for (let i = 0; i < num.length; i++) {
        let price = parseFloat(document.getElementsByClassName('product_pri')[i].innerHTML);
        // console.log(price)
        let quantity = parseInt(num[i].innerText, 10);
        // console.log(quantity)

        subtotals += price * quantity;
    }

    document.getElementsByClassName('subtotal')[0].innerHTML = "$"+subtotals.toFixed(2);

    if (subtotals <= 1000) {
        // alert('shipping charges included')
        let v = document.getElementsByClassName('shipping_charges')[0].innerText =((subtotals / 100) * 12).toFixed(2);;
        let total_amount = document.getElementsByClassName('grand_total')[0].innerHTML = parseFloat(subtotals + parseFloat(v)).toFixed(2);
        // console.log(total_amount)
        document.getElementsByClassName('total_amount1')[0].innerHTML ="$"+total_amount

    }
    else {
        let v = document.getElementsByClassName('shipping_charges')[0].innerText =((subtotals / 100) * 5).toFixed(2);;
        let total_amount = document.getElementsByClassName('grand_total')[0].innerHTML =parseFloat(subtotals+parseFloat(v)).toFixed(2);
        document.getElementsByClassName('total_amount1')[0].innerHTML = "$"+total_amount

    }

}
updateSubtotals()


}
get_all_products()


// increment 


let minus = document.getElementsByClassName("minus");
let num = document.getElementsByClassName("num");
let plus = document.getElementsByClassName("plus");
let total = document.getElementsByClassName("show");
let currentCount = parseInt(num[0].innerText, 10) || 1; // Initialize count based on the initial value in num

for (let i = 0; i < num.length; i++) {
    minus[i].onclick = function () {
        let currentCount = parseInt(num[i].innerText, 10);
        if (currentCount > 1) {
            currentCount--;
            num[i].innerText = (currentCount < 10) ? + currentCount : currentCount;
            updateSubtotals();
        }
    }

    plus[i].onclick = function () {
        let currentCount = parseInt(num[i].innerText, 10);
        if (currentCount < 10) {
            currentCount++;
            num[i].innerText = (currentCount < 10) ? + currentCount : currentCount;
            updateSubtotals();

        }
    }
}

function updateSubtotals() {
    let subtotals = 0;

    for (let i = 0; i < num.length; i++) {
        let price = parseFloat(document.getElementsByClassName('product_pri')[i].innerHTML);
        // console.log(price)
        let quantity = parseInt(num[i].innerText, 10);
        // console.log(quantity)

        subtotals += price * quantity;
    }

    document.getElementsByClassName('subtotal')[0].innerHTML = "$"+subtotals.toFixed(2);;

    if (subtotals <= 1000) {
        // alert('shipping charges included')
        let v = document.getElementsByClassName('shipping_charges')[0].innerText =((subtotals / 100) * 12).toFixed(2);;
        let total_amount = document.getElementsByClassName('grand_total')[0].innerHTML =parseFloat(subtotals + parseFloat(v)).toFixed(2);
        // console.log(total_amount)
        document.getElementsByClassName('total_amount1')[0].innerHTML = "$"+total_amount

    }
    else {
        let v = document.getElementsByClassName('shipping_charges')[0].innerText =((subtotals / 100) * 5).toFixed(2);;
        let total_amount = document.getElementsByClassName('grand_total')[0].innerHTML = parseFloat(subtotals + parseFloat(v))
        document.getElementsByClassName('total_amount1')[0].innerHTML ="$"+ total_amount;

    }

}





let delbtn=document.querySelectorAll(".del");
for(var i=0;i<delbtn.length;i++){
  delbtn[i].addEventListener("click",function(){
    let key= this.parentNode.parentNode.querySelector(".prd-name").innerHTML;
    localStorage.removeItem(key)
    this.parentElement.parentElement.parentElement.parentElement.remove() 
    // console.log(this.parentElement.parentElement)
    // console.log(key)
    updateSubtotals();

    })
    }