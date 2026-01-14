import dash
from dash import html, dcc, callback, Input, Output
import dash_bootstrap_components as dbc
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

dash.register_page(__name__, path='/')

def layout():
    # Load data
    sales_df = pd.read_csv('data/sales.csv')
    menu_df = pd.read_csv('data/menu.csv')
    
    total_revenue = sales_df['total_price'].sum()
    total_orders = len(sales_df)
    avg_order_value = total_revenue / total_orders if total_orders > 0 else 0
    
    # Top Dish
    top_dish_id = sales_df.groupby('dish_id')['quantity'].sum().idxmax()
    top_dish_name = menu_df[menu_df['dish_id'] == top_dish_id]['dish_name'].values[0]

    return html.Div([
        html.H1("Business Overview", style={"font-weight": "bold", "font-family": "Georgia, serif", "color": "#000000"}),
        html.Hr(),
        
        dbc.Row([
            dbc.Col(dbc.Card([
                dbc.CardBody([
                    html.H5("Total Revenue", className="card-title", style={"color": "#000000"}),
                    html.H2(f"${total_revenue:,.2f}", style={"color": "#FFD700", "font-weight": "bold"})
                ])
            ], style={"border-left": "5px solid #FFD700"}), width=3),
            
            dbc.Col(dbc.Card([
                dbc.CardBody([
                    html.H5("Total Orders", className="card-title"),
                    html.H2(f"{total_orders:,}", style={"color": "#000000", "font-weight": "bold"})
                ])
            ], style={"border-left": "5px solid #000000"}), width=3),
            
            dbc.Col(dbc.Card([
                dbc.CardBody([
                    html.H5("Avg Order Value", className="card-title"),
                    html.H2(f"${avg_order_value:.2f}", style={"color": "#000000", "font-weight": "bold"})
                ])
            ], style={"border-left": "5px solid #000000"}), width=3),
            
            dbc.Col(dbc.Card([
                dbc.CardBody([
                    html.H5("Best Seller", className="card-title"),
                    html.H2(top_dish_name, style={"color": "#FFD700", "font-weight": "bold", "font-size": "1.5rem"})
                ])
            ], style={"border-left": "5px solid #FFD700"}), width=3),
        ], className="mb-4"),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Daily Revenue Trend", style={"font-weight": "bold"}),
                    dcc.Graph(id='revenue-trend-graph')
                ], className="p-3 border rounded bg-light")
            ], width=8),
            dbc.Col([
                html.Div([
                    html.H4("Sales by Category", style={"font-weight": "bold"}),
                    dcc.Graph(id='category-pie-graph')
                ], className="p-3 border rounded bg-light")
            ], width=4),
        ])
    ])

@callback(
    Output('revenue-trend-graph', 'figure'),
    Input('url', 'pathname')
)
def update_revenue_graph(_):
    sales_df = pd.read_csv('data/sales.csv')
    daily_sales = sales_df.groupby('date')['total_price'].sum().reset_index()
    fig = px.line(daily_sales, x='date', y='total_price', 
                  color_discrete_sequence=['#FFD700'])
    fig.update_layout(
        plot_bgcolor='white',
        paper_bgcolor='white',
        font_family="Georgia, serif",
        xaxis_title="Date",
        yaxis_title="Revenue ($)"
    )
    return fig

@callback(
    Output('category-pie-graph', 'figure'),
    Input('url', 'pathname')
)
def update_category_graph(_):
    sales_df = pd.read_csv('data/sales.csv')
    menu_df = pd.read_csv('data/menu.csv')
    df = sales_df.merge(menu_df, on='dish_id')
    cat_sales = df.groupby('category')['total_price'].sum().reset_index()
    fig = px.pie(cat_sales, values='total_price', names='category',
                 color_discrete_sequence=['#000000', '#FFD700', '#808080'])
    fig.update_layout(font_family="Georgia, serif")
    return fig
