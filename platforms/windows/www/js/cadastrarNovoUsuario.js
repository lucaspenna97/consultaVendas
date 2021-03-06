﻿$(document).ready(function () {

      //Centralizar div com Jquery
      $("#novoUsuario").center();

      //Adiciona Máscaras
       var $cpf = $("#cpf");
       var $dataNascimento = $("#dataNascimento");
       var $celular = $("#celular");

       $cpf.mask('000.000.000-00', {reverse: true});
       $dataNascimento.mask('00/00/0000');

       $celular.mask(SPMaskBehavior, spOptions);

});

function cadastrar(){
    navigator.vibrate(30);

    var stringAviso = "\n";
    var exibirMensagemErro = false;

    //Pegando informações dos campos
    var cpf = document.getElementById("cpf").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    //Validações
    if (cpf == "" || cpf.length < 14) { stringAviso += " CPF \n"; exibirMensagemErro = true; }
    if (dataNascimento == "" || dataNascimento.length < 10) { stringAviso += " data de nascimento \n"; exibirMensagemErro = true; }
    if (genero == "") { stringAviso += " gênero \n"; exibirMensagemErro = true; }
    if (email == "" || email.length < 5) { stringAviso += " e-mail \n"; exibirMensagemErro = true; }
    if (celular == "" || celular.length < 14) { stringAviso += " celular \n"; exibirMensagemErro = true; }
    if (senha == "") { stringAviso += " senha \n"; exibirMensagemErro = true; }
    if (confirmarSenha == "") { stringAviso += " confirmar senha \n"; exibirMensagemErro = true; }

    if (exibirMensagemErro) {
      showAlert("Por favor, preencha os seguintes campos corretamente para adicionar as informações: \n" + stringAviso, "OPS", "OK");
      return;
    }

    if (senha != confirmarSenha) {
      showAlert("A senha inserida e sua confirmação são diferentes.", "OPS", "OK");
      return;
    }

    //Cria Progress Bar
    var novoUsuario = document.getElementById("novoUsuario");
    var p  = document.createElement('p');
    p.innerHTML = "<br><ons-progress-circular indeterminate></ons-progress-circular>";
    novoUsuario.appendChild(p);

    //Monta objeto cliente
    var cliente = new Cliente (cpf, dataNascimento, genero, email, celular, senha);

    //Envio do objeto cliente
    $.ajax({
        url:"anguloconsulta.com.br",
        dataType: 'json',
        type:"POST",
        data: JSON.stringify(cliente),
        success: function(data) {

          //Thread.sleep
          var millisecondsToWait = 500;
          setTimeout(function() {
              if (data == 1) { showAlert("Cadastro realizado com sucesso", "Tudo pronto", "OK");}
              else{ showAlert("Algo deu errado, por favor tente novamente", "OPS", "OK");}
              novoUsuario.removeChild(p);
          }, 2000);

        },
        error: function(data, status){

          //Thread.sleep
          var millisecondsToWait = 500;
          setTimeout(function() {
            var connection = checkConnection();
            if (connection == 'No network connection') {showAlert("É necessario internet para realizar o cadastro, por favor, conecte-se a rede Wifi ou Dados móveis", "OPS", "OK");}
            showAlert("Algo deu errado, por favor tente novamente", "OPS", "OK");
            novoUsuario.removeChild(p);
          }, 2000);

        }        
    });

}

//Objetos
class Cliente {
    constructor(cpf, dataNascimento, genero, email, celular, senha) {
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.email = email;
        this.celular = celular;
        this.senha = senha;
    }
}

 //Utils

 var SPMaskBehavior = function (val) {
     return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
 },
 spOptions = {
     onKeyPress: function(val, e, field, options) {
         field.mask(SPMaskBehavior.apply({}, arguments), options);
       }
};

function showAlert(mensagem, titulo, botao){
  function alertDismissed() {}
  navigator.notification.alert(mensagem, alertDismissed, titulo, botao );
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    return states[networkState];
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}
