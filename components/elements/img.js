import classNames from 'classnames'
import React, { useEffect, useMemo, useRef, useState } from 'react'
// @ts-ignore
import styles from 'styles/components/elements/img.module.scss'

/**
 * @typedef {object} SrcType
 * @property {any} normal Classic src image, must end with "?resize"
 * @property {any=} webp Webp src image to be generated from png/jpg, must end with "?resize&format=webp"
 * @property {any=} lqip Lqip src image to be generated from png/jpg, must end with "?lqip"
 */

/**
 * An image handler
 * @param {object} props
 * @param {SrcType} props.src Src
 * @param {string} props.alt Alt
 * @param {number=} props.width Width
 * @param {number=} props.height Height
 * @param {boolean=} props.isZoomable Is zoomable
 */
export default function Img({ src = { normal: {} }, alt, width, height, isZoomable = true }) {
    /** @type {[boolean, function(boolean):any]} Is image loaded? */
    const [isLoaded, setIsLoaded] = useState(!true)

    /** @type {React.MutableRefObject<HTMLImageElement>} */
    const ref = useRef(null)

    /** @type {'image/jpeg' | 'image/png'} Type of image */
    const type = useMemo(() => {
        if (src?.toString()?.endsWith(".jpg") || src?.toString()?.endsWith(".jpeg"))
            return "image/jpeg"
        else if (src?.toString()?.endsWith(".png"))
            return "image/png"
        return "image/png"
    }, [src])

    //Workaround to hide preview image if onLoad is not fired
    useEffect(() => {
        if (ref.current?.complete)
            setIsLoaded(true)
    }, [setIsLoaded, ref])

    return (
        <div className={classNames(styles['img'], { [styles['is-zoomable']]: isZoomable })}>
            <picture>
                {!!src.lqip &&
                    <img
                        src={src.lqip}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes={`${width}px`}
                        style={{ filter: 'blur(25px)', display: isLoaded ? 'none' : undefined }}
                    />
                }
                {!!src.webp &&
                    <source
                        srcSet={src.webp?.srcSet}
                        type="image/webp"
                        sizes={`${width}px`}
                    />
                }
                <source
                    srcSet={src.normal?.srcSet}
                    type={type}
                    sizes={`${width}px`}
                />
                <img
                    ref={ref}
                    onLoad={() => setIsLoaded(true)}
                    src={src.normal?.src}
                    srcSet={src.normal?.srcSet}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={`${width}px`}
                    loading="lazy"
                    decoding="async"
                />
            </picture>

        </div>
    )
}