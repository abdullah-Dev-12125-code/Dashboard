import dash
from dash import html, dcc
import dash_bootstrap_components as dbc
import pandas as pd
import plotly.express as px

dash.register_page(__name__, path='/staffing')

def layout():
    # Mock staffing data
    staff_data = {
        'Name': ['John Doe', 'Jane Smith', 'Mike Ross', 'Rachel Zane', 'Harvey Specter'],
        'Role': ['Chef', 'Server', 'Server', 'Manager', 'Chef'],
        'Hours Worked': [160, 120, 110, 170, 155],
        'Performance Score': [4.8, 4.5, 4.2, 4.9, 4.7]
    }
    df = pd.DataFrame(staff_data)
    
    fig = px.bar(df, x='Name', y='Hours Worked', color='Role',
                 color_discrete_sequence=['#000000', '#FFD700', '#808080'],
                 title="Staff Hours This Month")
    fig.update_layout(font_family="Georgia, serif", plot_bgcolor='white')

    return html.Div([
        html.H1("Staffing & Performance", style={"font-weight": "bold", "font-family": "Georgia, serif", "color": "#000000"}),
        html.Hr(),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Staff Hours Overview", style={"font-weight": "bold"}),
                    dcc.Graph(figure=fig)
                ], className="p-3 border rounded bg-light")
            ], width=8),
            dbc.Col([
                html.Div([
                    html.H4("Top Performer", style={"font-weight": "bold"}),
                    dbc.Card([
                        dbc.CardBody([
                            html.H2("Rachel Zane", style={"color": "#FFD700", "font-weight": "bold"}),
                            html.P("Manager", className="text-muted"),
                            html.H5("Score: 4.9/5.0")
                        ])
                    ], style={"border-left": "10px solid #FFD700"})
                ], className="p-3 border rounded bg-light")
            ], width=4),
        ])
    ])
