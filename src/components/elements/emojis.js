import React from 'react'

/**
 * an emoji
 * @param {object} props Props
 * @param {string} props.label Label
 * @param {string=} props.emoji Emoji
 * @returns {JSX.Element} Content
 */
export default function Emoji({ label, emoji }) {
    return (
        <span
            role="img"
            aria-label={label || ''}
            aria-hidden={label ? 'false' : 'true'}
        >
            {emoji}
        </span>
    )
}
