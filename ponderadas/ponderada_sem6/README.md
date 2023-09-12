# Atividade 3 - Deploy de modelo de Machine Learning na Nuvem

Construção e deploy de um modelo de predição ou classificação criados pelos alunos. Este modelo deve ser deployado em uma nuvem comercial e uma API de acesso a ele deve ser desenvolvida.

#### Espera-se encontrar na entrega do projeto:
Os pontos que serão avaliados na entrega do projeto:

(Até 1.0 ponto) Construção do dockerfile: o arquivo contem todas as informações necessárias para a construção da imagem dos containers para produção;
(Até 1.0 ponto) Publicação das Imagens para a API: a API foi publicada corretamente na cloud;
(Até 1.0 ponto) Documentação do ambiente de desenvolvimento: documentar o ambiente de desenvolvimento (não precisa estar dockerizado), seus requisitos e como executar o projeto. Exportar os notebooks temporários que foram utilizados em seu desenvolvimento;
(Até 1.0 ponto) Documentação da API e seu funcionamento;
(Até 1.0 ponto) Descrever qual modelo de Machine Learning foi escolhido e justificar sua escolha: essa justificativa pode vir da comparação entre diversos modelos que foram previamente aplicados;
(Até 1.0 ponto) As instruções no arquivo README foram suficientes para executar a aplicação: as instruções no arquivo README foram suficientes para executar a aplicação APENAS SEGUINDO OS PASSOS CONTIDOS NO DOCUMENTO;
(Até 2.0 pontos) Treinamento do modelo;
(Até 2.0 pontos) Pré-processamento dos dados;

### Passo a passo:

O modelo foi desenvolvido com base em um conjunto de dados cuidadosamente selecionado, optando pelo conjunto de dados de Customer Segmentation devido à sua simplicidade, o que simplificou o processo de engenharia de recursos. Neste projeto, apresentamos um modelo preditivo que recebe informações sobre a idade, renda anual e sexo do cliente e usa esses dados para estimar seu score como cliente.

Para construir o modelo, utilizamos um regressor Random Forest, uma técnica robusta de aprendizado de máquina que é conhecida por seu desempenho em tarefas de regressão. O modelo foi treinado cuidadosamente para garantir que ele seja capaz de fazer previsões precisas e confiáveis.

Após o treinamento, o modelo foi implantado em um ambiente de API usando o FastAPI. Isso permite que os usuários interajam facilmente com o modelo, enviando seus dados e obtendo previsões instantâneas sobre seu score como cliente.

Além disso, desenvolvemos uma interface simples para a API, tornando a experiência do usuário ainda mais intuitiva e amigável. Isso significa que os usuários podem acessar o modelo de forma conveniente e compreensível, mesmo que não tenham conhecimento técnico em aprendizado de máquina.

Para garantir que o modelo seja facilmente acessível e escalável, todo o aplicativo foi containerizado e implantado no DockerHub. Você pode acessar o aplicativo por meio do seguinte link:

[https://hub.docker.com/repository/docker/luanaparra/ponderada-sem6/general]

**Como rodar**: Para executar a aplicação, `docker run -d -p 8000:8000 luanaparra/ponderada-sem6`; para acessar a aplicação web http://localhost:8000 e a documentação da API  http://localhost:8000/redoc.
**Clonar o repositório**: `cd /caminho/para/o/seu/diretorio` e `git clone https://github.com/seu-usuario/seu-repo.git`
**Instalar requirements(dependências)**: `pip install -r requirements.txt`
**Rodar o ambiente de dev**: `uvicorn api:app --host 0.0.0.0 --port 8000`

#### Modelo
O processo de treinamento do modelo foi detalhadamente documentado no notebook. Em resumo, começamos com a exploração dos dados, realizando análises estatísticas e criando gráficos informativos para compreender a natureza dos dados. Em seguida, aplicamos a técnica de codificação one-hot para lidar com os valores categóricos, garantindo que eles sejam apropriadamente incorporados ao modelo.

Além disso, procedemos com a normalização dos valores numéricos para garantir que todas as características tivessem um impacto justo nas previsões do modelo, evitando distorções devido à escala.

No estágio de treinamento, exploramos três regressores populares: Random Forest, Adaboost e KNN. Utilizamos o erro médio absoluto como métrica de avaliação de desempenho, uma medida robusta que nos permite quantificar o quão bem o modelo está fazendo suas previsões em termos de magnitude do erro.

Após uma análise cuidadosa, identificamos que o modelo Random Forest superou os outros dois regressores em termos de desempenho, produzindo as previsões mais precisas e confiáveis. Portanto, decidimos avançar com o Random Forest como nosso modelo final.

#### API
Para fazer uso desta API, você pode enviar uma solicitação POST para a rota /predict/ com os seguintes parâmetros em formato JSON:

1. "gender" (string): O gênero da pessoa, que deve ser especificado como "male" (masculino) ou "female" (feminino).
2. "age" (inteiro): A idade da pessoa, que deve estar dentro do intervalo de 12 a 100 anos.
3. "annual_income" (inteiro): A estimativa da renda anual da pessoa.

Após o envio da solicitação, a API processará os dados e retornará uma resposta em formato JSON contendo a previsão da renda anual com base nas informações fornecidas.
