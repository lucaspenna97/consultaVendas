var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

    }
};

$(document).ready(function () {
       var $cpf = $("#cpf");
       $cpf.mask('000.000.000-00', {reverse: true});
});


function entrar (){
    navigator.vibrate(30);

    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;

    if (cpf == "" || cpf.length < 14) {
      showAlert("Por favor, insira o CPF corretamente.", "OPS", "OK");
      return;
    }


    if (senha == "") {
      showAlert("Por favor, insira a senha.", "OPS", "OK");
      return;
    }



    var login = new Login(cpf, senha);

    window.location.href = "exibirCompras.html";

    sessionStorage.setItem('cpf', cpf);
    sessionStorage.setItem('senha', senha);

    // $.ajax({
    //     url:"anguloconsulta.com.br",
    //     dataType: 'json',
    //     type:"POST",
    //     data: JSON.stringify(login),
    //     success: function(data) {window.location.href = "exibirCompras.html";},
    //     error: function(data,status){
    //       var connection = checkConnection();
    //       if (connection == 'No network connection') {showAlert("É necessario internet para realizar o login, por favor, conecte-se a rede Wifi ou Dados móveis", "OPS", "OK");}
    //       showAlert("As informações inseridas são invalidas", "OPS", "OK");
    //     }
    // });

}

function cadastrarNovo(){

  navigator.vibrate(30);
  window.location.href = "cadastrarNovoUsuario.html";

}

function recuperarSenha(){

  navigator.vibrate(30);
  window.location.href = "recuperarSenha.html";

}

//Objetos
class Login {

    constructor(cpf, senha) {
        this.cpf = cpf;
        this.senha = senha;
    }
}

//Utils

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

function showAlert(mensagem, titulo, botao){

  function alertDismissed() {}
  navigator.notification.alert(mensagem, alertDismissed, titulo, botao );
}

function mostrarSenha() {
  var senha = document.getElementById("senha");

  if (senha.type === "password") { senha.type = "text"; }
  else { senha.type = "password"; }
}
