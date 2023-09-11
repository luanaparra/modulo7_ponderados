from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pickle
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from fastapi.responses import FileResponse

# carregamento do modelo de regressão treinado
model_filename = 'random_forest_regression_model.pkl'
with open(model_filename, 'rb') as file:
    model = pickle.load(file)

# criação de uma aplicação FastAPI
app = FastAPI()

# criação de um modelo Pydantic para entrada de requisição
class Item(BaseModel):
    gender: str
    age: int  
    annual_income: int 

# função para pré-processar os dados de entrada
def preprocess_input(item: Item):
    try:
        if item.gender.lower() not in ['male', 'female']:
            raise HTTPException(status_code=400, detail="O valor 'gender' deve ser 'male' ou 'female'.")
        if not (12 <= item.age <= 100):
            raise HTTPException(status_code=400, detail="A idade deve estar entre 12 e 100 anos.")
        data = pd.DataFrame([item.dict()])
        data['Gender_Male'] = 1 if item.gender.lower() == 'male' else 0
        data['Gender_Female'] = 1 if item.gender.lower() == 'female' else 0
        data.drop(columns=['gender'], inplace=True)
        scaler = MinMaxScaler()
        data[['Age', 'Income']] = scaler.fit_transform(data[['age', 'annual_income']])
        data = data[['Age', 'Income', 'Gender_Female', 'Gender_Male']]
        return data
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# rota de previsão
@app.post("/predict/")
async def predict(item: Item):
    try:
        data = preprocess_input(item)
        predictions = model.predict(data)
        prediction = predictions[0]
        
        return {"prediction": prediction}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
# servir o app.html quando a URL for acessada
@app.get("/", response_class=FileResponse)
async def serve_app():
    return "app.html" 