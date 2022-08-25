let nameField = document.getElementById('name')
let emailField = document.getElementById('email')
let messageField = document.getElementById('message')
let sendBtn = document.getElementById('send')


send.addEventListener('click', (event) => {
    event.preventDefault();

    let name = nameField.value
    let email = emailField.value
    let message = messageField.value
    nameField = ''
    emailField = ''
    messageField = ''

    let data = {
        name: name,
        email: email,
        message: message
    }

    fetch("https://contact-form-6b9f0-default-rtdb.firebaseio.com/.json", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),

    }).then(res => {
        if (res.status === 200) {
            alert('The form has been submitted')

        } else {
            alert("Error-Form not Submitted")

        }
    })

})