import React, { Component } from 'react';
import * as Loader from '../common/Loader';
import * as Config from '../actions/Config';
import _ from 'lodash';

const CANVAS_SIZE = 200;
const COLOR_BLACK = "#000";
const COLOR_WHITE = "#fff";
const COLOR_PINK = "#f69882";

class Loading extends Component {

  constructor(props) {
    super(props);


    this.state = {
      isLoading: false,
      isLoadingComplete: false,
      inAnimationComplete: false
    }
  }

  componentDidMount() {

    this.refs.canvas.imageSmoothingEnabled = true;
    this.refs.canvas.width = CANVAS_SIZE;
    this.refs.canvas.height = CANVAS_SIZE;

  }

  drawArc(ctx,color,centerX,centerY,innerRadius,outerRadius,startAngle,endAngle,anticlockwise) {

    centerX = centerX / 4;
    centerY = centerY / 4;
    innerRadius = innerRadius / 4;
    outerRadius = outerRadius / 4;

    startAngle -= 90;
    endAngle -= 90;

    let th1 = startAngle * Math.PI/180;
    let th2 = endAngle * Math.PI/180;
    let startOfOuterArcX = outerRadius * Math.cos(th2) + centerX;
    let startOfOuterArcY = outerRadius * Math.sin(th2) + centerY;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, th1, th2, anticlockwise);
    ctx.lineTo(startOfOuterArcX, startOfOuterArcY);
    ctx.arc(centerX, centerY, outerRadius, th2, th1, !anticlockwise);
    ctx.closePath();
    ctx.fill();

  }



  startLoading(manifest) {

    Loader.Load(manifest,
      this.onLoadComplete.bind(this),
      null,
      this.onLoadStart.bind(this),
      this.onFileComplete.bind(this)
    );
  }

  onLoadStart() {
    console.log("load start");
    this.setState({isLoading:true});
    this.startAnimation();
  }

  onFileComplete(e) {
    Config.CacheImage(e.item);
  }

  onLoadComplete(e) {
    this.setState({isLoadingComplete:true});
  }

  onAnimationComplete() {
    this.setState({isAnimationComplete:true});
    _.delay(this.props.onLoadingComplete,2000);
  }

  startAnimation() {

    let context = this.refs.canvas.getContext('2d');

    let animationList = [
      {type: 'arc',start: 0,end: -360, sAngle: 0, radius: 400, x: 400,y: 400,delay: .55, duration: 1,color: COLOR_PINK, reverse: true},
      {type: 'eye'},
      {type: 'arc',start: 180,end: 360, sAngle: 180, radius: 404, x: 400,y: 400,delay: 1.5, duration: .85,color: COLOR_WHITE, reverse: false},
      {type: 'arc',start: 0,end: 360, sAngle: 0, radius: 112, x: 620,y: 385,delay: 1.6, duration: 1,color: COLOR_WHITE, reverse: false},
      {type: 'arc',start: 0,end: -180, sAngle: 0, radius: 83, x: 400,y: 667,delay: 1.15, duration: 1,color: COLOR_PINK, reverse: true},
      {type: 'arc',start: 0,end: -360, sAngle: 0, radius: 112, x: 180,y: 385,delay: 1.85, duration: 1,color: COLOR_PINK, reverse: true},
      {type: 'arc',start: 0,end: 180, sAngle: 0, radius: 83, x: 400,y: 667,delay: 1.65, duration: 1,color: COLOR_WHITE, reverse: false},
      {type: 'radius',start: 0,end: 54,x: 180,y: 385,delay: .00,duration: 1,color: COLOR_BLACK},
      {type: 'radius',start: 0,end: 54,x: 620,y: 385,delay: .06,duration: 1,color: COLOR_BLACK},
      {type: 'radius',start: 0,end: 34,x: 400,y: 667,delay: .03,duration: 1,color: COLOR_BLACK},
      {type: 'arc',start: 0,end: -180, sAngle: 0, radius: 27, x: 400,y: 125,delay: 1.65, duration: 1,color: COLOR_BLACK, reverse: true},
      {type: 'arc',start: 0,end: -180, sAngle: 0, radius: 27, x: 400,y: 210,delay: 1.77, duration: 1,color: COLOR_BLACK, reverse: true},
      {type: 'arc',start: 0,end: -180, sAngle: 0, radius: 27, x: 400,y: 295,delay: 1.85, duration: 1,color: COLOR_BLACK, reverse: true},
      {type: 'arc',start: 0,end: -180, sAngle: 0, radius: 27, x: 400,y: 380,delay: 1.95, duration: 1,color: COLOR_BLACK, reverse: true}
    ];

    let eye = {

      radius: 82 / 4,
      center: { x: 620 / 4, y: 385 / 4, x1: 620 / 4, y1: 385 / 4, x2: 620 / 4, y2: 385 / 4 },
      start: {x:485 / 4,y:520 / 4},
      end: {x:755 / 4, y:250 / 4}

    };

    let timeline = null;
    timeline = new TimelineLite({

      delay: 1,
      onStart: _.bind(function() {

        this.refs.audio.play();

      },this),
      onUpdate: _.bind(function() {

        animationList.map(item => {
          if(item.type == 'radius') this.drawArc(context,item.color,item.x,item.y,0,item.start,0,360);
          else if(item.type == 'arc') this.drawArc(context,item.color,item.x,item.y,0,item.radius,item.sAngle,item.start,item.reverse);
          else {
            context.fillStyle = COLOR_BLACK;
            context.beginPath();
            context.moveTo(eye.start.x,eye.start.y);
            context.quadraticCurveTo(eye.center.x1,eye.center.y1,eye.end.x,eye.end.y);
            context.moveTo(eye.start.x,eye.start.y);
            context.fill();
            context.beginPath();
            context.moveTo(eye.start.x,eye.start.y);
            context.quadraticCurveTo(eye.center.x2,eye.center.y2,eye.end.x,eye.end.y);
            context.moveTo(eye.start.x,eye.start.y);
            context.fill();
          };

        });



      },this),
      onComplete: this.onAnimationComplete.bind(this)

    });

    timeline.pause();

    animationList.map(item => {

        timeline.insert(new TweenLite(item,item.duration,{
          delay: item.delay,
          start: item.end,
          ease: Expo.easeInOut
        }));

    });


    timeline.insert(new TweenLite(eye.center,.75,{

      delay: 2.25,
      x1: eye.center.x + eye.radius,
      y1: eye.center.y + eye.radius,
      x2: eye.center.x - eye.radius,
      y2: eye.center.y - eye.radius,
      ease: Expo.easeInOut

    }));


    timeline.play();


  }

  render() {
    return(
      <div id="loading" disabled={this.state.isLoadingComplete && this.state.isAnimationComplete}>

        <audio ref="audio" type="audio/mpeg" src="assets/logo.mp3" />
        <div id="canvas-holder" className={this.state.isLoading ? 'anim' : ''}>
          <canvas ref="canvas" />
          <div id="logo">
            <img src="assets/logo.png" />
          </div>
        </div>

      </div>
    );
  }
}

export default Loading;
