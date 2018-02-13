// var urlServidor = "http://localhost/php/ai";
var urlServidor = "http://www.alvoideal.com.br/rest";

function validar() {

    loadingElement('btnValidarLogin', 'Validando...')

    var url = urlServidor + "/admin/logar";
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

function listarTotais() {
    var url = urlServidor + "/total";
    var loginServidor = JSON.parse(localStorage.getItem('login'));

    MobileUI.ajax
        .get(url)
        .set('token', loginServidor['token'])
        .set('Content-Type', 'application/json')
        .end(function (error, res) {

            var ret = JSON.parse(res['text']);

            if (error && res['status'] !== 200) {

                if (res['status'] == 403) {
                    openPage('index')
                    return false;
                }

                alert(ret['error']);
                return false;
            }

            document.getElementById('totalCadastros').innerHTML = ret['retorno'].cadastros;
            document.getElementById('totalContratos').innerHTML = ret['retorno'].contratos;
            document.getElementById('totalMensalidades').innerHTML = ret['retorno'].mensalidades;
        });
}

document.addEventListener('openPage', function (e) {
    var pageAtual = e.detail.page;

    if (pageAtual == "principal.html") {
        listarTotais();
        loadPrincipal();
    }

    if (pageAtual == "cadastros.html") {
        listarCadastros();
    }

    if (pageAtual == "contratos.html") {
        listarContratos();
    }

    if (pageAtual == "mensalidades.html") {
        listarMensalidades();
    }
})

MobileUI.recorteString = function (params, qtd) {
    if (params.length > qtd) {
        return params.substr(0, qtd) + "...";
    }

    return params;
}

MobileUI.situacao = function (id_situacao) {
    if (id_situacao == 1) {
        return 'Em aberto';
    }
    if (id_situacao == 2) {
        return 'Finalizado';
    }
    if (id_situacao == 3) {
        return 'Cancelado';
    }
}

MobileUI.statusSituacao = function (id_situacao) {
    if (id_situacao == 1) {
        return '<i class="icon ion-android-happy text-grey"></i>';
    }
    if (id_situacao == 2) {
        return '<i class="icon ion-android-happy text-green"></i>';
    }
    if (id_situacao == 3) {
        return '<i class="icon ion-android-sad text-red"></i>';
    }
}	