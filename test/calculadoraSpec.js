define(['calculadora', 'jquery'], function(Calculadora, $){
    describe('Testando Calculadora', function(){
        it('Testando Soma com operandos válidos', function(){
            var calc = new Calculadora();
            var res = calc.somar(5, 7);
            expect(res).toEqual(12);          
        });

        it('Testando soma com operandos inválidos', function(){
            var calc = new Calculadora();
            var res = calc.somar('a', 7);
            var res = calc.somar(2, 'b');
            var res = calc.somar('a','e');
            var msg = calc.msgErro[0];
            expect(calc.msgErro[0]).toBe('operando 1 inválido');  
        });

       it('Testando subtração com operandos válidos', function(){
            var calc = new Calculadora();
            var res = calc.subtrair(5, 7);
            expect(res).toEqual(-2);
            var res = calc.subtrair(7.6, 5.5);
            expect(res).toEqual(2.1);
             
        });
        it('Testando multiplicação com operandos válidos', function(){
            var calc = new Calculadora();
            var res = calc.multiplicar(5, 7);
            expect(res).toEqual(35);
            var res = calc.multiplicar(0.5, 2);
            expect(res).toEqual(1);
        });

        it('Testando divisão com operandos válidos', function(){
            var calc = new Calculadora();
            var res = calc.dividir(1, 4);
            expect(res).toEqual(0.25);
            var res = calc.dividir(2, 0.5);
            expect(res).toEqual(4);
        });

        it('Testando subtração com operandos inválidos', function(){
            var calc = new Calculadora();
            var res = calc.dividir(1, 'a');
            expect(calc.msgErro[0]).toBe('operando 2 inválido');
            calc = new Calculadora();
            var res = calc.dividir(2, 0);
            expect(calc.msgErro[0]).toBe('Operando 2 deve ser diferente de 0');
        });

        it('Testando multiplicação com operandos inválidos', function(){

        });

        

        it('Testando divisão com operandos inválidos', function(){

        });
        
        
    });

});