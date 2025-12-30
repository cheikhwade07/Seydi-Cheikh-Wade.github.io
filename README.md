# Seydi Cheikh Wade - Software Engineer Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Software Engineering student at Carleton University.

## 🌟 Features

- **Dynamic GitHub Integration**: Automatically fetches and displays repositories from GitHub API
- **Responsive Design**: Built with mobile-first approach, works on all devices
- **Interactive UI**: Smooth scrolling, parallax effects, and animated transitions
- **Featured Projects**: Highlighted showcase of key projects with detailed descriptions
- **Skills Section**: Comprehensive display of programming languages and technologies
- **Contact Information**: Easy access to email, phone, and social media links

## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with SASS preprocessing
- **JavaScript** - Dynamic content and GitHub API integration
- **jQuery** - DOM manipulation and scroll effects
- **Font Awesome** - Icon library

### APIs & Services
- **GitHub API** - Dynamic project fetching
- **Spotify API** - (Featured in projects)
- **YouTube API** - (Featured in projects)

### Design Template
- **Massively** by HTML5 UP (CC 3.0 License)

## 📋 Project Structure

```
projectweb/
├── index.html              # Main portfolio page
├── generic.html            # Generic page template
├── elements.html           # UI elements showcase
├── assets/
│   ├── css/               # Compiled stylesheets
│   ├── js/                # JavaScript files
│   │   └── github-projects.js  # GitHub API integration
│   ├── sass/              # Source SASS files
│   └── webfonts/          # Font Awesome fonts
├── images/                # Project images and assets
└── README.md              # This file
```

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cheikhwade07/projectweb.git
   cd projectweb
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Customize GitHub Integration** (Optional)
   - Edit `assets/js/github-projects.js` to change:
     - GitHub username (line 9)
     - Excluded repositories (line 10)
     - Maximum number of projects displayed (line 11)

## 📱 Key Sections

### About Me
Introduction and background information about my journey in software development.

### Education
Details about my Bachelor of Engineering in Software Engineering program at Carleton University.

### Technical Skills
- **Programming Languages**: C/C++, Python, Java, JavaScript
- **Technologies & Tools**: Git & GitHub, APIs, Data Structures & Algorithms, Memory Management
- **Areas of Interest**: Software Development, API Integration, System Design, Problem Solving

### Featured Projects

#### Spotify Playlist Downloader
A Python script that downloads Spotify playlists by integrating with Spotify and YouTube APIs.
- **Technologies**: Python, Spotipy API, PyTube API
- **Repository**: [Spotify_playlist_downloader](https://github.com/cheikhwade07/Spotify_playlist_downloader)

#### Text-Based Facebook in C
A command-line social media simulation demonstrating advanced C programming concepts.
- **Technologies**: C, Data Structures, Memory Management
- **Repository**: [Text-Based-Facebook](https://github.com/cheikhwade07/Text-Based-Facebook)

### Dynamic GitHub Projects
Automatically displays additional projects from GitHub repositories, excluding featured and archived projects.

## 🔧 Customization

### Updating Personal Information
Edit `index.html` to update:
- Name and title
- About section
- Education details
- Contact information
- Social media links

### Modifying Styling
- Edit SASS files in `assets/sass/` directory
- Recompile to CSS (or edit `assets/css/main.css` directly)

### Adding New Projects
Projects can be added in two ways:
1. **Featured Projects**: Manually add to the Projects section in `index.html`
2. **Dynamic Projects**: Automatically pulled from GitHub (configured in `github-projects.js`)

## 📄 License

This project uses the **Massively** template from HTML5 UP, which is free for personal and commercial use under the [CCA 3.0 license](https://html5up.net/license).

## 👤 Author

**Seydi Cheikh Wade**
- Software Engineering Student at Carleton University
- GitHub: [@cheikhwade07](https://github.com/cheikhwade07)
- LinkedIn: [Seydi Cheikh Wade](https://www.linkedin.com/in/seydi-cheikh-wade-4a3288328/)

## 📞 Contact

- **Email**: [seydicheikhwade@gmail.com](mailto:seydicheikhwade@gmail.com)
- **Phone**: [(514) 431-3541](tel:+15144313541)
- **Location**: Ottawa, Ontario, Canada

## 🙏 Acknowledgments

- **HTML5 UP** for the Massively template design
- **Font Awesome** for the icon library
- **jQuery** and plugin authors for smooth interactions
- **GitHub** for API access and hosting

---

**Note**: This portfolio is continuously updated as I work on new projects and gain more experience in software development.

