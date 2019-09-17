/*
	Ficheiro: exec.c
	Autor: João Caldeira / Knuckles / SaucyGoat (which one?)

	Este programa demonstra o uso da chamada de sistema exec.
*/


#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>		// para o fork(), sleep() e exec()
#include <sys/wait.h>	// para o wait()


/*
	RESUMO DO PROGRAMA

	Começamos por fazer a chamada de sistema fork().
	O processo pai esperará que o filho acabe de executar.
	O processo filho recorrerá à chamada de sistema execv (um "wrapper" da chamada exec)
	para executar um dado programa.

	Neste caso, vamos executar o programa "echo", disponível no terminal do Unix.
	Primeiro, definimos os argumentos a passar a esse programa (o parâmetro argv).
	O primeiro argumento é o nome do executável, o segundo (neste caso) é uma mensagem
	que queiramos imprimir no ecrã, e o terceiro é o terminador NULL do array.

	Estamos prontos para a chamada execv!
	A função/chamada exec substitui o espaço de endereçamento do processo que o chama
	pelo contido no dado ficheiro executável.
	O programa "echo" é então executado com os parâmetros dados e imprime a mensagem definida abaixo.
	Caso a chamada execv falhe, devolve -1.

	Nota:	A shell do Linux é um exemplo da utilização das funções fork() e exec().
			Quando um comando é introduzido no terminal, é criado um processo novo que
			executa a função especificada no comando.
*/


int main()
{
	int r = fork();	// guardamos o valor de retorno do fork()

	if (r == 0) {	// verificar se é o filho
		// CÓDIGO DO PROCESSO FILHO
		char * prog_name = "/bin/echo";	// path (caminho) do programa
		char * message = "Filho:\tHello! Sou o filho a executar o programa echo.";	// mensagem a ser imprimida
		char * const args[] = { prog_name, message, NULL };	// argumentos do programa (argv)
		int r = execv("/bin/echo", args);	// executa o programa "echo" dando os argumentos "args"

		if (r == -1)	// se ocorreu um erro
			exit(EXIT_FAILURE);
	} else if (r > 0) {	// verificar se é o pai
		// CÓDIGO DO PROCESSO PAI
		int status;
		int pid;

		printf("Pai:\tHello! Sou o pai da criança.\n");

		// execução do pai é suspendida até que um dos seus filhos termine
		pid = wait(&status);

		/*
			- wait(): devolve o pid do filho que terminou, ou -1 caso ocorra um erro
			- WIFEXITED: devolve "true" caso o filho tenha terminado normalmente,
				"false" caso contrário
			- WEXITSTATUS: devolve o exit status do filho (em caso de sucesso, o valor é 0)
		*/

		if (WIFEXITED(status))
			printf("Pai:\tFilho %d terminou com código de retorno %d.\n", pid, WEXITSTATUS(status));
		else
			printf("Pai:\tFilho %d terminou abruptamente.\n", pid);

		// pai termina com sucesso
		exit(EXIT_SUCCESS);
	} else {	// verificar se a chamada fork() deu erro
		printf("Oops! Erro no fork().\n");
		exit(EXIT_FAILURE);
	}

	exit(EXIT_SUCCESS);
}
