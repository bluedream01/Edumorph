import React, { useState } from 'react';
import './notes.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [draftNote, setDraftNote] = useState({ subject: '', title: '', description: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('all');

    const handleDraftChange = (e) => {
        const { name, value } = e.target;
        setDraftNote({ ...draftNote, [name]: value });
    };

    const handleSaveNote = () => {
        const { subject, title, description } = draftNote;
        if (subject && title && description) {
            const newNote = {
                ...draftNote,
                image: `https://picsum.photos/seed/${Date.now()}/100/100`,
                favorite: false
            };
            setNotes([newNote, ...notes]);
            setDraftNote({ subject: '', title: '', description: '' });
            setIsCreating(false);
        }
    };

    const toggleFavorite = (index) => {
        const updatedNotes = [...notes];
        updatedNotes[index].favorite = !updatedNotes[index].favorite;
        setNotes(updatedNotes);
    };

    const filteredNotes = notes.filter(note => {
        const matchSearch =
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.description.toLowerCase().includes(searchQuery.toLowerCase());

        if (activeTab === 'favorites') {
            return note.favorite && matchSearch;
        }

        return matchSearch;
    });

    const deleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };


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

            {recentNotes.length > 0 || isCreating ? (
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

                    {recentNotes.map((note, i) => (
                        <div key={i} className="note-item">
                            <div className="note-info">
                                <span className="note-subject">{note.subject}</span>
                                <h3>{note.title}</h3>
                                <p>{note.description}</p>
                            </div>

                            <img src={note.image} alt={note.title} className="note-img" />

                            <div className="note-actions">
                                <span
                                    className={`favorite-icon ${note.favorite ? 'favorited' : ''}`}
                                    onClick={() => toggleFavorite(i)}
                                    title={note.favorite ? 'Unfavorite' : 'Mark as Favorite'}
                                >
                                    ★
                                </span>
                                <button
                                    className="delete-note-button"
                                    onClick={() => deleteNote(i)}
                                    title="Delete Note"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}

            {olderNotes.length > 0 && (
                <div className="notes-section">
                    <h2>Older Notes</h2>
                    {olderNotes.map((note, i) => (
                        <div key={i + 3} className="note-item">
                            <div className="note-info">
                                <span className="note-subject">{note.subject}</span>
                                <h3>{note.title}</h3>
                                <p>{note.description}</p>
                            </div>
                            <img src={note.image} alt={note.title} className="note-img" />
                            <span
                                className={`favorite-icon ${note.favorite ? 'favorited' : ''}`}
                                onClick={() => toggleFavorite(i + 3)}
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
