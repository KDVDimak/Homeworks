const form = document.querySelector(".all")
const email  = document.querySelector(".email-input")
const password  = document.querySelector(".password-input")
const confirm  = document.querySelector(".confirm-input")
const age  = document.querySelector(".age-input")
const city  = document.querySelector(".city-select")
const checkbox  = document.querySelector(".agree-checkbox")
const clear   = document.querySelector(".clear-button")

        const emailError = document.querySelector(".email-error")
        const passwordError = document.querySelector(".password-error")
        const confirmError = document.querySelector(".confirm-error")
        const ageError = document.querySelector(".age-error")
        const cityError = document.querySelector(".city-error")
        const checkboxError = document.querySelector(".checkbox-error")
        const result = document.querySelector(".json-result")
        emailError.textContent = ""
        passwordError.textContent = ""
        confirmError.textContent = ""
        ageError.textContent = ""
        cityError.textContent = ""
        checkboxError.textContent = ""

const validEmail = () =>{
        const emailValue = email.value
        emailError.textContent = ""
        if ( emailValue.trim() === "" ){
                emailError.textContent = "Email обов'язковий"
                return false
        }   else if ( email.validity.valid === false){
                emailError.textContent = "Не коректна інформація"
                return false
        }       return true
}

const validPassword = () =>{
        const passwordValue = password.value
        passwordError.textContent = ""
        if ( passwordValue.trim() === "" ){
                passwordError.textContent ="Password  обов'язковий"
                return false
        }  else if ( passwordValue.length < 8 ){
                passwordError.textContent = 'Мінімум 8 символів'
                return false
        }  else if ( !/[0-9]/.test(passwordValue) || !/[a-z]/i.test(passwordValue)){
                passwordError.textContent = "Не коректна інформація"
                return false
        }  return true
}

const validConfirm = () =>{
        const confirmValue = confirm.value
        const passwordValue = password.value
        confirmError.textContent = ""
        if ( confirmValue.trim() === "" ){
                confirmError.textContent ="Confirm Password обов'язковий"
                return false
        } else if ( confirmValue !== passwordValue ){
                confirmError.textContent = "Не коректна інформація"
                return false
        } return true
}       

const validAge = () =>{
        const ageValue = age.value
        ageError.textContent = ""
        if ( ageValue === "" ){
                ageError.textContent = "Вік обов'язковий"
                return false
        } else if( ageValue < 16 || ageValue > 120 ){
                ageError.textContent = "Не коректна інформація"
                return false
        } return true
}

const validCity = () =>{
        const cityValue = city.value
        cityError.textContent = ""
        if (!cityValue){
                cityError.textContent ="Місто обов'язкове"
                return false 
        } return true
}    

const validCheckbox = () => {
        const checkboxValue = checkbox.checked
        checkboxError.textContent = ""
        if ( checkboxValue === false ){
                checkboxError.textContent = "Не коректна інформація"
                return false
        } return true
}

form.addEventListener("focusout", function(event){
        const el = event.target
        if ( el === email){
                validEmail() 
        }

        if ( el === password){
                validPassword() 
        }

        if ( el === confirm){
                validConfirm() 
        }

        if ( el === age){
                validAge() 
        } 
})

form.addEventListener("change", function(event){
        const el = event.target
        if ( el === city){
                validCity()
        }

        if ( el === checkbox){
                validCheckbox()
        }
})

form.addEventListener("submit", function(event){
        event.preventDefault()
        const emailValid = validEmail()
        const passwordValid = validPassword()
        const confirmValid = validConfirm()
        const ageValid = validAge()
        const cityValid = validCity()
        const checkboxValid = validCheckbox()
        const isValid = emailValid && passwordValid && confirmValid && ageValid && cityValid && checkboxValid

        if ( isValid === false){
                if ( emailValid === false){
                        email.focus()
                } else if ( passwordValid === false){
                        password.focus()
                } else if ( confirmValid === false){
                        confirm.focus()
                } else if ( ageValid === false){
                        age.focus()
                } else if ( cityValid === false){
                        city.focus()
                } else if ( checkboxValid === false){
                        checkbox.focus()
                } return
        } 

                const userData = {
                        email: email.value,
                        password: password.value,
                        confirm: confirm.value,
                        age: Number(age.value),
                        city: city.value,
                        agreement: checkbox.checked,
                }
                
                const str = JSON.stringify(userData)
                result.textContent = str

                localStorage.setItem("userData", str)
})

const loadUserData = () =>{
                        const saved  = localStorage.getItem("userData")
                        if (saved){
                            const savedUserData = JSON.parse(saved)
                                email.value = savedUserData.email
                                password.value = savedUserData.password
                                confirm.value = savedUserData.confirm
                                age.value = savedUserData.age
                                city.value = savedUserData.city
                                checkbox.checked = savedUserData.agreement
                        }
}

loadUserData()

clear.addEventListener("click", function(){
                form.reset()
                localStorage.removeItem("userData")
                emailError.textContent = ""
                passwordError.textContent = ""
                confirmError.textContent = ""
                ageError.textContent = ""
                cityError.textContent = ""
                checkboxError.textContent = ""
                result.textContent = ""
})