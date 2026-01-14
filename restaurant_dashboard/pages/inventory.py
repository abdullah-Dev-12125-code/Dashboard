import dash
from dash import html, dcc
import dash_bootstrap_components as dbc
import pandas as pd

dash.register_page(__name__, path='/inventory')

def layout():
    # Mock inventory data
    inventory_data = {
        'Item': ['Flour', 'Sugar', 'Tomatoes', 'Cheese', 'Chicken', 'Beef', 'Pasta', 'Wine', 'Beer', 'Coffee'],
        'Stock Level': [85, 40, 15, 60, 25, 10, 90, 45, 70, 30],
        'Status': ['Good', 'Medium', 'Low', 'Good', 'Medium', 'Critical', 'Good', 'Good', 'Good', 'Medium']
    }
    df = pd.DataFrame(inventory_data)
    
    table_header = [
        html.Thead(html.Tr([html.Th("Item"), html.Th("Stock Level (%)"), html.Th("Status")]))
    ]
    
    rows = []
    for i in range(len(df)):
        status_color = "#000000"
        if df.iloc[i]['Status'] == 'Critical':
            status_color = "red"
        elif df.iloc[i]['Status'] == 'Low':
            status_color = "orange"
            
        rows.append(html.Tr([
            html.Td(df.iloc[i]['Item']),
            html.Td(dbc.Progress(value=df.iloc[i]['Stock Level'], color="warning" if df.iloc[i]['Stock Level'] < 40 else "dark")),
            html.Td(df.iloc[i]['Status'], style={"color": status_color, "font-weight": "bold"})
        ]))
    
    table_body = [html.Tbody(rows)]
    
    return html.Div([
        html.H1("Inventory Management", style={"font-weight": "bold", "font-family": "Georgia, serif", "color": "#000000"}),
        html.Hr(),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Current Stock Levels", style={"font-weight": "bold"}),
                    dbc.Table(table_header + table_body, bordered=True, hover=True, responsive=True, striped=True)
                ], className="p-3 border rounded bg-light")
            ], width=12),
        ])
    ])
