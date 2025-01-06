
# 💳 Validação de Cartão de Crédito 🕵️‍♂️

## 🔍 Função validarCartaoCredito

A função validarCartaoCredito é projetada para:

- Validar o número de um cartão de crédito ✅
- Identificar sua bandeira 🏷️

## 📥 Entrada

Parâmetro: `numero` (string)

Número do cartão de crédito

## 📤 Saída
### Objeto contendo:

| - Validade do cartão |
|---|


- Bandeira identificada

## 🚀 Funcionamento

### Definição de Bandeiras 🎴

- Lista de bandeiras de cartões de crédito
- Cada bandeira associada a um padrão regex específico

> 💡 **Regex (Expressão Regular)**: Sequência de caracteres que define um padrão de pesquisa. Usada para identificar a bandeira do cartão com base no número fornecido.

### Algoritmo de Luhn 🧮

1. Percorre os dígitos do número do cartão de trás para frente
2. Dobra o valor de cada segundo dígito
3. Se o valor dobrado > 9, subtrai 9
4. Calcula a soma de todos os dígitos


> 🔎 **Algoritmo de Luhn**: Também conhecido como "módulo 10" ou "algoritmo de Luhn mod 10". Método simples para validar números de identificação, como cartões de crédito.

### Validação ✔️

- Verifica se a soma é divisível por 10
  - Se sim: Cartão válido ✅
  - Se não: Cartão inválido ❌

### Identificação da Bandeira 🏳️

1. Percorre a lista de bandeiras
2. Testa o número do cartão contra os padrões regex definidos
3. Se houver correspondência: Atribui a bandeira
4. Se não houver correspondência: Bandeira definida como 'Desconhecida'

### Resultado 📊
### Retorna um objeto com:

| - Validade do cartão |
|---|


- Bandeira identificada
