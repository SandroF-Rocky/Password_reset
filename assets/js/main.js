senha_input = document.querySelector("input[type=password]")

senha_input.addEventListener("keyup", ()=>{
    senha = senha_input.value;

    regEX_length = /[a-z0-9A-Z\!\@\#\$\%\¨\&\*\(\)]{8}/
    regEX_lower = /[a-z]/
    regEX_upper = /[A-Z]/
    regEX_numeric = /[0-9]/
    regEX_special = /[\!\@\#\$\%\¨\&\*\(\)]/
    verification_length = regEX_length.exec(senha)
    count_check = 0

    if(regEX_length.exec(senha)){
        senha_length = document.querySelector('.length_check')
        senha_length.classList.add('active')
        symbol = senha_length.querySelector('.password_symbol')
        symbol.innerHTML = "&#10004";
        count_check++
    }

    if(!regEX_length.exec(senha)){
        senha_length = document.querySelector('.length_check')
        senha_length.classList.remove('active')
        symbol = senha_length.querySelector('.password_symbol')
        symbol.innerHTML = "&#9747";
        count_check--
        document.querySelector('input[type=submit]').classList.remove('enabled')
    }

    if(regEX_lower.exec(senha)){
        senha_lower = document.querySelector('.lower_check')
        senha_lower.classList.add('active')
        symbol = senha_lower.querySelector('.password_symbol')
        symbol.innerHTML = "&#10004";
        count_check++
    }

    if(!regEX_lower.exec(senha)){
        senha_lower = document.querySelector('.lower_check')
        senha_lower.classList.remove('active')
        symbol = senha_lower.querySelector('.password_symbol')
        symbol.innerHTML = "&#9747";
        count_check--
        document.querySelector('input[type=submit]').classList.remove('enabled')
    }

    if(regEX_upper.exec(senha)){
        senha_upper = document.querySelector('.upper_check')
        senha_upper.classList.add('active')
        symbol = senha_upper.querySelector('.password_symbol')
        symbol.innerHTML = "&#10004";
        count_check++
    }

    if(!regEX_upper.exec(senha)){
        senha_upper = document.querySelector('.upper_check')
        senha_upper.classList.remove('active')
        symbol = senha_upper.querySelector('.password_symbol')
        symbol.innerHTML = "&#9747";
        count_check--
        document.querySelector('input[type=submit]').classList.remove('enabled')
    }

    if(regEX_numeric.exec(senha)){
        senha_numeric = document.querySelector('.numeric_check')
        senha_numeric.classList.add('active')
        symbol = senha_numeric.querySelector('.password_symbol')
        symbol.innerHTML = "&#10004";
        count_check++
    }
    if(!regEX_numeric.exec(senha)){
        senha_numeric = document.querySelector('.numeric_check')
        senha_numeric.classList.remove('active')
        symbol = senha_numeric.querySelector('.password_symbol')
        symbol.innerHTML = "&#9747";
        count_check--
        document.querySelector('input[type=submit]').classList.remove('enabled')
    }

    if(regEX_special.exec(senha)){
        senha_special = document.querySelector('.special_check')
        senha_special.classList.add('active')
        symbol = senha_special.querySelector('.password_symbol')
        symbol.innerHTML = "&#10004";
        count_check++
    }

    if(!regEX_special.exec(senha)){
        senha_special = document.querySelector('.special_check')
        senha_special.classList.remove('active')
        symbol = senha_special.querySelector('.password_symbol')
        symbol.innerHTML = "&#9747";
        count_check--
        document.querySelector('input[type=submit]').classList.remove('enabled')

    }
    if(count_check == 5){
        
        document.querySelector('input[type=submit]').classList.add('enabled')
    }
    
})

document.querySelector('.disabled').addEventListener('click', (e)=>{
    e.preventDefault()
    console.log("Prevent Default")
})

document.querySelector('.disabled').addEventListener('click', (e)=>{
    alert('Cadastro realizado com sucesso!')
})