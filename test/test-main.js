var REGEXP_TESTE = /Spec\.js$/;
var arquivosTeste = [];

Object.keys(window.__karma__.files).forEach(function(arquivo){
    if(REGEXP_TESTE.test(arquivo)){
        console.log(arquivo);
        arquivosTeste.push(arquivo);
    }
});

requirejs.config({
    baseUrl: '/base/src',
    paths:{
        'jquery': '../lib/jquery'
    },
    deps: arquivosTeste,
    callback: window.__karma__.start
});