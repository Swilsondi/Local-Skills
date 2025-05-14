# Previous styles.css

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:Arial, Helvetica, sans-serif;
}
html {
  scroll-behavior: smooth;
}

/* Reset margin and padding for the body and html */
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures consistent box model */
}

/* Reset and base styles */
body {
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #181818;
    color: #f5f5f5;
}

.navbar {
    background: #222;
    padding: 1rem 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav li {
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s;
}

.nav li:hover {
    color: #ff5252;
}

.hero-section {
    text-align: center;
    padding: 2rem 1rem 1rem 1rem;
    background: linear-gradient(90deg, #ff5252 0%, #ffc107 100%);
    color: #222;
}

.hero-section .effect-intro {
    color: #fff;
    font-weight: bold;
    background: #222;
    padding: 0.2em 0.5em;
    border-radius: 8px;
}

.main-content {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 1rem;
}

.form-section {
    background: #232323;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.2);
    padding: 2rem;
    margin-bottom: 2rem;
}

#skill-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-row {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.form-group {
    flex: 1 1 250px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

input, textarea, select {
    padding: 0.7em;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
    background: #333;
    color: #fff;
    margin-bottom: 0.5rem;
}

input[type="file"] {
    background: none;
    color: #fff;
    border: none;
    padding: 0;
}

.file-input-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

button, .submit-btn, .search {
    background: #ff5252;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.7em 1.5em;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, transform 0.2s;
    margin-top: 0.5rem;
}

button:hover, .submit-btn:hover, .search:hover {
    background: #ffc107;
    color: #222;
    transform: translateY(-2px) scale(1.04);
}

.search-section {
    background: #232323;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.2);
    padding: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
}

.search-section input[type="search"] {
    width: 60%;
    margin-right: 1rem;
}

.usercards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem 0;
}

.cards {
    background: #232323;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.2);
    padding: 1.5rem;
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow 0.2s, transform 0.2s;
}

.cards:hover {
    box-shadow: 0 4px 24px #ff5252aa;
    transform: translateY(-6px) scale(1.03);
}

.card-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #ff5252;
}

.cards h3 {
    margin: 0.5rem 0 0.2rem 0;
    color: #ffc107;
}

.cards p {
    margin: 0.2rem 0;
    text-align: center;
}

.tags {
    margin: 0.5rem 0;
}

.tags span {
    background: #ff5252;
    color: #fff;
    border-radius: 6px;
    padding: 0.2em 0.7em;
    margin-right: 0.3em;
    font-size: 0.9em;
}

.card-email {
    color: #ffc107;
    text-decoration: none;
    font-weight: bold;
}

.card-email:hover {
    text-decoration: underline;
}

@media (max-width: 800px) {
    .form-row {
        flex-direction: column;
        gap: 1rem;
    }
    .main-content {
        padding: 0.5rem;
    }
    .usercards {
        gap: 1rem;
    }
}
```