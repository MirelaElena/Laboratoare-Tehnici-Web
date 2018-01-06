function multiplicator(element) {
    return 2 * element;
}

//Implementati functia map, astfel incat aceasta sa se comporte ca mai jos:
Array.prototype.map = function map(multiplicator) {
    for (i = 0; i < this.length; i++) {
        this[i] = multiplicator(this[i]);
    }
    return this;
}

var arr = [1, 2, 3];
var result = arr.map(multiplicator); // [2,4,6]
console.log(result);