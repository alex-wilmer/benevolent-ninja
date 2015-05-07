Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'splash'
});

Router.route('/blog', {
  name: 'blog'
});
