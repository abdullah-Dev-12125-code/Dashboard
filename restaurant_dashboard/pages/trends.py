import dash
from dash import html, dcc, callback, Input, Output
import dash_bootstrap_components as dbc
import pandas as pd
import plotly.express as px
import os

dash.register_page(__name__, path='/trends', title='Hourly Trends')

def get_data_path(filename):
    """Get absolute path to data file."""
    current_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(current_dir, 'data', filename)

def layout():
    return html.Div([
        html.H1("Hourly Trends", style={"font-weight": "bold", "font-family": "Georgia, serif", "color": "#000000"}),
        html.Hr(),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Orders by Hour of Day", style={"font-weight": "bold"}),
                    dcc.Graph(id='hourly-orders-graph')
                ], className="p-3 border rounded bg-light")
            ], width=12),
        ], className="mb-4"),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Peak Hours Heatmap", style={"font-weight": "bold"}),
                    dcc.Graph(id='peak-hours-heatmap')
                ], className="p-3 border rounded bg-light")
            ], width=12),
        ])
    ])

@callback(
    Output('hourly-orders-graph', 'figure'),
    Input('url', 'pathname')
)
def update_hourly_graph(_):
    sales_df = pd.read_csv(get_data_path('sales.csv'))
    hourly_sales = sales_df.groupby('hour')['quantity'].sum().reset_index()
    
    fig = px.bar(hourly_sales, x='hour', y='quantity', 
                 color_discrete_sequence=['#FFD700'])
    fig.update_layout(
        plot_bgcolor='white',
        paper_bgcolor='white',
        font_family="Georgia, serif",
        xaxis_title="Hour (24h format)",
        yaxis_title="Total Items Sold",
        xaxis=dict(tickmode='linear', tick0=11, dtick=1)
    )
    return fig

@callback(
    Output('peak-hours-heatmap', 'figure'),
    Input('url', 'pathname')
)
def update_heatmap(_):
    sales_df = pd.read_csv(get_data_path('sales.csv'))
    sales_df['date'] = pd.to_datetime(sales_df['date'])
    sales_df['day_of_week'] = sales_df['date'].dt.day_name()
    
    # Order days of week
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    
    heatmap_data = sales_df.groupby(['day_of_week', 'hour'])['quantity'].sum().reset_index()
    
    fig = px.density_heatmap(heatmap_data, x='hour', y='day_of_week', z='quantity',
                             category_orders={'day_of_week': days},
                             color_continuous_scale=['#FFFFFF', '#FFD700', '#000000'])
    
    fig.update_layout(
        font_family="Georgia, serif",
        xaxis_title="Hour of Day",
        yaxis_title="Day of Week"
    )
    return fig
