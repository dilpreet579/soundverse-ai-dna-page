from pydantic import BaseModel
from typing import Optional, List

class DNAArtistBase(BaseModel):
    name: str
    image_url: str
    genres: str
    description: Optional[str] = None
    audio_preview_url: Optional[str] = None
    tags: Optional[List[str]] = None

class DNAArtistCreate(DNAArtistBase):
    pass

class DNAArtistResponse(DNAArtistBase):
    id: int
    tags: Optional[List[str]] = None

    class Config:
        from_attributes = True 