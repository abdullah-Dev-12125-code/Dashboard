import dash
from dash import html, dcc, callback, Input, Output
import dash_bootstrap_components as dbc
import pandas as pd
import plotly.express as px
import os

dash.register_page(__name__, path='/menu', title='Menu Performance')

def get_data_path(filename):
    """Get absolute path to data file."""
    current_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(current_dir, 'data', filename)

def layout():
    return html.Div([
        html.H1("Menu Performance", style={"font-weight": "bold", "font-family": "Georgia, serif", "color": "#000000"}),
        html.Hr(),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Dish Popularity vs Profitability", style={"font-weight": "bold"}),
                    dcc.Graph(id='menu-scatter-graph')
                ], className="p-3 border rounded bg-light")
            ], width=12),
        ], className="mb-4"),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Category Distribution", style={"font-weight": "bold"}),
                    dcc.Graph(id='menu-category-sunburst')
                ], className="p-3 border rounded bg-light")
            ], width=12),
        ])
    ])

@callback(
    Output('menu-scatter-graph', 'figure'),
    Input('url', 'pathname')
)
def update_menu_scatter(_):
    sales_df = pd.read_csv(get_data_path('sales.csv'))
    menu_df = pd.read_csv(get_data_path('menu.csv'))
    
    dish_stats = sales_df.groupby('dish_id').agg({
        'quantity': 'sum',
        'total_price': 'sum'
    }).reset_index()
    
    df = dish_stats.merge(menu_df, on='dish_id')
    
    fig = px.scatter(df, x='quantity', y='total_price', size='price', color='category',
                     hover_name='dish_name', text='dish_name',
                     color_discrete_sequence=['#000000', '#FFD700', '#808080'])
    
    fig.update_traces(textposition='top center')
    fig.update_layout(
        plot_bgcolor='white',
        paper_bgcolor='white',
        font_family="Georgia, serif",
        xaxis_title="Quantity Sold",
        yaxis_title="Total Revenue ($)"
    )
    return fig

@callback(
    Output('menu-category-sunburst', 'figure'),
    Input('url', 'pathname')
)
def update_menu_sunburst(_):
    sales_df = pd.read_csv(get_data_path('sales.csv'))
    menu_df = pd.read_csv(get_data_path('menu.csv'))
    df = sales_df.merge(menu_df, on='dish_id')
    
    fig = px.sunburst(df, path=['category', 'dish_name'], values='quantity',
                      color_discrete_sequence=['#FFD700', '#000000', '#FFFFFF'])
    fig.update_layout(font_family="Georgia, serif")
    return fig
