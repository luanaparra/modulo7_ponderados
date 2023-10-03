import streamlit as st
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import requests

def get_customer_insights(age, annual_income, spending_score):
    jwt_token = st.session_state.jwt_token

    data = {
        "age": int(age),
        "annual_income": int(annual_income),
        "spending_score": int(spending_score)
    }

    headers = {"Authorization": f"Bearer {jwt_token}"}

    response = requests.post("http://34.202.217.57:5000/api/customer/insights", json=data, headers=headers)
    response_json = response.json()

    if response.status_code == 200:
        return response_json
    elif response_json['error']['message'] == 'jwt expired':
        st.session_state.logged_in = False
        st.rerun()
    else:
        st.error("Request failed. Please try again.")

# Login Page
def login_page():
    st.title("Login Page")
    email = st.text_input("Email")
    password = st.text_input("Password", type="password")
    login_button = st.button("Login")

    if login_button:
        response = requests.post("http://34.202.217.57:5000/api/users/login", json={"email": email, "password": password})

        if response.status_code == 200:
            jwt_token = response.json()["token"]
            st.session_state.jwt_token = jwt_token
            st.success("Login successful!")
            st.session_state.logged_in = True
            st.rerun()
        else:
            st.error("Login failed. Please try again.")

    st.title("Create new user")
    username = st.text_input("register_username")
    email = st.text_input("register_email")
    password = st.text_input("register_password", type="password")
    confirm_password = st.text_input("confirm_password", type="password")
    register_button = st.button("Register")

    if register_button:
        if password != confirm_password:
            st.error("Passwords do not match. Please try again.")
        else:
            response = requests.post("http://34.202.217.57:5000/api/users/", json={"email": email, "password": password, "name": username})

            if response.status_code == 201:
                st.success("Registration successful! You can now log in.")
                st.rerun()
            else:
                st.error("Registration failed. Please try again.")

if "logged_in" not in st.session_state:
    st.session_state.logged_in = False

if st.session_state.logged_in:
    st.title("Customer Insights")
    st.sidebar.title("Navigation")
    page = st.sidebar.selectbox("Select a page:", ["Get Insights"])

    if page == "Get Insights":
        # Input Form
        st.subheader("Enter Customer Information:")
        age = st.number_input("Age", min_value=0)
        annual_income = st.number_input("Annual Income")
        spending_score = st.number_input("Spending Score")

        if st.button("Get Insights"):
            # Make a request for customer insights to the server
            insights = get_customer_insights(age, annual_income, spending_score)

            if insights is not None:
                st.success("Customer Insights:")
                st.write(insights)
            else:
                st.error("Request failed. Please try again.")

else:
    login_page()
