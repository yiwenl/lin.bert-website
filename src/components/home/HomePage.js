import React, { Component } from 'react';
import { Link } from 'react-router';
import * as Config from '../actions/Config';
import _ from 'lodash';
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';
import * as JSUtil from '../common/JSUtils';

class Home extends Component {

  constructor(props){
    super(props);
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }

  componentWillMount() {
    this.projects = Config.getProjectList();
  }

  componentDidMount(){
    window.addEventListener('scroll',this.onScrollHandler);
    this.animateDetail();
    this.onScrollHandler();

  }

  componentDidUpdate(props){
    this.animateDetail();
    this.onScrollHandler();
    document.body.scrollTop = 0;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.onScrollHandler);
  }


  onScrollHandler() {

    _.each(this.refs.home.children,_.bind(function(project){

      let inner = project.childNodes[1];
      let images = inner.childNodes[0].childNodes[2].children;
      let appearOffset = 200;

      if(JSUtil.hasClass(inner,'active')) {

        _.each(images,_.bind(function(image,i){

          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          let offset = image.offsetTop - scrollTop;
          let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


          if(offset + appearOffset < windowHeight && !JSUtil.hasClass(image,'active')) JSUtil.addClass(image,'active');
          else if(offset + appearOffset >= windowHeight && JSUtil.hasClass(image,'active')) JSUtil.removeClass(image,'active');

        }));

      } else {

        return 0;

      }

    }));

  }

  animateDetail() {

    let route = this.props.params.splat.split("/")[1];


    _.each(this.refs.home.children,_.bind(function(project){

      let inner = project.childNodes[1];
      let contentH = inner.firstElementChild.offsetHeight + 30;

      TweenLite.killTweensOf(inner);
      if(route != undefined && route == project.getAttribute('id')) {

        JSUtil.addClass(inner,'active');
        TweenLite.to(inner,.25,{

          height:contentH,
          ease:Expo.easeInOut,
          onCompleteParams:[inner],
          onComplete: function(_inner) {
            _inner.style.height = "auto";
          }
        });

      } else {

        JSUtil.removeClass(inner,'active');
        inner.style.height = contentH;
        TweenLite.to(inner,.15,{height:0,ease:Expo.easeOut});

      };


    },this));

  }

  render() {

    let route = this.props.params.splat.split("/")[1];

    return(
      <div id="home" ref="home">
        {this.projects.map((project,i) => {

          let active = project.route == route;
          let closedClass = route != undefined && project.route != route ? ' closed' : '';
          let next = this.projects[i + 1] ? this.projects[i + 1] : this.projects[0];
          let prev = this.projects[i - 1] ? this.projects[i - 1] : this.projects[this.projects.length - 1];

          closedClass = route == project.route ? ' open' : closedClass;

          return(
            <div id={project.route} key={project.route} className={'project-holder' + closedClass}>
              <DetailHeader project={project} active={active} closedClass={closedClass}/>
              <DetailContent content={project.content} prev={prev} next={next}/>
            </div>
          );

        })}
      </div>
    );
  }
}

export default Home;
