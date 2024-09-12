# Jogo do Número Secreto

Este código cria um jogo de adivinhação de números, onde o usuário tenta adivinhar um "número secreto" entre 1 e 10.

> Status: Finalizado ✅


## Tecnologias Utilizadas:

1. **JavaScript**:
   - **Manipulação do DOM**: O código utiliza funções como `document.querySelector` e `document.getElementById` para selecionar e modificar elementos HTML.
   - **Funções**: Funções como `verificarChute()`, `mensagemInicial()`, `gerarNumeroAleatorio()` são usadas para modularizar o comportamento do jogo.
   - **Lógica Condicional**: O uso de estruturas condicionais `if/else` decide se o usuário acertou o número ou se o chute foi maior ou menor que o número secreto.
   - **Arrays**: A variável `listaDeNumerosSorteados` armazena números já sorteados para evitar repetições.

2. **HTML (referenciado)**:
   - O código JavaScript manipula diretamente os elementos da página HTML por meio do `querySelector` para atualizar o conteúdo de tags como `h1`, `p` e `input`.
   - **Eventos**: O código espera a interação do usuário com o campo `input`, onde o número é inserido.

3. **ResponsiveVoice.js**:
   - **Text-to-Speech (TTS)**: A função `responsiveVoice.speak()` é usada para converter texto em fala. Aqui, a voz é configurada para o português brasileiro, com uma taxa de fala definida.

## Descrição das Funções:

1. **exibirTextoNaTela(tag, texto)**: Atualiza o conteúdo de uma tag HTML e utiliza o serviço `responsiveVoice` para transformar o texto em fala.

2. **mensagemInicial()**: Exibe a mensagem inicial do jogo, instruindo o usuário a escolher um número.

3. **verificarChute()**: Verifica se o número inserido pelo usuário corresponde ao número secreto. Informa se o número é maior ou menor até que o jogador acerte.

4. **limparCampo()**: Limpa o campo de input após cada tentativa.

5. **gerarNumeroAleatorio()**: Gera um número aleatório, evitando que o mesmo número seja sorteado mais de uma vez até que todos os números possíveis tenham sido usados.

6. **reiniciar()**: Recomeça o jogo, gerando um novo número secreto e limpando as tentativas anteriores.

7. **reiniciarJogo()**: Reconfigura o jogo para o estado inicial, desabilitando o botão de reiniciar até que o jogo atual seja concluído.

---

Esse código integra manipulação de DOM, geração de números aleatórios e síntese de voz para criar um jogo interativo simples e intuitivo.
