import Link from 'next/link'
import { Section } from '../src/components'
import  * as Data from '../src/data'

import styles from './page.module.css'

const Home = () => {
	return <>
		<div className={styles['backgroundCircle']}/>
		<header className={styles['header']}>
			<h1>Diogo Mendes</h1>
		</header>
		<main className={styles['mainContainer']}>
			<Section key={'ARCHITECTURAL'} title={'ARCHITECTURAL'} data={Data.Architectural} />
			<Section key={'INSTALLATION'} title={'INSTALLATION'} data={Data.Instalations} />
			<Section key={'LIVEAV'} title={'LIVE AV PERFORMANCE'} data={Data.LiveAvPerformance} />
			<Section key={'LIGHTANDSTAGE'} title={'LIGHT AND STAGE DESIGN'} data={Data.LightAndStage} />
			<Section key={'SCENOGRAPHY'} title={'SCENOGRAPHY'} data={Data.Scenography} />
			<Section key={'SETDESIGN'} title={'SET DESIGN'} data={Data.SetDesign} />
		</main>
	</>
}

export default Home
