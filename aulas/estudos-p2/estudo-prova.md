# Prática:

Vou ter que subir o meu frontend em uma máquina virtual (ec2) com apache http, que vai estar conectado com o backend em FastAPI que está em outra máquina virtual(ec2), que também vai estar conectado com o banco de dados (rds) que vai estar em outra máquina virtual (ec2)

### Configuração das máquinas virtuais
EC2 backend, EC2 banco de dados, EC2 frontend.

### Configuração do RDS (banco de dados)
Criação padrão do RDS

### Dockerfile
1. docker login
2. docker build -t luanaparra/frontend-p2 .
3. docker build -t luanaparra/backend-p2 .
4. docker build -t luanaparra/banco-p2 .
5. docker tag luanaparra/frontend-p2 luanaparra/frontend-p2:tag
6. docker tag luanaparra/backend-p2 luanaparra/backend-p2:tag
7. docker tag luanaparra/banco-p2 luanaparra/banco-p2:tag
8. docker push luanaparra/frontend-p2:tag
9. docker push luanaparra/backend-p2:tag
10. docker push luanaparra/banco-p2:tag

### Conexão com servidor
### Como rodar a sua aplicação AWS

# APACHE (subir o front)
1. sudo apt update
2. sudo apt upgrade
3. sudo apt install apache2
4. porta 80
5. /var/www/http

# EC2
Uma EC2 (Elastic Compute Cloud) da AWS é um serviço de computação em nuvem que permite criar e gerenciar máquinas virtuais (VMs) escaláveis na infraestrutura da Amazon Web Services (AWS). As EC2s são usadas para executar cargas de trabalho computacionais, como hospedar aplicativos da web, executar servidores de banco de dados, realizar análises de dados, executar tarefas de processamento em lote e muito mais. Aqui estão os principais conceitos relacionados a EC2 e como usá-los:

Instâncias EC2: Uma instância EC2 é uma VM que você pode criar na AWS. Existem diversos tipos de instâncias com diferentes combinações de CPU, memória, armazenamento e capacidades de rede. Você escolhe o tipo de instância com base nas necessidades específicas da sua carga de trabalho.

AMI (Amazon Machine Image): Uma AMI é uma imagem pré-configurada de uma instância EC2 que inclui o sistema operacional e o software que você deseja executar. Você pode usar AMIs públicas ou criar suas próprias AMIs personalizadas.

Grupos de Auto Scaling: Os grupos de auto scaling permitem que você dimensione automaticamente o número de instâncias EC2 com base na demanda. Isso ajuda a garantir que sua aplicação seja altamente disponível e capaz de lidar com picos de tráfego.

Redes VPC (Virtual Private Cloud): Você pode criar redes virtuais privadas (VPCs) para isolar suas instâncias EC2 e controlar o tráfego de rede. Isso permite segmentar suas aplicações e melhorar a segurança.

Segurança: Você pode configurar grupos de segurança para controlar as regras de firewall de suas instâncias EC2. Isso ajuda a proteger suas instâncias e limitar o acesso não autorizado.

Armazenamento: A AWS oferece várias opções de armazenamento para suas instâncias EC2, incluindo armazenamento de bloco (por exemplo, Amazon EBS) e armazenamento de objetos (por exemplo, Amazon S3). Você pode escolher o tipo de armazenamento adequado para suas necessidades.

Monitoramento e gerenciamento: A AWS fornece ferramentas como o Amazon CloudWatch para monitorar o desempenho de suas instâncias EC2 e o AWS Systems Manager para automatizar tarefas de gerenciamento, como aplicação de patches e configuração.

# RDS
O Amazon RDS (Relational Database Service) é um serviço de banco de dados gerenciado oferecido pela Amazon Web Services (AWS). Ele facilita a criação, o gerenciamento e a escalabilidade de bancos de dados relacionais. O RDS é projetado para simplificar as tarefas administrativas relacionadas a bancos de dados, como provisionamento, configuração, backup e manutenção, permitindo que os desenvolvedores se concentrem em suas aplicações em vez de gerenciar a infraestrutura de banco de dados. Aqui está uma visão geral de como usar o Amazon RDS:

Escolha o Motor de Banco de Dados: O RDS oferece suporte a vários motores de banco de dados, incluindo MySQL, PostgreSQL, Oracle, SQL Server e MariaDB. Primeiro, você precisa escolher o motor de banco de dados que melhor atenda às necessidades da sua aplicação.

Crie uma Instância do RDS: No Console AWS ou por meio da AWS CLI/API, você pode criar uma instância do Amazon RDS. Durante o processo de criação, você define parâmetros como o tipo de instância, a capacidade de armazenamento, as opções de segurança e o nome do banco de dados.

