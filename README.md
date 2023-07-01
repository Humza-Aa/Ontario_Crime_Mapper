<h1 align="center">Ontario Crime Mapper</h1>

<p align="center">
  <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Logo.png" alt="Project Logo" width="200">
</p>

CrimeVue is a powerful web application that enables users to visualize and analyze real-time crime data. By scraping crime-related information from Twitter, the app provides an interactive map interface where users can explore crime incidents, access detailed crime information, and contribute to community safety efforts.

## Directory Structure

- `Ontario-Crime-Mapper-Frontend/ocmf`: Contains the frontend codebase for the Crime Mapper application built with Next.js.
- `Ontario-Crime-Mapper-Backend`: Contains the backend codebase for the Crime Mapper application built with Node.js and Express.
- `Twitter_Scraper`: Contains the Python scraper code used to collect real-time crime data from Twitter.

## Tech Stack

- Frontend: Next.js
- Backend: Node.js, Express
- Database: MongoDB
- Scraper: Python

## Features

- **Real-time Crime Data**: Utilizes web scraping techniques to gather up-to-date crime data from Twitter, ensuring the accuracy and relevance of information.
- **Interactive Map Interface**: Displays crime incidents on a user-friendly map, allowing users to navigate and explore crime hotspots and patterns.
- **Custom Marker Icons**: Uses unique icons to represent different types of crimes, providing visual cues for easier interpretation and understanding.
- **Detailed Crime Information**: Allows users to click on map markers to view comprehensive details about each crime incident, including location, date, time, and description.
- **Community Chat** (Coming Soon): Facilitates user interactions and knowledge sharing through a chat feature, enabling users to connect, share safety tips, and discuss crime-related concerns.
- **Crime Reporting** (Coming Soon): Empowers users to report crimes directly through the app, contributing to crime prevention efforts and assisting law enforcement agencies.

## Markers on the Map

Crime Mapper utilizes different markers on the map to represent various types of crimes. Each marker is associated with a unique image icon, making it easy for users to identify the crime category at a glance. Here are the marker categories and their respective images:

- **Car Jacking** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Car_Jacking.svg" alt="Car Jacking Icon" width="24" style="fill: white">
- **Collision** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Collision.svg" alt="Collision Icon" width="24" style="fill: white">
- **Crowd Control** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Crowd_Control.svg" alt="Crowd Control Icon" width="24" style="fill: white">
- **Elopee** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Elopee.svg" alt="Elopee Icon" width="24" style="fill: white">
- **Fire** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Fire.svg" alt="Fire Icon" width="24" style="fill: white">
- **Firearm Discharge** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Firearm_Discharge.svg" alt="Firearm Discharge Icon" width="24" style="fill: white">
- **Hazard** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Hazard.svg" alt="Hazard Icon" width="24" style="fill: white">
- **Industrial Accident** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Industrial_Accident.svg" alt="Industrial Accident Icon" width="24" style="fill: white">
- **Media Advisory** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Media_Advisory.svg" alt="Media Advisory Icon" width="24" style="fill: white">
- **Person Missing** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Person_Missing.svg" alt="Person Missing Icon" width="24" style="fill: white">
- **Person With a Gun** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Person_With_A_Gun.svg" alt="Person With a Gun Icon" width="24" style="fill: white">
- **Road Closures** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Road_Closures.svg" alt="Other Icon" width="24" style="fill: white">
- **Shooting** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Shooting.svg" alt="Other Icon" width="24" style="fill: white">
- **Sound Of Gunshots** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Sound_Of_GunShot.svg" alt="Other Icon" width="24" style="fill: white">
- **Sudden Death** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Sudden_Death.svg" alt="Other Icon" width="24" style="fill: white">
- **Suspicious Incident** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Suspicious_Incident.svg" alt="Other Icon" width="24" style="fill: white">
- **Unknown Trouble** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Unknown_Trouble.svg" alt="Other Icon" width="24" style="fill: white">
- **Unknown** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Unknown.svg" alt="Other Icon" width="24" style="fill: white">
- **Updates** <img src="/Ontario-Crime-Mapper-Frontend/ocmf/public/Icon_Images/ReadMe/Update.svg" alt="Other Icon" width="24" style="fill: white">

## Installation

1. Clone the repository:

git clone https://github.com/Humza-Aa/Ontario_Crime-Mapper.git

2. Navigate to the frontend directory:

cd Ontario-Crime-Mapper-Frontend/ocmf

3. Install the frontend dependencies:

npm install

4. Start the frontend server:

npm run dev

5. Open your web browser and visit `http://localhost:3000` to access the Crime Mapper frontend.

6. For the backend, navigate to the backend directory:

cd Ontario-Crime-Mapper-Backend

7. Install the backend dependencies:

npm install

8. Create a `.env` file in the `Ontario-Crime-Mapper-Backend` directory and provide the following environment variables:

PORT=3001
MONGODB_LINK=your-mongodb-connection-string
MONGODB_USER=your-mongodb-username
MONGODB_PASS=your-mongodb-password
TOKENPASSWORD=your-access-token-password
REFRESHTOKENPASSWORD=your-refresh-token-password

9. Start the backend server:

npm start

10. For the Python scraper, navigate to the scraper directory:

cd Twitter_Scraper

11. Set up a Python virtual environment (recommended):

python -m venv venv
source venv/bin/activate

12. Install the Python dependencies:

pip install -r requirements.txt

13. Create a `.env` file in the `Twitter_Scraper` directory and provide the following environment variables:

MONGODB_USER=your-mongodb-username
MONGODB_PASS=your-mongodb-password
TW_USERNAME=your-twitter-username
TW_PASSWORD=your-twitter-password  

Please note that you need to use the same MongoDB cluster credentials (`MONGODB_USER` and `MONGODB_PASS`) for both the backend and the Twitter scraper.

14. Run the scraper:

python scraper.py

## Contributing

Contributions are welcome! If you'd like to contribute to Crime Mapper, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request, clearly describing the changes you've made.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please contact [humzaaamir31@gmail.com](mailto:humzaaamir31@gmail.com).



