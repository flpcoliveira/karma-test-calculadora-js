define(function () {
    var Calculadora = function () {

        /**
         * * ************************************************************************
         * Propriedades Privadas
         * * ************************************************************************
         */
        var codErro = [];
        var msgErro = [];

        /**
         * * ************************************************************************
         * Funções Privadas
         * * ************************************************************************
         */
        function validarOperandos (op1, op2) {
            if (typeof (op1 !== 'number')) {
                codErro.push(1);
                msgErro.push('operando 1 inválido');

            }
            if (typeof (op2 !== 'number')) {
                codErro.push(2);
                msgErro.push('operando 2 inválido');
            }

            return codErro.length == 0;
        };

        function validarDenominador (denominador) {
            if (denominador === 0) {
                codErro.push(2);
                msgErro.push('Operando 2 deve ser diferente de 0');
            }
        };
    };

    /**
     * ************************************************************************
     * Funções Públicas
     * ************************************************************************
     */
    Calculadora.prototype.temErro = function () {
        return codErro.length > 0;
    }

    Calculadora.prototype.getCodErros = function () {
        var arr = codErro.slice();
        codErro = [];

        return arr;
    };

    Calculadora.prototype.getMsgErros = function () {
        var arr = msgErro.slice();
        msgErro = [];

        return arr;
    };

    Calculadora.prototype.somar = function (op1, op2) {
        //if (validarOperandos(op1, op2)) {
            return op1 + op2;
        //}
    };

    Calculadora.prototype.subtrair = function (op1, op2) {
        if (validarOperandos(op1, op2)) {
            return op1 - op2;
        }
    };

    Calculadora.prototype.multiplicar = function (op1, op2) {
        if (validarOperandos(op1, op2)) {
            return op1 * op2;
        }
    };

    Calculadora.prototype.dividir = function (op1, op2) {
        if (validarOperandos(op1, op2)) {
            if (validarDenominador(op2)) {
                return op1 / op2;
            }
        }
    };

    return Calculadora;

});