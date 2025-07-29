import React, { useState, useEffect } from 'react';
import {FileText } from "lucide-react";
import './notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [draftNote, setDraftNote] = useState({ subject: '', title: '', description: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editDraft, setEditDraft] = useState({ subject: '', title: '', description: '' });

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchNotes = async () => {
      if (!token) return;
      try {
        const res = await fetch('/SummaryCall/note', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          const enriched = data.map(note => ({
            ...note,
            image: `https://picsum.photos/seed/${note._id}/100/100`,
          }));
          setNotes(enriched);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchNotes();
  }, [token]);

  const handleDraftChange = (e) => {
    const { name, value } = e.target;
    setDraftNote({ ...draftNote, [name]: value });
  };
  

 const handleSaveNote = async () => {
  const { subject, title, description, pdfFile } = draftNote;

  // Only check subject and title
  if (subject && title && description) {
    try {
      const res = await fetch('/SummaryCall/note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ subject, title, description, pdfFile }), // include pdfFile if needed
      });

      const newNote = await res.json();

      if (res.ok) {
        setNotes(prev => [
          {
            ...newNote,
            image: `https://picsum.photos/seed/${newNote._id}/100/100`,
            favorite: false,
          },
          ...prev,
        ]);

        setDraftNote({
          subject: '',
          title: '',
          description: '',
          pdfFile: null, // clear the uploaded file
        });

        setIsCreating(false);
      }
    } catch (err) {
      console.error('Error saving note:', err);
    }
  }
};


  const deleteNote = async (id) => {
    try {
      const res = await fetch(`/SummaryCall/note/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        setNotes(notes.filter(note => note._id !== id));
      }
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      const res = await fetch(`/SummaryCall/note/${id}/favorite`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedNote = await res.json();
      if (res.ok) {
        setNotes(notes.map(note =>
          note._id === id ? { ...note, favorite: updatedNote.favorite } : note
        ));
      }
    } catch (err) {
      console.error('Toggle favorite failed:', err);
    }
  };

  const startEditing = (note) => {
    setEditingNoteId(note._id);
    setEditDraft({ subject: note.subject, title: note.title, description: note.description });
  };

  const saveEdit = async (id) => {
    try {
      const res = await fetch(`/SummaryCall/note/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editDraft),
      });
      const updated = await res.json();
      if (res.ok) {
        setNotes(notes.map(note =>
          note._id === id
            ? { ...updated, image: `https://picsum.photos/seed/${updated._id}/100/100` }
            : note
        ));
        setEditingNoteId(null);
      }
    } catch (err) {
      console.error('Save edit failed:', err);
    }
  };

  const filteredNotes = notes.filter(note => {
    const match = [note.title, note.subject, note.description].some(field =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return activeTab === 'favorites' ? note.favorite && match : match;
  });
  


  return (
    <div className="min-h-screen  bg-[#0f172a]  text-white px-8 py-12 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Notes</h1>
          <p className="mt-2 text-gray-400 text-l">Upload and manage your study notes efficiently</p>
        </div>
        <button
          className="px-5 py-2 bg-blue-500 text-black font-semibold rounded-lg text-sm hover:bg-blue-600 transition-shadow shadow-md"
          onClick={() => setIsCreating(true)}
        >
          + New Note
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-1 flex space-x-3 mb-5 bg-[#1e293b] rounded-xl p-1 px-2 w-fit">
        <button
          className={`px-20 py-2 text-l rounded-lg font-semibold transition ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-[#0f172a] hover:text-white'}`}
          onClick={() => setActiveTab('all')}
        >
          All Notes
        </button>
        <button
          className={`px-20 py-2 text-l rounded-lg font-semibold transition ${activeTab === 'favorites' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-[#0f172a] hover:text-white'}`}
          onClick={() => setActiveTab('favorites')}
        >
          Favorite Notes
        </button>
      </div>

      {/* Search */}
     <div className="relative mb-6">
  <svg
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
  <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e293b] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {filteredNotes.length === 0 && searchQuery ? (
        <div className="flex flex-col items-center justify-center text-center mt-24">
          <h2 className="text-xl font-semibold mb-2">No matching notes found</h2>
          <p className="text-l font-semibold text-gray-500 mb-6">Try a different search keyword</p>
        </div>
      ) : null}
</div>



      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-24">
      <FileText className="w-[80px] h-[80px] text-gray-400 mb-6 drop-shadow-2xl" />

        <h2 className="text-xl font-semibold mb-2">No notes yet</h2>
          <p className="text-l font-semibold text-gray-500 mb-6">Start by adding your first note</p>
          <button
            className="flex items-center px-5 py-1.5 bg-blue-500 text-black font-semibold rounded-md hover:bg-blue-600 transition text-sm"
            onClick={() => setIsCreating(true)}
          >
            <span className="mr-2 text-lg">+</span> Add First Note
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredNotes.map(note => (
            <div key={note._id} className="bg-[#1e293b] p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={note.image} alt="note" className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-bold mb-1">{note.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{note.subject}</p>
              <p className="text-sm text-gray-300 mb-3 line-clamp-3">{note.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => toggleFavorite(note._id)}
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  {note.favorite ? '★' : '☆'}
                </button>
                <div className="space-x-2">
                  <button onClick={() => startEditing(note)} className="text-blue-400 hover:text-blue-300 text-sm">Edit</button>
                  <button onClick={() => deleteNote(note._id)} className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create/Edit Note Modal */}
     {(isCreating || editingNoteId) && (
  <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
    <div className="relative bg-[#1e293b] p-6 pt-10 rounded-2xl w-full max-w-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        {editingNoteId ? 'Edit Note' : 'Create New Note'}
      </h2>

      {/* Subject */}
      <input
        name="subject"
        placeholder="Subject"
        value={editingNoteId ? editDraft.subject : draftNote.subject}
        onChange={(e) =>
          editingNoteId
            ? setEditDraft({ ...editDraft, subject: e.target.value })
            : handleDraftChange(e)
        }
        className="w-full mb-3 p-3 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Title */}
      <input
        name="title"
        placeholder="Title"
        value={editingNoteId ? editDraft.title : draftNote.title}
        onChange={(e) =>
          editingNoteId
            ? setEditDraft({ ...editDraft, title: e.target.value })
            : handleDraftChange(e)
        }
        className="w-full mb-3 p-3 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={editingNoteId ? editDraft.description : draftNote.description}
        onChange={(e) =>
          editingNoteId
            ? setEditDraft({ ...editDraft, description: e.target.value })
            : handleDraftChange(e)
        }
        rows="4"
        className="w-full mb-4 p-3 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* PDF Upload Section */}
      <div className="w-full mb-6 p-4 bg-[#0f172a] rounded-lg border border-gray-600">
        <label className="block text-white font-medium mb-2">Upload PDF File</label>
        {!(editingNoteId ? editDraft.pdfFile : draftNote.pdfFile) ? (
          <div className="flex flex-col items-center justify-center">
            <label className="cursor-pointer inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Choose PDF File
              <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                  editingNoteId
                    ? setEditDraft({ ...editDraft, pdfFile: e.target.files[0] })
                    : setDraftNote({ ...draftNote, pdfFile: e.target.files[0] })
                }
                className="hidden"
              />
            </label>
            <p className="text-sm text-gray-400 mt-2">No file chosen yet</p>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">📄</span>
              <span className="text-sm truncate max-w-[200px]">
                {(editingNoteId ? editDraft.pdfFile.name : draftNote.pdfFile.name)}
              </span>
            </div>
            <div className="flex gap-2">
              <label className="px-3 py-1.5 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition cursor-pointer text-sm">
                Change File
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) =>
                    editingNoteId
                      ? setEditDraft({ ...editDraft, pdfFile: e.target.files[0] })
                      : setDraftNote({ ...draftNote, pdfFile: e.target.files[0] })
                  }
                  className="hidden"
                />
              </label>
              <button
                onClick={() =>
                  editingNoteId
                    ? setEditDraft({ ...editDraft, pdfFile: null })
                    : setDraftNote({ ...draftNote, pdfFile: null })
                }
                className="px-3 py-1.5 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
              >
                Remove File
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() =>
            editingNoteId ? setEditingNoteId(null) : setIsCreating(false)
          }
          className="px-6 py-2 rounded-md bg-gray-600 hover:bg-gray-500 text-sm text-white"
        >
          Cancel
        </button>
        <button
          onClick={editingNoteId ? () => saveEdit(editingNoteId) : handleSaveNote}
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-sm text-white"
        >
          {editingNoteId ? 'Save Changes' : 'Create Note'}
        </button>
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default Notes;
