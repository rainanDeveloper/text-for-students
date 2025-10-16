<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"> 
  <img style="width: 12rem; height: 12rem; border-radius: 12rem" alt="Foto de perfil de Rainan Miranda de Jesus" src="https://avatars.githubusercontent.com/u/29068835?v=4"/>
</div>

# Rainan Miranda de Jesus &lt;rainan.jesus@pm.me&gt;
## Lead Software Engineer (Full-Stack / DevOps / Scrum Master)
---

Meu nome é Rainan Miranda de Jesus, e atuo como Engenheiro de Software principal na aplicação do Concilia Pix na Naxtool Sistemas. Minha principal função é o desenvolvimento do frontend e backend da aplicação (Desenvolvedor principal Full-Stack), mas também reviso código de outros devs sob minha gestão (função de Tech Lead), gerencio o processo de Scrum (função de Scrum master), subo e gerencio ambientes de desenvolvimento (dev, prod, banco de dados, containers docker, etc. Função de DevOps).

Trabalho em uma empresa pequena de desenvolvimento, por isso, acabo acumulando algumas funções que empresas maiores seriam divididas entre mais de um profissional. Apesar disso, esse acúmulo de funções acaba me dando maior capacidade de tomada de decisões, o que significa necessariamente mais responsabilidade também. Como a empresa é pequena, a demanda de cada uma dessas funções é na verdade até bem pequena, o que faz com que apesar de acumular funções, eu não me sobrecarregue tanto. Como preciso lidar com poucos devs, a função de Tech lead não ocupa tanto o tempo, o mesmo vale para a função de Scrum Master, como tem poucos ambientes de devenvolvimento, e pipelines de CI/CD, a função de DevOps também não sobrecarrega.

Como desenvolvedor, tenho que garantir que as funcionalidades que implemento suprem os requisitos solicitados na tarefa em que a funcionalidade é descrita. Isso inclui todos os aspectos: funcionalidade, design da interface gráfica, escalabilidade, segurança etc. Geralmente o funcionamento geral é descrito no formato de "Regra de negócio", dentro de uma tarefa, em um software de gerenciamento de tarefas (tipo o Jira, da Atlassian, ou o Open Project, que é um projeto open source permite fazer self-hosting).

Uma regra de negócio é uma descrição simples do que a aplicação deve fazer, por exemplo:

- A tela de login deve ter um campo de login/email, e um campo de senha, e uma validação de captcha para evitar abusos
- O formulário de registro deve ter os campos de login/email de cadastro, nome do usuário, senha, confirmação de senha e data de nascimento
- Uma fatura não pode ser paga se já foi cancelada

Basicamente são conjunto de descrições do que a aplicação deve fazer. A task em que essas regras de negócio estão contidas podem ter elementos que ajudem à guiar o processo de desenvolvimento, como prints da tela de um design que foi feito anteriormente, ou um simples esqueleto de uma tela, sem muitos elementos visuais ou escolhas de design finalizados.

Além das tasks de funcionalidade, existem tasks de bugfixes/correções de erros que a aplicação está apresentando, e essas geralmente vem com a descrição detalhada do que está acontecendo de erro, por exemplo:

> O boleto quanto é criado não está sendo emitido para o banco corretamente e não há nenhum retorno para o usuário do porque não está sendo emitido

essas descrições detalhadas podem vir acompanhadas de prints das telas com os erros que aparecem exatamente.

Já como Tech lead, eu lido também com a revisão dos códigos de outros desenvolvedores menos experientes antes de "juntar" as suas correções à aplicação que já está rodando, é preciso abrir uma "pull request" (requisitar que seja "juntado" as modificações), e é preciso que alguém reveja o que foi modificado, e preferencialmente até teste essas modificações. Essa pessoa que "revisa" essas modificações sou eu, como Tech lead.

Além de revisar código, eu tiro dúvidas e explico como fazer algumas implementações mais complexas à outros desenvolvedores, ou quais melhores práticas à serem aplicadas. Às vezes as duas coisas podem ser feitas juntas: eu reviso modificações, já comento o que acho que é possível melhorar pelo próprio repositório. Github, gitlab, gitea, bitbucket e outros gerenciadores de código fonte que tem por base o git permitem fazer comentários, novos commits, e abrir discussão em um pull request ou merge request, que são as tais "requisições de junção das modificações".

Como DevOps, eu faço outras funções, como preparar os ambientes em servidores pessoais virtuais (VPS's - Virtual Private Servers), e preparar containers (como os de docker) para subir nesses servidores, bancos de dados e serviços usados pela minha aplicação, além de preparar pipelines de CI/CD (Continous Integration e Continous Deploy, ou integração contínua e deploy contínuo), para que ao fazer modificações no repositório, essas modificações disparem automaticamente o build/construção e posterior deploy/lançamento da aplicação, de forma contínua, sem interferência humana. Alguns dessas pipelines de CI/CD fazem passos anteriores de testes unitários, que garantem que as funcionalidades que estavam funcionando continuam funcionando.

Tudo isso é importante para garantir o pleno funcionamento e zero downtime da aplicação (tempo da aplicação indisponível) para o cliente.
