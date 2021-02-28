import classNames from 'classnames'
import React, { useMemo } from 'react'
// @ts-ignore
import styles from 'styles/components/elements/img.module.scss'

/**
 * An image handler
 * @param {object} props
 * @param {string} props.src Src
 * @param {string} props.alt Alt
 * @param {number=} props.width Width
 * @param {number=} props.height Height
 * @param {boolean=} props.isZoomable Is zoomable
 */
export default function Img({ src, alt, width, height, isZoomable = true }) {
    /** @type {'image/jpeg' | 'image/png'} Type of image */
    const type = useMemo(
        () => {
            if (src?.includes(".jpg") || src?.includes(".jpeg"))
                return "image/jpeg"
            else if (src?.includes(".png"))
                return "image/png"
            return "image/png"
        },
        [src]
    )

    return (
        <div className={classNames(styles['img'], { [styles['is-zoomable']]: isZoomable })}>
            <picture>
                <source
                    srcSet={require(`../../public/${src}?resize&format=webp`).srcSet}
                    type="image/webp"
                    sizes={`${width}px`}
                />
                <source
                    srcSet={require(`../../public/${src}?resize`).srcSet}
                    type={type}
                    sizes={`${width}px`}
                />
                <img
                    src={require(`../../public/${src}?resize`).src}
                    // srcSet={require(`../../public/${src}?resize`).srcSet}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={`${width}px`}
                    loading="lazy"
                />
            </picture>

        </div>
    )
}