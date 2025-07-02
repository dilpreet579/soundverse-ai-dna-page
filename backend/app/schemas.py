from pydantic import BaseModel
from typing import Optional

class DNAArtistBase(BaseModel):
    name: str
    image_url: str
    genres: str
    description: Optional[str] = None
    audio_preview_url: Optional[str] = None

class DNAArtistCreate(DNAArtistBase):
    pass

class DNAArtistResponse(DNAArtistBase):
    id: int

    class Config:
        from_attributes = True 