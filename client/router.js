/**
 * Created by idris on 16/3/15.
 */

Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function () {
	this.render('home');
});


Router.onBeforeAction(function () {
	Meteor.call('getVideos', selected, function (error, result) {
		video.set(result);
	});
	this.next();
}, {
	only: ['videos']

});

Router.route('/videos', function () {
	this.render('videos');
});


Router.route('play',function(){
	this.render('play');
});




