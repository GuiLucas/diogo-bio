import { useEffect, useState } from 'react'
import type * as Core from '../../types'

type Coordinates = {
    x: Core.Optional<number>
    y: Core.Optional<number>
}

const initialMousePosition: Coordinates = {
    x: undefined,
    y: undefined
}

export function useMousePosition() {

    const [mousePosition, setMousePosition] = useState(initialMousePosition)

    useEffect(
        () => {
            const updateMousePosition = (ev: MouseEvent) => {
                setMousePosition(
                    {
                        x: ev.clientX,
                        y: ev.clientY
                    }
                )
            }

            window.addEventListener('mousemove', updateMousePosition)

            return () => {
                window.removeEventListener('mousemove', updateMousePosition)
            }
        }, []
    )
    return mousePosition
}