import classNames from 'classnames'
import React, { useMemo } from 'react'
// @ts-ignore
import styles from 'styles/components/elements/img.module.scss'

/**
 * An image handler
 * @param {object} props
 * @param {any} props.src Src
 * @param {any} props.srcWebp Src for webp image, we must do this because generic import make issue because of webpack :/
 * @param {string} props.alt Alt
 * @param {number=} props.width Width
 * @param {number=} props.height Height
 * @param {boolean=} props.isZoomable Is zoomable
 */
export default function Img({ src, srcWebp, alt, width, height, isZoomable = true }) {
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
                <source
                    srcSet={srcWebp?.srcSet}
                    type="image/webp"
                    sizes={`${width}px`}
                />
                <source
                    srcSet={src?.srcSet}
                    type={type}
                    sizes={`${width}px`}
                />
                <img
                    src={src?.src}
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