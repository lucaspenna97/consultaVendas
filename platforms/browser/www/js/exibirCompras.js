var comprasCliente = document.getElementById("comprasCliente");

$(function() {

  $(document).ready(function(){

     //Ajax para recebimento
     $.ajax({
         crossDomain:true,
         url:"http://anguloconsulta.com.br:9090/overwatch",
         contentType:'application/json',
         type: "GET",
         success: function(response){
           criarTela(response);
          //semInformacao();
         },
         error: function(){
           semResposta();
         }
     });

    });

});


 function criarTela (response){

    var saldoDisponivel  = document.getElementById("saldoDisponivel");
    saldoDisponivel.innerHTML = "R$ 9999,99"


    for (var i = 1; i < 30; i++){
      var p = document.createElement('p');

      if (i % 2 == 0) {

        p.innerHTML=
        "<div class='lista' id='item" + i +"'>" +
            "<p>" +
            "<span class='esquerda'>21/03/2019</span> " +
            "<span class='direita'>Valor da Compra: R$ 120,00</span>" +
            "</p><br>" +

            "<p>" +
            "<span class='esquerda'>Rede Goya</span>" +
            "<span class='direita' style='font-weight:bold; color:green;' >Pontos Ganhos: + 16,50</span>" +
            "</p>" +
        "</div><br>" +
        "<hr>";

      }else{

        p.innerHTML=
        "<div class='lista' id='item" + i +"'>" +
            "<p>" +
            "<span class='esquerda'>21/03/2019</span> " +
            "<span class='direita'>Valor da Compra: R$ 120,00</span>" +
            "</p><br>" +

            "<p>" +
            "<span class='esquerda'>Rede Goya</span>" +
            "<span class='direita' style='font-weight:bold; color: green;'>Pontos Ganhos: + 16,50</span>" +
            "</p>" +

            "<br><p>" +
            "<span class='direita' style='font-weight:bold; color: red;'>Resgate: - 16,50</span>" +
            "</p>" +
        "</div><br>"+
        "<hr>";
      }
      comprasCliente.appendChild(p);

      var item = document.getElementById("item" + i);
         item.addEventListener("click", function(){
         navigator.vibrate(30);
         var dados = JSON.stringify(response);
         sessionStorage.setItem('data', dados );
         window.location.href = "detalhesCompras.html";
        })
    }
}




function informacoesAdicionais(){
     window.location.href = "informacoesAdicionais.html";
}


function semInformacao(){
   var mensagem = document.createElement('label');
   mensagem.innerHTML = "Nada à exibir."
   comprasCliente.appendChild(mensagem);
}

function semResposta(){
  var mensagem = document.createElement('label');
  mensagem.innerHTML = "Sem acesso a internet ou problemas no webservice."
  comprasCliente.appendChild(mensagem);
}

//Utils

function showAlert(mensagem, titulo, botao){

  function alertDismissed() {}
  navigator.notification.alert(mensagem, alertDismissed, titulo, botao );

}
