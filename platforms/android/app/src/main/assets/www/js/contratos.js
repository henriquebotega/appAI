var colContratos = [];
var colContratosItens = [];

function listarContratos() {
    loading('Carregando...')

    var url = urlServidor + "/contratos";
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
            
            colContratos = ret['retorno'];
        });
}

function editContrato(id) {
    openPage('editContrato', { id: id }, functionEditContrato)
}

function functionEditContrato(params) {
    loading('Carregando...')

    var url = urlServidor + "/contratos/" + params['id'];
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

            document.getElementById('contratoNome').value = ret['retorno'].nome;
            document.getElementById('contratoObservacao').value = ret['retorno'].observacao;
            document.getElementById('contratoSituacao').value = MobileUI.situacao(ret['retorno'].id_situacao);
            document.getElementById('contratoTotal').value = MobileUI.formatMoney(ret['retorno'].valor_total, 2, ',', '.');
        });

    var urlItens = urlServidor + "/contratos/" + params['id'] + "/itens";

    MobileUI.ajax
        .get(urlItens)
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

            colContratosItens = ret['retorno'];
        });
}