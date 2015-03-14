if ( Meteor.isClient ) {

	var SpringTransition = famous.transitions.SpringTransition;
	var SnapTransition = famous.transitions.SnapTransition;
	var WallTransition = famous.transitions.WallTransition;

	var Transitionable = famous.transitions.Transitionable;

	Transitionable.registerMethod('spring', SpringTransition);
	Transitionable.registerMethod('snap', SnapTransition);
	Transitionable.registerMethod('wall', WallTransition);

	MySuperTransitionIn = function (duration, curve) {
		return function (stateModifier, done) {
			stateModifier.halt();
			stateModifier.setTransform(Transform.translate(3, 3),
				{method: "spring", period: 200, dampingRatio: 0.9, velocity: 0.1}, done);

		};
	};

	MySuperTransitionOut = function (duration, curve) {
		return function (stateModifier, done) {
			stateModifier.setOpacity(1);
			stateModifier.setOpacity(0, {duration: 300, curve: 'easeInOut'}, done);
		}
	};

	FView.registerTransition('in:super.slow', MySuperTransitionIn(5000, 'easeOut'));
	FView.registerTransition('out:super.slow', MySuperTransitionOut(5000, 'easeOut'));

	var queue = new ReactiveVar();
	var q = [];

	var layoutOptions = {
		ListLayout: ['itemSize', 'margins', 'spacing']
	};

	Session.setDefault('margins', [3, 3, 3, 3]);
	Session.set('itemSize', 190);
	Session.set('spacing', 3);



	/* Meteor.startup(function () {*/
	Session.set('level', 1);

	Meteor.call('categoryData', null, 1, null, function (error, result) {
		// var _ref = Category.find({level: 1, parent: null}).fetch();
		var _ref = result;

		for ( var i = 0; i < _ref.length; i++ ) {
			Category._collection.insert({
				_id: _ref[i]._id,
				name: _ref[i].name,
				level: _ref[i].level,
				class: _ref[i].class,
				order: i,
				style: "background: hsl(" + (i * 360 / 60) + ", 100%, 50%)",
				parent: _ref[i].parent
			});
		}
		count[1] = 30;

		if ( Category.find({level:1,name:"Load more",parent:null}).count() === 0 ) {
			Category._collection.insert({
				//_id: 1,
				level: 1,
				name: "Load more",
				parent: null,
				order: count[1],
				style: "background:#fff"
			});
		}

		q[0] = Category.find({level: 1}, {sort: {order: 0}});

		queue.set(q);
	});
	//  });

	Template.body.rendered = function () {

	};

	Template.listItems.events({
		'dblclick div': function (e, t) {

			/*     var ct, it, ot, randomInId, randomOutId;
			 if (Session.get('randomTransitions')) {
			 randomInId = getRandomInt(0, allTransitions.length - 1);
			 randomOutId = getRandomInt(0, allTransitions.length - 1);
			 Session.set('currentTransitions', [allTransitions[randomInId], allTransitions[randomOutId]]);
			 }
			 it = Session.get('inTransform').map(function(el) {
			 return parseInt(el);
			 });
			 ot = Session.get('outTransform').map(function(el) {
			 return parseInt(el);
			 });
			 ct = Session.get('currentTransitions');
			 Popups.setOptions({
			 modal: Session.get('showbd'),
			 backdropCloseOnClick: Session.get('cocbd'),
			 opacity: Session.get('opacity'),
			 lightbox: {
			 inTransform: famous.core.Transform.translate.apply(this, it),
			 outTransform: famous.core.Transform.translate.apply(this, ot),
			 inTransition: {
			 duration: Session.get('inDuration'),
			 curve: famous.transitions.Easing[ct[0]]
			 },
			 outTransition: {
			 duration: Session.get('outDuration'),
			 curve: famous.transitions.Easing[ct[1]]
			 }
			 }
			 });*/
			Popups.show({
				template: "popup",
				modal_class: "modal-lg"
			});

		},

		'click div': function (e, t) {

			if ( this.name === "Load more" ) {
				//Load More Data
				var self = this;
				Meteor.call('categoryData', this.parent, this.level, count[this.level], function (error, result) {

					Category._collection.remove({level: self.level,name:"Load more",parent:self.parent});

					var _ref = result;
					var i = count[self.level] + 1;
					for ( var j = 0; j < _ref.length; i++, j++ ) {
						Category._collection.insert({
							_id: _ref[j]._id,
							name: _ref[j].name,
							level: _ref[j].level,
							class: _ref[j].class,
							order: i,
							style: "background: hsl(" + (i * 360 / 60) + ", 100%, 50%)",
							parent: _ref[j].parent
						});

					}

					Category._collection.insert({
						//_id: self.level,
						level: self.level,
						name: "Load more",
						parent: self.parent,
						order: count[self.level]+1,
						style: "background:#fff"
					});

					count[self.level] = count[self.level] + 30;

					// Category._collection.update({_id: level}, {$set: {order: count[level]}});

					q[(self.level - 1)] = Category.find({level: self.level,parent:self.parent}, {sort: {order: 0}});
					queue.set(q);

				});

			}

			else {

				//Get other categories
				var level = this.level;
				var self = this;

				Category._collection.update({parent: self.parent, level: level}, {$set: {class: " "}}, {multi: true});
				Category._collection.update({_id: self._id}, {$set: {class: "selected"}});

				if ( Session.get('level') != level ) {
					for ( var i = Session.get('level'); i > level; i-- ) {
						q.pop();
					}
				}
				queue.set(q);



				if ( Category.find({level: (level + 1), parent: self._id}).count() === 0 ) {
					Meteor.subscribe('category-data', self._id, (level + 1), function () {

						var _ref = Category.find({level: (level + 1), parent: self._id}).fetch();

						for ( var j = 0; j < _ref.length; j++ ) {
							Category._collection.update({_id: _ref[j]._id}, {
								$set: {
									order: j,
									style: "background: hsl(" + (j * 360 / 60) + ", 100%, 50%)"
								}
							});

						}


						if ( Category.find({name:"Load more",level: (level+1),parent:self._id}).count() === 0 ) {
							Category._collection.insert({

								level:(level+1),
								name: "Load more",
								parent: self._id,
								order: 31,
								style: "background:#fff"
							});

							count[(level+1)]=30;
						}

						q.push(Category.find({parent: self._id, level: (level + 1)}, {sort: {order: 0}}));
						queue.set(q);
					});
				}
				else {

					q.push(Category.find({parent: self._id, level: (level + 1)}, {sort: {order: 0}}));
					queue.set(q);

				}


				Session.set('level', (level + 1));
			}
		}
	});

	Template.body.helpers({

		gridItem: function () {

			return queue.get();
		},
		layoutOptions: function () {
			var out = {};
			_.each(layoutOptions[Session.get('layout')], function (option) {
				out[option] = Session.get(option);
			});
			return out;
		}
	});

	Session.setDefault('order', 1);

	Template.body.events({
		/* 'click .surfaceAction': function (event) {
		 *//*  var add = event.currentTarget.getAttribute('data-action') === 'add';
		 var sids = _.pluck(Surfaces.find({show: !add}, {fields: {_id: 1}}).fetch(), '_id');
		 var id = sids[Math.floor((Math.random() - 0.001) * sids.length)];
		 Surfaces.update(id, {$set: {show: add}});*//*
		 }*/
	});

	Template.header.helpers({
		level: function () {
			return Session.get('level');
		}
	});

	Logger.setLevel("famous-views", "info");

	Template.popup.rendered = function () {
		this.$('.modal').addClass('in').css({
			display: 'block',
			overflow: 'hidden'
		});
	};

	Template.popup.events({
		/* 'click #save': function(evt, tmpl) {
		 Popups.show({
		 template: "saved",
		 size: "[600, true]"
		 });
		 },*/
		'click #close': function (evt, tmpl) {
			Popups.hide(this.id);
		},
		'click .close': function (evt, tmpl) {
			Popups.hide(this.id);
		}
	});


}

