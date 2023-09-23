steps = [
  [
    """
    CREATE TABLE Players (
      id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      points INTEGER NOT NULL
    );
    """,
    """
    DROP TABLE Players;
    """,
  ],
  [
    """
    CREATE TABLE Categories (
      id SERIAL PRIMARY KEY NOT NULL,
      title VARCHAR(255) NOT NULL
    );
    """,
    """
    DROP TABLE Categories;
    """,
  ],
  [
    """
    CREATE TABLE Questions (
      id SERIAL PRIMARY KEY NOT NULL,
      question VARCHAR(255) NOT NULL,
      answer VARCHAR(255) NOT NULL,
      points INTEGER NOT NULL,
      category_id INTEGER REFERENCES categories("id") ON DELETE CASCADE
    );
    """,
    """
    DROP TABLE Questions;
    """,
  ],
  [
    """
    CREATE TABLE Games (
      id SERIAL PRIMARY KEY NOT NULL,
      category_1 INTEGER REFERENCES categories("id") ON DELETE SET NULL,
      category_2 INTEGER REFERENCES categories("id") ON DELETE SET NULL,
      category_3 INTEGER REFERENCES categories("id") ON DELETE SET NULL,
      category_4 INTEGER REFERENCES categories("id") ON DELETE SET NULL,
      category_5 INTEGER REFERENCES categories("id") ON DELETE SET NULL,
      question_1 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_2 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_3 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_4 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_5 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_6 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_7 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_8 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_9 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_10 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_11 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_12 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_13 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_14 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_15 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_16 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_17 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_18 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_19 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_20 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_21 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_22 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_23 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_24 INTEGER REFERENCES questions("id") ON DELETE SET NULL,
      question_25 INTEGER REFERENCES questions("id") ON DELETE SET NULL
    );
    """,
    """
    DROP TABLE Games;
    """,
  ],
]


# consider making question types be wav files
