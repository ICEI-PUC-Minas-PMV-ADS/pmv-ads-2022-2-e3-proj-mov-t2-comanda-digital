# Plano de Testes de Software


Por meio desse plano de testes serão verificados e validados os requisitos para garantir o bom funcionamento do programa junto ao usuário final. Nosso plano de teste de software tem como foco garantir a confiabilidade e segurança, identificando possíveis erros e falhas durante a sua confecção, ou mesmo depois.
 
### Casos de Testes
Os testes funcionais a serem realizados no aplicativo são descritos a seguir:


|Caso de teste 01     | CT 01 - Mostrar o cardápio online de forma prática e detalhada|
|-------|-------------------------
|Requisitos Associados | 	 RF-01 A aplicação deverá exibir o cardápio de forma prática e detalhada.
|Objetivo do teste| Verificar se aplicação irá exibir corretamente o cardápio.|
|Passos |	1) Acessar a aplicação. 2) Clicar iniciar mesa para visualizar.  |
|Critérios de êxito| Exibir o cardápio completo do estabelecimento. |

|Caso de teste 02     | CT 02 - Abrir a comanda para fazer o pedido |
|-------|-------------------------
|Requisitos Associados | 	 RF-02 A aplicação deverá permitir ao cliente abrir a comanda para fazer seu pedido.
|Objetivo do teste|  Verificar se o sistema permite o cliente e abrir a comanda para efetuar seu pedido. |
|Passos |	1) Acessar a aplicação. 2) Clicar em iniciar mesa para efetuar o pedido. |
|Critérios de êxito| cliente poder inciar a mesa para efetuar o pedido. |

|Caso de teste 03     | CT 03 -  Notificação do pedido ao garçom |
|-------|-------------------------
|Requisitos Associados | 	 RF-03 A aplicação deverá notificar o pedido ao garçom de forma instantaneamente.
|Objetivo do teste| Verificar se aplicação notificou o garçom. |
|Passos |	1) Acessar a aplicação.	2) Adicionar itens ao pedido. 3) Confirmar pedido. |
|Critérios de êxito| O garçom deverá ser notificado de forma instantanea. |

|Caso de teste 04     | CT 04 -  Visualização de pedidos e mesas pelo Administrador |
|-------|-------------------------
|Requisitos Associados | 	 RF-04 A aplicação deverá permitir que o administrador visualize os resumos dos pedidos e as mesas.
|Objetivo do teste| Verificar se aplicação irá mostrar os pedidos e mesas para o administrador.  |
|Passos |	1) Acessar a aplicação. 2) Clicar em acesso estabelecimento e  efetuar login. 3) clicar no menu lateral. 4) clicar em resumos de pedidos e ou gerenciar mesas|
|Critérios de êxito| O Administrador irá visualizar os resumos dos pedidos e as mesas. |

|Caso de teste 05     | CT 05 -  Visualização da area de gerenciamento |
|-------|-------------------------
|Requisitos Associados | 	 RF-05 A aplicação deverá permitir que o administrador acesse sua area de gerenciamento dos produtos.
|Objetivo do teste| Verificar se aplicação irá mostrar area de gerenciamento.  |
|Passos |	1) Acessar a aplicação. 2) Clicar em acesso estabelecimento e  efetuar login. 3) No menu lateral ira ter os botões das areas de gerenciamento.|
|Critérios de êxito| O Administrador irá visualizar area de gerenciamentos dos produtos. |

|Caso de teste 06     | CT 06 -  Visualização da area de login |
|-------|-------------------------
|Requisitos Associados | RF-06	 A aplicação deverá permitir que o administrador acessar uma area de login.
|Objetivo do teste| Verificar se aplicação irá mostrar area de login.  |
|Passos |	1) Acessar a aplicação. 2) Clicar em acesso estabelecimento.|
|Critérios de êxito| O Administrador ter acesso a sua area de login. |

