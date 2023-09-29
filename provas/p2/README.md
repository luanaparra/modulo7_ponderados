# Avaliação P2

## Passo 1 - EC2
Em primeiro lugar foram criadas as instâncias do backend e frontend, ou seja, duas EC2. 

<img src="./media/instancia1.png" display="flex">

Aqui já podemos ver que foram criadas as duas instâncias que já estão sendo executadas, com IP elástico já alocados nelas.

<img src="./media/ipelastico.png" display="flex">
<img src="./media/instancia2.png" display="flex">

## Passo 2 - RDS
Posto isso, foi criado o RDS (database-prova2) com todas as configurações necessárias, além de deixar acessivelmente público.

<img src="./media/rds.png" display="flex">

## Passo 3 - Frontend
Na instância frontend-prova2, os seguintes comandos foram utilizados:

```bash
sudo apt update
sudo apt upgrade
sudo apt install apache2
```
O último comando é necessário, pois vamos servir o frontend com Apache. A fim de conferência o IP foi acessado e aparece essa página abaixo:

<img src="./media/apache.png" display="flex">

Assim, foi clonado este repositório com as urls modificadas.

## Passo 4 
Saída esperada após execução do programa:

<img src="./media/tela-front.png" display="flex">

# IMPORTANTE:

Para colocar o frontend para funcionar, colocar uma máquina EC2 rodando o Apache WebServer.
Para isso, instalar dentro da EC2:

```bash
sudo apt update
sudo apt upgrade
sudo apt install apache2
# os arquivos do projeto devem estar em /var/www/html
git clone https://github.com/Murilo-ZC/Avaliacao-P2-M7-2023-EC.git
sudo cp ./Avaliacao-P2-M7-2023-EC/frontend /var/www/html
```

Aqui pessoal, os arquivos já estaram disponíveis na porta 80, não necessário redirecionar.

> IMPORTANTE: Verificar as rotas e utilziar o seu próprio repositório com as modificações realizadas.
