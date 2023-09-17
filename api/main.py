from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from routers import category, question, player
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(category.router, tags=["categories"])
app.include_router(question.router, tags=["questions"])
app.include_router(player.router, tags=["players"])

# TODO: Bomb database then add a new model for "game" that includes
# 1. 5 categories and 5 questions per category and three players
# 2. The ability to update a game's settings
# 3. The ability to create a new game, maybe for double jeopardy rounds
# 4. The ability to delete a game
