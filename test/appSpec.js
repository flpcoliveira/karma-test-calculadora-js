define(['app', 'jquery'], function(Calculadora, $){
    describe('Testando Calculadora', function(){
        it('Testando Soma com operandos válidos', function(){

            var calc = new Calculadora();
            //expect(Calculadora.somar).toBeDefined();
            //console.log(calc.somar(5, 7));
            var res = calc.somar(5, 7);
            console.log(res);

            //expect(calc.temErro()).toEqual(false);
            expect(res).toEqual(12);            
        });

/*
        it('Testando soma com operandos inválidos', function(){

        });

        it('Testando subtração com operandos válidos', function(){

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

        });
        */
        
    });

});