let form= document.getElementById('signup');

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
let name=document.getElementById('name').value 
    
    let email=document.getElementById('email').value 
    
    let country=document.getElementById('country').value 
   
    let phone=document.getElementById('phone').value 
    
    let password=document.getElementById('password').value 
    

    let student={
        name:name,
        email:email,
        country:country,
        phone:phone,
        password:password,

    }

    console.log(student)
})




let signinform = document.getElementById('signin');

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
let name=document.getElementById('signin-name').value 
    
    let email=document.getElementById('signin-email').value 
     
    let password=document.getElementById('signin-password').value 
    

    let student={
        name:name,
        email:email,
        password:password,

    }

    console.log(student)
})
