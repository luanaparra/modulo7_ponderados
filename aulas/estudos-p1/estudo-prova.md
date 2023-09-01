# DOCKER
1. docker login
2. na pasta de cada imagem que você deseja construir: docker build -t luanaparra/nome-da-sua-imagem:tag .
3. logo, em seguida para cada imagem: docker push luanaparra/nome-da-sua-imagem:tag
4. por fim, ao criar o dockerfile docker-compose.yml: docker-compose up

# APLICAÇÃO - backend (usando FastAPI)
1. cd na pasta principal
2. python -m venv nome da venv
3. venv\Scripts\activate
4. dentro do venv: pip install fastapi uvicorn[standard] sqlalchemy

# APLICAÇÃO - frontend (usando Next)
? usando bash mkdir!
1. npx create-next-app nome-do-seu-projeto
2. Após a criação do projeto, navegue até o diretório do seu projeto: cd nome-do-seu-projeto
3. Você pode iniciar o servidor de desenvolvimento com o seguinte comando: npm run dev e http://localhost:3000/
5. Quando você estiver pronto para implantar sua aplicação, você pode criar uma versão de produção usando o seguinte comando: npm run build

# ETL 
1. Extração (Extraction): Nesta fase, os dados são coletados de diversas fontes, que podem incluir bancos de dados, planilhas, arquivos CSV, APIs da web, logs, entre outros. A extração geralmente envolve a seleção de dados relevantes para a análise e a coleta de informações brutas das fontes de dados.
2. Transformação (Transformation): Após a extração, os dados brutos são transformados em um formato adequado para análise e carregamento. As etapas de transformação podem incluir limpeza de dados para remover duplicatas, valores ausentes ou inconsistentes, normalização de dados, conversão de tipos de dados, agregação, enriquecimento de dados com informações adicionais e aplicação de regras de negócios. A transformação é uma etapa crítica, pois garante que os dados estejam prontos para análises significativas e precisas.
3. Carga (Loading): A fase de carga envolve a inserção dos dados transformados em um repositório de destino, como um data warehouse, um banco de dados relacional ou um sistema de armazenamento de dados apropriado. Os dados são carregados em tabelas ou estruturas de dados no repositório de destino de acordo com um esquema pré-definido.
Dependendo dos requisitos de negócios, a carga de dados pode ser realizada de várias maneiras, como substituição total (truncate and reload) ou incremento (adicionar apenas novos dados ou atualizar registros existentes).

# JWT
1. Instale a biblioteca PyJWT para trabalhar com JWT no servidor back-end: pip install pyjwt
2. Crie uma rota para lidar com a autenticação e a geração de tokens JWT em seu aplicativo FastAPI. Isso pode ser feito em um arquivo como auth.py:
   from fastapi import FastAPI, Depends, HTTPException
``` python
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
import jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta
from typing import Optional

app = FastAPI()

# Configuração de autenticação
SECRET_KEY = "mysecretkey"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Simulação de um banco de dados de usuários (substitua com seu próprio armazenamento de usuários)
users_db = {}

class User(BaseModel):
    username: str

class UserInDB(User):
    hashed_password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class UserCreate(BaseModel):
    username: str
    password: str

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Funções de autenticação
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Rota de login
@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = users_db.get(form_data.username)
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Credenciais inválidas")
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": user.username}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}

# Rota protegida que requer autenticação
@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

# Função para obter o usuário atual autenticado
def get_current_active_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(status_code=401, detail="Não autenticado")
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except jwt.ExpiredSignatureError:
        raise credentials_exception
    except jwt.JWTError:
        raise credentials_exception
    return token_data
```
3. No lado do front-end, você deve criar um formulário de login e usar a biblioteca axios ou outra biblioteca de sua escolha para fazer solicitações HTTP para a rota /token no back-end para obter o token JWT quando o usuário fizer login. Armazene o token JWT em um cookie ou no armazenamento local do navegador para manter o usuário autenticado entre as sessões.
4. Para proteger rotas que requerem autenticação, você pode criar um componente de wrapper ou middleware no lado do front-end para verificar se o token JWT está presente e válido antes de permitir o acesso a essas rotas.
```
// Exemplo de função para verificar a autenticação
function requireAuthentication(Component) {
    return function AuthenticatedComponent(props) {
        const token = getTokenFromLocalStorage(); // Implemente essa função
        if (!token) {
            // Redirecionar ou exibir uma página de login
            return <LoginPage />;
        }
        // Renderizar o componente original com as props
        return <Component {...props} />;
    };
}
```
6. Use esse componente de wrapper/middleware para proteger as rotas que exigem autenticação.
```
import requireAuthentication from './requireAuthentication';

const ProtectedRoute = requireAuthentication(ProtectedComponent);

// Em suas rotas
<Route path="/minha-rota-protegida" component={ProtectedRoute} />;
```
# Fluxo do processo de autentificação utilizando JWT
O processo de autenticação utilizando JSON Web Tokens (JWT) envolve várias etapas que permitem que um usuário seja autenticado de maneira segura em um sistema ou aplicativo. Aqui está um fluxo típico do processo de autenticação usando JWT:

