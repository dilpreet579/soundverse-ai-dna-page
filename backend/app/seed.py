from sqlalchemy.orm import Session
from database import SessionLocal
from models import DNAArtist


def seed():
    db: Session = SessionLocal()
    artists = [
        DNAArtist(
            name="SonicBloom",
            image_url="https://images.unsplash.com/photo-1605460504109-f347ec557483?w=500&q=75&auto=format&fit=crop",
            genres="Electropop",
            description="A vibrant blend of synth and soul, combining electric rhythms with pop vocals.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            tags=["synth", "electronic", "groovy"]
        ),
        DNAArtist(
            name="EchoVerse",
            image_url="https://images.unsplash.com/photo-1712530967389-e4b5b16b8500?w=500&q=75&auto=format&fit=crop",
            genres="Ambient",
            description="Soothing textures with evolving soundscapes perfect for background focus.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            tags=["ambient", "space", "relax"]
        ),
        DNAArtist(
            name="NeonThrust",
            image_url="https://images.unsplash.com/photo-1635352124191-a387966f7b63?w=500&q=75&auto=format&fit=crop",
            genres="Synthwave",
            description="Retro-inspired tracks with heavy analog synth and 80s drums.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            tags=["retro", "80s", "synthwave"]
        ),
        DNAArtist(
            name="VelvetPulse",
            image_url="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&q=75&auto=format&fit=crop",
            genres="Lo-fi",
            description="Warm dusty beats with jazzy chords, perfect for late-night work sessions.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
            tags=["lofi", "jazzhop", "study"]
        ),
        DNAArtist(
            name="GlitchAura",
            image_url="https://images.unsplash.com/photo-1722841772420-4c45e490e283?w=500&q=75&auto=format&fit=crop",
            genres="Experimental",
            description="Breaks the rules with glitch textures, odd time signatures, and abstract melodies.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            tags=["glitch", "idm", "avant-garde"]
        )
    ]
    db.add_all(artists)
    db.commit()
    db.close()


if __name__ == "__main__":
    seed()
