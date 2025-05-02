import React, { useState } from 'react';

const CropForm = () => {
  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosphorus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    Rainfall: '',
    Ph: ''
  });

  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (data.prediction) {
      setPrediction(data.prediction);
    } else {
      setPrediction(data.error || 'Something went wrong');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crop Recommendation</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {['Nitrogen', 'Phosphorus', 'Potassium', 'Temperature', 'Humidity', 'Rainfall', 'Ph'].map(field => (
          <input
            key={field}
            name={field}
            type="number"
            value={formData[field]}
            onChange={handleChange}
            placeholder={field}
            className="border p-2 rounded"
            required
          />
        ))}
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Predict Crop</button>
      </form>

      {prediction && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <h3 className="text-lg font-semibold">Recommended Crop:</h3>
          <p className="text-green-700">{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default CropForm;
  