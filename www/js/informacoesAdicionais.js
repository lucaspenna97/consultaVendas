$(document).ready(function () {

       var $cpf = $("#cpf");
       var $dataNascimento = $("#dataNascimento");
       var $celular = $("#celular");

       $cpf.mask('000.000.000-00', {reverse: true});
       $dataNascimento.mask('00/00/0000');

       $celular.mask('(00) 0000-0000');

      $celular.mask(SPMaskBehavior, spOptions);


      var cpfCapturado = sessionStorage.getItem('cpf');
      if (cpfCapturado != "") {
        $("#cpf").val(cpfCapturado);
        $("#cpf").prop("readonly", true);
      }

});

function salvar(){
    navigator.vibrate(30);

    var stringAviso = "\n";
    var exibirMensagemErro = false;

    var cpf = document.getElementById("cpf").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;


    if (cpf == "" || cpf.length < 14) { stringAviso += " CPF \n"; exibirMensagemErro = true; }
    if (dataNascimento == "" || dataNascimento.length < 10) { stringAviso += " data de nascimento \n"; exibirMensagemErro = true; }
    if (genero == "") { stringAviso += " gênero \n"; exibirMensagemErro = true; }
    if (email == "" || email.length < 5) { stringAviso += " e-mail \n"; exibirMensagemErro = true; }
    if (celular == "" || celular.length < 14) { stringAviso += " celular \n"; exibirMensagemErro = true; }

    if (exibirMensagemErro) {
      showAlert("Por favor, preencha os seguintes campos corretamente para adicionar as informações: \n" + stringAviso, "OPS", "OK");
      return;
    }

    var cliente = new Cliente (cpf, dataNascimento, genero, email, celular);

    $.ajax({
        url:"anguloconsulta.com.br",
        dataType: 'json',
        type:"POST",
        data: JSON.stringify(cliente),
        success: function(data) {
              if (data == 1) { showAlert("Cadastro realizado com sucesso", "Tudo pronto", "OK");}
              else{ showAlert("Algo deu errado, por favor tente novamente", "OPS", "OK");}
            },
        error: function(data,status){
              var connection = checkConnection();
              if (connection == 'No network connection') {showAlert("É necessario internet para realizar o cadastro, por favor, conecte-se a rede Wifi ou Dados móveis", "OPS", "OK");}
              showAlert("Algo deu errado, por favor tente novamente", "OPS", "OK");
            }
    });

}

//Objetos

function Cliente(cpf, dataNascimento, genero, email, celular) {
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.genero = genero;
      this.email = email;
      this.celular = celular;
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
