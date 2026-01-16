import os
import pandas as pd

def get_data_path(filename):
    """Get the absolute path to a data file."""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(current_dir, 'data', filename)

def load_sales_data():
    """Load sales data from CSV."""
    return pd.read_csv(get_data_path('sales.csv'))

def load_menu_data():
    """Load menu data from CSV."""
    return pd.read_csv(get_data_path('menu.csv'))

def load_expenses_data():
    """Load expenses data from CSV."""
    return pd.read_csv(get_data_path('expenses.csv'))
