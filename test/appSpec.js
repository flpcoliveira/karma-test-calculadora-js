define(['app', 'jquery'], function(Calculadora, $){
    describe('Testando Calculadora', function(){
        it('Testando Soma com operandos válidos', function(){
            var calc = new Calculadora();
            var res = calc.somar(5, 7);
            expect(res).toEqual(12);          
        });


        it('Testando soma com operandos inválidos', function(){
            var calc = new Calculadora();
            var res = calc.somar('a', 7);
            var msg = calc.msgErro[0];
            expect(calc.msgErro[0]).toBe('operando 1 inválido');  
        });

       /* it('Testando subtração com operandos válidos', function(){

        });

        it('Testando subtração com operandos inválidos', function(){

        });

        it('Testando multiplicação com operandos válidos', function(){

        });

        it('Testando multiplicação com operandos inválidos', function(){

        });

        it('Testando divisão com operandos válidos', function(){

        });

        it('Testando divisão com operandos inválidos', function(){

        });*/
        
        
    });

});