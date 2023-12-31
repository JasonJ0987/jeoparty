import os
from psycopg_pool import ConnectionPool
from routers.models import (
  CategoriesIn,
  CategoriesOut,
  QuestionsIn,
  QuestionsOut,
  PlayersIn,
  PlayersOut,
  GamesIn,
  GamesOut,
)
from typing import List

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


class CategoryQueries:
  def get_all_categories(self) -> List[CategoriesOut]:
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
        cur.execute(
          """
          DELETE FROM categories
          WHERE id = %s
          """,
          [category_id],
        )

  def get_one_category(self, category_id: int) -> CategoriesOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          SELECT *
          FROM categories
          WHERE id = %s
          """,
          [category_id],
        )
        title=result.fetchone()[1]
        return CategoriesOut(
          id=category_id,
          title=title
        )

  def rename_category(self, new_title: str, category_id: int) -> CategoriesOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          UPDATE categories
          SET title = %s
          WHERE id = %s
          RETURNING id, title
          """,
          [new_title, category_id],
        )
        record = None
        row = cur.fetchone()
        if row is not None:
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
        return record


class PlayerQueries:
  def get_all_players(self) -> List[PlayersOut]:
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

  def get_one_player(self, player_id: int) -> PlayersOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          SELECT *
          FROM players
          WHERE id = %s
          """,
          [player_id],
        )
        data = result.fetchone()
        return PlayersOut(
          id=player_id,
          name=data[1],
          points=data[2]
        )

  def rename_player(self, name: str, player_id: int) -> PlayersOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          UPDATE players
          SET name = %s
          WHERE id = %s
          RETURNING id, name, points
          """,
          [name, player_id],
        )
        record = None
        row = cur.fetchone()
        if row is not None:
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
        return record

  def update_points(self, points:int, player_id: int) -> PlayersOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          UPDATE players
          SET points = %s
          WHERE id = %s
          RETURNING id, name, points
          """,
          [points, player_id],
        )
        record = None
        row = cur.fetchone()
        if row is not None:
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
        return record

  def delete_player(self, player_id: int):
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          DELETE FROM players
          WHERE id = %s
          """,
          [player_id],
        )


class QuestionQueries:
  def get_all_questions(self) -> List[QuestionsOut]:
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
          INSERT INTO questions (question, answer, points, double_j, category_id)
          VALUES (%s, %s, %s, %s, %s)
          RETURNING id, question, answer, points, double_j, category_id
          """,
          [question.question, question.answer, question.points, question.double_j, question.category_id]
        )
        id = result.fetchone()[0]
        return QuestionsOut(
          id=id,
          question=question.question,
          answer=question.answer,
          points=question.points,
          double_j=question.double_j,
          category_id=question.category_id
        )

  def get_questions_by_category(self, category_id: int) -> List[QuestionsOut]:
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

  def get_one_question(self, question_id: int) -> QuestionsOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          SELECT *
          FROM questions
          WHERE id = %s
          """,
          [question_id]
        )
        data = result.fetchone()
        return QuestionsOut(
          id=question_id,
          question=data[1],
          answer=data[2],
          points=data[3],
          double_j=data[4],
          category_id=data[5]
        )

  def update_question(self, question_id: int, new_question: QuestionsIn) -> QuestionsOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          UPDATE questions
          SET
            question = %s,
            answer = %s,
            points = %s,
            double_j = %s,
            category_id = %s
          WHERE id = %s
          RETURNING
          id,
          question,
          answer,
          points,
          double_j,
          category_id
          """,
          [
            new_question.question,
            new_question.answer,
            new_question.points,
            new_question.double_j,
            new_question.category_id,
            question_id
          ],
        )
        record = None
        row = cur.fetchone()
        if row is not None:
          record = {}
          
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
        return record

  def delete_question(self, question_id: int):
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          DELETE FROM questions
          WHERE id = %s
          """,
          [question_id]
        )


