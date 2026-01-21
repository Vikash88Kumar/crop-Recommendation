# 🌾 Crop Recommendation System

A comprehensive web application that provides intelligent crop recommendations based on soil properties, climate conditions, and geographical data. The system combines machine learning predictions with real-world soil data to help farmers make data-driven agricultural decisions.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Features Breakdown](#features-breakdown)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## ✨ Features

### Core Functionality
- 🤖 **AI-Powered Crop Recommendations**: Machine learning model predicts suitable crops based on environmental parameters
- 🗺️ **Location-Based Soil Analysis**: Integrates with SoilGrids API to fetch real-time soil properties (nitrogen, phosphorus, potassium, pH)
- 📊 **Interactive Recommendations**: Display 10+ crop options with detailed information (yield, profitability, water needs, duration)
- 🌍 **Multi-language Support**: i18n integration for internationalization
- 📱 **Responsive UI**: Fully responsive design with Tailwind CSS
- 💾 **User Authentication**: JWT-based authentication for secure access
- 📈 **Advanced Analytics**: Detailed crop performance metrics and comparisons
- 🔄 **Real-time Updates**: Hot Module Replacement (HMR) for seamless development

### Technical Features
- RESTful API with Express.js
- MongoDB for data persistence
- Axios for HTTP requests with interceptors
- Redux Toolkit for state management
- Interactive image carousel and animations
- PDF export capabilities (html2canvas + jsPDF)
- News feed integration
- Government schemes display

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **Vite 7** | Build tool & dev server |
| **Redux Toolkit** | State management |
| **Tailwind CSS** | Styling |
| **Axios** | HTTP client |
| **i18next** | Internationalization |
| **Lucide React** | Icons |
| **Framer Motion** | Animations |
| **React Slick** | Carousel component |
| **html2canvas + jsPDF** | PDF export |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Express.js 5** | Web framework |
| **Node.js** | Runtime environment |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Authentication |
| **Bcrypt** | Password hashing |
| **CORS** | Cross-origin requests |
| **Nodemon** | Development auto-reload |

### ML & Data
| Tool | Purpose |
|------|---------|
| **FastAPI** | Python ML API server |
| **Scikit-learn** | Machine learning library |
| **Pandas** | Data processing |
| **NumPy** | Numerical computations |

### External APIs
- **SoilGrids API**: Soil property data at specified coordinates

---

## 📁 Project Structure

```
crop-Recommendation/
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── CropRecommendation.jsx    # Main recommendation UI
│   │   │   ├── Header/          # Navigation header
│   │   │   ├── Footer/          # Footer section
│   │   │   ├── Home/            # Home page
│   │   │   ├── About/           # About page
│   │   │   ├── News.jsx         # News feed
│   │   │   ├── Schemes/         # Government schemes
│   │   │   ├── Github/          # Github chatbot
│   │   │   ├── imageslider/     # Image carousel
│   │   │   └── register/        # Auth pages (Login/Signup)
│   │   ├── pages/               # Page components
│   │   ├── services/            # API services
│   │   │   └── authService.js   # Auth API calls
│   │   ├── contextApi/          # Redux slices & store
│   │   │   ├── authSlice.js
│   │   │   └── store.js
│   │   ├── assets/              # Images & static files
│   │   ├── main.jsx             # React entry point
│   │   ├── App.jsx              # Root component
│   │   ├── Layout.jsx           # Layout wrapper
│   │   ├── axios.js             # Axios configuration
│   │   └── i18n.js              # i18n configuration
│   ├── index.html               # HTML template
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Tailwind configuration
│   ├── postcss.config.js        # PostCSS configuration
│   ├── eslint.config.js         # ESLint configuration
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controller/          # Request handlers
│   │   │   └── user.controller.js
│   │   ├── models/              # MongoDB schemas
│   │   │   └── user.models.js
│   │   ├── routes/              # API routes
│   │   │   ├── user.routes.js
│   │   │   └── soilgrids.routes.js
│   │   ├── middlewares/         # Express middleware
│   │   │   └── auth.middleware.js
│   │   ├── db/                  # Database connection
│   │   │   └── index.js
│   │   ├── utils/               # Utility functions
│   │   │   ├── apiError.js
│   │   │   ├── apiResponse.js
│   │   │   └── asyncHandler.js
│   │   ├── constants.js         # Constants
│   │   ├── app.js               # Express app setup
│   │   └── index.js             # Server entry point
│   ├── fastApi/                 # Python ML API
│   │   ├── app.py               # FastAPI application
│   │   ├── model.py             # ML model logic
│   │   ├── code.ipynb           # Jupyter notebook
│   │   ├── model.joblib         # Trained ML model
│   │   ├── requirements.txt     # Python dependencies
│   │   └── *.csv                # Training data
│   ├── soilprop/                # Soil property scripts
│   │   ├── app.py
│   │   └── requirement.txt
│   ├── .env                     # Environment variables
│   └── package.json
│
├── public/                      # Static assets
└── README.md                    # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** v16+ and npm v8+
- **Python** 3.8+ (for ML API)
- **MongoDB** (optional for development)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/Vikash88Kumar/crop-Recommendation.git
cd crop-Recommendation
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 4: Create Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# MongoDB Configuration
MONGODB_URL=mongodb://localhost:27017

# Server Configuration
PORT=8000
NODE_ENV=development

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_in_production

# Optional: API Keys and configurations
SOILGRIDS_API_TIMEOUT=7000
```

### Step 5: Install Python Dependencies (Optional - for ML API)

```bash
cd backend/fastApi
python -m venv .venv

# Windows
.\.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt
```

---

## 🎯 Running the Application

### Option 1: Run Both Servers Simultaneously

**Terminal 1 - Frontend:**
```bash
npm run dev
```
Frontend will be available at: `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```
Backend will be available at: `http://localhost:8000`

**Terminal 3 - FastAPI (ML Server):**
```bash
cd backend/fastApi
uvicorn app:app --reload --port 8001
```
ML API will be available at: `http://localhost:8001`

### Option 2: Production Build

**Frontend:**
```bash
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
NODE_ENV=production node src/index.js
```

---

## 📡 API Documentation

### Frontend API Routes

#### Authentication Endpoints

**POST** `/api/v1/user/register`
- Register a new user
- Body: `{ email, password, fullName }`
- Response: `{ success, user, token }`

**POST** `/api/v1/user/login`
- Login existing user
- Body: `{ email, password }`
- Response: `{ success, user, token }`

**POST** `/api/v1/user/logout`
- Logout current user
- Response: `{ success, message }`

#### SoilGrids Endpoints

**GET** `/api/v1/soilgrids?lat=<latitude>&lon=<longitude>`
- Fetch soil properties for coordinates
- Query Parameters: `lat` (float), `lon` (float)
- Response: 
```json
{
  "nitrogen": 45.2,
  "phosphorus": 12.5,
  "potassium": 180,
  "ph": 6.5,
  "temperature": 24,
  "humidity": 75,
  "rainfall": 850
}
```

### FastAPI ML Server Routes

**GET** `/health`
- Health check endpoint
- Response: `{ status: "ok" }`

**POST** `/predict`
- Get crop predictions
- Body:
```json
{
  "nitrogen": 90,
  "phosphorus": 42,
  "potassium": 43,
  "temperature": 23.5,
  "humidity": 82.0,
  "ph": 6.5,
  "rainfall": 202.9
}
```
- Response:
```json
{
  "predicted_crop": "rice",
  "confidence": 0.92,
  "alternatives": [
    { "crop": "wheat", "probability": 0.05 },
    { "crop": "maize", "probability": 0.03 }
  ]
}
```

**POST** `/train`
- Trigger model training on CSV data
- Response: `{ message: "Training completed", accuracy: 0.88 }`

**GET** `/model`
- Get model metadata and label mappings
- Response: `{ model_type, trained_date, crop_labels: [...] }`

---

## 🎨 Features Breakdown

### Crop Recommendation Engine
The core recommendation system analyzes:
- **Soil Properties**: NPK levels, pH, organic matter
- **Climate Data**: Temperature, humidity, rainfall
- **Location**: Coordinates for region-specific recommendations
- **Crop Database**: 40+ crop varieties with characteristics

### User Authentication
- JWT-based token authentication
- Password hashing with bcrypt
- Persistent sessions with MongoDB
- Secure cookie storage

### Soil Analysis Integration
- Real-time data from SoilGrids API
- 10-minute caching for performance
- Automatic fallback to defaults
- Geographic data extraction

### Data Visualization
- Interactive crop cards with ratings
- Responsive grid layout
- Animated transitions
- Image sliders

### Internationalization
- Support for multiple languages
- Language detection
- Dynamic text translation
- RTL support ready

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)
```javascript
- React Fast Refresh enabled
- API proxy to backend (port 8000)
- Development server runs on port 5173
```

