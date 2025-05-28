// Global variables
let teamStats = {};
let allMatchData = [];
let currentHomeTeam = '';
let currentAwayTeam = '';

const teamLogos = {
    'Arsenal': 'assets/images/arsenal.png',
    'Chelsea': 'assets/images/chelsea.png',
    'Liverpool': 'assets/images/liverpool.png',
    'Manchester City': 'assets/images/mancity.png',
    'Manchester United': 'assets/images/manutd.png',
    'Tottenham': 'assets/images/tottenham.png'
};

// Initialize the application
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Dashboard initialized');
    showTab('upload');
});

// Add all your JavaScript functions from the original <script> tag here
// ... (copy the rest of your JavaScript) ...
