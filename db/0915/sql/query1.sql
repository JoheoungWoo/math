create database minsukdb;

use minsukdb;


-- schema.sql (src/main/resources/)
CREATE TABLE IF NOT EXISTS users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE
);

-- data.sql
INSERT INTO users (user_name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');