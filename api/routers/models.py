from pydantic import BaseModel
from typing import List



class PlayersIn(BaseModel):
  name: str
  points: int


class PlayersOut(PlayersIn):
  id: int


class CategoriesIn(BaseModel):
  title: str


class CategoriesOut(CategoriesIn):
 id: int


class QuestionsIn(BaseModel):
  question: str
  answer: str
  points: int
  category_id: int


class QuestionsOut(QuestionsIn):
  id: int


class GamesIn(BaseModel):
  category_1: int
  category_2: int
  category_3: int
  category_4: int
  category_5: int
  question_1: int
  question_2: int
  question_3: int
  question_4: int
  question_5: int
  question_6: int
  question_7: int
  question_8: int
  question_9: int
  question_10: int
  question_11: int
  question_12: int
  question_13: int
  question_14: int
  question_15: int
  question_16: int
  question_17: int
  question_18: int
  question_19: int
  question_20: int
  question_21: int
  question_22: int
  question_23: int
  question_24: int
  question_25: int


class GamesOut(GamesIn):
  id: int