1. Registro do Usuário: O primeiro passo é o registro do usuário no sistema. O usuário fornece informações como nome de usuário, senha ou outras credenciais necessárias.
2. Autenticação do Usuário: Quando o usuário tenta fazer login, ele fornece suas credenciais (normalmente, nome de usuário e senha) ao sistema.
3. Validação das Credenciais: O sistema valida as credenciais do usuário. Isso envolve verificar se o nome de usuário existe no sistema e se a senha fornecida corresponde à senha armazenada (geralmente, a senha é armazenada de forma segura usando técnicas de hashing).
4. Criação do JWT (Token de Acesso): Se as credenciais do usuário forem válidas, o sistema cria um JWT. O JWT é composto por três partes: o cabeçalho (header), o payload (carga útil) e a assinatura (signature). O cabeçalho especifica o tipo de token e o algoritmo de assinatura usado. O payload contém informações sobre o usuário, como ID e papel (role). A assinatura é uma sequência criptograficamente segura que verifica a integridade do token.
5. Envio do JWT para o Cliente: O JWT é enviado de volta ao cliente (geralmente, como parte da resposta após a autenticação bem-sucedida). O cliente pode armazenar o JWT localmente, geralmente em um cookie ou em armazenamento local (localStorage ou sessionStorage) no navegador.
6. Envio do JWT em Solicitações Futuras: O cliente inclui o JWT em todas as solicitações subsequentes ao servidor. Isso é geralmente feito adicionando o token ao cabeçalho HTTP da solicitação, usando o cabeçalho Authorization com o valor "Bearer [token]".
7. Verificação do JWT no Servidor: O servidor recebe as solicitações do cliente e verifica o JWT incluído. Isso envolve a validação da assinatura para garantir que o token não foi adulterado.
8. Verificação de Permissões (Opcional): Além de verificar a autenticidade do JWT, o servidor pode verificar as permissões associadas ao usuário, com base nas informações contidas no token, para garantir que o usuário tenha acesso aos recursos solicitados.
9. Resposta da Solicitação: Se o JWT for válido e o usuário tiver as permissões necessárias, o servidor processará a solicitação e responderá ao cliente.
10. Expiração e Renovação (Opcional): Os JWTs geralmente têm uma data de expiração. O servidor pode implementar um mecanismo para permitir a renovação do token ou a reautenticação do usuário quando o token expirar.

# Bancos de dados relacionais e não relacionais:
Bancos de dados relacionais (RDBMS) e bancos de dados não relacionais (NoSQL) são dois tipos diferentes de sistemas de gerenciamento de banco de dados (DBMS) que são projetados para armazenar e recuperar dados de maneiras diferentes. Aqui estão noções gerais sobre cada um deles:

Banco de Dados Relacional (RDBMS):
1. Estrutura de Dados: Os bancos de dados relacionais usam uma estrutura de dados tabular, em que os dados são organizados em tabelas com linhas e colunas. Cada tabela tem um esquema predefinido que define os tipos de dados e as relações entre as tabelas.
2. Esquema Fixo: Os RDBMS têm esquemas de dados rígidos e predefinidos, o que significa que a estrutura das tabelas e a definição dos campos são definidas antes de inserir os dados. As mudanças no esquema podem ser complicadas.
3. Linguagem SQL: Os RDBMS usam a linguagem SQL (Structured Query Language) para consultar e manipular dados. SQL é uma linguagem declarativa que permite que os usuários descrevam o que desejam fazer com os dados, em vez de como fazê-lo.
4. Transações ACID: Os RDBMS são conhecidos por suportar transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade), garantindo que as operações de banco de dados sejam consistentes e confiáveis, mesmo em cenários de falha.
5. Escalabilidade Vertical: Tradicionalmente, os RDBMS têm sido escalados verticalmente, o que significa que o aumento de desempenho é alcançado por meio do uso de hardware mais poderoso.

Banco de Dados Não Relacional (NoSQL):
1. Estrutura Flexível: Os bancos de dados NoSQL permitem uma variedade de estruturas de dados, incluindo documentos, gráficos, pares chave-valor e colunas. Essa flexibilidade torna os NoSQL adequados para cenários onde os esquemas de dados são variáveis ou desconhecidos antecipadamente.
2. Esquema Dinâmico: Ao contrário dos RDBMS, os bancos de dados NoSQL não têm esquemas de dados rígidos, o que facilita a adição ou remoção de campos sem a necessidade de uma estrutura de migração complexa.
3. Modelo de Consulta Diferente: Os bancos de dados NoSQL usam uma variedade de modelos de consulta, incluindo consultas baseadas em chave, consultas baseadas em documentos e consultas baseadas em grafos. A linguagem de consulta pode variar dependendo do tipo de NoSQL utilizado.
4. Escalabilidade Horizontal: Os bancos de dados NoSQL são frequentemente escalados horizontalmente, o que significa que você pode adicionar mais servidores para aumentar o desempenho. Isso os torna adequados para cargas de trabalho distribuídas e escaláveis.
5. Consistência Flexível: Muitos bancos de dados NoSQL sacrificam a consistência forte em favor da disponibilidade e da tolerância a falhas (modelo CAP). Isso significa que eles podem ser consistentes eventualmente, mas não necessariamente em tempo real.

