import { useRouter } from 'next/router'
import { useRef, useState, useEffect, useCallback } from 'react'
import { useClickAway, useToggle } from 'react-use'
import type { MutableRefObject } from 'react'

export interface UseNavbarHookReturns {
    /** isOpen */
    isOpen: boolean
    /** hash */
    hash: string
    /** ref */
    ref: MutableRefObject<HTMLElement | null>
    /** toggleIsOpen */
    toggleIsOpen: () => void
    /** onClickLink */
    onClickLink: () => void
}

/**
 * Use Navbar hook
 */
export default function useNavbar(): UseNavbarHookReturns {
    const router = useRouter()

    /** Is burger menu open? */
    const [isOpen, toggleIsOpen] = useToggle(false)
    /** Hash string selected */
    const [hash, setHash] = useState('')

    /** Ref to component */
    const ref = useRef<HTMLElement>(null)

    /** Callback when user click a link */
    const onClickLink = useCallback(() => toggleIsOpen(false), [toggleIsOpen])

    // Handle click outside
    useClickAway(ref, () => toggleIsOpen(false))

    /**
     * Handle init router to setup first hash.
     * I don't like using an `useEffect` for this, but it seems to be easiest way to avoid the error: "Warning: Prop className did not match. Server:..."
     */
    useEffect(() => setHash(router?.asPath?.replace('#', '')?.replace('/', '')), [router?.asPath])

    return {
        isOpen,
        hash,
        ref,
        toggleIsOpen,
        onClickLink,
    }
}
