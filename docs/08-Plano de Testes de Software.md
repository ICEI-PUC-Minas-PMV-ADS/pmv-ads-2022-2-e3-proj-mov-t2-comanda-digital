# Plano de Testes de Software

# Plano de Testes de Software

Por meio desse plano de testes serão verificados e validados os requisitos para garantir o bom funcionamento do programa junto ao usuário final. Nosso plano de teste de software tem como foco garantir a confiabilidade e segurança, identificando possíveis erros e falhas durante a sua confecção, ou mesmo depois.
 
### Casos de Testes
Os testes funcionais a serem realizados no aplicativo são descritos a seguir:


|Caso de teste 01     | CT 01 - Abrir mesa |
|-------|-------------------------
|Requisitos Associados | 	 RF-06 A aplicação deve permitir que o administrador abra a comanda.
|Objetivo do teste| Verificar se o sistema de abrtura de comanda pelo administrador está funcionando corretamente |
|Passos |	1) Acessar a aplicação. 2) Clicar em abrir comanda.  |
|Critérios de êxito| Uma comanda nova deverá ser aberta pelo administrador. |

|Caso de teste 02     | CT 02 - Fechar mesa |
|-------|-------------------------
|Requisitos Associados | 	 RF-05 A aplicação deve oferecer a opção de fechamento da conta tanto pelo cliente como pelo administrador.
|Objetivo do teste|  Verificar se o sistema permite o fechamento da conta pelo cliente e pelo administrador |
|Passos |	1) Acessar a aplicação. 2) Clicar em fechar comanda. |
|Critérios de êxito| A conta deverá ser fechada finalizando os pedidos e mostrando o valor da conta para o cliente. |

|Caso de teste 03     | CT 06 -  Editar itens do Cardápio |
|-------|-------------------------
|Requisitos Associados | 	 RF-07 A aplicação deve permitir ao administrador do sistema editar itens do cardápio.
|Objetivo do teste| Verificar se o item foi alterado corretamente |
|Passos |	1) Acessar a aplicação. 2) Clicar em editar cardápio. |
|Critérios de êxito| O item deverá ser editado |

|Caso de teste 04     | CT 09 -  Apagar item do cardápio |
|-------|-------------------------
|Requisitos Associados | 	 RF-07 A aplicação deve permitir ao administrador do sistema apague um item do cardápio.
|Objetivo do teste| Verificar se a funcionalidade de apagar item no sistema está funcionando adequadamente.  |
|Passos |	1) Acessar a aplicação. 2) Clicar em Cardápio. 3) Selecionar item a ser excluído. 4) Excluir item do cardápio.|
|Critérios de êxito| O item deve ser apagado com sucesso e não estar mais disponível no sistema. |

|Caso de teste 05    | CT 05 -  Cadastrar novo item ao Cardápio|
|-------|-------------------------
|Requisitos Associados | 	 RF-07 A aplicação deve permitir ao administrador do sistema cadastrar novo item no cardápio.  |
|Objetivo do teste| Verificar se o a funcionalidade de cadastrar novos itens no sistema está funcionando corretamente |
|Passos |	1) Acessar a aplicação. 2) Clicar em Cardápio. 3) Clicar em adicionar item. 4) Cadastrar o item. 	 |
|Critérios de êxito| O item deve ser cadastrado com sucesso. |

|Caso de teste 06     | CT 06 -  A aplicação deverá notificar o pedido ao garçom |
|-------|-------------------------
|Requisitos Associados | 	 RF-01 RF-02 RF 03- A aplicação deve notificar o garçom sobre o pedido do cliente.
|Objetivo do teste| Verificar se o usuário do tipo cliente consegue fazer seu pedido|
|Passos |	1) Acessar a aplicação.	2) Adicionar itens ao pedido. 3) Confirmar pedido.|
|Critérios de êxito| A notificação deve ser mostrada com sucesso ao garçom. |

|Caso de teste 07    | CT 07 - Testar responsividade do sistema em diferentes dispositivos |
|-------|-------------------------
|Requisitos Associados | 	 RNF-04 - A aplicação deverá ser responsiva.
|Objetivo do teste| Verificar a responsividade da aplicação. |
|Passos |	1) Acessar a aplicação em diferentes dispositivos.|
|Critérios de êxito| A aplicação deve ser totalmente responsiva, sem quebras de texto e páginas em nenhum dispositivo. |


