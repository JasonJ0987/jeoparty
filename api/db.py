# where all the querying happens

import os
from psycopg_pool import ConnectionPool
from routers.models import (
  CategoriesIn,
  CategoriesOut,
  QuestionsIn,
  QuestionsOut,
  PlayersIn,
  PlayersOut
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

  def create_category(self, category: CategoriesIn) -> CategoriesOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          INSERT INTO categories (title)
          VALUES (%s)
          RETURNING id, title
          """,
          [category.title],
        )
        id = result.fetchone()[0]
        return CategoriesOut(
          id=id,
          title=category.title
        )

  def delete_category(self, category_id: int):
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          DELETE FROM categories
          WHERE id = %s
          """,
          [category_id],
        )


class PlayerQueries:
  def get_all_players(self):
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          SELECT *
          FROM players
          """
        )
        results = []
        for row in cur.fetchall():
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
          results.append(record)
        return results

  def create_players(self, player: PlayersIn) -> PlayersOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          INSERT INTO players (name, points)
          VALUES (%s, %s)
          RETURNING id, name, points
          """,
          [player.name, player.points],
        )
        id = result.fetchone()[0]
        return PlayersOut(
          id=id,
          name=player.name,
          points=player.points
        )


class QuestionQueries:
  def get_all_questions(self):
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          SELECT *
          FROM questions
          """
        )
        results = []
        for row in cur.fetchall():
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
          results.append(record)
        return results

  def create_question(self, question: QuestionsIn) -> QuestionsOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          INSERT INTO questions (question, answer, points, category_id)
          VALUES (%s, %s, %s, %s)
          RETURNING id, question, answer, points, category_id
          """,
          [question.question, question.answer, question.points, question.category_id]
        )
        id = result.fetchone()[0]
        return QuestionsOut(
          id=id,
          question=question.question,
          answer=question.answer,
          points=question.points,
          category_id=question.category_id
        )

  def get_questions_by_category(self, category_id:int):
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          SELECT *
          FROM questions
          WHERE category_id = %s
          """,
          [category_id],
        )
        results = []
        for row in cur.fetchall():
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
          results.append(record)
        return results
