# Atividade 5 - Resenha sobre o artigo

Esta atividade ponderada tem por objetivo realizar a construção de uma comparação com o que foi desenvolvido nas outras atividades ponderadas e o artigo lido durante o autoestudo da semana. Os alunos deverão fazer uma comparação do que foi implementado por eles, com o que foi proposto pelo artigo, comparando as similaridades e diferenças. A resenha não deve possuir mais que 1000 palavras, sendo que, eventuais códigos utilizados para demonstração, não fazem parte desta contagem.

## Resenha

### Sumarização
O artigo destaca a interseção entre a Internet das Coisas (IoT) e as técnicas de aprendizado de máquina (machine learning) para a análise de dados gerados por dispositivos interconectados. O aumento expressivo no número de dispositivos conectados à Internet tem impulsionado a IoT, e a ciência de dados desempenha um papel crucial na extração de conhecimento desses dados, introduzindo o conceito de "smart data". Na seção de revisão de literatura, são tratados os desafios e abordagens na mineração de dados na IoT, incluindo modelos em camadas, distribuídos e baseados em grade, destacando a importância da mineração de dados em aplicações comuns da IoT, como tráfego inteligente, saúde e cidades inteligentes. Isso oferece uma visão abrangente das abordagens e desafios nesse campo em constante evolução.

Em seguida, o artigo aborda o conceito da Internet das Coisas (IoT) e seus principais componentes, destacando sua finalidade de criar um ambiente mais inteligente e simplificado, economizando tempo, energia e dinheiro. A explicação inclui a conexão de dispositivos que podem trocar dados automaticamente para otimizar seu desempenho. Além disso, são discutidos os avanços recentes da IoT relacionados ao uso frequente de etiquetas RFID, sensores de baixo custo, tecnologia web e protocolos de comunicação. O texto também aborda a importância dos protocolos de comunicação, que são divididos em três tipos: dispositivo para dispositivo (D2D), dispositivo para servidor (D2S) e servidor para servidor (S2S). São apresentadas também as estratégias de processamento de dados, como fog computing, edge computing e cloud computing, que desempenham um papel fundamental na IoT.

Ademais, o artigo aborda o processamento de dados na IoT, destacando sua dependência das necessidades da aplicação. Ele explica que o fog computing e o edge computing oferecem processamento próximo à origem dos dados, enquanto o cloud computing envia dados para centros remotos. Além disso, a computação distribuída é mencionada como uma estratégia que divide dados para processamento eficiente. O foco principal dessas abordagens é reduzir a carga na rede, acelerar o processamento e economizar energia. O artigo também explora as cidades inteligentes, enfatizando seu impacto na qualidade de vida e serviços urbanos, incluindo gerenciamento de tráfego, água, energia e qualidade de vida. São apresentados casos de uso, ressaltando o papel crucial do processamento de dados na tomada de decisões urbanas, além das características dos dados gerados nas cidades inteligentes.

Após essas explicações mais gerais o artigo trata sobre a taxonomia de algoritmos de aprendizado de máquina para análise de dados em cidades inteligentes, abrangendo aprendizado supervisionado e não supervisionado, de um modo mais 'técnico', porém conciso:

- Classificação: K-nearest neighbors (KNN), Naive Bayes e Support Vector Machines (SVMs), destacando suas vantagens e limitações, além de mostrar aplicações que incluem previsão de tráfego e detecção de anomalias.

- Regressão: A regressão linear, incluindo abordagens como Mínimos Quadrados Ordinários e Regressão Linear Bayesiana, é usada para prever o consumo de energia em edifícios. Além disso, a Regressão por Vetores de Suporte (SVR), uma extensão das Máquinas de Vetores de Suporte (SVM), é explorada para resolver problemas de regressão, como a previsão precisa de dados de temperatura e umidade.

- Aprendizado de máquina: O artigo discute outras técnicas, como: Árvores de Classificação e Regressão (CART) onde explica como elas dividem o espaço de entrada em regiões e atribuem modelos de classificação ou regressão a cada região; Florestas Aleatórias (Random Forests) que envolvem a criação de múltiplas árvores treinadas em conjuntos de dados aleatórios, resultando em alta precisão, mas menor interpretabilidade e Bagging que consiste em treinar vários modelos em conjuntos de dados de treinamento gerados aleatoriamente, melhorando a estabilidade e a precisão dos modelos.

- Agrupamento dos dados: As técnicas citadas incluem o K-means e DBSCAN para agrupar dados não rotulados com base na similaridade.

