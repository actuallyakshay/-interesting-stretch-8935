let obj = JSON.parse(localStorage.getItem('signupData'))
function loginFunction(){
    const inputbox = document.querySelector('#inputbox');
    inputbox.innerHTML=null

    console.log(obj)

    const mail = document.createElement('input');
    mail.value=obj.mail
    mail.setAttribute('id','mail')
    
    
    const input = document.createElement('input');
    input.placeholder='Password'
    input.setAttribute('id','pass')

    const button = document.createElement('button');
    button.setAttribute('id','loginbtn')
    button.innerText='Log in'
    button.style.marginBottom='20px'
    button.addEventListener('click',function(){
        finalResult()
    })
   
    inputbox.append(mail,input,button)

}

function finalResult(){
    let loginPassword = document.querySelector('#pass').value
    let loginmail = document.querySelector('#mail').value

    if(obj.mail == loginmail && loginPassword == obj.password){
        alert('Login Successful')
        window.location.href='#'
    }else if(obj.mail == loginmail && loginPassword != obj.password){
        alert('Wrong Password')
    }else if(obj.mail !== loginmail && loginPassword == obj.password){
        alert('Wrong Mail ID')
    }else if(loginPassword == '' ||loginmail=='' ){
        alert('Enter details')
    }
    document.querySelector('#pass').value=''
    document.querySelector('#mail').value=null

}