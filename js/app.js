//setting buttons click
document.getElementById('memory-one').addEventListener('click', function () {
    valueSetter('memory', 0);
})
document.getElementById('memory-two').addEventListener('click', function () {
    valueSetter('memory', 180);
})
document.getElementById('storage-one').addEventListener('click', function () {
    valueSetter('storage', 0);
})
document.getElementById('storage-two').addEventListener('click', function () {
    valueSetter('storage', 100);
})
document.getElementById('storage-three').addEventListener('click', function () {
    valueSetter('storage', 180);
})
document.getElementById('delivery-one').addEventListener('click', function () {
    valueSetter('delivery', 0);
})
document.getElementById('delivery-two').addEventListener('click', function () {
    valueSetter('delivery', 20);
})
//Handling Promo Apply button click
document.getElementById('promo-apply').addEventListener('click', function () {
    finalTotal();

});



//setting value at desired field
function valueSetter(product, value) {
    document.getElementById(product + '-cost').innerHTML = value;
    primaryTotal();
}


//getting values for furthur calculation
function getValues(product) {
    return parseInt(document.getElementById(product + '-cost').innerText);
}

//calculating primary total 
function primaryTotal() {
    const primaryTotal = getValues('best') + getValues('memory') + getValues('storage') + getValues('delivery');
    document.getElementById('total-price').innerText = primaryTotal;
    document.getElementById('final-total-price').innerText = primaryTotal;
    return primaryTotal;
}


//calculating final total value for bottom display
function finalTotal() {
    const defaultPromo = 'stevekaku';
    const userInput = document.getElementById('promo-input').value;
    if (defaultPromo == userInput) {
        let total = primaryTotal();
        total = total - (total * (20 / 100));
        document.getElementById('final-total-price').innerText = total.toFixed(2);
    }
    document.getElementById('promo-input').value = '';
}