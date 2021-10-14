import { useEffect, MutableRefObject } from 'react'

/**
 * Use On ClickOutside
 * {@link https://usehooks.com/useOnClickOutside/}
 * @param {MutableRefObject<any>} ref Ref
 * @param {function(MouseEvent | TouchEvent):void} handler Handler
 */
export default function useOnClickOutside(ref, handler) {
    useEffect(() => {
        /**
         * @param {MouseEvent | TouchEvent} event Event
         */
        const listener = event => {
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
