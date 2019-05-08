import React, { Component } from 'react';
import { fabric } from 'fabric';

import './canvas.scss';

export default class Canvas extends Component<any> {

    private canvasRef: React.RefObject<HTMLCanvasElement>;

    constructor(props: any) {
        super(props);

        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = new fabric.StaticCanvas('canvas');
        
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'blue',
            width: 200,
            height: 60
        });

        const circle = new fabric.Circle({
            radius: 20, fill: 'green', left: 100, top: 100
        });

        canvas.add(rect);
        canvas.add(circle);
    }

    render() {
        return(
            <canvas height="500" width="800" ref={this.canvasRef} id="canvas" className="canvas-component"></canvas>
        )
    }
} 
