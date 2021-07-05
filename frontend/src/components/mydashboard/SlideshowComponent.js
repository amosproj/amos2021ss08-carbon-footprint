import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import IndustrialImage from 'assets/dummyImages/Industrialapplications.jpg';
import PowerGeneration from 'assets/dummyImages/powerGeneration.jpg';
import PowerTransmission from 'assets/dummyImages/powerTransmission.jpg';
import Dashboard1 from 'assets/logo/DashboardImage1.PNG';
import Dashboard2 from 'assets/logo/DashboardImage2.jpg';

export default class SlideshowComponent extends Component {
    constructor(props, context) {
        super();
        this.state = {
            images: [Dashboard1, IndustrialImage, PowerGeneration, PowerTransmission]
        };
    }

    getData() {
        const img = this.state.images.map((m) => <img src={m} alt='' />);
    }
    responsive = {
        0: { items: 1 },
        1024: { items: 1 }
    };
    componentDidMount() {
        this.getData();
    }

    render() {
        const items = [
            <img alt='' style={{ marginTop: 20 }} src={Dashboard1} />,
            <img alt='' style={{ marginTop: 20 }} src={Dashboard2} />,
            <img alt='' style={{ marginTop: 20 }} src={PowerTransmission} />,
            <img alt='' style={{ marginTop: 20 }} src={IndustrialImage} />,
            <img alt='' style={{ marginTop: 20 }} src={PowerGeneration} />
        ];
        return (
            <div>
                <AliceCarousel
                    items={items}
                    responsive={this.responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection='rtl'
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseTrackingEnabled={true}
                    disableAutoPlayOnAction={true}
                    autoWidth
                />
            </div>
        );
    }
}
