import React from 'react'

/** 
 * an emoji
 * @param {object} props 
 * @param {string} props.label Label
 * @param {string=} props.emoji Emoji
 */
export default function Emoji({ label, emoji }) {
    return (
        <span
            role="img"
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
        >
            {emoji}
        </span>
    )
}