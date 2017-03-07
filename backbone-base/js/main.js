require.config({

  paths: {
    jquery: '/bower_components/jquery/dist/jquery',
    underscore: '/bower_components/underscore/underscore-min',
    backbone: '/bower_components/backbone/backbone-min',
    react: '/bower_components/react/react-with-addons',
    reactdom: '/bower_components/react/react-dom',
    jsx : '/bower_components/jsx-requirejs-plugin/js/jsx',
    JSXTransformer: '/bower_components/jsx-requirejs-plugin/js/JSXTransformer',
    text : '/bower_components/text/text',
    baseRouter: '/js/routers/base-router',
    BackboneMixin: '/js/BackboneMixin'
  },

  jsx: {
    fileExtension: '.jsx',
    harmony: true,
    stripTypes: true
  }
});

require([
  'react', 
  'reactdom', 
  '/js/routers/main-router.js'], function(React, ReactDOM, MainRouter) {

  var mainRouter = new MainRouter();
    Backbone.history.start({
        pushState: true,
        root: '/app/'
    });
});
