/* Configuração do Karma */
module.exports = function (config) {
  config.set({

    /* diretório raiz */
    basePath: '',


    /* Frameworks utilizados durante o teste */
    frameworks: ['jasmine', 'requirejs'],


    /* Lista de Arquivos ou critérios para inclusão de arquivos necessários para os testes */
    files: [
      { pattern: 'lib/**/*.js', included: false },
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'test/**/*Spec.js', included: false },

      'test/test-main.js',
    ],


    /* Arquivos que não serão testados */
    exclude: [
      'src/main.js'
    ],

    /* Processa os arquivos a serem testados antes da execução dos testes */
    preprocessors: {
      'src/**/*.js': ["coverage"]
    },


    /* Ferramentas de geração de relatórios após a conclusão dos testes */
     reporters: ["mocha", "coverage"],

    /* Porta de execução do Karma*/
    port: 9876,


    /* Configuração a exibição de dados coloridos no container */
    colors: true,

    /* Nível de Log gerado no  console */
    logLevel: config.LOG_INFO,


    /* Define se os testes serão executados automaticamente se houver alguma alteração nos arquivos */
    autoWatch: true,


    /* Browsers onde serão executados os testes */
    browsers: ['Chrome', 'Firefox', 'IE'],


    /* Define se o teste será executado uma unica vez ou continuamente */
    singleRun: false,

    /* Define quantos Browser podem ser executados simultaneamente */
    concurrency: Infinity,

    /* Configuração do plugin coverage */
    coverageReporter: {
      type: "lcov",
      dir: "coverage/"
    },

    /* Configuração do plugin mocha */
    mochaReporter: {
      output: "autowatch"
    }
  });
};
