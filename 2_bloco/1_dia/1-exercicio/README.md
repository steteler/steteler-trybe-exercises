<h2 align="center">GIT & GITHUB- Funcionalidades.</h2>

<h2 align="center">PADRÃO PARA CRIAÇÃO DE REPOSITÓRIOS (RECOMENDADO):</h2>

**Explicando de maneira simples**:

*Github* - diretório que vai guardar todos os projetos.
*trybe-exercises* - diretório a ser versionado.
*1_bloco* - diretório que vai guardar todos os dias do bloco.
*1_dia* - diretório que vai guardar todos os exercícios do dia.
*1-exercicio* - diretório que vai guardar o primeiro exercício do dia.

<hr />

**Explicando de maneira detalhada**:

 1. crie um diretório chamado Github ou Repositório-Local. obs: esse
   diretório Github ele vai guardar todos seus projetos. Recomendo que
   você crie ele na Home.

    `mkdir Github`

 
 1. crie um diretório chamado trybe-exercises dentro do diretório Github.
   obs: vai ser esse diretório que vai ser versionado.
   
   
    `mkdir trybe-exercises`

   
 1. dê git init dentro do diretório trybe-exercises. obs: isso vai   
   criar o seu repositório local. Versionando assim tudo dentro do   
   diretório.

   
    `git init`
   
 1. logo após isso, crie uma nova branch chamada: exercises/4.2. obs:
   o 4.2 é só pra representar o nome, sendo 4 (o bloco) e o 2 (o dia).
   
    `git checkout -b exercises/4.2`
   
 1. crie o diretório {número-do-bloco}_bloco. obs: nós estamos
   atualmente no bloco 4, ou seja, você vai criar um diretório chamado
   4_bloco
   
    `mkdir 4_bloco`
   
 1. crie outro diretório chamado {número-do-bloco-do-dia}_dia. obs:
   novamente, utilize o número do dia para colocar no diretório, por
   exemplo, dentro do bloco 4, temos o dia 1 até o 5, vamos supor que
   estamos no dia 2, então você vai criar 2_dia.
   
    `mkdir 2_dia`
   
 1. crie o último diretório chamado {número-do-exercicio}-exercicio.
   obs: aqui você vai colocar o número do exercício que você está
   fazendo, logicamente começando do 1. Perceba também que o do
   exercício não é mais " _ " e sim " - ".
   
    `mkdir 1-exercicio`
   
 1. depois disso é só entrar dentro do diretório 1-exercicio, e criar
   o arquivo para a resolução do exercício lá dentro.
   
    `touch scripts.js`
    `code scripts.js`


**Como deve ficar**:

`/home/kikuti/Github/trybe-exercises/4_bloco/2_dia/1-exercicio/scripts.js`

<hr />

**Recomendação**:

- Criar uma nova branch toda vez que mudar de dia ou de bloco.
- 1_bloco - criar um novo toda vez que mudar de bloco, por exemplo 2_bloco.
- 1_dia - criar um novo toda vez que mudar de dia, por exemplo 2_dia.
- 1-exercicios - criar um novo toda vez que resolver um exercício, por exemplo 2-exercicio.

<hr />

<h3>SOBRE GIT</h3>

O git é um mecanismo de controle de versão distribuido, que foi criado por linus torvald durante o desenvolvimento do próprio linux. O objetivo do git é guardar um conjunto de alterações nos seus arquivos através dos commits, o conjunto desses commits cria um histórico de alterações alongo de todos os momentos cronológicos que o repositorio viveu, podendo assim navegar entre as versões de um mesmo arquivo.

<hr />

**PRIMEIROS PASSOS**:

-> { **sudo apt-get install git-all** } >> serve para instalar todos os componentes do git.

-> { **git config --global user.name "Seu nome"** } >> serve para definir seu nome dentro das configurações do git.

-> { **git config --global user.email "seuemail@exemplo.br"** } >> serve para definir seu email dentro das configurações do git.

-> { **git config --global core.editor "code --wait"** } >> serve para definir o editor de texto padrão do git.

