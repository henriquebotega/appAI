function validar() {
    openPage('principal.html')
}

function esqueceuSenha() {
    openPage('esqueceuSenha.html', {chave: 'valor'}, loadPageEsqueceuSenha)
}

function cadastreSe() {
    openPage('cadastreSe.html')
}

function loadPageEsqueceuSenha(params) {
    console.log(params);
}
