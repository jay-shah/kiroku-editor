import React, { Component } from 'react'
import styles from './Note.module.css'

const Note = ({
    note,
    noteKey,
    title,
    noteIndex,
    onBlurNote,
    onKeyDownNote,
    addRef
}) => {
    return (
        <div contentEditable={true}
            suppressContentEditableWarning
            ref={(e) => addRef(e, noteKey)}
            onKeyDown={(e) => onKeyDownNote(e, title, noteIndex)}
            className={styles.note}
            onBlur={(e) => onBlurNote(e, title, noteIndex)}
        >
            {note}
        </div >
    )
}
export default Note