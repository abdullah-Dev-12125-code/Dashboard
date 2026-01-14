# Restaurant Dashboard & Showcase Project

A complete restaurant management analytics solution consisting of a full-stack Python Dash dashboard and a modern React showcase website.

## Project Overview

This project includes two main components:

1. **Restaurant Dashboard (Python/Dash)** - A comprehensive analytics platform with 7 interactive pages
2. **Restaurant Showcase (React/Tailwind)** - A modern, professional website showcasing the dashboard

---

## Part 1: Restaurant Dashboard (Python/Dash)

### Project Structure

```
restaurant_dashboard/
├── app.py                 # Main Dash application
├── data/
│   ├── generate_data.py   # Sample data generation script
│   ├── menu.csv           # Menu items data
│   ├── sales.csv          # Sales transactions data
│   └── expenses.csv       # Expense tracking data
└── pages/
    ├── overview.py        # Dashboard overview page
    ├── sales.py           # Sales analysis page
    ├── menu.py            # Menu performance page
    ├── financials.py      # Financial analysis page
    ├── trends.py          # Hourly trends page
    ├── inventory.py       # Inventory management page
    └── staffing.py        # Staff performance page
```

### Features

#### 1. Overview Page
- Total revenue and order count
- Average order value
- Best-selling dish highlight
- Daily revenue trends (line chart)
- Sales by category (pie chart)

#### 2. Sales Analysis Page
- Sales volume over time (bar chart)
- Top 10 dishes by quantity (horizontal bar)
- Top 10 dishes by revenue (horizontal bar)

#### 3. Menu Performance Page
- Dish popularity vs profitability (scatter plot)
- Category distribution (sunburst chart)
- Price point analysis

#### 4. Financial Analysis Page
- Revenue vs expenses comparison (line chart)
- Expense breakdown by category (pie chart)
- Net profit trend (area chart)

#### 5. Hourly Trends Page
- Orders by hour of day (bar chart)
- Peak hours heatmap (density heatmap)
- Day-of-week patterns

#### 6. Inventory Management Page
- Current stock levels with progress bars
- Stock status indicators (Good/Medium/Critical)
- Reorder recommendations

#### 7. Staff Performance Page
- Staff hours overview (bar chart)
- Performance scores
- Top performer identification

### Color Scheme

