from sqlalchemy.orm import Session
from . import models, schemas

def get_artists(db: Session):
    return db.query(models.DNAArtist).all()

def get_artist(db: Session, artist_id: int):
    return db.query(models.DNAArtist).filter(models.DNAArtist.id == artist_id).first()

def create_artist(db: Session, artist: schemas.DNAArtistCreate):
    db_artist = models.DNAArtist(**artist.dict())
    db.add(db_artist)
    db.commit()
    db.refresh(db_artist)
    return db_artist 