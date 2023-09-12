import React from 'react'

export interface EmojiProps {
    /** label */
    label: string
    /** emoji */
    emoji: string
}

/**
 * An emoji
 */
export default function Emoji({ label, emoji }: EmojiProps): React.ReactElement {
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
