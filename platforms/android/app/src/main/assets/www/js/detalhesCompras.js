$(function() {

    $(document).ready(function(){

        var detalhesCompras = document.getElementById("detalhesCompras");

        var p = document.createElement('p');

        var dados = JSON.parse(sessionStorage.getItem('data'));

      //p.innerHTML = dados;

        p.innerHTML =

              "<p>" +
              "<span class='esquerda'>21/03/2019</span>" +
              "<span class='direita'>Total: R$ 120,00</span>" +
              "</p>" +

              "<br><br>" +

              "<p>" +
              "<span class='esquerda'>Rede Goya</span>" +
              "<span class='direita'>Saldo: + 16,50</span>" +
              "</p>";



        detalhesCompras.appendChild(p);

    });

  });