### Tailwind CSS
- Custom color schemes
- Responsive breakpoints
- Dark mode support (can be enabled)
- Component utilities

### Environment Management
- Development: `.env` in backend folder
- Production: Set environment variables directly
- Sensitive data never committed to git

---

## 🐛 Troubleshooting

### Common Issues

**1. Connection Refused on localhost:5173 or :8000**
```bash
# Check if ports are in use
# Windows
netstat -ano | findstr ":5173"
netstat -ano | findstr ":8000"

# Kill process on port (Windows)
taskkill /PID <PID> /F

# Restart servers
```

**2. MongoDB Connection Failed**
```bash
# Install MongoDB or use local instance
# Or use MongoDB Atlas cloud service
# Update MONGODB_URL in .env
```

**3. API CORS Errors**
```bash
# Ensure backend CORS is configured for frontend origin
# In backend/src/app.js:
# origin: "http://localhost:5173" (for development)
```

**4. Module Not Found Errors**
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

**5. Python Dependencies Issues**
```bash
# Recreate virtual environment
python -m venv .venv
.venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

---

## 📦 Build & Deployment

### Frontend Build
```bash
npm run build          # Creates dist/ folder
npm run preview        # Preview production build locally
```

### Backend Deployment
```bash
# Set production environment
set NODE_ENV=production

# Start server
npm start
```

### Docker (Optional)
Create `Dockerfile` for containerization:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📄 License

This project is open source. Feel free to use and modify as needed.

---

## 👨‍💻 Author

**Vikash88Kumar**

- GitHub: [@Vikash88Kumar](https://github.com/Vikash88Kumar)
- Project: [Crop Recommendation](https://github.com/Vikash88Kumar/crop-Recommendation)

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact the development team
- Check existing documentation

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

**Last Updated**: January 2026  
**Status**: Active Development
