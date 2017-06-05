requirejs.config({
    baseUrl: '/base/src',
    paths:{
        'jquery': '../lib/jquery'
    }
});

define(['app', 'jquery'], function(Calculadora, $){
    var app = new Calculadora();
});