Conecte-se ao Banco de Dados: Após a criação da instância, você pode se conectar ao banco de dados usando as credenciais fornecidas durante o processo de criação. Isso permite que você execute consultas SQL, insira dados e gerencie o banco de dados como faria com qualquer outro banco de dados relacional.

Gerencie e Otimize: O RDS gerencia automaticamente tarefas como backup, replicação, aplicação de patches e atualização do sistema operacional do banco de dados. Você também pode configurar alarmes de monitoramento para acompanhar o desempenho do banco de dados e ajustar recursos conforme necessário.

Escalabilidade: O Amazon RDS permite escalonar verticalmente (aumentar a capacidade de CPU e RAM) ou horizontalmente (adicionar réplicas de leitura) conforme a demanda da sua aplicação. Isso ajuda a lidar com cargas de trabalho variáveis.

Backup e Recuperação: O RDS oferece recursos avançados de backup e recuperação. Você pode criar snapshots automáticos e manuais para fazer backup dos dados do banco de dados, e também pode restaurar o banco de dados a partir desses snapshots em caso de falha.

Segurança: O RDS fornece opções de segurança robustas, como grupos de segurança, criptografia de dados em repouso e em trânsito, autenticação baseada em IAM e integração com o AWS Identity and Access Management (IAM) para gerenciar permissões de acesso.

Alta Disponibilidade: Você pode configurar instâncias de banco de dados multi-AZ (Disponibilidade em Zonas de Disponibilidade) para obter alta disponibilidade e recuperação automática em caso de falhas na zona de disponibilidade primária.

Manutenção e Atualizações: O RDS facilita a aplicação de patches e atualizações de banco de dados. Você pode agendar janelas de manutenção para garantir que as atualizações ocorram sem afetar a disponibilidade da aplicação.

O Amazon RDS é amplamente utilizado para hospedar bancos de dados relacionais em aplicações web, aplicativos empresariais e muito mais. Ele oferece um equilíbrio entre a facilidade de uso e o controle, permitindo que os desenvolvedores se concentrem no desenvolvimento de software, enquanto a AWS gerencia a infraestrutura de banco de dados subjacente.

# Geração de modelos (autoML e pycaret)
A geração de modelos e o AutoML (Machine Learning Automatizado) são conceitos relacionados à automação de tarefas de aprendizado de máquina, tornando mais fácil e eficiente o processo de criação de modelos de machine learning. O Pycaret é uma biblioteca Python que oferece ferramentas e funcionalidades para simplificar a geração de modelos de machine learning e é um exemplo de uma ferramenta que ajuda a implementar o AutoML.

Aqui está uma explicação mais detalhada sobre cada um desses conceitos:

Geração de Modelos (Model Generation): A geração de modelos se refere ao processo de desenvolvimento de algoritmos de aprendizado de máquina com base em dados. Isso envolve a criação, treinamento e avaliação de modelos de machine learning para realizar tarefas específicas, como classificação, regressão, clusterização, etc. Tradicionalmente, esse processo exigia a escolha manual de algoritmos, pré-processamento de dados e ajuste de hiperparâmetros, tornando-o muitas vezes complexo e demorado.

AutoML (Machine Learning Automatizado): O AutoML é uma abordagem que automatiza partes ou todo o processo de criação de modelos de machine learning. Ele utiliza técnicas de automação para realizar tarefas como seleção de algoritmos, pré-processamento de dados, otimização de hiperparâmetros e avaliação de modelos, tudo isso de forma automática. O objetivo do AutoML é tornar o desenvolvimento de modelos mais acessível para pessoas com diferentes níveis de experiência em machine learning, reduzindo a necessidade de conhecimento especializado em detalhes técnicos.

Pycaret: O Pycaret é uma biblioteca Python que oferece uma estrutura de alto nível para o desenvolvimento de modelos de machine learning. Ele é projetado para facilitar a criação de modelos, acelerando tarefas comuns de machine learning e automação de partes do processo. O Pycaret inclui funções para pré-processamento de dados, seleção automática de modelos, ajuste automático de hiperparâmetros, avaliação de modelos e geração de relatórios. É uma ferramenta útil para pessoas que desejam criar modelos de machine learning de maneira rápida e eficiente, especialmente quando se está explorando várias abordagens de modelagem.

O Pycaret se encaixa no conceito de AutoML, pois automatiza muitos aspectos do processo de criação de modelos, permitindo que os usuários se concentrem mais nas análises dos resultados e menos na implementação técnica. Isso é particularmente útil em cenários em que você deseja prototipar rapidamente modelos de machine learning ou quando não possui um profundo conhecimento em machine learning, mas ainda deseja obter insights valiosos de seus dados por meio de modelos preditivos.

