define(['calculadora', 'jquery'], function (Calculadora, $) {

    /* Suite de Testes para o Módulo Calculadora */
    describe('Calculadora', function () {

        /* Ação a ser executada antes de cada caso de teste */
        beforeEach(function () {
            this.calculadora = new Calculadora();
        });

        /* Caso de teste para Soma com Operandos válidos */
        it('Soma com operandos válidos', function () {

            var res = this.calculadora.somar(5, 7);
            expect(res).toEqual(12);

            res = this.calculadora.somar(-5, 2);
            expect(res).toEqual(-3);

            res = this.calculadora.somar(4, -3);
            expect(res).toEqual(1);

            res = this.calculadora.somar(-5, -6);
            expect(res).toEqual(-11);

            res = this.calculadora.somar(5.5, 2.25);
            expect(res).toBe(7.75);

            res = this.calculadora.somar(-5.341, -3.437);
            expect(res).toBe(-8.778);

            res = this.calculadora.somar(5.509, 2.253);
            expect(res).toBe(7.762);

        });

        /* Caso de teste para Subtração com Operandos válidos */
        it('Subtração com operandos válidos', function () {
            var res = this.calculadora.subtrair(5, 7);
            expect(res).toEqual(-2);

            res = this.calculadora.subtrair(-5, 2);
            expect(res).toEqual(-7);

            res = this.calculadora.subtrair(4, -3);
            expect(res).toEqual(7);

            res = this.calculadora.subtrair(-5, -6);
            expect(res).toEqual(1);

            res = this.calculadora.subtrair(5.5, 2.25);
            expect(res).toBe(3.25);

            res = this.calculadora.subtrair(-5.341, -3.437);
            expect(res).toBe(-1.904);

            res = this.calculadora.subtrair(5.509, 2.253);
            expect(res).toBe(3.256);

        });

        /* Caso de teste para Multiplicação com Operandos válidos */
        it('Multiplicação com operandos válidos', function () {
            var res = this.calculadora.multiplicar(5, 7);
            expect(res).toEqual(35);

            res = this.calculadora.multiplicar(-5, 2);
            expect(res).toEqual(-10);

            res = this.calculadora.multiplicar(4, -3);
            expect(res).toEqual(-12);

            res = this.calculadora.multiplicar(-5, -6);
            expect(res).toEqual(30);

            res = this.calculadora.multiplicar(5.5, 2.25);
            expect(res).toBe(12.375);

            res = this.calculadora.multiplicar(-5.341, -3.437);
            expect(res).toBe(18.357017);

            res = this.calculadora.multiplicar(5.509, 2.253);
            expect(res).toBe(12.411777);
        });

        /* Caso de teste para Divisão com Operandos válidos */
        it('Testando divisão com operandos válidos', function () {
            var res = this.calculadora.dividir(1, 4);
            expect(res).toEqual(0.25);

            res = this.calculadora.dividir(2, 0.5);
            expect(res).toEqual(4);
        });

        /* Caso de teste para Soma com Operandos inválidos */
        it('Soma com operandos inválidos', function () {
            expect(this.calculadora.somar.bind(null, 7, 'a')).toThrow('Operando 2 inválido');
            expect(this.calculadora.somar.bind(null, 'f', 2)).toThrow('Operando 1 inválido');
            expect(this.calculadora.somar.bind(null, 'c', 'f')).toThrow('Operando 1 inválido');
        });


        /* Caso de teste para Subtração com Operandos inválidos */
        it('Subtração com operandos inválidos', function () {
            expect(this.calculadora.subtrair.bind(null, 7, 'a')).toThrow('Operando 2 inválido');
            expect(this.calculadora.subtrair.bind(null, 'f', 2)).toThrow('Operando 1 inválido');
            expect(this.calculadora.subtrair.bind(null, 'c', 'f')).toThrow('Operando 1 inválido');
        });

        /* Caso de teste para Multiplicação com Operandos inválidos */
        it('Multiplicação com operandos inválidos', function () {
            expect(this.calculadora.multiplicar.bind(null, 7, 'a')).toThrow('Operando 2 inválido');
            expect(this.calculadora.multiplicar.bind(null, 'f', 2)).toThrow('Operando 1 inválido');
            expect(this.calculadora.multiplicar.bind(null, 'c', 'f')).toThrow('Operando 1 inválido');
        });

        /* Caso de teste para Divisão com Operandos inválidos */
        it('Divisão com operandos inválidos', function () {
            expect(this.calculadora.dividir.bind(null, 7, 'a')).toThrow('Operando 2 inválido');
            expect(this.calculadora.dividir.bind(null, 'f', 2)).toThrow('Operando 1 inválido');
            expect(this.calculadora.dividir.bind(null, 'c', 'f')).toThrow('Operando 1 inválido');
            expect(this.calculadora.dividir.bind(null, 2, 0)).toThrow('Operando 2 deve ser diferente de 0');
        });

    });

});