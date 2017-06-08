requirejs.config({
    baseUrl: '/base/src',
    paths:{
        'jquery': '../lib/jquery'
    }
});

define(['calculadora', 'jquery'], function(Calculadora, $){
    var app = new Calculadora();
});