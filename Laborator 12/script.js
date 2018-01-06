id = 1;

//get
function getDogs() {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/dogs";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            dogs = JSON.parse(this.responseText);
            showDogs(dogs);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showDogs(dogs) {

    dogs.forEach(function (dog) {

        var ul = document.createElement('ul');
        ul.setAttribute('id', 'Details of dog ' + dog.id);
        document.getElementById('lista').appendChild(ul);
        id++;

        for (property in dog) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(dog[property]));
            ul.appendChild(li);
        }
    })
}

getDogs();

// fetch('./db.json')
//     .then(
//     function (response) {
//         if (response.status !== 200) {
//             console.log('Looks like there was a problem. Status Code: ' +
//                 response.status);
//             return;
//         }

//         // Examine the text in the response
//         response.json().then(function (data) {
//             data.dogs.forEach(function (dog) {

//                 var ul = document.createElement('ul');
//                 ul.setAttribute('id', 'Details of dog ' + dog.id);
//                 document.getElementById('lista').appendChild(ul);
//                 id++;

//                 for (property in dog) {
//                     var li = document.createElement('li');
//                     li.appendChild(document.createTextNode(dog[property]));
//                     ul.appendChild(li);
//                 }

//             })
//         })
//     })
//     .catch(function(error) {
//         console.log('Request failed', error);
//     });


function saveDog() {
    var dog = {};
    dog.id = id;
    dog.name = document.getElementById('name').value;
    dog.img = document.getElementById('img').value;
    var json = JSON.stringify(dog);

    var url = "http://localhost:3000/dogs";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var dogs = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(dogs);
        } else {
            console.error(dogs);
        }
    }
    xhr.send(json);
}

//put
function updateDog(number, name, img) {

    var url = "http://localhost:3000/dogs";
    var dog = {};
    dog.id = number;
    dog.name = name;
    dog.img  = img;
    var json = JSON.stringify(dog);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/' + number, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var dogs = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(dogs);
        } else {
            console.error(dogs);
        }
    }
    xhr.send(json);
}

updateDog(6, 'newName', 'newImg');

//delete
function deleteDog(number) {
    var url = "http://localhost:3000/dogs";

    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + '/' + number, true);
    xhr.onload = function () {
        var dogs = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(dogs);
        } else {
            console.error(dogs);
        }
    }
    xhr.send(null);
}

deleteDog(1);