# Contact API - Flask Backend

This is a Flask API for handling contact form submissions from your React frontend.

## Setup Instructions

### 1. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run the Flask Application
```bash
python app.py
```

The API will be available at: `http://localhost:5000`

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
    "first_name": "John",
    "last_name": "Doe", 
    "email": "john@example.com",
    "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
    "success": true,
    "message": "Contact message submitted successfully!",
    "data": {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john@example.com", 
        "message": "Hello, I'm interested in your services.",
        "created_at": "2024-01-01T12:00:00"
    }
}
```

### GET /api/contact
Retrieve all contact messages.

### GET /api/health
Health check endpoint.

## Database

The application uses SQLite database (`contact_messages.db`) to store contact messages.

## Features

- ✅ Form validation
- ✅ Email validation
- ✅ CORS enabled for React frontend
- ✅ Error handling
- ✅ SQLite database storage
- ✅ RESTful API design
