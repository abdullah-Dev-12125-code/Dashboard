import dash
from dash import html, dcc, callback, Input, Output
import dash_bootstrap_components as dbc
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

def layout():
    return html.Div([
        html.H1("Financial Analysis", style={"font-weight": "bold", "font-family": "Georgia, serif", "color": "#000000"}),
        html.Hr(),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Revenue vs Expenses", style={"font-weight": "bold"}),
                    dcc.Graph(id='revenue-expenses-graph')
                ], className="p-3 border rounded bg-light")
            ], width=12),
        ], className="mb-4"),
        
        dbc.Row([
            dbc.Col([
                html.Div([
                    html.H4("Expense Breakdown", style={"font-weight": "bold"}),
                    dcc.Graph(id='expense-pie-graph')
                ], className="p-3 border rounded bg-light")
            ], width=6),
            dbc.Col([
                html.Div([
                    html.H4("Net Profit Trend", style={"font-weight": "bold"}),
                    dcc.Graph(id='profit-trend-graph')
                ], className="p-3 border rounded bg-light")
            ], width=6),
        ])
    ])

@callback(
    Output('revenue-expenses-graph', 'figure'),
    Input('url', 'pathname')
)
def update_rev_exp_graph(_):
    sales_df = pd.read_csv('data/sales.csv')
    expenses_df = pd.read_csv('data/expenses.csv')
    
    daily_rev = sales_df.groupby('date')['total_price'].sum().reset_index()
    daily_exp = expenses_df.groupby('date')['amount'].sum().reset_index()
    
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=daily_rev['date'], y=daily_rev['total_price'], name='Revenue',
                             line=dict(color='#FFD700', width=4)))
    fig.add_trace(go.Scatter(x=daily_exp['date'], y=daily_exp['amount'], name='Expenses',
                             line=dict(color='#000000', width=2, dash='dash')))
    
    fig.update_layout(
        plot_bgcolor='white',
        paper_bgcolor='white',
        font_family="Georgia, serif",
        xaxis_title="Date",
        yaxis_title="Amount ($)"
    )
    return fig

@callback(
    Output('expense-pie-graph', 'figure'),
    Input('url', 'pathname')
)
def update_expense_pie(_):
    expenses_df = pd.read_csv('data/expenses.csv')
    cat_exp = expenses_df.groupby('category')['amount'].sum().reset_index()
    
    fig = px.pie(cat_exp, values='amount', names='category',
                 color_discrete_sequence=['#000000', '#FFD700', '#808080', '#C0C0C0', '#E0E0E0'])
    fig.update_layout(font_family="Georgia, serif")
    return fig

@callback(
    Output('profit-trend-graph', 'figure'),
    Input('url', 'pathname')
)
def update_profit_trend(_):
    sales_df = pd.read_csv('data/sales.csv')
    expenses_df = pd.read_csv('data/expenses.csv')
    
    daily_rev = sales_df.groupby('date')['total_price'].sum().reset_index()
    daily_exp = expenses_df.groupby('date')['amount'].sum().reset_index()
    
    merged = daily_rev.merge(daily_exp, on='date', how='outer').fillna(0)
    merged['profit'] = merged['total_price'] - merged['amount']
    
    fig = px.area(merged, x='date', y='profit', color_discrete_sequence=['#FFD700'])
    fig.update_layout(
        plot_bgcolor='white',
        paper_bgcolor='white',
        font_family="Georgia, serif",
        xaxis_title="Date",
        yaxis_title="Net Profit ($)"
    )
    return fig
