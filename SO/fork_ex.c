/*
	Ficheiro: fork.c
	Autor: João Caldeira / Knuckles / SaucyGoat (which one?)
	Este programa demonstra algumas operações básicas sobre processos.
*/


#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>		// para o fork() e o sleep()
#include <sys/wait.h>	// para o wait()


#define	MAX_ITER	3


/*
	RESUMO DO PROGRAMA
	Começamos por fazer a chamada de sistema fork() e guardar o seu valor de retorno.
	O processo criado (processo filho) é uma cópia do pai - o espaço de endereçamento
	e o contexto de execução são copiados.
	Qual será o valor de retorno da chamada fork()?
		- ao processo pai é devolvido o pid (process id) do filho
		- ao processo filho é devolvido 0 (zero)
		- caso a chamada de sistema falhe, é devolvido -1
	
	Tendo dois processos a executar o mesmo código, teremos então 3 condições:
		- se o valor de retorno for igual a 0, trata-se do processo filho, e portanto
			o código executado será o que está incluído nessa condição
		- se o valor de retorno for superior a 0, temos o pid do filho, pelo que será
			o pai a executar o código incluído nessa condição
		- se o valor de retorno for inferior a 0, a chamada de sistema falhou e
			portanto terminamos o programa
*/


int main ()
{
	int r = fork();	// guardamos o valor de retorno do fork()

	if (r == 0) {	// verificar se é o filho
		// CÓDIGO DO PROCESSO FILHO
		int i;

		// chamada de sistema que devolve o pid do processo
		printf("Filho:\tHello! Sou o filho com pid=%d.\n", getpid());

		for (i = 0; i < MAX_ITER; i++) {
			sleep(1);
			printf("Filho:\tExisto há cerca de %d segundos!\n", i+1);
		}

		sleep(1);
		printf("Filho:\tMr. Stark, I don't feel so good... Vou terminar!\n");

		// filho termina com sucesso
		exit(EXIT_SUCCESS);
	} else if (r > 0) {	// verificar se é o pai
		// CÓDIGO DO PROCESSO PAI
		int status;
		int pid;

		printf("Pai:\tHello! Sou o pai que criou o filho pid=%d\n", r);

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