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

@router.get("/api/questions/category/{category_id}", response_model=List[QuestionsOut])
def get_questions_by_category(
  category_id: int,
  queries: QuestionQueries = Depends()
):
  result = queries.get_questions_by_category(category_id)
  return result

@router.get("/api/questions/{question_id}", response_model=QuestionsOut)
def get_one_question(
  question_id: int,
  queries: QuestionQueries = Depends()
):
  result = queries.get_one_question(question_id)
  return result

@router.put("/api/questions/{question_id}", response_model=QuestionsOut)
def update_question(
  question_id: int,
  new_question: QuestionsIn,
  queries: QuestionQueries = Depends()
):
  result = queries.update_question(question_id, new_question)
  return result

@router.delete("/api/questions/{question_id}", response_model=bool)
def delete_question(
  question_id: int,
  queries: QuestionQueries = Depends()
):
  try:
    queries.delete_question(question_id)
    return True
  except:
    return False
