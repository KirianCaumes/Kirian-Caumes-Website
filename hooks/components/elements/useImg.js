import {
    useRef, useState, MutableRefObject, useMemo, useEffect, Dispatch, SetStateAction,
} from 'react'

/** @debug {Dispatch|SetStateAction} */

/**
 * Use Img hook
 * @param {object} props Props
 * @param {any} props.src Src
 * @returns {{
 *  isLoaded: boolean;
 *  setIsLoaded: Dispatch<SetStateAction<boolean>>;
 *  ref: MutableRefObject<HTMLImageElement>;
 *  type: 'image/jpeg' | 'image/png';
 * }} Returns
 */
export default function useImg({ src }) {
    /** Is image loaded? */
    const [isLoaded, setIsLoaded] = useState(false)

    /** @type {MutableRefObject<HTMLImageElement>} */
    const ref = useRef(null)

    /** Type of image */
    const type = useMemo(() => {
        if (src?.toString()?.endsWith('.jpg') || src?.toString()?.endsWith('.jpeg'))
            return 'image/jpeg'
        if (src?.toString()?.endsWith('.png'))
            return 'image/png'
        return 'image/png'
    }, [src])

    // Workaround to hide preview image if onLoad is not fired
    useEffect(() => {
        if (ref.current?.complete)
            setIsLoaded(true)
    }, [setIsLoaded, ref])

    return {
        isLoaded,
        setIsLoaded,
        ref,
        type,
    }
}
