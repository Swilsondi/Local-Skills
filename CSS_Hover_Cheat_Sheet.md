
# 🎯 CSS Hover Cheat Sheet (For LocalSkills and Beyond)

## 🔹 Basic Hover Syntax
```css
selector:hover {
  /* styles go here */
}
```
> Applies the styles **only when the user hovers** over the element.

---

## 🧭 Navbar Hover Example
```css
.nav li:hover {
  color: red;
  border-bottom: 2px solid red;
  cursor: pointer;
}
```
- Makes nav items red and underlined on hover  
- Adds pointer cursor for interactivity

---

## 🔘 Button Hover (Grow + Glow)
```css
button:hover {
  background-color: red;
  color: white;
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}
```
- Makes button slightly bigger when hovered  
- Smooth transition and color inversion

---

## 🗂️ Card Hover (Lift Up + Shadow)
```css
.cards:hover {
  box-shadow: 0 8px 20px rgba(255, 0, 0, 0.3);
  transform: translateY(-5px);
  transition: 0.3s ease;
}
```
- Gives user cards a subtle lift with shadow  
- Adds depth and clickable feel

---

## 🔤 Text Hover (Color Change)
```css
p:hover {
  color: crimson;
  text-shadow: 1px 1px 2px black;
}
```
- Changes text color and adds shadow  
- Use sparingly on body text

---

## 🔘 Hover Pill Style (for Tag Buttons or Filters)
```css
.filter-button:hover {
  background-color: white;
  color: red;
  border: 1px solid red;
  transition: 0.2s ease-in-out;
}
```
- Inverts pill-style buttons for tags/filters  
- Looks clean and interactive

---

## 🧪 Pro Tip: Always Add Transitions
```css
transition: all 0.3s ease-in-out;
```
> Makes hover effects feel **smooth**, not jerky
