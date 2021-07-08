import ReactIcon from '../logosy/reactjs-icon.svg'
import ExpressIcon from '../logosy/expressjs-icon.svg'
import MongodbIcon from '../logosy/mongodb-icon.svg'
import NodejsIcon from '../logosy/nodejs-icon.svg'
import TypescriptIcon from '../logosy/typescript-icon.svg'
import '../stylesheets/frameworkSlider.css'
import { SyntheticEvent, useRef, useState, useEffect, MutableRefObject } from 'react'

const FrameworkSlider = () => {


    const getDivRef: MutableRefObject<any> = useRef(null)
    const [count, setCount] = useState(0)
    const [SliderWidth, setSliderWidth] = useState(document.getElementById('test')?.scrollWidth)

    useEffect(() => {

        if(SliderWidth !== undefined && SliderWidth > 0){
            const firstSlider = document.getElementById('sliderMasterContainer') as HTMLDivElement

            firstSlider.animate([
                {transform: 'translate(-' + SliderWidth + 'px)' }
            ], {
                duration: 8000,
                iterations: Infinity,
                endDelay: 0,
                easing: 'linear'
            })
        }
    })

    const onImgLoad = (event: SyntheticEvent<HTMLImageElement>) => {
        const target = event.target as HTMLImageElement
        target.width = target.width * 2.6

        setCount(count + 1)
        if(count === 9){
            setSliderWidth(document.getElementById('test')?.scrollWidth)
            
        }
    }

    return (
        <div id={'sliderMasterContainer'}>
            <div ref={getDivRef} className={'sliderContainer'} id={'test'}>
                <div id={'icon1'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {ReactIcon} className={'sliderIcon reactIcon'} alt=''/>
                </div>

                <div id={'icon2'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {ExpressIcon} className={'sliderIcon expressIcon'} alt=''/>
                </div>

                <div id={'icon3'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {MongodbIcon} className={'sliderIcon mongodbIcon'} alt=''/>
                </div>

                <div id={'icon4'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {NodejsIcon} className={'sliderIcon nodejsIcon'} alt=''/>
                </div>
                
                <div id={'icon5'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {TypescriptIcon} className={'sliderIcon typescriptIcon'} alt=''/>
                </div>            
            </div>

            <div className={'secondSliderContainer'}>
                <div id={'icon1'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {ReactIcon} className={'sliderIcon reactIcon'} alt=''/>
                </div>

                <div id={'icon2'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {ExpressIcon} className={'sliderIcon expressIcon'} alt=''/>
                </div>

                <div id={'icon3'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {MongodbIcon} className={'sliderIcon mongodbIcon'} alt=''/>
                </div>

                <div id={'icon4'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {NodejsIcon} className={'sliderIcon nodejsIcon'} alt=''/>
                </div>
                
                <div id={'icon5'} className={'iconDiv'}>
                    <img onLoad={onImgLoad} src = {TypescriptIcon} className={'sliderIcon typescriptIcon'} alt=''/>
                </div>            
            </div>
        </div>
        
    )
}

export default FrameworkSlider