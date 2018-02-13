var urlServidor = "http://localhost/php/ai/";

function validar() {

    loadingElement('btnValidarLogin', 'Validando...')

    var url = urlServidor + "admin/logar";
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    MobileUI.ajax
        .post(url)
        .send({
            login: login,
            senha: senha
        })
        .end(function (error, res) {

            closeLoading('btnValidarLogin')
            var ret = JSON.parse(res['text']);

            if (error && res['status'] !== 200) {
                alert(ret['error']);
                return false;
            }

            localStorage.setItem('login', JSON.stringify(ret));
            openPage('principal.html')
        });

}

// function esqueceuSenha() {
//     openPage('esqueceuSenha.html', {chave: 'valor'}, loadPageEsqueceuSenha)
// }

// function cadastreSe() {
// openPage('cadastreSe.html')
// }

// function loadPageEsqueceuSenha(params) {
// console.log(params);
// }

document.addEventListener('openPage', function (e) {
    //It does something when the page is opened
    //You can access name of page in: e.detail.page
})

function editCadastro(params) {
    // openPage('editCadastro', {name:'Jeanette Fletcher'}, functionOpenContact)
    openPage('editCadastro')
}

function editContrato(params) {
    // openPage('editCadastro', {name:'Jeanette Fletcher'}, functionOpenContact)
    openPage('editContrato')
}

function updateValuesProgressSemicircle() {
    document.getElementById('progressMetricUser').progressSemicircle.update(Math.floor(Math.random() * 100) + 1);
}

function updateValuesProgressCircle() {
    document.getElementById('progressProfile').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressSteps').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressRunning').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressTasks').progressCircle.update(Math.floor(Math.random() * 100) + 1);
}

function salvarContrato() {
    loadingElement('btnSalvarContrato', 'Salvando...')

    alert('Registro salvo com sucesso')

    closeLoading('btnSalvarContrato')
}

function darBaixa() {
    alert({
        title: 'Baixa de mensalidade',
        template: 'template-alert-custom',
        width: '90%',
        buttons: [
            {
                label: 'Salvar',
                onclick: salvarBaixa
            },
            {
                label: 'Cancelar'
            }
        ]
    });
}

function salvarBaixa() {
    console.log('to aqui')
}

function salvarCadastro() {
    loadingElement('btnSalvarCadastro', 'Salvando...')

    alert('Registro salvo com sucesso')

    closeLoading('btnSalvarCadastro')
}