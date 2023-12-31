from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from routers import category, question, player, game
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
app.include_router(game.router, tags=["games"])

# To Solve:

# Start on front end!
