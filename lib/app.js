/**
 * Created by idris on 14/3/15.
 */

Category = new Meteor.Collection('category');
gvar = {};
gvar1={};
count = {};
video = new ReactiveVar();

EditableText.registerCallbacks({
	updateCategory : function(document,collection) {
		//queue.set(q);
	}
});

