# Avaliacoes-M7-Inteli
Avaliações do Módulo 7

Para executar o backend:

```bash
python main.py
```

Para executar o frontend:

```bash
node server.js
```

| ***IMPORTANTE:*** Utilizar dentro do contexto do container.

# Comentários da atividade da P1:

A utilização do Docker permite a criação dos containers que fizeram a 'junção' de todas dependências do sistema de maneira otimizada, permitindo que outras máquinas possam executar sem problemas e com maior facilidade. 

Dessa maneira, nessa aplicação foram criadas duas imagens: sendo um dockerfile para o backend e outro dockerfile para o frontend:
- Backend: https://hub.docker.com/repository/docker/luanaparra/backend-p1/general
- Frontend: https://hub.docker.com/repository/docker/luanaparra/frontend-p1/general
Tais imagens foram construidas com os seguintes comandos: `docker build -t luanaparra/nome-da-imagem:tag .` e `docker push luanaparra/nome-da-sua-imagem:tag`

Por fim, para não utilizar o docker run, foi criado um docker-compose.yml, que excuta as duas imagens de maneira mais eficiente. Sendo assim, é só rodar o comando `docker-compose up` para as imagens serem baixadas e os containers buildados. 