# Streamlit
Streamlit é uma biblioteca Python de código aberto que torna a criação de aplicativos web interativos simples e rápida. É especialmente útil para cientistas de dados, engenheiros de machine learning e desenvolvedores que desejam compartilhar suas análises de dados, visualizações e modelos de machine learning com outras pessoas, sem a necessidade de conhecimento aprofundado em desenvolvimento web.

Aqui estão alguns dos principais pontos sobre o Streamlit:

Principais Características:

Simplicidade: O Streamlit é conhecido por sua simplicidade. Você pode criar um aplicativo web funcional com apenas algumas linhas de código Python.

Interatividade: Ele permite criar aplicativos interativos onde os usuários podem interagir com elementos da interface, como botões, barras de rolagem e caixas de seleção.

Integração de Gráficos: É fácil integrar gráficos e visualizações, como gráficos Matplotlib, Plotly ou Seaborn, em seu aplicativo.

Widgets Personalizáveis: O Streamlit oferece widgets personalizáveis para entrada de dados, incluindo campos de texto, botões, barras de progresso e muito mais.

Facilidade de Implantação: Uma vez que você tenha criado seu aplicativo com o Streamlit, pode implantá-lo em diversos serviços de hospedagem, como Heroku, AWS, ou até mesmo na sua máquina local para uso pessoal.

Como Usar o Streamlit:

Instalação: Primeiro, você precisa instalar o Streamlit. Você pode fazer isso com o comando pip:

`pip install streamlit`

Criação de um Aplicativo: Você pode criar um aplicativo Streamlit em um arquivo Python simples. Em geral, um aplicativo Streamlit é composto por funções Python que são executadas em ordem. Cada função é chamada quando um evento específico ocorre, como a abertura do aplicativo ou a interação com um widget.

Execução do Aplicativo: Para iniciar o aplicativo, você pode usar o seguinte comando:

`streamlit run nome_do_arquivo.py`

Desenvolvimento do Aplicativo: Use a biblioteca para criar widgets e visualizações interativas. Por exemplo, você pode criar botões, gráficos, tabelas e outros elementos de interface do usuário diretamente no seu código Python.

Visualização do Aplicativo: O Streamlit abrirá automaticamente uma janela do navegador com o seu aplicativo em execução. Você pode interagir com ele e compartilhar a URL do aplicativo com outras pessoas.

Implantação: Quando estiver satisfeito com o seu aplicativo, você pode implantá-lo em um serviço de hospedagem para torná-lo acessível a outras pessoas pela internet.

O Streamlit é uma ferramenta poderosa para criar rapidamente protótipos de aplicativos web, compartilhar análises de dados e criar painéis interativos. É altamente recomendado para qualquer pessoa que queira criar aplicativos da web de forma rápida e eficiente usando Python.

# Escala vertical e horizontal
- EC2 é bom para escala vertical, e containeres (com um orquestrador) são bons para horizontal.
- Escala vertical ou escalar ou reduzir verticalmente, na qual você aumenta ou diminui a capacidade de computação ou os bancos de dados conforme necessário, alterando os níveis de desempenho ou usando pools de banco de dados elástico para se ajustar automaticamente às suas demandas de carga de trabalho.
- Quando escalar verticalmente: Observar que as suas cargas de trabalho estão atingindo algum limite de desempenho, como limites de CPU ou de E/S, Precisar reagir rapidamente para consertar problemas de desempenho que não podem ser resolvidos com a otimização do banco de dados clássica, Precisar de uma solução que permita alterar as camadas de serviço para se adaptar à alteração dos requisitos de latência.
- Escala horizontal ou escalar ou reduzir horizontalmente, na qual você adiciona mais bancos de dados ou divide seu banco de dados grandes em nós menores, usando uma abordagem de particionamento de dado chamada fragmentação, que pode ser gerenciada com mais rapidez e facilidade entre servidores.
- Quando escalar horizontalmente: Você tiver aplicativos distribuídos geograficamente em que cada aplicativo deve acessar parte dos dados na região. Cada aplicativo acessará apenas o fragmento associado a essa região sem afetar outros fragmentos, Você tiver um cenário de fragmentação global, como balanceamento de carga, em que há um grande número de clientes distribuídos geograficamente que inserem dados nos próprios fragmentos dedicados, Você atingir o limite dos seus requisitos de desempenho, mesmo nos níveis de desempenho mais altos do seu serviço, ou se os dados não couberem em um banco de dados individual.
