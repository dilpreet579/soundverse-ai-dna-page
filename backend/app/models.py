from sqlalchemy import Column, Integer, String, Text
from .database import Base

class DNAArtist(Base):
    __tablename__ = "dna_artists"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    image_url = Column(String(255), nullable=False)
    genres = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    audio_preview_url = Column(String(255), nullable=True) 