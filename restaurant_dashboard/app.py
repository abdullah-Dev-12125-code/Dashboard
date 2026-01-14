import dash
from dash import html, dcc
import dash_bootstrap_components as dbc
from dash.dependencies import Input, Output

# Initialize the app with a bootstrap theme
app = dash.Dash(
    __name__, 
    use_pages=True, 
    external_stylesheets=[dbc.themes.BOOTSTRAP],
    suppress_callback_exceptions=True
)

# Custom CSS for the Yellow, White, and Black theme
# Yellow: #FFD700 (Gold/Yellow)
# Black: #000000
# White: #FFFFFF

sidebar_style = {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "width": "16rem",
    "padding": "2rem 1rem",
    "background-color": "#000000",
    "color": "#FFD700",
}

content_style = {
    "margin-left": "18rem",
    "margin-right": "2rem",
    "padding": "2rem 1rem",
    "background-color": "#FFFFFF",
    "min-height": "100vh"
}

sidebar = html.Div(
    [
        html.H2("RESTAURANT", style={"font-weight": "bold", "color": "#FFD700", "font-family": "Georgia, serif"}),
        html.H4("DASHBOARD", style={"font-weight": "bold", "color": "#FFFFFF", "margin-bottom": "2rem"}),
        html.Hr(style={"border-top": "1px solid #FFD700"}),
        dbc.Nav(
            [
                dbc.NavLink("Overview", href="/", active="exact", style={"color": "#FFFFFF"}),
                dbc.NavLink("Sales Analysis", href="/sales", active="exact", style={"color": "#FFFFFF"}),
                dbc.NavLink("Menu Performance", href="/menu", active="exact", style={"color": "#FFFFFF"}),
                dbc.NavLink("Financials", href="/financials", active="exact", style={"color": "#FFFFFF"}),
                dbc.NavLink("Hourly Trends", href="/trends", active="exact", style={"color": "#FFFFFF"}),
                dbc.NavLink("Inventory", href="/inventory", active="exact", style={"color": "#FFFFFF"}),
                dbc.NavLink("Staffing", href="/staffing", active="exact", style={"color": "#FFFFFF"}),
            ],
            vertical=True,
            pills=True,
        ),
    ],
    style=sidebar_style,
)

app.layout = html.Div([
    dcc.Location(id="url"),
    sidebar,
    html.Div(dash.page_container, style=content_style)
])

if __name__ == "__main__":
    app.run(debug=True, port=8050)
