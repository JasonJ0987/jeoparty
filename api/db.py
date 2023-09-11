# where all the querying happens

import os
from psycopg_pool import ConnectionPool
from routers.models import (
  categories,
  questions
)

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


class CategoryQueries:
  def get_all_categories(self):
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
            SELECT *
            FROM categories
          """
        )
        results = []
        for row in cur.fetchall():
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
          results.append(record)
        return results

  def create_category(self, ntitle: str) -> categories:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          INSERT INTO categories (
            title
          )
          VALUES (%s)
          RETURNING id, title
          """
          [ntitle]
        )
        id = result.fetchone()[0]
        return categories(
          id=id,
          title=ntitle
        )
