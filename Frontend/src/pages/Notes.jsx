import React, { useState, useEffect } from 'react';
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

    const fetchNotes = async () => {
        if (!token) return;

        try {
            const res = await fetch('/SummaryCall/note', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();

            if (res.ok) {
                const enriched = data.map(note => ({
                    ...note,
                    image: `https://picsum.photos/seed/${note._id}/100/100`
                }));
                setNotes(enriched);
            } else {
                console.error('Error fetching notes:', data.error || data.message);
            }
        } catch (err) {
            console.error('Fetch error:', err);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, [token]);

    const handleDraftChange = (e) => {
        const { name, value } = e.target;
        setDraftNote({ ...draftNote, [name]: value });
    };

    const handleSaveNote = async () => {
        const { subject, title, description } = draftNote;
        if (subject && title && description) {
            try {
                const res = await fetch('/SummaryCall/note', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(draftNote)
                });

                const newNote = await res.json();

                if (res.ok) {
                    setNotes(prev => [{
                        ...newNote,
                        image: `https://picsum.photos/seed/${newNote._id}/100/100`,
                        favorite: false
                    }, ...prev]);
                    setDraftNote({ subject: '', title: '', description: '' });
                    setIsCreating(false);
                } else {
                    console.error('Create error:', newNote.error || newNote.message);
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
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.ok) {
                setNotes(notes.filter(note => note._id !== id));
            } else {
                const err = await res.json();
                console.error('Delete error:', err.error);
            }
        } catch (err) {
            console.error('Error deleting note:', err);
        }
    };

    const toggleFavorite = async (id) => {
        try {
            const res = await fetch(`/SummaryCall/note/${id}/favorite`, {
                method: 'PATCH',
                headers: { Authorization: `Bearer ${token}` }
            });

            const updatedNote = await res.json();

            if (res.ok) {
                setNotes(notes.map(note =>
                    note._id === id ? { ...note, favorite: updatedNote.favorite } : note
                ));
            } else {
                console.error('Toggle favorite error:', updatedNote.error);
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
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(editDraft)
            });

            const updated = await res.json();

            if (res.ok) {
                setNotes(notes.map(note =>
                    note._id === id
                        ? { ...updated, image: `https://picsum.photos/seed/${updated._id}/100/100` }
                        : note
                ));
                setEditingNoteId(null);
            } else {
                console.error('Edit error:', updated.error || updated.message);
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

    const recentNotes = filteredNotes.slice(0, 3);
    const olderNotes = filteredNotes.slice(3);

    return (
        <div className="notes-page">
            <div className="notes-header">
                <h1>Notes</h1>
                <button className="new-note-button" onClick={() => setIsCreating(true)}>New Note</button>
            </div>

            <div className="notes-tabs">
                <button className={activeTab === 'all' ? 'active-tab' : ''} onClick={() => setActiveTab('all')}>All Notes</button>
                <button className={activeTab === 'favorites' ? 'active-tab' : ''} onClick={() => setActiveTab('favorites')}>Favorites</button>
                <button disabled>Shared</button>
            </div>

            <input
                type="text"
                className="notes-search"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {(recentNotes.length > 0 || isCreating) && (
                <div className="notes-section">
                    <h2>Recent Notes</h2>

                    {isCreating && (
                        <div className="note-item">
                            <div className="note-info">
                                <input type="text" name="subject" placeholder="Subject" value={draftNote.subject} onChange={handleDraftChange} />
                                <input type="text" name="title" placeholder="Title" value={draftNote.title} onChange={handleDraftChange} />
                                <textarea name="description" placeholder="Description" value={draftNote.description} onChange={handleDraftChange} />
                                <button onClick={handleSaveNote}>Save</button>
                            </div>
                        </div>
                    )}

                    {recentNotes.map(note => (
                        <div key={note._id} className="note-item">
                            {editingNoteId === note._id ? (
                                <div className="note-info">
                                    <input type="text" value={editDraft.subject} onChange={(e) => setEditDraft({ ...editDraft, subject: e.target.value })} />
                                    <input type="text" value={editDraft.title} onChange={(e) => setEditDraft({ ...editDraft, title: e.target.value })} />
                                    <textarea value={editDraft.description} onChange={(e) => setEditDraft({ ...editDraft, description: e.target.value })} />
                                    <button onClick={() => saveEdit(note._id)}>Save</button>
                                    <button onClick={() => setEditingNoteId(null)}>Cancel</button>
                                </div>
                            ) : (
                                <div className="note-info">
                                    <span className="note-subject">{note.subject}</span>
                                    <h3>{note.title}</h3>
                                    <p>{note.description}</p>
                                </div>
                            )}

                            <img src={note.image} alt={note.title} className="note-img" />
                            <div className="note-actions">
                                <span
                                    className={`favorite-icon ${note.favorite ? 'favorited' : ''}`}
                                    onClick={() => toggleFavorite(note._id)}
                                    title={note.favorite ? 'Unfavorite' : 'Mark as Favorite'}
                                >
                                    ★
                                </span>
                                <button className="note-action-button"  onClick={() => deleteNote(note._id)} title="Delete Note">🗑️</button>
                                {editingNoteId !== note._id && (
                                    <button className="note-action-button"  onClick={() => startEditing(note)} title="Edit Note">✏️</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {olderNotes.length > 0 && (
                <div className="notes-section">
                    <h2>Older Notes</h2>
                    {olderNotes.map(note => (
                        <div key={note._id} className="note-item">
                            <div className="note-info">
                                <span className="note-subject">{note.subject}</span>
                                <h3>{note.title}</h3>
                                <p>{note.description}</p>
                            </div>
                            <img src={note.image} alt={note.title} className="note-img" />
                            <span
                                className={`favorite-icon ${note.favorite ? 'favorited' : ''}`}
                                onClick={() => toggleFavorite(note._id)}
                                title={note.favorite ? 'Unfavorite' : 'Mark as Favorite'}
                            >
                                ★
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Notes;