|Caso de teste 07     | CT 07 -  Cadastrar produtos |
|-------|-------------------------
|Requisitos Associados | RF-07 A aplicação deverá permitir que o administrador possa cadastrar, editar e excluir seus produtos.
|Objetivo do teste| Verificar se aplicação irá mostrar area de cadastrar produto.  |
|Passos |	1) Acessar a aplicação. 2) Clicar em acesso estabelecimento. 3) clicar Gerenciar produto|
|Critérios de êxito| O Administrador ter acesso a cadastar produtos |

|Caso de teste 07.1    | CT 07.1 -  Editar produtos |
|-------|-------------------------
|Requisitos Associados | RF-07 A aplicação deverá permitir que o administrador possa cadastrar, editar e excluir seus produtos.
|Objetivo do teste| Verificar se aplicação irá mostrar area de editar produto.  |
|Passos |	1) Acessar a aplicação. 2) Clicar em acesso estabelecimento. 3) clicar Gerenciar produto. 4) clicar em Editar.|
|Critérios de êxito| O Administrador ter acesso a editar produtos. |

|Caso de teste 07.2    | CT 07.2 -  Excluir produtos |
|-------|-------------------------
|Requisitos Associados | RF-07 A aplicação deverá permitir que o administrador possa cadastrar, editar e excluir seus produtos.
|Objetivo do teste| Verificar se aplicação irá mostrar a opção de excluir.  |
|Passos |	1) Acessar a aplicação. 2) Clicar em acesso estabelecimento. 3) clicar Gerenciar produto. 4) clicar em Editar, em seguida terá opção de exluir|
|Critérios de êxito| O Administrador ter acesso a excluir produtos. |

|Caso de teste 08     | CT 08 -  Mostrar prévia do resumo do pedido ao cliente |
|-------|-------------------------
|Requisitos Associados | 	RF-08 A aplicação deverá mostrar a prévia de sua conta ao cliente.
|Objetivo do teste| Verificar se o usuário do tipo cliente consegue ver a prévia do seu pedido|
|Passos |	1) Acessar a aplicação.	2) clicar em iniciar mesa. 3) apos selecionar seus respectivos itens clicar em ir com pedido.|
|Critérios de êxito| A prévia do pedido deverá ser mostrata com seus respectivos itens e seus valores de seu pedido. |

|Caso de teste 09     | CT 09 -  Fechamento de conta |
|-------|-------------------------
|Requisitos Associados | 	RF-09 A aplicação deverá permitir que o cliente peça o fechamento de sua conta.
|Objetivo do teste| Verificar se o cliente consegue pedir o fechamento de sua conta.|
|Passos |	1) Acessar a aplicação.	2) clicar em iniciar mesa. 3) ir com pedido. 4) Confirmar pedido. 5)Fechar conta.|
|Critérios de êxito| O cliente deverá conseguir efetuar o fechamento de sua conta. |

|Caso de teste 10     | CT 10 -  Mostrar o tempo do pedido |
|-------|-------------------------
|Requisitos Associados | 	RF-10 A aplicação deverá permitir que o cliente possa acompanhar o tempo do pedido pra ficar pronto.	.
|Objetivo do teste| Verificar se o cliente consegue ver o tempo de seu pedido a ficar pronto.|
|Passos |	1) Acessar a aplicação.	2) clicar em iniciar mesa. 3) ir com pedido. 4) Confirmar pedido.|
|Critérios de êxito| Aplicação deverá mostrar o tempo para pedido ficar pronto |

|Caso de teste 11   | CT 11 - Testar responsividade do sistema em diferentes dispositivos |
|-------|-------------------------
|Requisitos Associados | 	 RNF-04 - A aplicação deverá ser responsiva.
|Objetivo do teste| Verificar a responsividade da aplicação. |
|Passos |	1) Acessar a aplicação em diferentes dispositivos.|
|Critérios de êxito| A aplicação deve ser totalmente responsiva, sem quebras de texto e páginas em nenhum dispositivo. |


