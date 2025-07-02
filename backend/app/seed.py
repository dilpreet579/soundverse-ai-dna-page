from sqlalchemy.orm import Session
from database import SessionLocal
from models import DNAArtist


def seed():
    db: Session = SessionLocal()
    artists = [
        DNAArtist(
            name="Aether Bloom",
            image_url="https://images.unsplash.com/photo-1605460504109-f347ec557483?w=500&q=75&auto=format&fit=crop",
            genres="Ambient",
            description="Aether Bloom crafts ambient soundscapes inspired by nature and deep space.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        ),
        DNAArtist(
            name="Nova Pulse",
            image_url="https://images.unsplash.com/photo-1712530967389-e4b5b16b8500?w=500&q=75&auto=format&fit=crop",
            genres="Electronic, Synth Pop",
            description="High-energy electronic producer known for futuristic synths and driving beats.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        ),
        DNAArtist(
            name="Echo Sun",
            image_url="https://images.unsplash.com/photo-1635352124191-a387966f7b63?w=500&q=75&auto=format&fit=crop",
            genres="Lo-Fi, Chillhop",
            description="Echo Sun blends lo-fi textures with vintage jazz vibes for a relaxing experience.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        ),
        DNAArtist(
            name="Velvet Static",
            image_url="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&q=75&auto=format&fit=crop",
            genres="Synthwave, Retro",
            description="Retro-futuristic synthwave artist evoking 80s nostalgia and neon dreams.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        ),
        DNAArtist(
            name="Crimson Chords",
            image_url="https://images.unsplash.com/photo-1722841772420-4c45e490e283?w=500&q=75&auto=format&fit=crop",
            genres="Indie Rock, Alternative",
            description="Raw indie rock energy fused with poetic lyricism and analog warmth.",
            audio_preview_url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        ),
    ]
    db.add_all(artists)
    db.commit()
    db.close()


if __name__ == "__main__":
    seed()
