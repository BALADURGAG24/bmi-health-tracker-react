# ⚖️ BMI & Health Tracker

A modern React-based BMI (Body Mass Index) and health tracking app with goal setting, real-time chart updates, and dark mode toggle support.

---  
 
## 🚀 Features    
     
- ✅ **BMI Calculator** (based on height and weight)     
- ✅ **Health Classification** (Underweight, Normal, Overweight, Obese)              
- ✅ **Age & Gender Input**                  
- ✅ **Goal Tracking**  (target weight or BMI)                
- ✅ **BMI History Logging** (stored in localStorage)   
- ✅ **Live-Updating Chart** using [`recharts`](https://recharts.org/)
- ✅ **Dark Mode Toggle** 🌙  
- ✅ **Responsive UI** built with [Tailwind CSS](https://tailwindcss.com/) 

---

 
## 📦 Installation 

```bash
# 1. Clone the repo 
git clone https://github.com/BALADURGAG24/bmi-health-tracker-react.git
cd bmi-health-tracker-react  

# 2. Install dependencies
npm install

# 3. Start development server
npm run start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
bmi-tracker-app/
├── public/
├── src/
│   ├── components/
│   │   ├── BMICalculator.jsx
│   │   ├── BMIResult.jsx
│   │   ├── History.jsx
│   │   └── DarkModeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
```

---

## 📊 Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Vite](https://vitejs.dev/)

---

## ✨ Usage Guide

### ➕ Add BMI Entry
- Fill in your weight (kg), height (cm), age, and gender.
- Press **Calculate BMI**.
- BMI will be calculated, categorized, and logged to your history.

### 🎯 Set Health Goals
- Input a target weight or BMI.
- Press **Save Goal**.
- Goals persist in browser localStorage.

### 📈 Live BMI Chart
- Your BMI history is visualized using a real-time line chart.
- New entries automatically update the graph.

### 🌙 Dark Mode Toggle
- Use the toggle in the top-right to switch between light and dark mode.
- Your preference is saved locally.

---

## 🧮 BMI Formula

```
BMI = weight (kg) / [height (m)]²
```

Example:
```
Weight = 70kg, Height = 170cm
BMI = 70 / (1.70 * 1.70) = 24.2 (Normal)
```

---

## 💾 Local Storage Keys

- `bmi-history` → Array of BMI entries (JSON)
- `bmi-goal` → Saved target weight/BMI
- `dark-mode` → Theme preference ("light" | "dark")

---

## 📤 Deployment

Deploy to the web easily using:

- 🔄 [Vercel](https://vercel.com/)
- ☁️ [Netlify](https://www.netlify.com/)
- 🧩 GitHub Pages (via [vite-plugin-gh-pages](https://www.npmjs.com/package/vite-plugin-gh-pages))

---

## 📅 Planned Improvements

- ✅ Dark mode toggle
- ⏱ Reminders to log BMI daily
- 🔔 Goal progress tracking bar
- 🔒 Firebase/Supabase cloud sync
- 📥 Export data as CSV or PDF
- 🧪 Unit tests (Jest + React Testing Library)

---

## 👨‍💻 Author

Developed with ❤️ by [BALADURGAG24]

---

## 📄 License

[MIT](LICENSE)

