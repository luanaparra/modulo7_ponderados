# Atividade 4 - Construção de Dashboard para Visualização de Dados

Esta atividade tem por objetivo realizar a integração das demais atividades desenvolvidas. Ela será o frontend de visualização de dados do modelo disponibilizado. Esta interface deverá consumir os dados disponibilizados da atividade ponderada 3. O acesso a este dashboard deverá acontecer mediante ao login do usuário, conforme desenvolvido na atividade ponderada 2.

## Ponderada 
A ponderada é composta por:
1. Machine learning: notebook de treinamento (ponderada semana 6);
2. Frontend: interface de login, predição, visualização de dados com Streamlit.
3. Backend: com o servidor em Node.js, API, autenticação com JWT e conexão com banco de dados com Mongo DB.

### Modelo
O modelo foi desenvolvido com base em um conjunto de dados cuidadosamente selecionado, optando pelo conjunto de dados de Customer Segmentation devido à sua simplicidade, o que simplificou o processo de engenharia de recursos. Neste projeto, apresentamos um modelo preditivo que recebe informações sobre a idade, renda anual e sexo do cliente e usa esses dados para estimar seu score como cliente.

O processo de treinamento do modelo foi detalhadamente documentado no notebook. Em resumo, começamos com a exploração dos dados, realizando análises estatísticas e criando gráficos informativos para compreender a natureza dos dados. Em seguida, aplicamos a técnica de codificação one-hot para lidar com os valores categóricos, garantindo que eles sejam apropriadamente incorporados ao modelo.

Além disso, procedemos com a normalização dos valores numéricos para garantir que todas as características tivessem um impacto justo nas previsões do modelo, evitando distorções devido à escala.

No estágio de treinamento, exploramos três regressores populares: Random Forest, Adaboost e KNN. Utilizamos o erro médio absoluto como métrica de avaliação de desempenho, uma medida robusta que nos permite quantificar o quão bem o modelo está fazendo suas previsões em termos de magnitude do erro.

Após uma análise cuidadosa, identificamos que o modelo Random Forest superou os outros dois regressores em termos de desempenho, produzindo as previsões mais precisas e confiáveis. Portanto, decidimos avançar com o Random Forest como nosso modelo final.

### Como rodar?

`sudo docker run -p 5000:5000 luanaparra/ponderada4-front`
`sudo docker run -p 8501:8501 luanaparra/ponderada4-back`


