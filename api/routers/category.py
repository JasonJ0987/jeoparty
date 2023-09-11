from fastapi import APIRouter, Depends
from api.routers.models import categories
from db import CategoryQueries

router = APIrouter()

@router.get("/api/categories/", response_model=categories)
async def get_categories(
  queries: CategoryQueries = Depends()
):
  result = queries.get_all_categories()
  return result


@router.post("/api/categories/", response_model=categories)
async def create_category(
  ntitle: str,
  queries: CategoryQueries = Depends(),
):
  result= queries.create_category(ntitle)
  return result
