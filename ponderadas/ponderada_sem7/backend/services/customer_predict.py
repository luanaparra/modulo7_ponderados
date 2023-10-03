import pandas as pd
import json
import pickle

modelo = pickle.load(open('services/random_forest_regression_model', 'rb'))

with open('services/input.json', 'r') as arquivo_json:
    dados = json.load(arquivo_json)

df = pd.DataFrame([dados])

previsoes = modelo.predict(df)

with open('services/exit.txt', 'w') as arquivo_saida:
    arquivo_saida.write(str(previsoes[0]))
