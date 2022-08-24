function signupFunction() {
    let mail = document.querySelector('#signup_userMail').value
    let name = document.querySelector('#signup_userName').value
    let password = document.querySelector('#signup_userPassword').value

    if (mail == '' || name == '' || password == '') {
        alert('Enter all Information')
    } else {
        let obj = {
            mail,
            name,
            password
        }

        localStorage.setItem('signupData', JSON.stringify(obj))
        alert('Signup Successful')
        window.location.href = "./login.html"
    }
    document.querySelector('#signup_userMail').value = null
    document.querySelector('#signup_userName').value = null
    document.querySelector('#signup_userPassword').value = null
}