class GameQueries:
  def get_all_games(self) -> List[GamesOut]:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          SELECT *
          FROM games
          """
        )
        results = []
        for row in cur.fetchall():
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
          results.append(record)
        return results

  def create_game(self, game_info: GamesIn) -> GamesOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        result = cur.execute(
          """
          INSERT INTO games (
            category_1,
            category_2,
            category_3,
            category_4,
            category_5,
            question_1,
            question_2,
            question_3,
            question_4,
            question_5,
            question_6,
            question_7,
            question_8,
            question_9,
            question_10,
            question_11,
            question_12,
            question_13,
            question_14,
            question_15,
            question_16,
            question_17,
            question_18,
            question_19,
            question_20,
            question_21,
            question_22,
            question_23,
            question_24,
            question_25
          )
          VALUES (
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s
          )
          RETURNING
            id,
            category_1,
            category_2,
            category_3,
            category_4,
            category_5,
            question_1,
            question_2,
            question_3,
            question_4,
            question_5,
            question_6,
            question_7,
            question_8,
            question_9,
            question_10,
            question_11,
            question_12,
            question_13,
            question_14,
            question_15,
            question_16,
            question_17,
            question_18,
            question_19,
            question_20,
            question_21,
            question_22,
            question_23,
            question_24,
            question_25
          """,
          [
            game_info.category_1,
            game_info.category_2,
            game_info.category_3,
            game_info.category_4,
            game_info.category_5,
            game_info.question_1,
            game_info.question_2,
            game_info.question_3,
            game_info.question_4,
            game_info.question_5,
            game_info.question_6,
            game_info.question_7,
            game_info.question_8,
            game_info.question_9,
            game_info.question_10,
            game_info.question_11,
            game_info.question_12,
            game_info.question_13,
            game_info.question_14,
            game_info.question_15,
            game_info.question_16,
            game_info.question_17,
            game_info.question_18,
            game_info.question_19,
            game_info.question_20,
            game_info.question_21,
            game_info.question_22,
            game_info.question_23,
            game_info.question_24,
            game_info.question_25
          ],
        )
        id = result.fetchone()[0]
        return GamesOut(
          id=id,
          category_1=game_info.category_1,
          category_2=game_info.category_2,
          category_3=game_info.category_3,
          category_4=game_info.category_4,
          category_5=game_info.category_5,
          question_1=game_info.question_1,
          question_2=game_info.question_2,
          question_3=game_info.question_3,
          question_4=game_info.question_4,
          question_5=game_info.question_5,
          question_6=game_info.question_6,
          question_7=game_info.question_7,
          question_8=game_info.question_8,
          question_9=game_info.question_9,
          question_10=game_info.question_10,
          question_11=game_info.question_11,
          question_12=game_info.question_12,
          question_13=game_info.question_13,
          question_14=game_info.question_14,
          question_15=game_info.question_15,
          question_16=game_info.question_16,
          question_17=game_info.question_17,
          question_18=game_info.question_18,
          question_19=game_info.question_19,
          question_20=game_info.question_20,
          question_21=game_info.question_21,
          question_22=game_info.question_22,
          question_23=game_info.question_23,
          question_24=game_info.question_24,
          question_25=game_info.question_25
        )

  def update_game(self, gd, game_id: int) -> GamesOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        params = [
          gd.category_1,
          gd.category_2,
          gd.category_3,
          gd.category_4,
          gd.category_5,
          gd.question_1,
          gd.question_2,
          gd.question_3,
          gd.question_4,
          gd.question_5,
          gd.question_6,
          gd.question_7,
          gd.question_8,
          gd.question_9,
          gd.question_10,
          gd.question_11,
          gd.question_12,
          gd.question_13,
          gd.question_14,
          gd.question_15,
          gd.question_16,
          gd.question_17,
          gd.question_18,
          gd.question_19,
          gd.question_20,
          gd.question_21,
          gd.question_22,
          gd.question_23,
          gd.question_24,
          gd.question_25,
          game_id,
        ]
        cur.execute(
          """
          UPDATE games
          SET
            category_1 = %s,
            category_2 = %s,
            category_3 = %s,
            category_4 = %s,
            category_5 = %s,
            question_1 = %s,
            question_2 = %s,
            question_3 = %s,
            question_4 = %s,
            question_5 = %s,
            question_6 = %s,
            question_7 = %s,
            question_8 = %s,
            question_9 = %s,
            question_10 = %s,
            question_11 = %s,
            question_12 = %s,
            question_13 = %s,
            question_14 = %s,
            question_15 = %s,
            question_16 = %s,
            question_17 = %s,
            question_18 = %s,
            question_19 = %s,
            question_20 = %s,
            question_21 = %s,
            question_22 = %s,
            question_23 = %s,
            question_24 = %s,
            question_25 = %s
            WHERE id = %s
            RETURNING
            id,
            category_1,
            category_2,
            category_3,
            category_4,
            category_5,
            question_1,
            question_2,
            question_3,
            question_4,
            question_5,
            question_6,
            question_7,
            question_8,
            question_9,
            question_10,
            question_11,
            question_12,
            question_13,
            question_14,
            question_15,
            question_16,
            question_17,
            question_18,
            question_19,
            question_20,
            question_21,
            question_22,
            question_23,
            question_24,
            question_25
          """,
          params,
        )
        record = None
        row = cur.fetchone()
        if row is not None:
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
        return record

  def delete_game(self, game_id: int):
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          DELETE FROM games
          WHERE id = %s
          """,
          [game_id],
        )

  def get_one_game(self, game_id: int) -> GamesOut:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
          """
          SELECT *
          FROM games
          WHERE id = %s
          """,
          [game_id],
        )
        record = None
        for row in cur.fetchall():
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
        return record
