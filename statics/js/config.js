const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');
const themeToggle = document.getElementById('themeToggle');
const notificationsToggle = document.getElementById('notifications');

// Atualiza a exibição do volume
volumeSlider.addEventListener('input', () => {
  volumeValue.textContent = volumeSlider.value;
});

// Aplica o tema ao trocar
themeToggle.addEventListener('change', () => {
  aplicarTema(themeToggle.checked);
});

// Função para aplicar o tema
function aplicarTema(temaEscuro) {
  document.body.style.backgroundColor = temaEscuro ? '#121212' : '#f2f2f2';
  document.body.style.color = temaEscuro ? '#fff' : '#333';
}

// Salva no localStorage
function salvarConfiguracoes() {
  const config = {
    temaEscuro: themeToggle.checked,
    notificacoesAtivas: notificationsToggle.checked,
    volume: volumeSlider.value
  };
  localStorage.setItem('configuracoesUsuario', JSON.stringify(config));
  alert("Configurações salvas!");
}

// Carrega do localStorage ao iniciar
function carregarConfiguracoes() {
  const configSalva = localStorage.getItem('configuracoesUsuario');
  if (configSalva) {
    const config = JSON.parse(configSalva);
    themeToggle.checked = config.temaEscuro;
    notificationsToggle.checked = config.notificacoesAtivas;
    volumeSlider.value = config.volume;
    volumeValue.textContent = config.volume;
    aplicarTema(config.temaEscuro);
  }
}

carregarConfiguracoes();
