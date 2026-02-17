# Trip Model

## Table Name
trips

## Description
Stores trip information created by customers.

## Columns

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | UUID / INT | Primary Key |
| customer_id | UUID / INT | Trip customer |
| vehicle_id | UUID / INT | Used vehicle |
| start_date | DATE | Trip start |
| end_date | DATE | Trip end |
| location | VARCHAR | Destination |
| distance_km | FLOAT | Distance traveled |
| passengers | INT | Passenger count |
| tripCost | FLOAT | Total cost |
| isCompleted | BOOLEAN | Trip status |
| created_at | TIMESTAMP | Created time |

## Constraints

- id → Primary Key
- customer_id → Foreign Key
- vehicle_id → Foreign Key
- passengers ≤ allowed_passengers

## Relationships

- Many trips → One customer
- Many trips → One vehicle