- Extração de características: O foco está em Análise de Componentes Principais - PCA para projetar dados em um subespaço de menor dimensionalidade e Análise de Correlação Canônica - CCA para encontrar subespaços correlacionados.

- Redes neurais: O artigo destaca o uso de redes neurais, em particular as chamadas Feed Forward Neural Networks (FFNN) ou Multilayer Perceptrons (MLP), em aplicações de aprendizado de máquina, abordando suas vantagens e desafios.

- Análise de Dados Temporais e Sequenciais: São discutidos métodos específicos, como modelos ocultos de Markov e redes neurais recorrentes, para lidar com dados sequenciais.

O artigo aborda a detecção de anomalias, que envolve identificar itens ou padrões diferentes em um conjunto de dados. Anomalias são comportamentos inesperados, como outliers, novidades ou ruídos. O artigo descreve três categorias de técnicas de detecção de anomalias: supervisionadas, semi-supervisionadas e não supervisionadas, destacando sua importância em várias aplicações práticas.

Por fim, é enfatizada a importância de selecionar algoritmos de aprendizado de máquina adequados para tarefas específicas de análise de dados inteligentes. Ele sugere algoritmos apropriados para tarefas como descoberta de estrutura, detecção de anomalias, previsão de valores, previsão de categorias e extração de características, destacando a relevância da escolha adequada para melhorar o desempenho em cenários de dados inteligentes.

###  Comparação de técnicas utilizadas no desenvolvimento do projeto 
No contexto do desenvolvimento do projeto para prever falhas em aeronaves, a comparação com as técnicas mencionadas no artigo é crucial para entender a escolha dos algoritmos e abordagens específicos. Enquanto o projeto utilizou algoritmos de séries temporais, alinhando-se com as necessidades de lidar com dados sequenciais e correlações temporais significativas, também incorporou uma abordagem de experimentação e teste, podendo ser exemplificado pelo uso do PyCaret, que permitiu avaliar diferentes modelos. Notavelmente, a tentativa de aplicar regressão logística, mencionada no contexto do artigo como uma das opções, não foi eficaz no contexto do projeto, ressaltando a importância de adaptar as escolhas de algoritmos à natureza específica dos dados e das metas preditivas em um determinado cenário, como aeronaves, onde a complexidade e as nuances das falhas requerem modelos mais sofisticados e adequados.

### Resenha crítica
O artigo apresenta uma análise abrangente e informativa sobre a intersecção entre a Internet das Coisas (IoT) e as técnicas de aprendizado de máquina, disponibilizando uma visão geral valiosa sobre o asssunto. Desse modo, destaco alguns pontos positivos e negativos: 

Pontos positivos:
1. Abrangência e estrutura: O artigo possui uma estrutura bem definida, de fácil entendimento/interpretação e completa, fazendo uma revisão sobre IoT e mineração dos dados até a exploração de uma ampla variedade algoritmos de machine learning.
2. Contextualização significativa: O artigo retrata a importância da IoT no cenário mais atual, destacando seu papel em áreas como cidades inteligentes, saúde e agricultura, o que fornece um contexto relevante para os leitores e mostra as implicações práticas dessas tecnologias.
3. Algoritmos: O artigo fornece uma ampla gama de algoritmos de aprendizado de máquina, o que é valioso para os leitores interessados em explorar diferentes técnicas, além de realizar uma visão sobre as opções disponíveis para a análise de dados da IoT. 

Pontos Negativos:
1. Falta de estudos de caso práticos: Apesar do artigo tratar sobre aplicaçõe da IoT, como cidades inteligentes e saúde, a ausência de estudos de caso específicos reais limita a compreensão de como essas técnicas são implementadas na prática.
2. Superficialidade: Acredito que o artigo poderia ter tratado alguma técnicas com uma maior profundidade, como é o caso da regressão logística.

Dessa maneira, no projeto de desenvolvimento do modelo preditivo para prever falhas em aeronaves foram testadas diversas abordagens, incluindo algoritmos de séries temporais e a regressão logística mencionada no artigo. A dificuldade em obter resultados satisfatórios com a regressão logística, o primeiro algoritmo escolhido para o desenvolvimento, ressalta a importância de escolher os algoritmos corretos para tarefas específicas. Dessa maneira, essa experiência do projeto se alinha com a ênfase do artigo na importância de adaptar as escolhas de algoritmos à natureza dos dados e às metas preditivas. Portanto, o artigo oferece informações valiosas que podem ser aplicadas no contexto do projeto, especialmente em relação à seleção de algoritmos adequados para análise de dados sequenciais e preditivos, no nosso caso optamos por seguir com séries temporais.
