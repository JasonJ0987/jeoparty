from fastapi import APIRouter, Depends
from routers.models import GamesIn, GamesOut
from db import GameQueries
from typing import List


router = APIRouter()

@router.get("/api/games/", response_model=List[GamesOut])
def get_games(
  queries: GameQueries = Depends()
):
  result = queries.get_all_games()
  return result


@router.post("/api/games/", response_model=GamesOut)
def create_games(
  game_info: GamesIn,
  queries: GameQueries = Depends()
):
  result = queries.create_game(game_info)
  return result


@router.put("/api/games/{game_id}", response_model=GamesOut)
def update_games(
  gd: GamesIn,
  game_id: int,
  queries: GameQueries = Depends()
):
  result = queries.update_game(gd, game_id)
  return result


@router.delete("/api/games/{game_id}", response_model=bool)
def delete_games(
  game_id: int,
  queries: GameQueries = Depends()
):
  queries.delete_game(game_id)
  return True


@router.get("/api/games/{game_id}", response_model=GamesOut)
def get_one_game(
  game_id: int,
  queries: GameQueries = Depends()
):
  result = queries.get_one_game(game_id)
  return result
