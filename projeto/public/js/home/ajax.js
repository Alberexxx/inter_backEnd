/*var popup = document.getElementById("popup");
popup.style.display = "block";
setTimeout(function(){ popup.style.display = "none"; }, 3000); // Oculta o popup após 3 segundos*/




function mudarCor(id, preco) {
    var btn = document.getElementById(`${id}`);
    var popup = document.getElementById("popup");
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
                    throw new Error('Erro na solicitação.');
                }
                return response.text(); 
            })
            .then((data) => {
                
                //renderConteudo(); 
                mostrarMensagem()
            })
            .catch((error) => {
                console.error('Erro:', error);
            });

    function renderConteudo() {

    btn.style.color = "#7CFC00"

}
    function mostrarMensagem() {

    popup.style.display = "block";
    setTimeout(function(){ popup.style.display = "none"; }, 3000); // Oculta o popup após 3 segundos
    }

          
}



