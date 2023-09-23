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
  category_1: int | None
  category_2: int | None
  category_3: int | None
  category_4: int | None
  category_5: int | None
  question_1: int | None
  question_2: int | None
  question_3: int | None
  question_4: int | None
  question_5: int | None
  question_6: int | None
  question_7: int | None
  question_8: int | None
  question_9: int | None
  question_10: int | None
  question_11: int | None
  question_12: int | None
  question_13: int | None
  question_14: int | None
  question_15: int | None
  question_16: int | None
  question_17: int | None
  question_18: int | None
  question_19: int | None
  question_20: int | None
  question_21: int | None
  question_22: int | None
  question_23: int | None
  question_24: int | None
  question_25: int | None


class GamesOut(GamesIn):
  id: int
