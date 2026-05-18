import React from 'react'

export interface EmojiProps {
    /** Label */
    readonly label: string
    /** Emoji */
    readonly emoji: string
}

/**
 * An emoji
 * @returns JSX.Element
 */
export default function Emoji({ label, emoji }: EmojiProps) {
    return (
        <span
            aria-hidden={label ? 'false' : 'true'}
            aria-label={label || ''}
            role="img"
        >
            {emoji}
        </span>
    )
}
