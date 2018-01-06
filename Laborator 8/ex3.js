// Input
var blackFridayCart = {
    telefon: "350",
    consola: "250",
    televizor: "450",
    iepurasPlus: "10.60",
    cercei: "20.34",
    geanta: "22.36"
  };
  
function getCartValue(cart) {
    result = 0;
    values = Object.values(cart);
    for(i=0; i<values.length; i++)
        result = result + Number(values[i]);
    console.log(result);
}

// Output
getCartValue(blackFridayCart); // 1103.3