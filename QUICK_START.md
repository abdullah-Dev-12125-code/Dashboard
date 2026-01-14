# Quick Start Guide

## Restaurant Dashboard & Showcase Project

This guide will help you get started with both the Python Dash dashboard and React showcase website.

---

## Prerequisites

### For Dashboard (Python/Dash)
- Python 3.7 or higher
- pip (Python package manager)

### For Showcase (React/Tailwind)
- Node.js 16+ or higher
- pnpm (package manager)

---

## Part 1: Running the Dashboard

### Step 1: Navigate to Dashboard Directory
```bash
cd restaurant_dashboard
```

### Step 2: Install Dependencies
```bash
pip install dash pandas plotly dash-bootstrap-components
```

### Step 3: Generate Sample Data
```bash
cd data
python generate_data.py
cd ..
```

### Step 4: Run the Application
```bash
python app.py
```

### Step 5: Access the Dashboard
Open your browser and go to:
```
http://localhost:8050
```

### Dashboard Navigation
- **Overview** - Key metrics and daily summary
- **Sales Analysis** - Sales trends and top dishes
- **Menu Performance** - Dish profitability analysis
- **Financials** - Revenue and expense tracking
- **Hourly Trends** - Peak hours and traffic patterns
- **Inventory** - Stock level monitoring
- **Staffing** - Staff hours and performance

---

## Part 2: Running the Showcase Website

### Step 1: Navigate to Showcase Directory
```bash
cd restaurant_showcase
```

### Step 2: Install Dependencies
```bash
pnpm install
```

### Step 3: Run Development Server
```bash
pnpm dev
```

### Step 4: Access the Showcase
Open your browser and go to:
```
http://localhost:3000
```

### Showcase Navigation
- **Home** - Hero section and overview
- **Features** - Detailed feature descriptions
- **Gallery** - Dashboard page showcase

---

## Building for Production

### Dashboard
The dashboard runs directly from Python. To deploy:
```bash
# Set production mode
export DASH_ENV=production

# Run the app
python app.py
```

### Showcase
```bash
# Build the project
pnpm build

# Preview the build
pnpm preview

# Start production server
pnpm start
```

---

## Project Structure Overview

```
restaurant_projects/
├── restaurant_dashboard/          # Python/Dash Application
│   ├── app.py                     # Main application
│   ├── data/
│   │   ├── generate_data.py       # Data generation
│   │   ├── menu.csv               # Menu data
│   │   ├── sales.csv              # Sales data
│   │   └── expenses.csv           # Expense data
│   └── pages/                     # Dashboard pages
│       ├── overview.py
│       ├── sales.py
│       ├── menu.py
│       ├── financials.py
│       ├── trends.py
│       ├── inventory.py
│       └── staffing.py
│
└── restaurant_showcase/           # React/Tailwind Website
    ├── client/
    │   ├── index.html
    │   ├── public/
    │   └── src/
    │       ├── App.tsx
    │       ├── index.css
    │       ├── pages/
    │       │   ├── Home.tsx
    │       │   ├── Features.tsx
    │       │   └── Gallery.tsx
    │       └── components/
    ├── server/
    └── package.json
```

---

## Key Features

### Dashboard Features
✅ 7 interactive pages  
✅ Real-time visualizations  
✅ Sales tracking  
✅ Menu performance analysis  
✅ Financial insights  
✅ Staff management  
✅ Inventory tracking  

### Showcase Features
✅ Modern, minimalist design  
✅ Golden accent colors  
✅ Responsive layout  
✅ Smooth animations  
✅ Professional typography  
✅ Interactive components  

---

## Color Scheme

### Dashboard
- **Black (#000000)** - Sidebar, authority
- **White (#FFFFFF)** - Content areas
- **Gold (#FFD700)** - Accents and highlights

### Showcase
- **Black** - Sidebar and text
- **White** - Background
- **Gold** - Primary accent color
- **Grays** - Secondary elements

---

## Sample Data

The dashboard includes:
- **12 menu items** (Mains, Appetizers, Desserts)
- **30 days** of sales history
- **5 expense categories** (Ingredients, Labor, Rent, Utilities, Marketing)
- **10 staff members** with performance metrics

---

## Troubleshooting

### Dashboard Won't Start
```bash
# Check if port 8050 is in use
lsof -i :8050

# Use different port
python app.py --port 8051
```

### Showcase Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Missing Data Files
```bash
cd restaurant_dashboard/data
python generate_data.py
```

---

## Next Steps

1. **Explore the Dashboard** - Navigate through all pages to understand the analytics
2. **Customize Colors** - Edit the color schemes in `app.py` and `index.css`
3. **Add Your Data** - Replace sample data with real restaurant data
4. **Deploy** - Follow deployment guides for your hosting platform
5. **Extend Features** - Add new pages and visualizations

---

## File Locations

### Important Files

**Dashboard:**
- Main app: `restaurant_dashboard/app.py`
- Data: `restaurant_dashboard/data/`
- Pages: `restaurant_dashboard/pages/`

**Showcase:**
- Main component: `restaurant_showcase/client/src/App.tsx`
- Home page: `restaurant_showcase/client/src/pages/Home.tsx`
- Styles: `restaurant_showcase/client/src/index.css`

---

## Performance Tips

### Dashboard
- Limit data to 90 days for optimal performance
- Use data pagination for large datasets
- Cache frequently accessed queries

### Showcase
- Images are optimized automatically
- CSS is minified in production
- JavaScript is tree-shaken for smaller bundles

---

## Support Resources

1. **Dash Documentation:** https://dash.plotly.com/
2. **Plotly Charts:** https://plotly.com/python/
3. **React Documentation:** https://react.dev/
4. **Tailwind CSS:** https://tailwindcss.com/
5. **Vite Guide:** https://vitejs.dev/

---

## Common Tasks

### Add a New Dashboard Page
1. Create file in `restaurant_dashboard/pages/new_page.py`
2. Import in `app.py`
3. Add navigation link

### Add a New Showcase Page
1. Create file in `restaurant_showcase/client/src/pages/NewPage.tsx`
2. Import in `App.tsx`
3. Add route

### Update Sample Data
1. Edit `restaurant_dashboard/data/generate_data.py`
2. Run `python generate_data.py`
3. Restart dashboard

### Change Color Scheme
1. Dashboard: Edit `app.py` styles
2. Showcase: Edit `client/src/index.css` variables

---

## Version Information

- **Dashboard:** Python 3.11, Dash 3.3.0, Plotly 5.x
- **Showcase:** React 19, Tailwind CSS 4, Vite 7
- **Created:** January 2026
- **Status:** Production Ready

---

**Happy exploring! 🚀**
