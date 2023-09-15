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
