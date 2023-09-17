from fastapi import APIRouter, Depends
from routers.models import QuestionsIn, QuestionsOut
from db import QuestionQueries
from typing import List

router = APIRouter()

@router.get("/api/questions/", response_model=List[QuestionsOut])
def get_questions(
  queries: QuestionQueries = Depends()
):
  result = queries.get_all_questions()
  return result

@router.post("/api/questions/", response_model=QuestionsOut)
def create_question(
  question_info: QuestionsIn,
  queries: QuestionQueries = Depends()
):
  result = queries.create_question(question_info)
  return result

@router.get("/api/questions/{category_id}", response_model=List[QuestionsOut])
def get_questions_by_category(
  category_id,
  queries: QuestionQueries = Depends()
):
  result = queries.get_questions_by_category(category_id)
  return result
