from fastapi import APIRouter, Depends
from routers.models import CategoriesIn, CategoriesOut
from db import CategoryQueries
from typing import List

router = APIRouter()

@router.get("/api/categories/", response_model=List[CategoriesOut])
def get_categories(
  queries: CategoryQueries = Depends()
):
  result = queries.get_all_categories()
  return result


@router.post("/api/categories/", response_model=CategoriesOut)
def create_category(
  title: CategoriesIn,
  queries: CategoryQueries = Depends()
):
  result = queries.create_category(title)
  return result


@router.delete("/api/categories/{category_id}", response_model=bool)
def delete_category(
  category_id,
  queries: CategoryQueries = Depends()
):
  queries.delete_category(category_id)
  return True
