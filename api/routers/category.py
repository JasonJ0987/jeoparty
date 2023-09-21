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
  category_id: int,
  queries: CategoryQueries = Depends()
):
  try:
    queries.delete_category(category_id)
    return True
  except:
    return False


@router.get("/api/categories/{category_id}", response_model=CategoriesOut)
def get_one_category(
  category_id: int,
  queries: CategoryQueries = Depends()
):
  result = queries.get_one_category(category_id)
  return result


@router.put("/api/categories/{category_id}", response_model=CategoriesOut)
def rename_category(
  new_title: str,
  category_id: int,
  queries: CategoryQueries = Depends()
):
  result = queries.rename_category(new_title, category_id)
  return result
