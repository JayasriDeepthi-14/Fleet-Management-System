# User Model

## Table Name
users

## Description
Stores all registered users in the system.

## Columns

| Column Name | Data Type | Description |
|------------|-----------|-------------|
| id | UUID / INT | Primary Key |
| name | VARCHAR | User full name |
| email | VARCHAR | Unique email |
| password | VARCHAR | User password (plain text) |
| role | ENUM | customer / owner / driver |
| created_at | TIMESTAMP | Account creation time |

## Constraints

- id → Primary Key
- email → Unique
- role → Must be: customer, owner, driver

## Relationships

- One user (owner) → Many vehicles
- One user (customer) → Many trips
- One user (driver) → Assigned to vehicles
