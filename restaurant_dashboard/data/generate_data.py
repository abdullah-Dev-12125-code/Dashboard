import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Set seed for reproducibility
np.random.seed(42)

# 1. Menu Items
dishes = [
    "Truffle Pasta", "Classic Burger", "Margherita Pizza", "Grilled Salmon", 
    "Caesar Salad", "Steak Frites", "Mushroom Risotto", "Chicken Wings", 
    "Tacos al Pastor", "Sushi Platter", "Chocolate Lava Cake", "Tiramisu"
]
categories = ["Main", "Main", "Main", "Main", "Appetizer", "Main", "Main", "Appetizer", "Main", "Main", "Dessert", "Dessert"]
prices = [24.99, 16.50, 14.00, 28.00, 12.50, 32.00, 22.00, 10.00, 15.00, 35.00, 9.00, 8.50]

menu_df = pd.DataFrame({
    'dish_id': range(1, len(dishes) + 1),
    'dish_name': dishes,
    'category': categories,
    'price': prices
})

# 2. Sales Data (Last 30 days)
dates = [datetime.now() - timedelta(days=x) for x in range(30)]
sales_records = []

for date in dates:
    # Number of orders per day
    num_orders = np.random.randint(40, 100)
    for _ in range(num_orders):
        dish_idx = np.random.choice(len(dishes))
        quantity = np.random.randint(1, 4)
        sales_records.append({
            'date': date.strftime('%Y-%m-%d'),
            'dish_id': dish_idx + 1,
            'quantity': quantity,
            'total_price': quantity * prices[dish_idx],
            'hour': np.random.randint(11, 23) # 11 AM to 11 PM
        })

sales_df = pd.DataFrame(sales_records)

# 3. Expenses Data
expenses_categories = ["Ingredients", "Labor", "Rent", "Utilities", "Marketing"]
expenses_records = []
for date in dates:
    for cat in expenses_categories:
        if cat == "Rent":
            amount = 200 if date.day == 1 else 0
        elif cat == "Labor":
            amount = np.random.uniform(300, 500)
        else:
            amount = np.random.uniform(50, 150)
        
        if amount > 0:
            expenses_records.append({
                'date': date.strftime('%Y-%m-%d'),
                'category': cat,
                'amount': amount
            })

expenses_df = pd.DataFrame(expenses_records)

# Save to CSV in the current directory (data/)
import os
current_dir = os.path.dirname(os.path.abspath(__file__))
menu_df.to_csv(os.path.join(current_dir, 'menu.csv'), index=False)
sales_df.to_csv(os.path.join(current_dir, 'sales.csv'), index=False)
expenses_df.to_csv(os.path.join(current_dir, 'expenses.csv'), index=False)

print("Data generated successfully!")
