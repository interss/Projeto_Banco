# 💳 Credit Card Validation and Brand Identification / Validação de Cartão de Crédito e Identificação de Bandeira

---

## 📋 Description / Descrição

This JavaScript function validates a credit card number using the Luhn algorithm and identifies its brand based on predefined patterns.  
    
Esta função JavaScript valida um número de cartão de crédito usando o algoritmo de Luhn e identifica sua bandeira com base em padrões predefinidos.  

---

## 🛠️ Function Details / Detalhes da Função

### Function: `validarCartaoCredito(numero)`
    
- **Purpose**: Validates a credit card number and identifies its brand.  
  **Propósito**: Valida um número de cartão de crédito e identifica sua bandeira.  
- **Parameters**:  
  - `numero` (string): The credit card number to validate.  
    O número do cartão de crédito a ser validado.  
- **Returns**: An object containing:  
  **Retorna**: Um objeto contendo:  
  - `valido` (boolean): Whether the card number is valid.  
    Se o número do cartão é válido.  
  - `bandeira` (string): The identified card brand.  
    A bandeira do cartão identificada.  

---

## 🧐 How It Works / Como Funciona

### Step 1: Define Card Brand Patterns / Passo 1: Definir Padrões das Bandeiras
    
- The function uses an array of objects (`bandeiras`) containing regex patterns for each card brand.  
  A função usa um array de objetos (`bandeiras`) contendo padrões regex para cada bandeira de cartão.  

### Step 2: Validate the Card Number / Passo 2: Validar o Número do Cartão
    
- The Luhn algorithm is applied to check the validity of the card number:  
  O algoritmo de Luhn é aplicado para verificar a validade do número do cartão:  
  1. Double every second digit from the right.  
     Dobra o valor de cada segundo dígito a partir da direita.  
  2. Subtract 9 from numbers greater than 9.  
     Subtrai 9 de números maiores que 9.  
  3. Sum all digits.  
     Soma todos os dígitos.  
  4. Check if the sum is divisible by 10.  
     Verifica se a soma é divisível por 10.  

### Step 3: Identify the Card Brand / Passo 3: Identificar a Bandeira do Cartão
    
- The function iterates through the `bandeiras` array and tests the card number against each regex pattern.  
  A função itera pelo array `bandeiras` e testa o número do cartão em cada padrão regex.  

---

## 🚀 Example Usage / Exemplo de Uso

```javascript
const resultado = validarCartaoCredito('4556885812969644');
console.log(`Cartão válido: ${resultado.valido}, Bandeira: ${resultado.bandeira}`);
