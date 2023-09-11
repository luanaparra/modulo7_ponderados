from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pycaret.regression import load_model, predict_model
import pandas as pd
from fastapi import  HTTPException

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=["POST"],
    allow_headers=["*"],
)

@app.post("/predict/")
async def get_prediction(query):
    print(query)

# def data_validation(data: dict):

def predict(data: dict):
    df = pd.DataFrame([data])