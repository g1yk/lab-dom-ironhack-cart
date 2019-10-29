window.onload = () => {

  var $cart = document.querySelector('#cart tbody');
  var $calc = document.getElementById('calc');

  let quantityInputs = document.getElementsByClassName('quantity')
  let prices = document.getElementsByClassName('price')
  let subtotal = document.getElementsByClassName('subtotal')
  let button = document.querySelector("#calc")
  let total = document.querySelector("body > h2 > span")
  let deleteButtons = document.getElementsByClassName("btn-delete")
  let productLine = document.getElementsByClassName("product")


  // console.log(document.getElementsByClassName('quantity'))

  // console.log(document.querySelector("#quantity > label > input[type=number]").value + ' quant')
  // console.log(document.querySelector("#subtot > span").innerText)
  // console.log(document.querySelector("#price > span").innerText)

  // document.querySelector("#cart > tbody > tr > td.pu > span")

  // document.querySelector("#subtot > span").innerText = document.querySelector("#price > span").innerText * document.querySelector("#quantity > label > input[type=number]").value

  // console.log(document.querySelector("#quantity > label > input[type=number]").value + ' quant')

  // console.log(subtotal)

  button.addEventListener('click', function calcAll() {

    let result = 0
    for (let i = 0; i < subtotal.length; i++) {
      result += Number(subtotal[i].innerText)
    }
    console.log(total)
    total.innerText = Number(result)


  })






  function calc() {


    for (let i = 0; i < prices.length; i++) {
      // imageArray[i].addEventListener("click", bindClick(i));
      console.log(productLine[i])
      deleteButtons[i].addEventListener("click", function () {
        productLine[i].remove();

      })

      quantityInputs[i].addEventListener("change", function updateSubtot() {
        subtotal[i].innerText = prices[i].innerText * quantityInputs[i].value
        console.log(subtotal[i].innerText)
      })


      subtotal[i].innerText = prices[i].innerText * quantityInputs[i].value
      console.log(subtotal[i].innerText)
    }
  }

  calc();


  //  console.log( quantityInputs[0].value )






  //   document.querySelector("#quantity > label > input[type=number]").addEventListener("change", function updateSubtot() {
  //     let value = document.querySelector("#quantity > label > input[type=number]").value
  //     let price = document.querySelector("#price > span").innerText

  //     document.querySelector("#subtot > span").innerText = price * value

  //   });



  //   document.querySelector("#calc").addEventListener("click", function calcAll() {

  //     let value = document.querySelector("#quantity > label > input[type=number]").value
  //     let price = document.querySelector("#price > span").innerText

  //     document.querySelector("body > h2 > span").innerText = price * value

  //   })

}

