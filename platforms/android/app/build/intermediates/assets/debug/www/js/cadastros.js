var colCadastros = [];

function listarCadastros() {
    loading('Carregando...')

    var url = urlServidor + "/cadastros";
    var loginServidor = JSON.parse(localStorage.getItem('login'));

    MobileUI.ajax
        .get(url)
        .set('token', loginServidor['token'])
        .set('Content-Type', 'application/json')
        .end(function (error, res) {

            closeLoading();
            var ret = JSON.parse(res['text']);

            if (error && res['status'] !== 200) {

                if (res['status'] == 403) {
                    openPage('index')
                    return false;
                }
                
                alert(ret['error']);
                return false;
            }

            colCadastros = ret['retorno'];
        });
}

function editCadastro(id) {
    openPage('editCadastro', { id: id }, functionEditCadastro)
}

function functionEditCadastro(params) {
    loading('Carregando...')

    var url = urlServidor + "/cadastros/" + params['id'];
    var loginServidor = JSON.parse(localStorage.getItem('login'));

    MobileUI.ajax
        .get(url)
        .set('token', loginServidor['token'])
        .set('Content-Type', 'application/json')
        .end(function (error, res) {

            closeLoading();
            var ret = JSON.parse(res['text']);

            if (error && res['status'] !== 200) {

                if (res['status'] == 403) {
                    openPage('index')
                    return false;
                }

                alert(ret['error']);
                return false;
            }

            document.getElementById('cadastroNome').value = ret['retorno'].nome;
            document.getElementById('cadastroEmail').value = ret['retorno'].email;
            document.getElementById('cadastroTelCel').value = ret['retorno'].tel_cel;
        });
}