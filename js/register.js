let username = document.getElementById('usernameInput')
let email = document.getElementById('emailInput')
let password = document.getElementById('passwordInput')
let upload = document.getElementById('uploadInput')
let registerForm = document.getElementById('register-form')

let showButton = document.getElementById('showButton')



registerForm.onsubmit = async function (event){
    event.preventDefault()

    let fd = new FormData()
    fd.append('username', username.value)
    fd.append('email', email.value)
    fd.append('password', password.value)
    fd.append('img', upload.files[0])

    try {        
        let res = await fetch('https://new-chat-najot-talim.herokuapp.com/register', {
            method: 'POST',
            body : fd
        })

        res = await res.json()
        
        if(res.status == 201){
            localStorage.setItem('token', res.token)
            localStorage.setItem('user', JSON.stringify(res.user))
            window.location.replace('index.html')
        } else {
            alert(res.message)
        }

    } catch (error) {
        console.log(error);
    }

}

showButton.onclick = (e) => {
    let inp = e.target.previousElementSibling
    inp.type === "password" ? inp.setAttribute('type', "text") : inp.setAttribute('type', "password")
}