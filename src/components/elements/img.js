/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'
import styles from 'styles/components/elements/img.module.scss'
import useImg from 'hooks/components/elements/useImg'

/**
 * @typedef {object} SrcType
 * @property {any} normal Classic src image, must end with "?resize"
 * @property {any=} webp Webp src image to be generated from png/jpg, must end with "?resize&format=webp"
 * @property {any=} lqip Lqip src image to be generated from png/jpg, must end with "?lqip"
 */

/**
 * An image handler
 * @param {object} props Props
 * @param {SrcType} props.src Src
 * @param {string} props.alt Alt
 * @param {number=} props.width Width
 * @param {number=} props.height Height
 * @returns {JSX.Element} Content
 */
export default function Img({
    src = { normal: {} }, alt, width, height,
}) {
    const {
        isLoaded, ref, setIsLoaded, type,
    } = useImg({ src })

    return (
        <div className={classNames(styles.img)}>
            <picture
                style={{ width, height }}
            >
                {!!src.lqip
                    && (
                        <img
                            src={src.lqip}
                            alt={alt}
                            style={{ display: isLoaded ? 'none' : 'block' }}
                        />
                    )}
                {!!src.webp
                    && (
                        <source
                            srcSet={src.webp?.srcSet}
                            type="image/webp"
                            sizes={`${width}px`}
                        />
                    )}
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
                    sizes={`${width}px`}
                    loading="lazy"
                    decoding="async"
                />
            </picture>

        </div>
    )
}
