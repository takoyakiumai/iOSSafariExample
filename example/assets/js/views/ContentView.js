// Generated by CoffeeScript 1.3.1
var ContentView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

ContentView = (function(_super) {

  __extends(ContentView, _super);

  ContentView.name = 'ContentView';

  function ContentView() {
    return ContentView.__super__.constructor.apply(this, arguments);
  }

  ContentView.prototype.el = '#reverse';

  ContentView.prototype.templates = _.template('<div class="content"><header><h1><%= title %></h1></header><section class="contentBody"><%= content %></section><div class="back"><a href="/"><img src="assets/images/back.png" width="207" height="45"></a></div><footer><img src="assets/images/copyright.png" width="320" height="16"></footer></div>');

  ContentView.prototype.loading = '<div class="preloader"><img src="/assets/images/ajax-loader.gif" width="16" height="16"/></div>';

  ContentView.prototype.events = {
    'click .back a': 'returnIndex'
  };

  ContentView.prototype.initialize = function(options) {
    _.bindAll(this);
    return _.extend(this, options);
  };

  ContentView.prototype.render = function(id) {
    this.$el.empty().html(this.loading);
    this.model = new ExpModel();
    this.model.url = id;
    this.model.fetch({
      success: this.contentLoadedHandler
    });
  };

  ContentView.prototype.returnIndex = function(event) {
    event.preventDefault();
    this.$el.empty();
    window.App.Main.returnIndex();
    return false;
  };

  ContentView.prototype.contentLoadedHandler = function(data) {
    return $('.preloader').delay(400).fadeOut(300, this.dispContent);
  };

  ContentView.prototype.dispContent = function() {
    this.$el.empty().html(this.templates(this.model.toJSON()));
  };

  return ContentView;

})(Backbone.View);

head.js('/assets/js/ExpModel.js');
