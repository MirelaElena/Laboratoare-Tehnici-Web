var persoana = {
    nume: 'Gabriela Boboc',
    varsta: 50,
    calitati: ['Empatica', 'Sincera', 'Iubitoare de animale']
}

console.log('Nume: ' + persoana.nume);
console.log('Varsta: ' + persoana.varsta);

console.log('Calitati: ');
for(i=0; i<persoana.calitati.length; i++)
    console.log(persoana.calitati[i])
