const mobileNav = document.querySelector(".view");
const closeBtn = document.querySelector(".close-btn");
const closeBtnIcn = document.querySelector(".close-btn-icon");



// mobile nav
const arrowLeftClass = 'ri-menu-3-line';
const arrowRightClass = 'ri-close-large-fill';


closeBtn.addEventListener("click" , () => {
    if(mobileNav.style.left === "-300px" || mobileNav.style.left === ""  ){
        mobileNav.style.left = "0";
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }else{
        mobileNav.style.left = "-300px";
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }
});

//whatsapp
document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.getElementById("chatbox");
    const toggleChat = document.getElementById("toggleChat");
    const closeChat = document.getElementById("closeChat");

    toggleChat.addEventListener("click", function () {
        chatbox.classList.toggle("opacity-0");
        chatbox.classList.toggle("scale-0");
    });

    closeChat.addEventListener("click", function () {
        chatbox.classList.add("opacity-0");
        chatbox.classList.add("scale-0");
    });
});

//mouse hover
let listImage = document.querySelectorAll(".list-image div");
listImage.forEach((image) => {
    image.addEventListener( "mouseover" , function () {
        listImage.forEach((image) => {
            image.classList.remove("active")
        })
        this.classList.add('active')
    })
})










//form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationForm');
    
    // Add input event listeners for real-time validation
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate all fields
        form.querySelectorAll('input').forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateField(field) {
        const errorElement = document.getElementById(`${field.id}Error`);
        let isValid = true;
        let errorMessage = '';

        switch(field.id) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value.trim() === '') {
                    errorMessage = 'Email is required';
                    isValid = false;
                } else if (!emailRegex.test(field.value.trim())) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                updateFieldStyle(field, isValid);
                break;

            case 'firstName':
            case 'lastName':
                if (field.value.trim() === '') {
                    errorMessage = `${field.id === 'firstName' ? 'First' : 'Last'} name is required`;
                    isValid = false;
                } else if (!/^[A-Za-z\s]{2,}$/.test(field.value.trim())) {
                    errorMessage = `${field.id === 'firstName' ? 'First' : 'Last'} name should contain only letters and be at least 2 characters long`;
                    isValid = false;
                }
                updateFieldStyle(field, isValid);
                break;

            case 'phone':
                if (field.value.trim() === '') {
                    errorMessage = 'Phone number is required';
                    isValid = false;
                } else if (!/^\+?[\d\s-]{10,}$/.test(field.value.trim())) {
                    errorMessage = 'Please enter a valid phone number';
                    isValid = false;
                }
                updateFieldStyle(field, isValid);
                break;

            case 'date':
                if (field.value === '') {
                    errorMessage = 'Date is required';
                    isValid = false;
                }
                updateFieldStyle(field, isValid);
                break;

            case 'time':
                if (field.value === '') {
                    errorMessage = 'Time is required';
                    isValid = false;
                }
                updateFieldStyle(field, isValid);
                break;
        }

        errorElement.textContent = errorMessage;
        errorElement.classList.toggle('hidden', isValid);
        return isValid;
    }

    function updateFieldStyle(field, isValid) {
        field.classList.toggle('border-red-500', !isValid);
        field.classList.toggle('border-green-500', isValid);
        field.classList.toggle('bg-red-50', !isValid);
        field.classList.toggle('bg-green-50', isValid);
    }
});









// start animation
const sr = ScrollReveal({
    origin : 'bottom',
    distance : '60px',
    duration : 2000,
    delay : 300,
    reset : true,
})

sr.reveal('.hero__text' , {origin: 'top'});
sr.reveal('.hero__img');



sr.reveal('.img-top' , {origin: 'bottom'});
sr.reveal('.box-bottom' , {origin: 'bottom'});
sr.reveal('.box-top' , {origin: 'top'});
sr.reveal('.left-form' , {origin: 'bottom'});
sr.reveal('.box-left' , {origin: 'top'});
sr.reveal('.box-right' , {origin: 'bottom'});







// up and down button
let btn = document.querySelector(".top");
window.onscroll = function (){
if(window.scrollY >= 600){
    btn.style.display = "block";
}else{
    btn.style.display = "none";
}
}

btn.onclick = function(){
    window.scrollTo({
    left : 0,
    top : 0,
    behavior : "smooth"
});
}



// notification message
setTimeout(function(){
    var notification = document.getElementById("Notification");
    notification.classList.add("show");
},1000)

function closeNotification(){
    var notification = document.getElementById("Notification");
    notification.classList.remove("show");
}











// password validation
document.getElementById('validationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('PasswordError');
    

    passwordError.classList.add('hidden');
    

    if (!password) {
        passwordError.textContent ='Please Enter The Password';
        passwordError.classList.remove('hidden');
        return;
    }
    
    if (password.length < 8) {
        passwordError.textContent = 'The Password Must Have At Least 8 char';
        passwordError.classList.remove('hidden');
        return;
    }
    

    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    
    if (!hasNumber || !hasLetter) {
        passwordError.textContent = "The password must contain at least one letter and one number.";
        passwordError.classList.remove('hidden');
        return;
    }
    

});




//hide and show button in pass input
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('ri-eye-off-line');
        icon.classList.add('ri-eye-line');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('ri-eye-line');
        icon.classList.add('ri-eye-off-line');
    }
});