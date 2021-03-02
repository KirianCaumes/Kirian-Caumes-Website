import classNames from 'classnames'
import React, { useMemo, useState } from 'react'
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

    /** @type {'image/jpeg' | 'image/png'} Type of image */
    const type = useMemo(
        () => {
            if (src?.toString()?.endsWith(".jpg") || src?.toString()?.endsWith(".jpeg"))
                return "image/jpeg"
            else if (src?.toString()?.endsWith(".png"))
                return "image/png"
            return "image/png"
        },
        [src]
    )

    return (
        <div className={classNames(styles['img'], { [styles['is-zoomable']]: isZoomable })}>
            <picture>
                {!isLoaded &&
                    <img
                        src={src.lqip}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes={`${width}px`}
                        style={{ filter: 'blur(25px)' }}
                    />
                }
                {!!src.webp &&
                    <source
                        srcSet={src.webp?.srcSet}
                        type="image/webp"
                        sizes={`${width}px`}
                        onLoad={() => setIsLoaded(true)}
                    />
                }
                <source
                    srcSet={src.normal?.srcSet}
                    type={type}
                    sizes={`${width}px`}
                    onLoad={() => setIsLoaded(true)}
                />
                <img
                    src={src.normal?.src}
                    // srcSet={require(`../../public/${src}?resize`).srcSet}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={`${width}px`}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                />
            </picture>

        </div>
    )
}