-> { **ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"** } >> serve para gerar uma chave ssh para o seu email.

-> { **eval "$(ssh-agent -s)"** } >> serve para adicionar a chave ssh ao ssh-agent.

-> { **ssh-add ~/.ssh/id_rsa** } >> serve para adicionar a chave ssh ao ssh-agent.

-> { **cat ~/.ssh/id_rsa.pub** } >> para copiar chave SSH para colocar no github.

<hr />

**PARA COLOCAR NO GITHUB A CHAVE SSH**:

- *Settings*.
- *SSH and GPG keys*.
- *New SSH key*.
- *Adicione um título qualquer e coloque a chave dentro do campo key*.
- *Clique em add SSH key*.

<hr />

**FUNCIONALIDADE DOS COMANDOS**:

-> { **branch** } >> é uma versão independente e editável que se cria de um código.

-> { **branch master** } >> a branch principal do código, a "oficial" é a master/main.

-> { **merge** } >> é quando pegamos as alterações feitas em uma branch (commits) e passa pra outra branch.

-> { **origin** } >> é o nome dado ao repositório remoto.

<hr />

**REPOSITÓRIO LOCAL**:

-> { **git init** } >> cria um repositório local, começa a versionar o diretório que o comando foi executado.

-> { **git add nome-do-arquivo** } >> adiciona alterações do arquivo/diretório na área de staged.

-> { **git add nome-do-arquivo outro-nome-de-arquivo** } >> ele vai dar um git add em 2 arquivos diferentes em 1 sintaxe, economizando assim código digitado.

-> { **git commit -m "mensagem"** } >> commita uma alteração e deixa uma mensagem, obs: pra a alteração ser commitada ela precisa estar na área de staged.

-> { **git commit -am "mensagem"** } >> adiciona alterações na área de staged e commita (pega todas as alterações do diretório).

-> { **git --set-upstrem origin nome-da-branch** } >> vai sincronizar o repositório local com o remoto, ele vai mandar as informações do repositório local pro remoto (só precisa declarar isso apenas 1 vez).

-> { **git push -u origin nome-da-branch** } >> vai sincronizar o repositório local com o remoto, ele vai mandar as informações do repositório local pro remoto (só precisa declarar isso apenas 1 vez).

-> { **git push** } >> empurra as alterações pro repositório remoto.

-> { **git log** } >> mostra as informações dos commits, como: histórico de commits, hash do commit, autor do commit, etc.

-> { **git log --diff-filter=D --summary** } >> esse comando vai fazer os arquivos deletados do git sejam mostrados em forma de summary.

-> { **git status** } >> mostra todos os status da branch atual, como: alterações que estão ou não estão na área de staged, se sua branch está atrás do repositório remoto, etc.

-> { **git checkout nome-da-branch** } >> troca a branch atual que você está.

-> { **git checkout -b nome-da-branch** } - cria uma branch nova e já da checkout automaticamente nela.

-> { **git checkout hash~1 nome-do-arquivo** } >> vai restaurar um arquivo apagado dentro de um commit.

-> { **git branch** } >> vai listar todas as branchs existentes.

-> { **git branch nome-da-branch** } >> cria uma nova branch.

-> { **git branch -d nome-da-branch** } >> apaga uma branch.

-> { **git branch -m novo-nome** } >> renomeia uma branch.

-> { **git branch -m nome-antigo novo-nome** } >> renomeia uma branch sem precisar estar dentro dela.

-> { **git branch -a** } >> mostra todas as branchs, as locais e as remotas.

-> { **git merge nome-da-branch** } >> vai dar um merge nas branchs, vai pegar a branch atual que você está e vai dar merge na branch informada, ou seja vai pegar todas as informações da branch selecionada.

-> { **git clone url** } >> ele vai clonar um repositório remoto e alocar localmente.

-> { **git clone -b nome-da-branch url** } >> ele vai clonar uma branch específica.

-> { **git remove nome-do-arquivo** } >> o git vai remover um arquivo de uma branch.

-> { **git rebase -i hash** } >> isso pode fazer várias coisas, uma das principais é alterar a mensagem de um commit.

-> { **git remote add origin link-repositório-remoto-ssh-ou-https** } >> conecta o repositório local com o remoto.

-> { **git remote -v** } >> verificar se o repositório local está conectado com o remoto e verifica o link do fetch e o link do pull.

-> { **git fetch** } >> ele vai ver se tem alguma mudança no repositório remoto e comparar com o repositório local, se tiver alguma mudança entre eles, ele vai alertar no git status..

-> { **git pull** } >> ele verifica se tem alguma alteração no repositório remoto e compara com o repositório local (assim como o git fetch), mas ele também cria um git merge, ou seja, ele "atualiza" o repositório local.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

-> { git preencher } >> preencher.

<hr />

** **CURIOSIDADES DO GIT**:

-> { **.gitignore** } >> é um arquivo txt que vai ignorar um arquivo qualquer que você não quer versionar (geralmente arquivos do editor de texto).

-> { **touch .gitignore** } - vai criar o .gitignore, para acessar ele é necessário abrir com um editor de texto, por exemplo: code .gitignore.

-> { http://gitignore.io/ } - esse site vai criar automaticamente arquivos pro .gitignore.

-> { **pull request  ou PR**} - requisição de merge feite no repositório remoto (GITHUB).

<h2 align="center">GITHUB</h2>

**SOBRE GITHUB**: 

O github é uma plataforma que hospeda os repositórios do git, é uma maneira de deixar o código visível e de distribuir pras outras pessoas de forma remota.

<hr />

**OPÇÕES DO REPOSITÓRIO**:

 - Star (estrela): Basicamente a estrela serve para você salvar um projeto como "favoritos", fazendo assim com que o link do projeto fique salvo.
 - Fork: O fork ele vai clonar um repositório para a sua conta do github que possibilita você fazer alterações no projeto clonado, depois de terminar as modificações você pode mandar essas modificações para o dono do repositório e ele pode aceitar essas modificações ou recusar.

**OBSERVAÇÕES**:

 - Optar por escolher o nome da branch como "main" do que "master", pois
   as empresas hoje em dia preferem assim.
 - Arquivos untracked (não traqueados), são arquivos que não estão
   vistos pelo git, ou seja, se for dar um commit ele não vai conseguir,
   primeiro você tem que colocar na área de staged pra os arquivos
   ficarem traqueados para serem commitados.
 - Branch é uma ramificação, feature é o nome da ramificação.
 - O pull request (PR) é uma solicitação pra merge.
 - O commit só vai versionar o arquivo se ele estiver dentro da área de
   staged.
 - **Nunca commitar na master/main.**

<hr />