//ativa o carousel do plugin slick
$(document).ready(function(){
    //ativa o a máscara ou formato do telefone atraves do plugin jquery mask
    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')

    //valida formulario, cria a obrigatoriedade de preenchimento atraves do plugin jquery validate
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            rua: {
                required: true,
            },
            bairro: {
                required: true,
            },
            cidade: {
                required: true,
            },
            estado: {
                required: true,
            },
            cep: {
                required: true,
            }
        },

        //customiza a mensagem do plugin jquery messages
        messages: {
            nome: 'Por favor, insira seu nome completo',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email corretamente',
            cpf: 'Por favor, insira seu CPF',
            rua: 'Por favor, insira sua rua',
            bairro: 'Por favor, insira seu bairro',
            estado: 'Por favor, insira seu Estado',
            cep: 'Por favor, insira seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
        },

        //escuta e intercepta apos clicar em botao enviar que existem campos a preencher
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
