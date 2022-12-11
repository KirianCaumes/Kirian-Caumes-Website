import { useOnClickOutside } from 'hooks'
import { useRouter } from 'next/router'
import {
    useRef, useState, MutableRefObject, useEffect, Dispatch, SetStateAction,
} from 'react'

export type UseNavbarHookReturns = {
    /** isOpen */
    isOpen: boolean
    /** hash */
    hash: string
    /** ref */
    ref: MutableRefObject<HTMLElement | null>
    /** setIsOpen */
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

/**
 * Use Navbar hook
 */
export default function useNavbar(): UseNavbarHookReturns {
    const router = useRouter()

    /** Is burger menu open? */
    const [isOpen, setIsOpen] = useState(false)
    /** Hash string selected */
    const [hash, setHash] = useState('')

    /** Ref to component */
    const ref = useRef<HTMLElement>(null)

    // Handle click outside
    useOnClickOutside(ref, () => setIsOpen(false))

    // Handle init router to setup first hash
    useEffect(() => setHash(router?.asPath?.replace('#', '')?.replace('/', '')), [router?.asPath])

    // Close menu when path change
    useEffect(() => setIsOpen(false), [router?.asPath])

    return {
        isOpen,
        hash,
        ref,
        setIsOpen,
    }
}
