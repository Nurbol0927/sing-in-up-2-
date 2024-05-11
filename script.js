function switchTab(tabName) {
    var forms = document.querySelectorAll('.form');
    var tabs = document.querySelectorAll('.tab');

    forms.forEach(form => {
        if(form.id === tabName) {
            form.classList.add('active');
        } else {
            form.classList.remove('active');
        }
    });

    tabs.forEach(tab => {
        if(tab.innerHTML === (tabName === 'login' ? 'Вход' : 'Регистрация')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

