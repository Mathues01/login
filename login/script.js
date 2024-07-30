function cadastrar() {
    let nom = document.getElementById("nome")
    let sobreName = document.getElementById("sobre")
    let emai = document.getElementById("email")
    let confiEmi = document.getElementById("confi-email")
    let senh = document.getElementById("senha")
    let confiSenha = document.getElementById("confi-senha")
   
    let dados = {
        nome: nom.value,
        sobrenome: sobreName.value,
        email: emai.value,
        confiemi: confiEmi.value,
        senha: senh.value,
        confisenha: confiSenha.value
    };

    if (Object.values(dados).some(valor => valor.trim() === '')) {
        alert('Por favor, preencha todos os campos.');

    } else {
        // Faça algo com os dados
        console.log(dados);
        //confirmar se email e senha são iguais
        if (confiEmi.value == emai.value && confiSenha.value == senh.value) {
             
            alert('Cadastro feito com Sucesso!!')
            alert(`Seja Bem Vindo(A) ${nom.value} ${sobreName.value}`)
            window.location.href = 'pagina.html'
        } else {
            alert('Email ou senha incorretos!!!')
            // Limpar campos de entrada após o cadastro
            confiEmi.value = '';
            confiSenha.value = '';
        }

    }
}
let pass = document.getElementById('pas')
let ema = document.getElementById('emai')

function Entrar() {
    let registro = {
        login: ema.value,
        passord: pass.value
    }

     if (Object.values(registro).some(valor => valor.trim() === '')) {
        alert("coloque sua senha e email porfavor!!")
     } else {
        console.log(registro)
        alert('Bem vindo!!')
        alert('deu bom')  
        window.location.href = 'inicio.html'
        
    }
     
} 

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        document.getElementById('preview').setAttribute('src', e.target.result);
      }
      
      reader.readAsDataURL(file);
    }
  }); 
  
  
 