function tab(productType) {
    let productArr = document.getElementsByClassName('product'); // all items
    let categoryArr = document.getElementsByClassName(`product ${productType}`) // all items with the clicked tag

    for(product = 0; product < productArr.length; product++) { // hide all items
        productArr[product].style.display = "none ";
        for(item = 0; item < categoryArr.length; item++) { // show the selected items
            categoryArr[item].style.display = "block";
        }
    }
}

function showAll() {
    let productArr = document.getElementsByClassName('product'); // all items
    for(i = 0; i < productArr.length; i++) { // show all items
        productArr[i].style.display = "block";
    }
}