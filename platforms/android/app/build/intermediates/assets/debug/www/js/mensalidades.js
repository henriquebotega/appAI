var colMensalidades = [];

function listarMensalidades() {
    loading('Carregando...')

    var url = urlServidor + "/mensalidades";
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

            colMensalidades = ret['retorno'];
        });
}

function editMensalidade(id) {
    openPage('editMensalidade', { id: id }, functionEditMensalidade)
}

function functionEditMensalidade(params) {
    loading('Carregando...')

    var url = urlServidor + "/mensalidades/" + params['id'];
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

            document.getElementById('mensalidadeNome').value = ret['retorno'].nome;
            document.getElementById('mensalidadeNumero').value = ret['retorno'].numero;
            document.getElementById('mensalidadeDataVcto').value = ret['retorno'].data_vcto;
            document.getElementById('mensalidadeDataPgto').value = ret['retorno'].data_pgto;
            document.getElementById('mensalidadeValorVcto').value = ret['retorno'].valor_vcto;
            document.getElementById('mensalidadeValorPgto').value = ret['retorno'].valor_pgto;
            document.getElementById('mensalidadeID').value = ret['retorno'].id;
            document.getElementById('mensalidadeSituacao').value = MobileUI.situacao(ret['retorno'].id_situacao);
        });
}

function darBaixa() {
    alert({
        title: 'Baixar Mensalidade',
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
    loading('Carregando...')

    var mensalidadeID = document.getElementById('mensalidadeID').value;
    var dataBaixa = document.getElementById('baixaData').value;
    var valorBaixa = document.getElementById('baixaValor').value;

    if (mensalidadeID && dataBaixa && valorBaixa) {
        var url = "/mensalidades/" + mensalidadeID;

        MobileUI.ajax
            .put(url)
            .set('token', loginServidor['token'])
            .set('Content-Type', 'application/json')
            .send({
                data_pgto: dataBaixa,
                valorBaixa: valorBaixa
            })
            .end(function (error, res) {
                closeLoading();
                alert('Baixa efetuada com sucesso!')
            });
    } else {
        closeLoading();
        alert('Preencha corretamente os campos!')
}

}
