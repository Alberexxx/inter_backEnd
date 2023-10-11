var caixaTexto = document.getElementById("inputEmail");

        

caixaTexto.addEventListener('input', () => {

    var conteudo = document.getElementById("conteudo");
    var inputId = caixaTexto.value;
    
    const url = '/validaEmail';
   
    const requestOptions = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputId: inputId})
    };


    fetch(url, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro na solicitação.');
            }
            return response.text(); // Usar .text() em vez de .json()
        })
        .then((data) => {
            renderConteudo(data); // Exibir o texto normal
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
});

function renderConteudo(texto) {
    conteudo.innerHTML = texto;
}





