FROM node:14
FROM python:3.8-slim

WORKDIR /app

COPY package*.json ./

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]