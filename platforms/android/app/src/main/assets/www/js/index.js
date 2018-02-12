function validar() {
    loadingElement('btnValidarLogin', 'Salvando...')

    openPage('principal.html')

    closeLoading('btnValidarLogin')
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

}

function salvarCadastro() {
    loadingElement('btnSalvarCadastro', 'Salvando...')

    alert('Registro salvo com sucesso')

    closeLoading('btnSalvarCadastro')
}