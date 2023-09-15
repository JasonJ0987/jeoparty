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
]
