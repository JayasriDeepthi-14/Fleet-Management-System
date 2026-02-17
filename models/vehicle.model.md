# Vehicle Model

## Table Name
vehicles

## Description
Stores all vehicles registered by owners.

## Columns

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | UUID / INT | Primary Key |
| name | VARCHAR | Vehicle name |
| registration_number | VARCHAR | Unique number |
| allowed_passengers | INT | Max passengers |
| isAvailable | BOOLEAN | Availability status |
| driver_id | UUID / INT | Assigned driver |
| rate_per_km | FLOAT | Cost per km |
| owner_id | UUID / INT | Vehicle owner |
| created_at | TIMESTAMP | Created time |

## Constraints

- id → Primary Key
- registration_number → Unique
- owner_id → Foreign Key
- driver_id → Nullable

## Relationships

- Many vehicles → One owner
- One vehicle → One driver
- One vehicle → Many trips
