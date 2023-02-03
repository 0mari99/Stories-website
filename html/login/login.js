async function signIn () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var data = {
        email: email,
        password: password
    }
    var url = "http://localhost:3000/login"
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Error sending request');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}