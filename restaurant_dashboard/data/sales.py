import dash
from dash import html, dcc, callback, Input, Output
import dash_bootstrap_components as dbc
import pandas as pd
import plotly.express as px

dash.register_page(__name__, path='/sales')

def layout():
    return html.Div([
        html.H1("Sales Analysis", style={"font-weight": "bold", "font-family": "Georgia, serif", "color": "#000000"}),
        html.Hr(),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Sales Volume Over Time", style={"font-weight": "bold"}),
                    dcc.Graph(id='sales-volume-graph')
                ], className="p-3 border rounded bg-light")
            ], width=12),
        ], className="mb-4"),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Sales by Dish Quantity", style={"font-weight": "bold"}),
                    dcc.Graph(id='sales-quantity-bar')
                ], className="p-3 border rounded bg-light")
            ], width=6),
            dbc.Col([
                html.Div([
                    html.H4("Sales by Dish Revenue", style={"font-weight": "bold"}),
                    dcc.Graph(id='sales-revenue-bar')
                ], className="p-3 border rounded bg-light")
            ], width=6),
        ])
    ])

@callback(
    Output('sales-volume-graph', 'figure'),
    Input('url', 'pathname')
)
def update_sales_volume_graph(_):
    sales_df = pd.read_csv('data/sales.csv')
    daily_orders = sales_df.groupby('date')['quantity'].sum().reset_index()
    fig = px.bar(daily_orders, x='date', y='quantity', 
                 color_discrete_sequence=['#000000'])
    fig.update_layout(
        plot_bgcolor='white',
        paper_bgcolor='white',
        font_family="Georgia, serif",
        xaxis_title="Date",
        yaxis_title="Total Items Sold"
    )
    return fig

@callback(
    Output('sales-quantity-bar', 'figure'),
    Input('url', 'pathname')
)
def update_sales_quantity_bar(_):
    sales_df = pd.read_csv('data/sales.csv')
    menu_df = pd.read_csv('data/menu.csv')
    df = sales_df.merge(menu_df, on='dish_id')
    
    dish_quantity = df.groupby('dish_name')['quantity'].sum().nlargest(10).reset_index()
    
    fig = px.bar(dish_quantity, x='quantity', y='dish_name', orientation='h',
                 color_discrete_sequence=['#FFD700'])
    fig.update_layout(
        plot_bgcolor='white',
        paper_bgcolor='white',
        font_family="Georgia, serif",
        xaxis_title="Quantity Sold",
        yaxis_title="Dish Name",
        yaxis={'categoryorder':'total ascending'}
    )
    return fig

@callback(
    Output('sales-revenue-bar', 'figure'),
    Input('url', 'pathname')
)
def update_sales_revenue_bar(_):
    sales_df = pd.read_csv('data/sales.csv')
    menu_df = pd.read_csv('data/menu.csv')
    df = sales_df.merge(menu_df, on='dish_id')
    
    dish_revenue = df.groupby('dish_name')['total_price'].sum().nlargest(10).reset_index()
    
    fig = px.bar(dish_revenue, x='total_price', y='dish_name', orientation='h',
                 color_discrete_sequence=['#000000'])
    fig.update_layout(
        plot_bgcolor='white',
        paper_bgcolor='white',
        font_family="Georgia, serif",
        xaxis_title="Revenue ($)",
        yaxis_title="Dish Name",
        yaxis={'categoryorder':'total ascending'}
    )
    return fig
