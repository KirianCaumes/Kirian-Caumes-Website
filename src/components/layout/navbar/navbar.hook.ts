import { useRef, useCallback } from 'react'
import { useClickAway, useToggle } from 'react-use'

/**
 * Use Navbar hook
 * @returns UseNavbarHookReturns
 */
export default function useNavbar() {
    /** Is burger menu open? */
    const [isOpen, toggleIsOpen] = useToggle(false)

    /** Ref to component */
    const ref = useRef<HTMLElement>(null)

    /** Callback when user click a link */
    const onClickLink = useCallback(() => {
        toggleIsOpen(false)
    }, [toggleIsOpen])

    // Handle click outside
    useClickAway(ref, () => {
        toggleIsOpen(false)
    })

    return {
        isOpen,
        ref,
        toggleIsOpen,
        onClickLink,
    }
}
