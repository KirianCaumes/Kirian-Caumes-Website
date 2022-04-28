import { useRouter } from 'next/router'
import {
    useRef, useState, MutableRefObject, useEffect, Dispatch, SetStateAction,
} from 'react'
import useOnClickOutside from 'hooks/commons/useOnClickOutside'

/** @debug {Dispatch|SetStateAction} */

/**
 * Use Navbar hook
 * @returns {{
 *  isOpen: boolean;
 *  hash: string;
 *  ref: MutableRefObject<HTMLElement>;
 *  setIsOpen: Dispatch<SetStateAction<boolean>>;
 * }} Returns
 */
export default function useNavbar() {
    const router = useRouter()

    /** Is burger menu open? */
    const [isOpen, setIsOpen] = useState(false)
    /** Hash string selected */
    const [hash, setHash] = useState('')

    /** @type {MutableRefObject<HTMLElement>} Ref to component */
    const ref = useRef()

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
