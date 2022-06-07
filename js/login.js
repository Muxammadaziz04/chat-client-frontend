let username = document.getElementById('usernameInput')
let password = document.getElementById('passwordInput')
let loginForm = document.getElementById('login-form')

let showButton = document.getElementById('showButton')


loginForm.onsubmit = async function (event){
    event.preventDefault()

    let obj = JSON.stringify({
        username : username.value,
        password : password.value
    })

    try {        
        let res = await fetch('https://new-chat-najot-talim.herokuapp.com/login', {
            method: 'POST',
            body : obj,
            headers : {
                "Content-Type": "application/json"
            }
        })

        res = await res.json()
        
        if(res.status == 200){
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