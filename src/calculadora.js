define(function () {

    /**
     * Módulo do Objeto Calculadora
     */
    var Calculadora = function () {

        /**
         * Efetua a validação de Operandos
         * @param {*} op1 Operando 1
         * @param {*} op2 Operando 2 
         */
        var validarOperandos = function (op1, op2) {
            if (typeof (op1) !== 'number') {
                throw 'Operando 1 inválido';
            }
            if (typeof (op2) !== 'number') {
                throw 'Operando 2 inválido';
            }
        };

        /**
         * Valida um denominador
         * @param {*} denominador Denominador
         */
        var validarDenominador = function (denominador) {
            if (denominador == 0) {
                throw 'Operando 2 deve ser diferente de 0';
            }
        };

        /**
         * Efetua a soma de dois operandos
         * @param {*} op1 Operando 1
         * @param {*} op2 Operando 2
         * 
         * @return Resultado da Soma
         * @throws Operando 1 inválido
         * @throws Operando 2 inválido
         */
        this.somar = function (op1, op2) {
            validarOperandos(op1, op2);
            return op1 + op2;
        };

        /**
         * Efetua a subtração de dois operandos
         * @param {*} op1 Operando 1
         * @param {*} op2 Operando 2
         * 
         * @return Resultado da Soma
         * @throws Operando 1 inválido
         * @throws Operando 2 inválido
         */
        this.subtrair = function (op1, op2) {
            validarOperandos(op1, op2);
            return op1 - op2;
        };
        
        /**
         * Efetua a multiplicação de dois operandos
         * @param {*} op1 Operando 1
         * @param {*} op2 Operando 2
         * 
         * @return Resultado da Soma
         * @throws Operando 1 inválido
         * @throws Operando 2 inválido
         */
        this.multiplicar = function (op1, op2) {
            validarOperandos(op1, op2);
            return op1 * op2;
        };

        /**
         * Efetua a divisão de dois operandos
         * @param {*} op1 Operando 1
         * @param {*} op2 Operando 2
         * 
         * @return Resultado da Soma
         * @throws Operando 1 inválido
         * @throws Operando 2 inválido
         * @throws Operando 2 deve ser diferente de 0
         */
        this.dividir = function (op1, op2) {
            validarOperandos(op1, op2);
            validarDenominador(op2);
            return op1 / op2;
        };
    };

    return Calculadora;
});