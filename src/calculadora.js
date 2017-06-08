define(function () {
    var Calculadora = function () {
        this.codErro = [];
        this.msgErro = [];
    

    /**
     * ************************************************************************
     * Funções Públicas
     * ************************************************************************
     */

    this.validarOperandos = function (op1, op2) {
        if (typeof (op1) !== 'number') {
            this.codErro.push(1);
            this.msgErro.push('operando 1 inválido');
        }
        if (typeof (op2) !== 'number') {
            this.codErro.push(2);
            this.msgErro.push('operando 2 inválido');
        }

        return this.codErro.length == 0;
    };

    this.validarDenominador = function (denominador) {
        if (denominador == 0) {
            this.codErro.push(2);
            this.msgErro.push('Operando 2 deve ser diferente de 0');
        }
        return this.codErro.length == 0;

    };

    this.temErro = function () {
        return this.codErro.length > 0;
    }

    this.getCodErros = function () {
        var arr = this.codErro.slice();
        this.codErro = [];

        return arr;
    };

    this.getMsgErros = function () {
        var arr = this.msgErro.slice();
        this.msgErro = [];

        return arr;
    };

    this.somar = function (op1, op2) {
        if (this.validarOperandos(op1, op2)) {
            return op1 + op2;
        }
    };

    this.subtrair = function (op1, op2) {
        if (this.validarOperandos(op1, op2)) {
            return op1 - op2;
        }
    };

    this.multiplicar = function (op1, op2) {
        if (this.validarOperandos(op1, op2)) {
            return op1 * op2;
        }
    };

    this.dividir = function (op1, op2) {
        if (this.validarOperandos(op1, op2)) {
            if (this.validarDenominador(op2)) {
                return op1 / op2;
            }
        }
    };

};
    return Calculadora;

});