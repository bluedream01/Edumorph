import React, { useState, useEffect } from 'react';
import './notes.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [draftNote, setDraftNote] = useState({ subject: '', title: '', description: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        fetch('/SummaryCall/note')
            .then(res => res.json())
            .then(data => {
                const enriched = data.map(note => ({
                    ...note,
                    image: `https://picsum.photos/seed/${note._id}/100/100`,
                   
                }));
                setNotes(enriched);
            })
            .catch(err => console.error('Error fetching notes:', err));
    }, []);

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
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(draftNote),
                });

                const newNote = await res.json();

                if (res.ok) {
                    setNotes([{
                        ...newNote,
                        image: `https://picsum.photos/seed/${newNote._id}/100/100`,
                        favorite: false
                    }, ...notes]);
                    setDraftNote({ subject: '', title: '', description: '' });
                    setIsCreating(false);
                } else {
                    console.error(newNote.error);
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
            });

            if (res.ok) {
                setNotes(notes.filter(note => note._id !== id));
            } else {
                const err = await res.json();
                console.error('Error deleting note:', err.error);
            }
        } catch (err) {
            console.error('Error deleting note:', err);
        }
    };

    const toggleFavorite = async (id) => {
    try {
        const res = await fetch(`/SummaryCall/note/${id}/favorite`, {
            method: 'PATCH'
        });

        if (res.ok) {
            const updatedNote = await res.json();
            setNotes(notes.map(note =>
                note._id === id ? { ...note, favorite: updatedNote.favorite } : note
            ));
        } else {
            const err = await res.json();
            console.error('Toggle failed:', err.error);
        }
    } catch (err) {
        console.error('Error toggling favorite:', err);
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
                <button
                    className={activeTab === 'all' ? 'active-tab' : ''}
                    onClick={() => setActiveTab('all')}
                >
                    All Notes
                </button>
                <button
                    className={activeTab === 'favorites' ? 'active-tab' : ''}
                    onClick={() => setActiveTab('favorites')}
                >
                    Favorites
                </button>
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
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={draftNote.subject}
                                    onChange={handleDraftChange}
                                />
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={draftNote.title}
                                    onChange={handleDraftChange}
                                />
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    value={draftNote.description}
                                    onChange={handleDraftChange}
                                />
                                <button onClick={handleSaveNote}>Save</button>
                            </div>
                        </div>
                    )}

                    {recentNotes.map(note => (
                        <div key={note._id} className="note-item">
                            <div className="note-info">
                                <span className="note-subject">{note.subject}</span>
                                <h3>{note.title}</h3>
                                <p>{note.description}</p>
                            </div>
                            <img src={note.image} alt={note.title} className="note-img" />
                            <div className="note-actions">
                                <span
                                    className={`favorite-icon ${note.favorite ? 'favorited' : ''}`}
                                    onClick={() => toggleFavorite(note._id)}
                                    title={note.favorite ? 'Unfavorite' : 'Mark as Favorite'}
                                >
                                    ★
                                </span>
                                <button
                                    className="delete-note-button"
                                    onClick={() => deleteNote(note._id)}
                                    title="Delete Note"
                                >
                                    🗑️
                                </button>
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
