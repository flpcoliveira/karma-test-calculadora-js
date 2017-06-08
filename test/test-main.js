var REGEXP_TESTE = /Spec\.js$/;
var arquivosTeste = [];

/**
 * carrega todos os arquivos de teste
 */
Object.keys(window.__karma__.files).forEach(function(arquivo){
    if(REGEXP_TESTE.test(arquivo)){
        console.log(arquivo);
        arquivosTeste.push(arquivo);
    }
});

/**
 * Configuração do Require JS
 */
requirejs.config({
    baseUrl: '/base/src',
    paths:{
        'jquery': '../lib/jquery'
    },
    deps: arquivosTeste,
    callback: window.__karma__.start
});