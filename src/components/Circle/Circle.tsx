'use client'

import { useMousePosition } from 'lib'
import styles from './Circle.module.css'


export const Circle = () => {
    const { x, y } = useMousePosition()

    const circleStyle = { "--mouse-x": x, '--mouse-y': y } as React.CSSProperties

    return <div
        className={styles['backgroundCircle']}
        style={circleStyle}
    />
}
