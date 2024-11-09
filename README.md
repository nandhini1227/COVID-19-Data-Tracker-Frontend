COVID-19 Data Tracker

          A web application that aggregates and visualizes COVID-19 data using external APIs. The application features graphical data representations and an interactive map for users to gain insights into the COVID-19 situation globally and historically.

 Features

- Displays real-time COVID-19 data using public APIs.
- Visualizes historical data using line charts.
- Interactive map showing COVID-19 cases by country.
- Fetches and displays both global and local COVID-19 statistics.

 Tech Stack

- **Frontend**: React, Chart.js, Axios, Leaflet
- **Backend**: Node.js, Express, Axios, CORS
- **Data Source**: [Disease.sh API](https://disease.sh/)

 Getting Started

Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

 Setup

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/covid-data-tracker.git

Navigate to the backend directory:

        cd covid-data-tracker/backend

Install backend dependencies:

         npm install

Create your .env file:

Create a .env file in the backend directory and add the following:

# .env
PORT=5000
# Add any API keys if needed
COVID_API_KEY=your_api_key_here # not necessary for this project

Start the backend server:

     node server.js

Navigate to the frontend directory:

      cd ../frontend

Install frontend dependencies:

       npm install

Start the React application:

        npm start

Your application should now be running on http://localhost:3000.

Usage

Once the application is running, you can:

View real-time COVID-19 statistics globally and by country.
Analyze historical data through graphs.
Use the interactive map to visualize the spread of COVID-19 cases by geography.

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

Fork the project.
Create a feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements

Disease.sh for providing the COVID-19 data APIs.
Inspiration from various open-source projects.
