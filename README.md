# First Solo Build

## **LOCALSKILLS — MASTER PROJECT OVERVIEW**

### **PROJECT GOAL**

Build a web app that:

- Displays a searchable list of local talent/services (from a fake database)
- Allows users to submit their own services via a form
- Filters/searches user listings by name, skill, or tags

---

## **CORE COMPONENTS**

### **1. Fake Database (`users.js`)**

- Simulates backend data
- Contains an array of user objects like:
    - `name`
    - `skill`
    - `bio`
    - `tags` (array)
    - `contact`
    - `image`
- Will be imported into your main logic (`app.js`) to populate the site

### **2. Directory View**

- On load, shows all users from the fake DB
- Loops through `users` array and renders each user as a card
- If user submits a new listing, it gets added here (live or after refresh)

### **3. Add Service Form**

- User fills out form to list their service
- Captures data and pushes it into the user array (or persists to localStorage later)
- Clears form and updates directory after submission
- Basic input validation (e.g. can’t submit blank name)

### **4. Search & Filter**

- Text input field captures user queries
- As user types, filter the displayed cards based on:
    - Match in `name`
    - Match in `skill`
    - Match in `tags`
- Uses `.filter()` + `.includes()` logic, case-insensitive

---

## **DATA FLOW LOGIC**

1. **Initial State**:
    
    Load and render all users from `users.js`.
    
2. **User Submits a Form**:
    
    Form data becomes a new user object. You:
    
    - Push it into the `users` array
    - Re-render directory
    - Optionally persist it (bonus: `localStorage`)
3. **User Searches**:
    
    JS listens for input events and:
    
    - Filters the `users` array based on the query
    - Replaces the visible list of cards with the matching results
4. **Error Handling** (as you grow):
    - Handle missing inputs
    - Prevent duplicates
    - Possibly warn if no results are found

---

## **FOLDER STRUCTURE**

```
wasm
CopyEdit
local-skills/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── app.js
├── data/
│   └── users.js
├── assets/
│   └── images/
└── README.md

```

---

## **STRATEGIC REMINDERS FOR YOU**

- **Think first, code second** — logic wins.
- **Use console.log everywhere** to trace state.
- **Write clear comments** to describe each part you build.
- **When it breaks, slow down**: What changed? What’s undefined? What should be happening?
- **Use bugs as fuel** — don’t let them steal momentum.
- **Come back here** when you're confused about the big picture.
