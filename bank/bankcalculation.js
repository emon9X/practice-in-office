
const mail = document.getElementById('email');
const pass = document.getElementById('pass');
const button = document.getElementById('but');
mail.addEventListener('keypress', function(){
    pass.addEventListener('keypress', function(){
        button.addEventListener('click', function(){
            if (mail.value === 'baaperpola@mail.com' && pass.value === 'nice') {
                // button.removeAttribute('disabled');
                window.location.href = 'http://127.0.0.1:5500/indextwo.html'
            }
            else {
                alert('vul pass and name')
            }
        })
    })
})

