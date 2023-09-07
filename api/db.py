# where all the querying happens

# import os
# from psycopg_pool import ConnectionPool
# from api.routers.models import (
#   CategoryIn,
#   CategoryOut,
#   QuestionIn,
#   QuestionOut
# )

# pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


# class CategoryQueries:
#   def get_all_categories(self):
#     with pool.connection() as conn:
#       with conn.cursor() as cur:
#         cur.execute(
#           """
#             SELECT *
#             FROM title
#           """
#         )
#         results = []
#         for row in cur.fetchall():
#           record = {}
#           for i, column in enumerate(cur.description):
#             record[column.name] = row[i]
#           results.append(record)
#         return results
