DROP TABLE IF EXISTS cooks;
DROP TABLE IF EXISTS consumers;
DROP TABLE IF EXISTS meals;
DROP TABLE IF EXISTS reviews;

CREATE TABLE cooks (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE consumers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE meals (
  id SERIAL PRIMARY KEY,
  cuisine_type VARCHAR NOT NULL,
  ingredients TEXT NOT NULL,
  description TEXT NOT NULL,
  quantity INT NOT NULL,
  pickup_day DATE NOT NULL,
  pickup_time TIME NOT NULL,
  pickup_address TEXT NOT NULL,
  price INT NOT NULL,
  cook_id INT NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  cook_id INT NOT NULL,
  user_id INT NOT NULL,
  rating INT NOT NULL,
  review TEXT NOT NULL,
  date DATE NOT NULL
);
