# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na compreensão da rotina das personas elaboradas para este projeto, foram registradas as histórias de usuário mostradas a seguir.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`               |PARA ... `MOTIVO/VALOR`                                                               |
|--------------------|--------------------------------------------------|--------------------------------------------------------------------------------------|
|Rafaela Miranda     | Ter um prazo de finalização do pedido.           | Ter um controle do tempo de preparo e saber se está perto de ser finalizado.         |
|Sebastião Silva     | De uma comunicação mais assertiva e direta com o cliente.| Fornecer um atendimento mais ágil e prático em situações de superlotação.    |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

<p align="justify">As questões que delimitam o escopo funcional do projeto são definidas por meio dos requisitos funcionais, que descrevem as funcionalidades através das quais o usuário pode interagir com o sistema, e dos requisitos não funcionais, que descrevem as qualidades que o sistema deve apresentar para sua aceitação. Os requisitos funcionais e não funcionais do projeto são apresentados nas tabelas a seguir.</p>

### Requisitos Funcionais

| ID    | Descrição do Requisito                                                    | Prioridade |
| ----- | ------------------------------------------------------------------------- | ---------- |
| RF-01 | A aplicação deverá exibir o cardápio de forma prática e detalhada.        | Alta       |
| RF-02 | A aplicação deverá permitir ao cliente fazer seu pedido.                  | Alta       |
| RF-03 | A aplicação deverá notificar o pedido ao garçom.                          | Alta       |
| RF-04 | A aplicação deverá mostrar a prévia de sua conta ao cliente               | Média      |
| RF-05 | A aplicação deverá permitir que o cliente peça o fechamento de sua conta. | Média      |


### Requisitos não Funcionais

| ID | Descrição do Requisito | Prioridade |
| ------ | ------------------------------------------------------| ---------- |
| RNF-01 | A aplicação deve ser compatível com sistemas Android e IOS. | Alta |
| RNF-02 | A aplicação deverá ser feita com a tecnologia React Native. | Alta |
| RNF-03 | A aplicação deve possuir interface intuitiva. | Média |
| RNF-04 | A aplicação deve poder ser aberta em navegador web. | Baixa |
| RNF-05 | A aplicação deve possuir uma tela de navegação com elementos bem definidos e uma navegabildiade fluída. | Baixa |


## Restrições

<p align="justify">O projeto está restrito pelos itens apresentados na tabela a seguir.</p>

| ID | Restrição |
| ----- | ------------------------------------------------------------------- |
| RE-01 | O projeto deverá ser entregue no final do semestre letivo. |
| RE-02 | A equipe não pode subcontratar o desenvolvimento do trabalho. |
| RE-03 | Só poderão ser utilizados programas gratuítos ou fornecidos pela PUC Minas. |  
| RE-04 | O projeto deve ser documentado no GitHub. |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

![gerenciamento de tempo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t2-comanda-digital/blob/main/docs/img/Tabela%20de%20atividades%20e%20estimativa%20de%20tempo.png)

![Gráfico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t2-comanda-digital/blob/main/docs/img/Gr%C3%A1ficodeGantt.png)

## Gerenciamento de Equipe

<p align="justify"> O gerenciamento apropriado de tarefas contribuirá para que o projeto tenha um bom nível de produtividade. É fundamental que ocorra a gestão de tarefas e de pessoas, para que os profissionais envolvidos no projeto possam ser faclmente gerenciados.</p>

Membros do time:

Gerente de Projeto: Daniel Begas

Designer: Lívia Cristina

Analista de Sistemas: André Soares

Arquiteta de Software: Vânia Rezende

Desenvolvedores: André Soares, André Vieira, Daniel Begas, Lívia Cristina, Robson Levi, Vânia Rezende.

Analista de Banco de Dados: André Vieira

Analista de Testes: Robson Levi

![gerenciamento equipe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t2-comanda-digital/blob/main/docs/img/tabelagerenciamentodeequipe.png)

## Gestão de Orçamento

<p align="justify">Os valores dos custos do projeto foram calculados com a estimativa de tempo de quatro meses, utilizando seis profissionais. Qualquer alteração de custos que ultrapassar a estimativa da linha de base deverá ser avaliada pelo cliente e gerente do projeto.</p>

| Recursos Necessários | Valor         |
| -------------------- | ------------- |
| Recursos Humanos     | R$ 230.400,00 |
| Hardware             | R$ 6.000,00   |
| Rede                 | R$ 2.400,00   |
| Software             | R$ 480,00     |
| Serviços             | R$ 1.200,00   |
| Total                | R$ 240.600,00 |

<p align="justify">Cálculo:

Recursos Humanos = 6 Profissionais x R$ 60,00/hora x 640 horas (4 meses) = R$ 230.400,00

Hardware = 6 locações Notebooks x R$ 250,00/Mês x 4 Meses = R$ 6.000,00

Rede = 6 internet banda larga x R$ 100,00/Mês x 4 Meses = R$ 2.400,00

Softwares = 6 locações (windows, office) x R$ 20,00/Mês x 4 Meses = R$ 480,00

Serviços = 6 despesas (energia, hospedagem) x R$ 50,00/Mês x 4 Meses = R$ 1.200,00.</p>

