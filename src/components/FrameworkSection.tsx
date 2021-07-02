import FrameworkSlider from '../components/FrameworkSlider'
import { FC } from 'react'
import { useSpring, a } from 'react-spring'

const FrameworkSection: FC = (): JSX.Element => {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 200,
        config: {duration: 400}
    })

    return(
        <a.div style={styles} className={'frameworkSection'}>
            <div className = {'usedFrameworksTitle'} >
                    <p>Wykorzystane frameworki</p>
                </div>
                
                <div className = {'frameworkSlider'} >
                    <FrameworkSlider />
                </div>
        </a.div>
    )
}

export default FrameworkSection