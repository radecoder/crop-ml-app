from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS  # <-- for cross-origin requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load trained model
model = joblib.load('crop_app.pkl')  # Ensure this file exists in the backend folder

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        required_fields = ["Nitrogen", "Phosphorus", "Potassium", "Temperature", "Humidity", "Rainfall", "Ph"]

        # Check for missing values
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing input fields"}), 400

        # Parse input
        values = [
            float(data['Nitrogen']),
            float(data['Phosphorus']),
            float(data['Potassium']),
            float(data['Temperature']),
            float(data['Humidity']),
            float(data['Rainfall']),
            float(data['Ph'])
        ]

        # Validate inputs
        if not (0 < values[6] <= 14 and values[3] < 100 and values[4] > 0):
            return jsonify({"error": "Invalid input values"}), 400

        feature_names = ["N", "P", "K", "temperature", "humidity", "rainfall", "ph"]
        df = pd.DataFrame([values], columns=feature_names)

        prediction = model.predict(df)[0]

        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
