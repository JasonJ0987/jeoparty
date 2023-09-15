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
