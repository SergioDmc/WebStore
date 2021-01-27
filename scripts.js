let products = [];
let total = 0;

function pay()
{
    window.alert(products.join(", \n"));
}

function add(product, price)
{
    console.log(product, price);
    products.push(product);
    total = total+price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}
