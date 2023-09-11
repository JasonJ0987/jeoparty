from pydantic import BaseModel
from typing import List


class categories(BaseModel):
  id: int
  title: str


class questions(BaseModel):
  id: int
  question: str
  answer: str
  category_id: List[categories]