- **Black (#000000)** - Sidebar background, authority
- **White (#FFFFFF)** - Content areas, clarity
- **Gold (#FFD700)** - Accents, highlights, key metrics
- **Gray shades** - Secondary elements

### Typography

- **Headings:** Georgia Bold (classic, serif)
- **Body:** System sans-serif (clean, readable)
- **Data:** Courier New (monospace for numbers)

### Installation & Setup

```bash
# Navigate to the dashboard directory
cd restaurant_dashboard

# Install dependencies
pip install dash pandas plotly dash-bootstrap-components

# Generate sample data
cd data
python generate_data.py
cd ..

# Run the application
python app.py
```

The dashboard will be available at `http://localhost:8050`

### Sample Data

The dashboard includes:
- **12 menu items** across 4 categories (Main, Appetizer, Dessert)
- **30 days of historical data** with realistic sales patterns
- **5 expense categories** (Ingredients, Labor, Rent, Utilities, Marketing)
- **10 staff members** with performance metrics

### Key Metrics Tracked

- Daily revenue and sales volume
- Top-selling dishes by quantity and revenue
- Profitability analysis
- Peak hours and traffic patterns
- Expense breakdown and cost analysis
- Staff hours and performance scores
- Inventory levels and reorder status

---

## Part 2: Restaurant Showcase (React/Tailwind)

### Project Structure

```
restaurant_showcase/
├── client/
│   ├── index.html         # HTML entry point
│   ├── public/            # Static assets
│   │   └── images/        # Image assets
│   └── src/
│       ├── App.tsx        # Main app component
│       ├── index.css      # Global styles & theme
│       ├── main.tsx       # React entry point
│       ├── pages/
│       │   ├── Home.tsx   # Hero & overview page
│       │   ├── Features.tsx # Detailed features page
│       │   ├── Gallery.tsx # Dashboard gallery page
│       │   └── NotFound.tsx # 404 page
│       ├── components/    # Reusable UI components
│       ├── contexts/      # React contexts
│       ├── hooks/         # Custom React hooks
│       └── lib/           # Utility functions
├── server/                # Express server (static hosting)
├── package.json           # Dependencies
└── tailwind.config.js     # Tailwind configuration
```

### Design Philosophy

**Modern Minimalist with Golden Accents**

- **Elegant Simplicity** - Clean layouts with purposeful negative space
- **Golden Hierarchy** - Yellow (#FFD700) as strategic accent for key metrics
- **Sophisticated Contrast** - Black, white, and gold color scheme
- **Refined Typography** - Playfair Display serif for headings, Lato sans-serif for body

### Pages

#### 1. Home Page
- Hero section with compelling headline
- Feature highlights (4 main capabilities)
- Seven dashboard pages overview
- Technology stack showcase
- Call-to-action section

#### 2. Features Page
- Detailed feature cards (6 main features)
- Advanced visualizations section
- Actionable insights showcase
- Real-time capabilities

#### 3. Gallery Page
- Visual showcase of all 7 dashboard pages
- Dashboard statistics
- Visualization types explanation
- Sample data coverage

### Color Palette

```css
--primary: oklch(0.8 0.2 45)      /* Gold */
--background: oklch(0.99 0.001 0) /* White */
--foreground: oklch(0.15 0.01 0)  /* Black */
--accent: oklch(0.85 0.22 45)     /* Gold accent */
--sidebar: oklch(0.15 0.01 0)     /* Black sidebar */
```

### Typography

- **Display:** Playfair Display Bold (3rem) - Elegant serif headings
- **Heading:** Playfair Display Semi-bold (2rem) - Section titles
- **Body:** Lato Regular (1rem) - Content text
- **Accent:** Playfair Display Italic (0.95rem) - Luxury highlights

### Installation & Setup

```bash
# Navigate to the showcase directory
cd restaurant_showcase

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

The showcase will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview

# Start production server
pnpm start
```

### Key Features

- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Fade-in, scale, and slide animations
- **Interactive Elements** - Hover effects and transitions
- **Accessibility** - Semantic HTML and keyboard navigation
- **Performance** - Optimized assets and lazy loading

---

## Technology Stack

### Dashboard (Python/Dash)

- **Framework:** Dash (Python web framework)
- **Data Processing:** Pandas, NumPy
- **Visualizations:** Plotly
- **UI Components:** Dash Bootstrap Components
- **Styling:** CSS, Bootstrap

### Showcase (React/Tailwind)

- **Framework:** React 19
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Routing:** Wouter
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Server:** Express.js

---

## Data Flow

### Dashboard Data Pipeline

```
Raw Data (CSV)
    ↓
Pandas Processing
    ↓
Plotly Visualization
    ↓
Dash Components
    ↓
Interactive Dashboard
```

### Sample Data Generation

The `data/generate_data.py` script creates:

1. **Menu Data** - 12 dishes with categories and prices
2. **Sales Data** - 30 days of transactions with hourly timestamps
3. **Expenses Data** - Daily expenses across 5 categories

---

## Usage Guide

### Running the Dashboard

```bash
cd restaurant_dashboard
python app.py
# Access at http://localhost:8050
```

### Running the Showcase

```bash
cd restaurant_showcase
pnpm dev
# Access at http://localhost:3000
```

### Navigating the Dashboard

1. **Overview** - Start here for daily business snapshot
2. **Sales Analysis** - Understand sales patterns
3. **Menu Performance** - Optimize your menu
4. **Financials** - Monitor profit and expenses
5. **Hourly Trends** - Plan staffing and inventory
6. **Inventory** - Track stock levels
7. **Staffing** - Monitor team performance

### Navigating the Showcase

1. **Home** - Introduction and key statistics
2. **Features** - Detailed feature descriptions
3. **Gallery** - Visual tour of dashboard pages

---

## Customization Guide

### Dashboard Customization

#### Change Color Scheme

Edit `app.py` sidebar and content styles:

```python
sidebar_style = {
    "background-color": "#YOUR_COLOR",
    "color": "#YOUR_TEXT_COLOR",
}
```

#### Add New Pages

1. Create new file in `pages/` directory
2. Register page with `@app.callback`
3. Add navigation link in `app.py`

#### Modify Data

Edit `data/generate_data.py` to:
- Add more menu items
- Extend date range
- Modify expense categories
- Adjust data ranges

### Showcase Customization

#### Change Colors

Edit `client/src/index.css` CSS variables:

```css
--primary: oklch(0.8 0.2 45); /* Gold */
--background: oklch(0.99 0.001 0); /* White */
```

#### Add New Pages

1. Create component in `client/src/pages/`
2. Import in `client/src/App.tsx`
3. Add route to Router

#### Modify Content

Edit individual page components:
- `Home.tsx` - Hero and overview
- `Features.tsx` - Feature descriptions
- `Gallery.tsx` - Gallery content

---

## Performance Considerations

### Dashboard

- Plotly charts are interactive but may slow down with large datasets
- Consider implementing data pagination for 100+ days of data
- Use caching for frequently accessed queries

### Showcase

- Vite provides fast development and optimized production builds
- Images are optimized with responsive sizing
- CSS is minified and tree-shaken in production

---

## Troubleshooting

### Dashboard Issues

**Port 8050 already in use:**
```bash
python app.py --port 8051
```

**Missing dependencies:**
```bash
pip install -r requirements.txt
```

**Data not loading:**
```bash
cd data && python generate_data.py
```

### Showcase Issues

**Port 3000 already in use:**
```bash
pnpm dev -- --port 3001
```

**Build errors:**
```bash
pnpm install
pnpm build
```

---

## Future Enhancements

### Dashboard

- Real-time data integration with POS systems
- Predictive analytics for sales forecasting
- Custom report generation
- Multi-location support
- Mobile app version

### Showcase

- Blog section with restaurant tips
- Case studies and testimonials
- Interactive demo of dashboard
- Video tutorials
- Customer testimonials section

---

## License

This project is provided as-is for restaurant analytics purposes.

---

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Consult the technology documentation
4. Modify the sample data as needed

---

## Project Statistics

- **Dashboard Pages:** 7
- **Menu Items:** 12
- **Historical Data:** 30 days
- **Visualizations:** 15+ interactive charts
- **Showcase Pages:** 3
- **Color Scheme:** Black, White, Gold
- **Total Components:** 20+
- **Lines of Code:** 2000+

---

**Created:** January 2026  
**Version:** 1.0  
**Status:** Production Ready
