<h1>Projeto: API Personagens</h1>


<h2>Descrição do projeto</h2>

<p>O projeto consiste em uma API que retorna dados de personagens históricos da humanidade..</p>

<h2>Funcionalidades do projeto</h2>

<p>O projeto é utilizado para consulta de dados como ano de nascimento, ano de falecimento, nacionalidade, etc, de personagens históricos.</p>

<h2>Tecnologias utilizadas</h2>

<ul>
    <li>Node.JS</li>
    <li>Express.JS</li>
    <li>MySQL</li>
    <li>Sequelize</li>
    <li>DotEnv</li>
    <li>IDE utilizada: VS Code</li>
</ul>

<h4>Endpoints:</h4>

<p><code>http://localhost:3000/personagens/</code> - Retorna todos personagens disponíveis na API<p>

<p><code>http://localhost:3000/personagens/:id</code> - Retorna um personagem específico na consulta, sendo necessário mudar <code>:id</code> por um número entre 1 e 12<p>

<p><code>http://localhost:3000/personagens/nacionalidade/:nacionalidade</code> - Retorna todos personagens de uma nacionalidade em específico, sendo necessário mudar <code>:nacionalidade</code> por Estados Unidos, Itália, Egito, Holanda, Inglaterra, Alemanha, França ou Áustria. Você pode digitar o nome do país da forma que quiser. Por exemplo: "França", "frança", "franca", "Franca". "Itália", "itália", "italia", "Italia". A forma que você optar não interfirá na busca<p>

<p><code>http://localhost:3000/personagens/ocupacao/:ocupacao</code> - Retorna todos personagens de uma ocupação em específico, sendo necessário mudar <code>:ocupacao</code> por Inventor, Governante, Pintor, Poeta ou Compositor. Você pode digitar a ocupação da forma que quiser, a forma que optar não interfirá na busca<p>


<h2>Testar localmente</h2>

<p>1 - Instale o Node.js. Caso tenha instalado, pule essa etapa</p>

<p>2 - Instale o MySQL. Caso tenha instalado, pule essa etapa</p>

<p>3 - Entre no arquivo ".env.example" e siga os passos</p>

<p>4 - Com a pasta aberta na IDE (o caminho mostrado no terminal precisa levar ao projeto no seu computador, na altura do local onde se encontra o package.json), execute o comando <code>npm install</code> no terminal da IDE.</p>

<p>5 - Com o passo 4 executado, execute o comando <code>npx sequelize-cli db:migrate</code> no terminal

<p>6 - Execute o comando <code>npx sequelize-cli db:seed:all</code> no terminal

<p>4 - Ainda no terminal da IDE, execute o comando <code>node main.js</code>. Se tudo der certo, o backend estará pronto para uso</p>

<h2>Status do projeto</h2>

<p>Versão 1.0 finalizada.</p>

