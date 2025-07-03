from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to Soundverse AI DNA Page. The backend is running."}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/artists", response_model=list[schemas.DNAArtistResponse])
def read_artists(db: Session = Depends(get_db)):
    return crud.get_artists(db)

@app.get("/artists/{artist_id}", response_model=schemas.DNAArtistResponse)
def read_artist(artist_id: int, db: Session = Depends(get_db)):
    artist = crud.get_artist(db, artist_id)
    if artist is None:
        raise HTTPException(status_code=404, detail="Artist not found")
    return artist

@app.post("/artists", response_model=schemas.DNAArtistResponse)
def create_artist(artist: schemas.DNAArtistCreate, db: Session = Depends(get_db)):
    return crud.create_artist(db, artist) 