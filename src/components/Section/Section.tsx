import type * as Types from "types"
import Balancer from 'react-wrap-balancer'

import styles from './Section.module.css'

type SectionProps = {
    title: string
    data: Types.Entry[]
}

export const Section = (props: SectionProps) => {
    const {
        title,
        data
    } = props

    const lineWidth = '1px'
    const lineGap = '5px'
    const lineColor = 'rgba(0,0,0,calc(0.15 * 3))'

    return <section className={styles['section']}>
        {/* <div style={
            {
                position: 'relative',
                height: '100%',
                top: '75px',
                width: lineWidth,
                background: `linear-gradient(to bottom,${lineColor},${lineColor} 50%,transparent 0,transparent)`,
                backgroundSize: `${lineWidth} ${lineGap}`
            }
        }></div> */}
        <div className={styles['headerContainer']}>
            <AnimatedHeader title={title} />
        </div>
        <div className={styles['sectionContent']}>
            {
                data.map(
                    entry => {
                        return <div className={styles['entryContainer']}>
                            <strong>
                                {
                                    entry.balance
                                        ? <Balancer>
                                            {entry.name}
                                        </Balancer>
                                        : <span>{entry.name}</span>
                                }
                            </strong>
                            {
                                entry.team
                                    ?
                                    entry.balance
                                        ? <Balancer>
                                            {entry.team}
                                        </Balancer>
                                        : <span>{entry.team}</span>
                                    : null
                            }
                            {
                                entry.location
                                    ? <span>{entry.location}</span>
                                    : null
                            }
                            <span>{entry.year}</span>
                        </div>
                    }
                )
            }
        </div>
        {/* <div style={
            {
                position: 'relative',
                height: '100%',
                right: '0',
                top: '75px',
                width: lineWidth,
                background: `linear-gradient(to bottom,${lineColor},${lineColor} 50%,transparent 0,transparent)`,
                backgroundSize: `${lineWidth} ${lineGap}`
            }
        }></div> */}
    </section >
}

type BandsSectionProps = {
    title: string,
    data: string[]
}

// Idea for bands, have names moving in from the left and leaving on right. Always moving, see guy on twitter vercel for that effect
export const BandsSection = (props: BandsSectionProps) => {
    const {
        title,
        data
    } = props

    return <section className={styles['section']}>
        <div className={styles['headerContainer']}>
            <AnimatedHeader title={title} />
        </div>
        <div className={styles['bandsContainer']}>
            {
                data.map(
                    (band, index) => {
                        return <span
                            key={`${band}-${index}`}
                            style={{ "--band-index": index } as React.CSSProperties}
                            className={styles['bandContainer']}
                        >
                            <strong>{band}</strong>
                        </span>
                    }
                )
            }
        </div>
    </section >
}

type AnimatedHeader = {
    title: string
}

function AnimatedHeader(props: AnimatedHeader) {
    const { title } = props
    return <div className={styles['scrollContainer']}>
        <div className={styles['scrollContent']}>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
            <h2 className={styles['header']}>{title}</h2>
        </div>
    </div>
}