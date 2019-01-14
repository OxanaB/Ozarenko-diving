import *as React from 'react';
import { image } from 'd3';

export interface SliderProps {
    images: string[];
}

interface State {
    index: number;
    className: string;
}
export class Slider extends React.Component<SliderProps, State> {

    state = { index: 0, className: 'image-central' };

    componentDidMount() {
        this.props.images.forEach(src => {
            const image = new Image();
            image.src = src;
        });
    }

    render() {
        const { index, className } = this.state;
        const { images } = this.props;
        return <div className="slider">
            <img className={className} src={images[siblingIndex(images, index + 0)]} />
            <a href="" className="slider-arrow-right"
                onClick={e => {
                    e.preventDefault();
                    this.setState({ className: 'image-right' });
                    // ....................
                    setTimeout(() => {
                        this.setState({ index: siblingIndex(images, index + 1), className: 'image-central' });
                    }, 500);
                }}
            ></a>
            <a href="" className="slider-arrow-left"
                onClick={e => {
                    e.preventDefault();
                    this.setState({ className: 'image-left' });
                    // ....................
                    setTimeout(() => {
                        this.setState({ index: siblingIndex(images, index - 1), className: 'image-central' });
                    }, 500);
                }}
            ></a>
        </div>
    }
}


function siblingIndex(values: unknown[], index: number): number {
    return (values.length + index) % values.length;
}