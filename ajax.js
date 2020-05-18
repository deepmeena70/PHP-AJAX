// console.log("check!");

var xhr = new XMLHttpRequest();



function del(val) {
    // console.log("check");
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML =
                this.responseText;
        }
    }

    console.log("check");


    xhr.open("GET", "delete.php/?id=" + val, true);
    console.log("check");
    xhr.send();
}

function edit(val) {
    // console.log("check");
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(val).innerHTML =
                this.responseText;
        }
    }

    console.log("check");


    xhr.open("GET", "edit.php/?id=" + val, true);
    console.log("check");
    xhr.send();
}

function update() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML =
                this.responseText;
        }
    }

    var id = document.getElementById("id").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(id);
    console.log(username);
    console.log(email);
    console.log(password);

    xhr.open("GET", "update.php/?id=" + id +
        "&username=" + username + " &email= " + email + " &password=" + password, true);
    // console.log("check");
    xhr.send();
}


// document.getElementById("update-data").addEventListener("submit", function(event) {
//     event.preventDefault();

//     console.log("check!");

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("main").innerHTML =
//                 this.responseText;
//         }
//     }

//     var id = document.getElementById("id").value;
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     console.log(id);
//     console.log(username);
//     console.log(email);
//     console.log(password);

//     xhr.open("GET", "update.php/?id=" + id +
//         "&username =" + username + " &email= " + email + " &password=" + password, true);
//     // console.log("check");
//     xhr.send();
// });