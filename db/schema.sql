DROP TABLE IF EXISTS meal_counter;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS meals;
DROP TABLE IF EXISTS cooks;
DROP TABLE IF EXISTS consumers;

CREATE TABLE cooks (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR NOT NULL,
  neighborhood VARCHAR(25) NOT NULL,
  address TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE consumers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE meals (
  id SERIAL PRIMARY KEY,
  cuisine_type VARCHAR NOT NULL,
  ingredients TEXT NOT NULL,
  description TEXT NOT NULL,
  quantity INT NOT NULL,
  counter INT NOT NULL,
  pickup_day DATE NOT NULL,
  pickup_time TEXT NOT NULL,
  price INT NOT NULL,
  cook_id INT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  cook_id INT NOT NULL,
  consumer_id INT NOT NULL,
  rating INT NOT NULL,
  review TEXT NOT NULL,
  date DATE NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE meal_counter (
  id SERIAL PRIMARY KEY,
  meal_id INT NOT NULL,
  consumer_id INT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

ALTER TABLE ONLY meals
  ADD CONSTRAINT meals_cook_id_fkey
  FOREIGN KEY (cook_id)
  REFERENCES cooks(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE;

ALTER TABLE ONLY reviews
  ADD CONSTRAINT reviews_cook_id_fkey
  FOREIGN KEY (cook_id)
  REFERENCES cooks(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE;

ALTER TABLE ONLY reviews
  ADD CONSTRAINT reviews_consumer_id_fkey
  FOREIGN KEY (consumer_id)
  REFERENCES consumers(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE;

ALTER TABLE ONLY meal_counter
  ADD CONSTRAINT meal_counter_consumer_id_fkey
  FOREIGN KEY (consumer_id)
  REFERENCES consumers(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE;

ALTER TABLE ONLY meal_counter
  ADD CONSTRAINT meal_counter_meal_id_fkey
  FOREIGN KEY (meal_id)
  REFERENCES meals(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE;
