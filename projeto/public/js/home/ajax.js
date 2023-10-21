/*var popup = document.getElementById("popup");
popup.style.display = "block";
setTimeout(function(){ popup.style.display = "none"; }, 3000); // Oculta o popup após 3 segundos*/




function mudarCor(id, preco) {
    var btn = document.getElementById(`${id}`);
    var popup = document.getElementById("popup");
    var popup2 = document.getElementById("popup2");

    const url = '/addItemCarrinho';
   
    const requestOptions = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idProduto: id, preco: preco})
    };
            fetch(url, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro na solicitação.')
                }
                return response.text(); 
            })
            .then((data) => {
                
                if (data === "true"){
                    mostrarMensagem()
                } else {
                    MensagemLogin()
                }
                
            })
            .catch((error) => {
                console.error('Erro:', error);
            });

    function renderConteudo() {

    btn.style.color = "#7CFC00"

}
    function mostrarMensagem() {

    popup.style.display = "block";
    setTimeout(function(){ popup.style.display = "none"; }, 3000); 
    }

    function MensagemLogin() {

    popup2.style.display = "block";
    setTimeout(function(){ popup2.style.display = "none"; }, 10000); 
    }

          
}



