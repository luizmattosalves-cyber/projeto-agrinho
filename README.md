# projeto-agrinho
agrinho
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Agrinho 2026 - Luiz Gustavo de Mattos Alves</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Segoe UI', sans-serif;
}

body{
    background:#f4f9f4;
    color:#333;
}

header{
    background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600');
    background-size:cover;
    background-position:center;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
}

.hero h1{
    font-size:4rem;
    text-shadow:2px 2px 8px black;
}

.hero p{
    font-size:1.3rem;
    margin-top:15px;
}

.btn{
    display:inline-block;
    margin-top:20px;
    padding:12px 25px;
    background:#4CAF50;
    color:white;
    text-decoration:none;
    border-radius:30px;
    transition:0.3s;
}

.btn:hover{
    background:#2e7d32;
    transform:scale(1.05);
}

nav{
    background:#2e7d32;
    padding:15px;
    text-align:center;
    position:sticky;
    top:0;
    z-index:100;
}

nav a{
    color:white;
    text-decoration:none;
    margin:0 15px;
    font-weight:bold;
}

section{
    padding:60px 10%;
}

h2{
    color:#2e7d32;
    margin-bottom:20px;
    text-align:center;
    font-size:2rem;
}

.sobre{
    display:flex;
    flex-wrap:wrap;
    gap:30px;
    align-items:center;
}

.sobre img{
    width:450px;
    max-width:100%;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
}

.sobre-texto{
    flex:1;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.card{
    background:white;
    padding:25px;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,0.1);
    transition:0.3s;
}

.card:hover{
    transform:translateY(-8px);
}

.galeria{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:20px;
}

.galeria img{
    width:100%;
    height:250px;
    object-fit:cover;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
}

.autor{
    background:#4CAF50;
    color:white;
    text-align:center;
    padding:40px;
}

.autor h3{
    font-size:2rem;
}

footer{
    background:#1b5e20;
    color:white;
    text-align:center;
    padding:20px;
}
</style>
</head>
<body>

<header>
    <div class="hero">
        <h1>AGRINHO 2026</h1>
        <p>Conectando Campo e Cidade para um Futuro Sustentável</p>
        <p><strong>Projeto de Luiz Gustavo de Mattos Alves</strong></p>
        <a href="#sobre" class="btn">Conheça Mais</a>
    </div>
</header>

<nav>
    <a href="#sobre">Sobre</a>
    <a href="#objetivos">Objetivos</a>
    <a href="#galeria">Galeria</a>
    <a href="#autor">Autor</a>
</nav>

<section id="sobre">
    <h2>Sobre o Agrinho 2026</h2>

    <div class="sobre">
        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800" alt="Campo e Agricultura">

        <div class="sobre-texto">
            <p>
                O Agrinho 2026 é um programa educacional que incentiva os estudantes
                a refletirem sobre a importância da agricultura, da sustentabilidade,
                da preservação ambiental e da integração entre o campo e a cidade.
            </p>

            <br>

            <p>
                O projeto busca desenvolver a consciência cidadã, promovendo atitudes
                responsáveis para a construção de uma sociedade mais sustentável,
                valorizando o trabalho no campo e a produção de alimentos.
            </p>
        </div>
    </div>
</section>

<section id="objetivos">
    <h2>Objetivos do Projeto</h2>

    <div class="cards">
        <div class="card">
            <h3>🌱 Sustentabilidade</h3>
            <p>Promover práticas sustentáveis para proteger o meio ambiente.</p>
        </div>

        <div class="card">
            <h3>🚜 Agricultura</h3>
            <p>Valorizar o produtor rural e a produção de alimentos.</p>
        </div>

        <div class="card">
            <h3>🌍 Cidadania</h3>
            <p>Incentivar a participação social e o respeito à comunidade.</p>
        </div>

        <div class="card">
            <h3>📚 Educação</h3>
            <p>Estimular o aprendizado por meio de projetos criativos.</p>
        </div>
    </div>
</section>

<section id="galeria">
    <h2>Galeria de Imagens</h2>

    <div class="galeria">
        <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800" alt="Plantação">
        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800" alt="Natureza">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800" alt="Meio Ambiente">
        <img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800" alt="Agricultura">
        <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800" alt="Preservação">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" alt="Campo">
    </div>
</section>

<section class="autor" id="autor">
    <h3>Projeto Desenvolvido por</h3>
    <p style="font-size:1.5rem; margin-top:10px;">
        <strong>Luiz Gustavo de Mattos Alves</strong>
    </p>
    <p style="margin-top:10px;">
        Agrinho 2026 - Educação, Sustentabilidade e Cidadania.
    </p>
</section>

<footer>
    <p>© 2026 Agrinho | Site criado por Luiz Gustavo de Mattos Alves</p>
</footer>

</body>
</html>
