/**
 * Função para validar o número de um cartão de crédito e identificar sua bandeira.
 * @param {string} numero - O número do cartão de crédito.
 * @returns {Object} Um objeto contendo a validade do cartão e a bandeira identificada.
 */
function validarCartaoCredito(numero) {
    // Lista de bandeiras de cartão de crédito e seus respectivos padrões regex
    const bandeiras = [
        { nome: 'Visa', regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { nome: 'MasterCard', regex: /^5[1-5][0-9]{14}$/ },
        { nome: 'American Express', regex: /^3[47][0-9]{13}$/ },
        { nome: 'Diners Club', regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { nome: 'Discover', regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
        { nome: 'JCB', regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { nome: 'Elo', regex: /^((636368)|(438935)|(504175)|(451416)|(636297)|(5067)|(4576)|(4011))\d+$/ },
        { nome: 'Hipercard', regex: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/ },
        { nome: 'EnRoute', regex: /^(2014|2149)\d{11}$/ },
        { nome: 'Voyager', regex: /^8699[0-9]{11}$/ },
        { nome: 'Aura', regex: /^50[0-9]{14,17}$/ }
    ];

    let sum = 0;
    let shouldDouble = false;

    // Loop através dos dígitos do cartão de crédito
    for (let i = numero.length - 1; i >= 0; i--) {
        let digit = parseInt(numero.charAt(i));

        // Dobra o valor de cada segundo dígito
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // Verifica se a soma é divisível por 10
    const valido = (sum % 10) === 0;

    // Identifica a bandeira do cartão
    let bandeira = 'Desconhecida';
    for (const b of bandeiras) {
        if (b.regex.test(numero)) {
            bandeira = b.nome;
            break;
        }
    }

    return { valido, bandeira };
}

// Exemplo de uso
const resultado = validarCartaoCredito('4556885812969644');
console.log(`Cartão válido: ${resultado.valido}, Bandeira: ${resultado.bandeira}`);