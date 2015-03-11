Category = new Meteor.Collection(null);

if (Meteor.isClient) {

    var SpringTransition = famous.transitions.SpringTransition;
    var SnapTransition = famous.transitions.SnapTransition;
    var WallTransition = famous.transitions.WallTransition;

    var Transitionable = famous.transitions.Transitionable;

    Transitionable.registerMethod('spring', SpringTransition);
    Transitionable.registerMethod('snap', SnapTransition);
    Transitionable.registerMethod('wall', WallTransition);

    MySuperTransitionIn = function(duration, curve) {
        return function(stateModifier, done) {
            stateModifier.halt();
            stateModifier.setTransform(Transform.translate(3,3),
                { method:"spring", period: 250, dampingRatio: 0.9, velocity: 0.1 },done);
        };
    };

    MySuperTransitionOut = function(duration, curve) {
        return function(stateModifier, done) {
            stateModifier.setOpacity(1);
            stateModifier.setOpacity(0, {duration: 600, curve: 'easeInOut' },done);
        }
    };

    FView.registerTransition('in:super.slow',  MySuperTransitionIn(5000, 'easeOut'));
    FView.registerTransition('out:super.slow',  MySuperTransitionOut(5000, 'easeOut'));


    var queue = new ReactiveVar();
    var q = [];

    // Meteor.subscribe('category-data', null);

    var layoutOptions = {
        ListLayout: ['itemSize', 'margins', 'spacing']
    };

    Session.setDefault('margins', [3,3,3,3]);
    Session.set('itemSize', 190);
    Session.set('spacing',3);

    //  Template.body.rendered = function () {
    Meteor.startup(function () {
        Session.set('level', 1);
        if (Category.find().count() === 0) {
            for (var i = 1; i < 50; i++) {
                Category.insert({
                    name: "C-" + i,
                    parent: null,
                    level: 1,
                    class: " ",
                    style: "background: hsl(" + (i * 360 / 60) + ", 100%, 50%)"
                });
            }
        }
        q[0] = Category.find({level: 1});
        queue.set(q);

    });

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
            var fview = FView.from(t);


            // Meteor.subscribe('category-data', "Sub");
            var level = this.level;
            var self = this;

            Category.update({level: level}, {$set: {class: " "}}, {multi: true});
            Category.update({_id: self._id}, {$set: {class: "selected"}});

            Category.remove({level: (level + 1)});
            for (var i = 1; i < 50; i++) {
                Category.insert({
                    name: self.name + "-" + i,
                    parent: null,
                    level: (level + 1),
                    class: " ",
                    style: "background: hsl(" + (i * 360 / 60) + ", 100%, 50%)"
                });
            }

            if (Session.get('level') != level) {
                for (var i = Session.get('level'); i > level; i--) {
                    q.pop();
                    /*queue.set(q);*/
                }
            }

            q.pop();
            q.push(Category.find({level: (level)}));
            q.push(Category.find({level: (level + 1)}));
            queue.set(q);
            /* t.firstNode.addClass('selected');*/
            Session.set('level', (level + 1));


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

if (Meteor.isServer) {
    Meteor.startup(function () {


        /*Meteor.publish('category-data', function (id) {
         //return Category.find({parent: id});
         return Category.find();
         });*/

    });
}

