import readlinesync = require("readline-sync");

export function main(){


    let opcao: number

    while (true) {

        console.log( 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                LOJA de Jogos POO                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Jogo                       ");
        console.log("            2 - Listar todos os jogos                ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados do jogo              ");
        console.log("            5 - Deletar jogo                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nLOJA de Jogos POO Agradece sua preferência.");
            
            console.log( "");
            return
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n" );
                
                
                break;
            case 2:
                console.log( "\n\nListar todas as Contas\n\n", );

                
                break;
            case 3:
                console.log( "\n\nConsultar dados da Conta - por número\n\n", );

                
                break;
            case 4:
                console.log( "\n\nAtualizar dados da Conta\n\n", );

                
                break;
            case 5:
                console.log( "\n\nApagar uma Conta\n\n", );

                
                break;
            

                
            default:
                console.log( "\nOpção Inválida!\n", );

                
                break;
        }
    }
    
}
