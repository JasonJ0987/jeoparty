from fastapi import APIRouter, Depends
from routers.models import PlayersIn, PlayersOut
from db import PlayerQueries
from typing import List

router = APIRouter()

@router.get("/api/players/", response_model=List[PlayersOut])
def get_players(
  queries: PlayerQueries = Depends()
):
  result = queries.get_all_players()
  return result

@router.post("/api/players/", response_model=PlayersOut)
def create_player(
  player_info: PlayersIn,
  queries: PlayerQueries = Depends()
):
  result = queries.create_players(player_info)
  return result

@router.get("/api/players/{player_id}", response_model=PlayersOut)
def get_one_player(
  player_id: int,
  queries: PlayerQueries = Depends()
):
  result = queries.get_one_player(player_id)
  return result

@router.put("/api/players/{player_id}", response_model=PlayersOut)
def rename_player(
  name: str,
  player_id: int,
  queries: PlayerQueries = Depends()
):
  result = queries.rename_player(name, player_id)
  return result

@router.put("/api/players/points/{player_id}", response_model=PlayersOut)
def update_points(
  points: int,
  player_id: int,
  queries: PlayerQueries = Depends()
):
  result = queries.update_points(points, player_id)
  return result

@router.delete("/api/players/{player_id}", response_model=bool)
def delete_players(
  player_id: int,
  queries: PlayerQueries = Depends()
):
  try:
    queries.delete_player(player_id)
    return True
  except:
    return False
