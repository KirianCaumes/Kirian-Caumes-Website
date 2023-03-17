import type { MutableRefObject } from 'react'
import { useEffect } from 'react'

/**
 * Use On ClickOutside
 * {@link https://usehooks.com/useOnClickOutside/}
 * @param ref Ref
 * @param handler Handler
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useOnClickOutside(ref: MutableRefObject<any>, handler: (ev: MouseEvent | TouchEvent) => void) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target))
                return

            handler(event)
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}
