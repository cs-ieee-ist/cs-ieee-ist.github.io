# CS-IEEE-IST

## Cool references:

  https://qscintilla.com/custom-lexer-example/
  https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click


## CSS style:

  > Vamos usar o prettify da google esta aqui o [README.md](https://github.com/google/code-prettify/blob/master/docs/getting_started.md)
  
  ### Auto Loader
  ``
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/lozader/run_prettify.js?lang=c&amp;skin=sons-of-obsidian"></script>
  ``


## Script Python makeClass:

  >Requisitos: [python3](https://www.python.org/download/releases/3.0/)

  ```sh
  $ cd cs-ieee-ist.github.io/scripts/coding 
  $ python3 makeClass.py $(ABREVIACAO_DA_NOVA_CADEIRA)
  > Class full name: $(NOME_DA_NOVA_CADEIRA)
  ```
  
## Repository workaround with Branches and Issues


Criar issues (nome oficial do github)

Uma issue corresponde a uma tarefa, no contexto deste repositótio será por exemplo:

- Criar X algoritmo
- Adicionar X matéria teórica
- Formatação de X

Após a criação dessa issue, deve ser dado "Assign" decidam de entre quem está responsável da disciplina, quem deve ficar com essa issue

Uma vez feitos os passos anteriores, é uma questão de criarem branches para cada issue
(cada issue vai ter um número identidicador dessa tipo "#12")


#### criar branch
```sh
$ git branch issue#12
```
#### criar branch e mover diretamente para ele
```sh
$ git checkout -b issue#12
```
#### mudar de branches
```sh
$ git checkout master
```
#### saber em que branch estou
```sh
$ git branch
```

