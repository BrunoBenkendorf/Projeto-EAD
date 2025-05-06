function toggleCamposEspeciais() {
    const perfilSelecionado = document.querySelector('input[name="perfil"]:checked').value;
    const campos = document.getElementById("camposProfessor");
    campos.classList.toggle("hidden", perfilSelecionado !== "professor");
  }
  
  function validarFormulario(event) {
    event.preventDefault();
  
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    const email = document.getElementById("email").value;
    const erroEl = document.getElementById("erro");
  
    erroEl.classList.add("hidden");
    erroEl.innerText = "";
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      erroEl.innerText = "E-mail inválido.";
      erroEl.classList.remove("hidden");
      return;
    }
  
    if (senha.length < 6) {
      erroEl.innerText = "A senha deve ter pelo menos 6 caracteres.";
      erroEl.classList.remove("hidden");
      return;
    }
  
    if (senha !== confirmaSenha) {
      erroEl.innerText = "As senhas não coincidem.";
      erroEl.classList.remove("hidden");
      return;
    }
  
    alert("Cadastro enviado com sucesso!");
  }
  
  window.onload = () => {
    toggleCamposEspeciais();
    document.getElementById("perfil-aluno").addEventListener("change", toggleCamposEspeciais);
    document.getElementById("perfil-professor").addEventListener("change", toggleCamposEspeciais);
    document.getElementById("cadastroForm").addEventListener("submit", validarFormulario);
  };
  function toggleSenha(campoId, iconeId) {
    const input = document.getElementById(campoId);
    const icon = document.getElementById(iconeId);

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    } else {
      input.type = "password";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    }
  }