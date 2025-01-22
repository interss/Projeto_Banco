# 💳 Credit Card Validation 🕵️‍♂️ / Validação de Cartão de Crédito 🕵️‍♂️

---

## 🔍 Function: `validarCartaoCredito`

The `validarCartaoCredito` function is designed to:  
A função `validarCartaoCredito` é projetada para:  

- Validate a credit card number ✅  
  Validar o número de um cartão de crédito ✅
  
- Identify its brand 🏷️  
  Identificar sua bandeira 🏷️  

---

## 📥 Input / Entrada

**Parameter**: `numero` (string)  
**Parâmetro**: `numero` (string)  

- Credit card number  
  Número do cartão de crédito  

---

## 📤 Output / Saída

### Returns an object containing:  
### Retorna um objeto contendo:  

| - Validity of the card |  
|---|  
| - Identified brand |  

| - Validade do cartão |  
|---|  
| - Bandeira identificada |  

---

## 🚀 How It Works / Funcionamento

### Definition of Card Brands / Definição de Bandeiras 🎴

- List of credit card brands  
  Lista de bandeiras de cartões de crédito  
- Each brand is associated with a specific regex pattern  
  Cada bandeira associada a um padrão regex específico  

> 💡 **Regex (Regular Expression)**: A sequence of characters that defines a search pattern. Used to identify the card brand based on the provided number.
>  
> **Regex (Expressão Regular)**: Sequência de caracteres que define um padrão de pesquisa. Usada para identificar a bandeira do cartão com base no número fornecido.  

### Luhn Algorithm / Algoritmo de Luhn 🧮

1. Iterates through the card number digits from right to left  
   Percorre os dígitos do número do cartão de trás para frente  
2. Doubles the value of every second digit  
   Dobra o valor de cada segundo dígito  
3. If the doubled value > 9, subtracts 9  
   Se o valor dobrado > 9, subtrai 9  
4. Calculates the sum of all digits  
   Calcula a soma de todos os dígitos  

> 🔎 **Luhn Algorithm**: Also known as "modulus 10" or "Luhn mod 10 algorithm". A simple method to validate identification numbers, such as credit cards.

> **Algoritmo de Luhn**: Também conhecido como "módulo 10" ou "algoritmo de Luhn mod 10". Método simples para validar números de identificação, como cartões de crédito.  

### Validation / Validação ✔️

- Checks if the sum is divisible by 10  
  Verifica se a soma é divisível por 10  
  - If yes: Card is valid ✅  
    Se sim: Cartão válido ✅  
  - If no: Card is invalid ❌  
    Se não: Cartão inválido ❌  

### Brand Identification / Identificação da Bandeira 🏳️

1. Iterates through the list of card brands  
   Percorre a lista de bandeiras  
2. Tests the card number against the defined regex patterns  
   Testa o número do cartão contra os padrões regex definidos  
3. If there is a match: Assigns the brand  
   Se houver correspondência: Atribui a bandeira  
4. If no match: Brand is set to 'Desconhecida'  
   Se não houver correspondência: Bandeira definida como 'Desconhecida'  

---

## 📊 Result / Resultado

### Returns an object with:  
### Retorna um objeto com:  

| - Validity of the card |  
|---|  
| - Identified brand |  

| - Validade do cartão |  
|---|  
| - Bandeira identificada |  
