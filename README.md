# AI Trip Advisor

This repository contains the code for an AI-driven Trip Advisor, which generates customized trips with hotel recommendations and itineraries based on user budgets and travel preferences. Due to the use of Google Maps Places (NEW), Photos, and Geolocation APIs, this project has a restriction of staying under an expenditure of $200 monthly, hence no deployed link is provided.

## Features

- **Personalized Trips**: Generate trips tailored to your budget and travel choices.
- **Hotel Recommendations**: Get hotel suggestions that fit your itinerary.
- **Dynamic Itineraries**: Itineraries are created based on user preferences and budgets.



## Getting Started

To run this project on your machine, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/WanderWise.git
    cd ai-trip-planner
    ```

2. **Create a `.env.local` file in the root folder**:
    ```plaintext
    VITE_GOOGLE_PLACE_API_KEY=your_google_place_api_key
    VITE_GOOGLE_GEMINI_AI_API_KEY=your_google_gemini_ai_api_key
    VITE_GOOGLE_AUTH_KEY=your_google_auth_client_id
    
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm run dev
    ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

