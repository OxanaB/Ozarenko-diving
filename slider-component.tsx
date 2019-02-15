import *as React from 'react';

export interface SliderProps {
    images: string[];
    className: string;
}

interface State {
    index: number;
    delta: number;
    comingClassName: string;
    currentClassName: string;
}
export class Slider extends React.Component<SliderProps, State> {

    state = { index: 0, comingClassName: 'image-central', currentClassName: 'image-central', delta: 0 };

    componentDidMount() {
        this.props.images.forEach(src => {
            const image = new Image();
            image.src = src;
            image.style.display = 'none';
            document.body.appendChild(image);
        });
    }

    render() {
        const { index, comingClassName, currentClassName, delta } = this.state;
        const { images, className } = this.props;
        return <div className={'slider ' + className} >
            <img className={comingClassName} src={images[siblingIndex(images, index + delta)]} />
            <img className={currentClassName} src={images[siblingIndex(images, index + 0)]} />
            <a href="" className="slider-arrow-right"
                onClick={e => {
                    e.preventDefault();
                    this.setState({
                        delta: +1,
                        comingClassName: 'image-coming-from-left',
                        currentClassName: 'image-going-to-right'
                    });
                    setTimeout(() => {
                        this.setState({
                            delta: 0,
                            index: siblingIndex(images, index + 1),
                            comingClassName: 'image-central',
                            currentClassName: 'image-central'
                        });
                    }, 500);
                }}
            ></a>
            <a href="" className="slider-arrow-left"
                onClick={e => {
                    e.preventDefault();
                    this.setState({
                        delta: -1,
                        comingClassName: 'image-coming-from-right',
                        currentClassName: 'image-going-to-left'
                    });
                    setTimeout(() => {
                        this.setState({
                            delta: 0,
                            index: siblingIndex(images, index - 1),
                            comingClassName: 'image-central',
                            currentClassName: 'image-central'
                        });
                    }, 500);
                }}
            ></a>
        </div>;
    }
}


function siblingIndex(values: unknown[], index: number): number {
    return (values.length + index) % values.length;
}
