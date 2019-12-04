$(document).ready(function () {

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

});


function enviarEmail(email, senha){
    navigator.vibrate(30);

    var connection = checkConnection();
    if (connection != "No network connection" ) {

    var divPrincipal = document.getElementById("divPrincipal");

    var p = document.createElement('p');
    p.innerHTML = "<ons-progress-circular indeterminate></ons-progress-circular>";
    divPrincipal.appendChild(p);

    var email = document.getElementById("email").value;

    if (email == "") {
      showAlert("Por favor, insira um email para recuperação da senha", "OPS", "OK");
      return;
    }

    //https://www.smtpjs.com/
    Email.send({

        Host : "smtp.gmail.com",
        Username : "lucaspenna97@gmail.com",
        Password : "zonk02031997",
        To : email,
        From : "lucaspenna97@gmail.com",
        Subject : "Recuperação de Senha",
        Body : "<div>" +
                  "<div>" +
                  "<div marginwidth='0' marginheight='0' style='margin:0; padding:0; height:100%; width:100%; background-color:#f7f7f7'>" +
                  "<center>" +
                  "<table align='center' border='0' cellpadding='0' cellspacing='0' height='100%' width='100%' id='x_m_-2680750805771968212bodyTable' style='border-collapse:collapse; height:100%; margin:0; padding:0; width:100%; background-color:#f7f7f7'>" +
                  "<tbody>" +
                  "<tr>" +
                  "<td align='center' valign='top' id='x_m_-2680750805771968212bodyCell' style='height:100%; margin:0; padding:40px; width:100%; font-family:Helvetica,Arial,sans-serif; line-height:160%'>" +
                  "<table border='0' cellpadding='0' cellspacing='0' id='x_m_-2680750805771968212templateContainer' style='border-collapse:collapse;' width:600px; background-color:#ffffff; border:1px solid #d9d9d9'>" +
                  "<tbody>" +
                  "<tr>" +
                  "<td align='center' valign='top' style='font-family:Helvetica,Arial,sans-serif; line-height:160%'>" +
                  "<table align='center' border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse:collapse'>" +
                  "<tbody>" +
                  "<tr>" +
                  "<td align='center' class='x_m_-2680750805771968212nuHeader' style='background-color:#ffffff; font-family:Helvetica,Arial,sans-serif; line-height:160%; padding-top:40px; padding-bottom:40px; background:#fff'>" +
                  "<img data-imagetype='External' src='https://i.imgur.com/mkHztpK.png' alt='Angulo' id='x_m_-2680750805771968212nuLogo' width='100' class='x_CToWUd' style='border:0; height:auto; line-height:100%; outline:none; text-decoration:none; max-width:100px; width:100px'></td>" +
                  "</tr>" +
                  "</tbody>" +
                  "</table>" +
                  "</td>" +
                  "</tr>" +
                  "<tr>" +
                  "<td>" +
                  "<p align='center'>Recuperação de Senha</p>" +
                  "</td>" +
                  "</tr>" +
                  "<tr>" +
                  "<td class='x_m_-2680750805771968212bodyContent' style='font-family:Helvetica,Arial,sans-serif; line-height:160%; color:#404040; font-size:16px; padding-top:50px; padding-bottom:40px; padding-right:72px; padding-left:72px; background:#ffffff'>" +
                  "<table' border='0' cellpadding='0' cellspacing='0' width='100%' id='x_m_-2680750805771968212templateBody' style='border-collapse:collapse; background-color:#ffffff'>" +
                  "<tbody>" +
                  "<tr align='center'>" +
                  "<td align='center'>" +
                  "<p style=margin:'0'; color:'#666'; font-size:'13px'; line-height:'160%'>Senha recuperada</p>" +
                  "<p style=margin:'0'; color:'#000'; font-size:'16px'; line-height:'160%'><b>" + senha + "</b></p>" +
                  "<p style=margin:'0'; color:'#666'; font-size:'13px'; line-height:'160%'>Referente ao usúario</p>" +
                  "<p style=margin:'0'; color:'#000'; font-size:'16px'; line-height:'160%'><b>" + email + "</b></p>" +
                  "<br>" +
                  "</td>" +
                  "</tr>" +
                  "<tr>" +
                  "</tr>" +
                  "<tr>" +
                  "</tr>" +
                  "<tr align='center'>" +
                  "<td class='x_m_-2680750805771968212closing' style='font-family:Helvetica,Arial,sans-serif; line-height:160%; margin-bottom:0; padding-bottom:0; text-align:center'>" +
                  "<p class='x_m_-2680750805771968212closing' style='margin:0; margin-bottom:0; padding-bottom:0'>" +
                  "</td>" +
                  "</tr>" +
                  "</tbody>" +
                  "</table>" +
                  "</td>" +
                  "</tr>" +
                  "<tr>" +
                  "<td class='x_m_-2680750805771968212footerContent' style='font-family:Helvetica,Arial,sans-serif; line-height:160%; background:#ffffff'>" +
                  "<table border='0' cellpadding='0' cellspacing='0' width='100%' id='x_m_-2680750805771968212templateFooter' style='border-collapse:collapse; background-color:#ffffff'>" +
                  "<tbody>" +
                  "</tr>" +
                  "<tr>" +
                  "<td style='font-family:Helvetica,Arial,sans-serif; line-height:160%; padding-bottom:16px; text-align:center'>" +
                  "<span class='x_m_-2680750805771968212hidden' style='color:#ffffff; font-size:0; height:0'></span></td>" +
                  "</tr>" +
                  "</tbody>" +
                  "</table>" +
                  "</td>" +
                  "</tr>" +
                  "</tbody>" +
                  "</table>" +
                  "</td>" +
                  "</tr>" +
                  "</tbody>" +
                  "</table>" +
                  "</center>" +
                  "</div>" +
                  "</div>" +
                  "</div>"
    }).then( message => retornoEmail(message) );


    function retornoEmail(message){

      setTimeout(function() {
      divPrincipal.removeChild(p);
      if (message == "OK") {showAlert("O e-mail de recuperação de senha foi enviado ao destinatário.", "Enviado", "OK");}
      else{showAlert("Não conseguimos enviar o e-mail. Por favor, verifique a internet e o endereço inserido.", "OPS", "OK");}
    }, 1000);

    }

  }else{
      setTimeout(function() {
      divPrincipal.removeChild(p);
      showAlert("Não detectamos conexão com a internet. Por favor, conecte-se a uma rede 3G ou Wifi", "OPS", "OK");
    }, 1000);
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
