'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const addIcon = {src: '/icons/add.svg', alt: 'Add', width: 45, height: 45}

export default function Step3ProfileCreation() {
  // Fetch DNA artists from backend
  const [artists, setArtists] = useState<any[]>([]);
  const [loadingArtists, setLoadingArtists] = useState(true);
  const [artistError, setArtistError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/artists')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch DNA artists');
        return res.json();
      })
      .then(data => setArtists(data))
      .catch(err => setArtistError(err.message))
      .finally(() => setLoadingArtists(false));
  }, []);

  const [creatorName, setCreatorName] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const [form, setForm] = useState({
    visibility: 'Public',
    price: '$9.99',
    license: 'Distribution',
    tracks: 'Visible',
    partner: 'Yes',
  })

  const handleTagAdd = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()])
      setNewTag('')
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setImage(file)
  }

  const handleDone = () => {
    console.log({ creatorName, description, tags, ...form, image })
  }

  return (
    <section className="px-6 md:px-12 py-12" id="step-3">
      <h2 className="text-white text-sm mb-2">Step 3</h2>
      <h1 className="text-white text-2xl font-semibold mb-6">Profile Creation</h1>

      {/* DNA Artists List (from backend) */}
      <div className="mb-10">
        <h3 className="text-lg font-bold mb-4">Suggested DNA Artists</h3>
        {loadingArtists && <div className="text-gray-400">Loading artists...</div>}
        {artistError && <div className="text-red-400">{artistError}</div>}
        {!loadingArtists && !artistError && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map(artist => (
              <div key={artist.id} className="bg-[#222] rounded-xl p-4 flex flex-col gap-2 border border-[#333]">
                <div className="flex items-center gap-4">
                  <img src={artist.image_url} alt={artist.name} className="w-16 h-16 rounded-full object-cover border border-[#444]" />
                  <div>
                    <div className="font-semibold text-base">{artist.name}</div>
                    <div className="text-xs text-gray-400">{artist.genres}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 mt-2">{artist.description}</div>
                {artist.tags && artist.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {artist.tags.map((tag: string, i: number) => (
                      <span key={i} className="bg-[#333] px-2 py-1 rounded-full text-xs text-white">{tag}</span>
                    ))}
                  </div>
                )}
                {artist.audio_preview_url && (
                  <audio controls className="w-full mt-2">
                    <source src={artist.audio_preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl bg-[#1A1A1A] p-6 md:p-10 border border-[#2A2A2A] text-white max-w-7xl flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Left - Form */}
        <div className="flex-1 space-y-4 text-sm">
          {/* Creator Name */}
          <div>
            <label className="block mb-1">Creator Name</label>
            <input
              type="text"
              placeholder="Name such as Skrillex, Coldplay"
              value={creatorName}
              onChange={(e) => setCreatorName(e.target.value)}
              className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-full focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              placeholder="Up to 300 characters"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={300}
              className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-xl resize-none h-20"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-1">Tags</label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
                className="flex-1 bg-[#2A2A2A] text-white px-4 py-2 rounded-full"
              />
              <button
                onClick={handleTagAdd}
              >
                <Image src={addIcon.src} alt={addIcon.alt} width={addIcon.width} height={addIcon.height} className="cursor-pointer" />
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#333] px-3 py-1 rounded-full text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Dropdown fields */}
          {[
            { label: 'DNA Visibility', key: 'visibility', options: ['Public', 'Private', 'Draft'] },
            { label: 'Price', key: 'price', options: ['$9.99', '$4.99', 'Free'] },
            {
              label: 'License',
              key: 'license',
              options: ['Distribution', 'Royalty Free', 'Sample', 'Sync', 'Full Ownership'],
            },
            { label: 'Tracks', key: 'tracks', options: ['Visible', 'Invisible'] },
            { label: 'Become Partner', key: 'partner', options: ['Yes', 'No'] },
          ].map(({ label, key, options }) => (
            <div key={key}>
              <label className="block mb-1">{label}</label>
              <select
                value={form[key as keyof typeof form]}
                onChange={(e) =>
                  setForm({ ...form, [key]: e.target.value })
                }
                className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-full"
              >
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Right - Upload Picture */}
        <div className="flex flex-col items-center justify-start w-full md:w-1/3">
          <div className="relative w-40 h-40 rounded-full border border-[#333] bg-[#121212] flex items-center justify-center">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <Image src={addIcon.src} alt={addIcon.alt} width={addIcon.width} height={addIcon.height} />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="profile-upload"
            onChange={handleImageChange}
          />
          <label
            htmlFor="profile-upload"
            className="mt-4 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white px-6 py-2 rounded-full cursor-pointer text-sm"
          >
            Upload Picture
          </label>
        </div>
        </div>
        {/* Done Button */}
      <div className="flex justify-center">
        <button
          onClick={handleDone}
          className="bg-[#007D49] hover:bg-[green-800] transition px-10 py-3 rounded-full font-medium text-white text-sm cursor-pointer"
        >
          Done
        </button>
      </div>
      </div>

      
    </section>
  )
}
