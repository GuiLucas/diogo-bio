import { BandsSection, Section, Circle } from 'components'
import { Provider } from 'react-wrap-balancer'
import { Analytics } from '@vercel/analytics/react';
import * as Data from 'data'

import styles from './page.module.css'

const Home = () => {
	return <Provider>
		<Circle />
		<header className={styles['header']}>
			<h1>Diogo Mendes</h1>
		</header>
		<header className={styles['mobileHeader']}>
			<h1>DM</h1>
		</header>
		<main className={styles['main']}>
			<BandsSection key={'LIGHTANDSTAGE'} title={'LIGHT AND STAGE DESIGN'} data={Data.LightAndStageBands} />
			<Section key={'ARCHITECTURAL'} title={'ARCHITECTURAL'} data={Data.Architectural} />
			<Section key={'INSTALLATION'} title={'INSTALLATION'} data={Data.Instalations} />
			<Section key={'LIVEAV'} title={'LIVE AV PERFORMANCE'} data={Data.LiveAvPerformance} />
			<Section key={'SETDESIGNTEATHER'} title={'LIGHT DESIGN FOR THEATER'} data={Data.LightDesignTeather} />
			<Section key={'SCENOGRAPHY'} title={'SCENOGRAPHY'} data={Data.Scenography} />
			<Section key={'SETDESIGN'} title={'SET DESIGN'} data={Data.SetDesign} />
		</main>
		<footer className={styles['footer']}>
			<p>Created by&nbsp;
				<a
					target='_blank'
					href='https://github.com/GuiLucas'
				>
					Guilherme Lucas
				</a>
			</p>
		</footer>
		<Analytics />
	</Provider>
}

export default Home
