const container = document.getElementById('container');
const registerBtn = document.querySelectorAll('.register-btn');
const loginBtn = document.querySelectorAll('.login-btn');


function updateButtonStates() {
    const isActive = container.classList.contains('active');
    registerBtn.forEach(btn => {
    if (isActive) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
    });
    loginBtn.forEach(btn => {
        if (isActive) {
            btn.classList.remove('active');
        } else {
            btn.classList.add('active');
        }
    });
}

registerBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        container.classList.add('active');
        updateButtonStates();
    });
});

loginBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        container.classList.remove('active');
        updateButtonStates();
    });
});
updateButtonStates();