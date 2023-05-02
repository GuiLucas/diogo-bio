import type * as Resources from "../../resources"
import styles from './Section.module.css'

type SectionProps = {
    title: string
    data: Resources.Exhibition[]
}

export const Section = (props: SectionProps) => {
    const {
        title,
        data
    } = props

    const rowContainer = { "--rows": data.length } as React.CSSProperties

    const lineWidth = '1px'
    const lineGap = '5px'
    const lineColor = 'rgba(0,0,0,calc(0.15 * 3))'

    return <section style={{ height: 'fit-content' }}>
        <div style={
            {
                position: 'relative',
                height: '100%',
                top: '75px',
                width: lineWidth,
                background: `linear-gradient(to bottom,${lineColor},${lineColor} 50%,transparent 0,transparent)`,
                backgroundSize: `${lineWidth} ${lineGap}`
            }
        }></div>
        <div className={styles['headerContainer']}>
            <h2 className={styles['header']}>{title}</h2>
        </div>

        <div className={styles['subSectionContainer']}>
            <div className={styles['gridContainer']} style={rowContainer}>
                {
                    data.map(
                        (exibition, index) => {
                            return <>
                                <div
                                    className={styles['subSection']}
                                    style={{ "--row-index": index + 1, '--col-index': 0 } as React.CSSProperties}
                                >
                                    {exibition.year}
                                </div>
                                <div
                                    className={styles['subSection']}
                                    style={{ "--row-index": index + 1, '--col-index': 1 } as React.CSSProperties}
                                >
                                    <strong>{exibition.name}</strong>
                                </div>
                                {
                                    exibition.team
                                        ? <div
                                            className={styles['subSection']}
                                            style={{ "--row-index": index + 1, '--col-index': 2 } as React.CSSProperties}
                                        >
                                            {exibition.team}
                                        </div>
                                        : null
                                }
                                {
                                    exibition.location
                                        ? <div
                                            className={styles['subSection']}
                                            style={{ "--row-index": index + 1, '--col-index': 3 } as React.CSSProperties}
                                        >
                                            {exibition.location}
                                        </div>
                                        : null
                                }
                                {/* <div
                                    className={styles['subSection']}
                                    style={{ "--row-index": index + 1, '--col-index': 4 } as React.CSSProperties}
                                >
                                    {exibition.city}
                                </div> */}
                            </>
                        }
                    )
                }
            </div>
        </div>
        <div style={
            {
                position: 'relative',
                height: '100%',
                right: '0',
                top: '75px',
                width: lineWidth,
                background: `linear-gradient(to bottom,${lineColor},${lineColor} 50%,transparent 0,transparent)`,
                backgroundSize: `${lineWidth} ${lineGap}`
            }
        }></div>
    </section >
}