import '../stylesheets/MainPage.css'
import HeadSection from '../components/HeadSection'
import FrameworkSection from '../components/FrameworkSection'

function MainPage() {
    return (
        <div className = {'mainWrapper'}>
            <section className = {'headSection'}>
                <HeadSection />  
            </section>

            <section className = {'frameworksWrappper'} >
                <FrameworkSection />
            </section>
        </div>
    )
}

export default MainPage