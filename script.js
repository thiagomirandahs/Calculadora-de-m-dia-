document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.backgroundImage = 'url("https://source.unsplash.com/random/1920x1080")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundAttachment = 'fixed';

const cabecalho = document.createElement('header');
cabecalho.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
cabecalho.style.color = '#fff';
cabecalho.style.display = 'flex';
cabecalho.style.justifyContent = 'space-between';
cabecalho.style.padding = '10px 20px';
cabecalho.style.position = 'fixed';
cabecalho.style.width = '100%';
cabecalho.style.top = '0';

const linkReset = document.createElement('a');
linkReset.href = '#';
linkReset.innerText = 'Reset';
linkReset.style.color = '#fff';
linkReset.style.textDecoration = 'none';
linkReset.style.fontWeight = 'bold';
linkReset.style.flex = '1';
linkReset.style.textAlign = 'center';
linkReset.addEventListener('click', () => linkReset.style.color = '#f00');
linkReset.addEventListener('mouseover', () => linkReset.style.color = '#0f0');
linkReset.addEventListener('mouseout', () => linkReset.style.color = '#fff');
cabecalho.appendChild(linkReset);

const espaco = document.createElement('div');
espaco.style.flex = '1';
cabecalho.appendChild(espaco);

const linkGit = document.createElement('a');
linkGit.href = '#';
linkGit.innerText = 'Git';
linkGit.style.color = '#fff';
linkGit.style.textDecoration = 'none';
linkGit.style.fontWeight = 'bold';
linkGit.style.flex = '1';
linkGit.style.textAlign = 'center';
linkGit.addEventListener('click', () => linkGit.style.color = '#f00');
linkGit.addEventListener('mouseover', () => linkGit.style.color = '#0f0');
linkGit.addEventListener('mouseout', () => linkGit.style.color = '#fff');
cabecalho.appendChild(linkGit);

document.body.appendChild(cabecalho);

const container = document.createElement('div');
container.style.maxWidth = '600px';
container.style.margin = '100px auto 50px';
container.style.padding = '20px';
container.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
container.style.textAlign = 'center';
container.style.borderRadius = '10px';
container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

const titulo = document.createElement('h1');
titulo.innerText = 'Atividade de Programação Web';
titulo.style.backgroundColor = '#ff5722';
titulo.style.padding = '10px';
titulo.style.borderRadius = '5px';
titulo.style.marginBottom = '20px';
titulo.style.color = '#fff';
container.appendChild(titulo);

function criarInput(placeholder, id, type = 'text') {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    input.style.display = 'block';
    input.style.width = 'calc(100% - 20px)';
    input.style.margin = '10px auto';
    input.style.padding = '10px';
    input.style.border = '2px solid #ff5722';
    input.style.borderRadius = '4px';
    input.style.backgroundColor = '#fff';
    container.appendChild(input);
}

criarInput('Digite seu nome', 'nome');
criarInput('Digite a primeira nota', 'nota1', 'number');
criarInput('Digite a segunda nota', 'nota2', 'number');
criarInput('Digite a terceira nota', 'nota3', 'number');
criarInput('Digite a quarta nota', 'nota4', 'number');

const botao = document.createElement('button');
botao.type = 'button';
botao.innerText = 'Calcular média';
botao.style.display = 'block';
botao.style.width = 'calc(100% - 20px)';
botao.style.margin = '20px auto';
botao.style.padding = '10px';
botao.style.backgroundColor = '#ff5722';
botao.style.color = '#fff';
botao.style.border = 'none';
botao.style.borderRadius = '4px';
botao.style.cursor = 'pointer';
botao.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
botao.addEventListener('mouseover', () => botao.style.backgroundColor = '#e64a19');
botao.addEventListener('mouseout', () => botao.style.backgroundColor = '#ff5722');
botao.onclick = calcularMedia;
container.appendChild(botao);

document.body.appendChild(container);

const resultadoDiv = document.createElement('div');
resultadoDiv.id = 'resultado';
resultadoDiv.style.marginTop = '20px';
resultadoDiv.style.textAlign = 'center';
container.appendChild(resultadoDiv);

function calcularMedia() {
    const nome = document.getElementById('nome').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        resultadoDiv.innerHTML = 'Por favor, insira todas as notas.';
        return;
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    let mensagem = '';

    if (media >= 7) {
        mensagem = 'Aprovado';
    } else if (media >= 5) {
        mensagem = 'Em Recuperação';
    } else {
        mensagem = 'Reprovado';
    }

    resultadoDiv.innerHTML = `Nome: ${nome}<br>Média: ${media.toFixed(2)}<br>${mensagem}`;
}

const rodape = document.createElement('footer');
rodape.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
rodape.style.color = '#fff';
rodape.style.padding = '20px';
rodape.style.textAlign = 'center';
rodape.style.position = 'fixed';
rodape.style.bottom = '0';
rodape.style.width = '100%';
rodape.innerText = 'ME APROVA GABRIEL <3.';
document.body.appendChild(rodape);
