/**
 * Created by idris on 14/3/15.
 */


    Meteor.startup(function () {

        if (Category.find().count() === 0) {
            for (var i = 1; i <= 30; i++) {
                Category.insert({
                    name: "C-" + i,
                    parent: null,
                    level: 1,
                    class: " ",
                    order: 0,
                    style: ""
                });
            }
        }

    });

        Meteor.methods({
            categoryData : function(id, level, count) {
                if (count === null) {
                    if (Category.find({parent: id, level: level}).count() === 0) {
                        var temp = Category.findOne({_id: id})===undefined?"C":Category.findOne({_id: id}).name;
                        for (var i = 1; i <= 30; i++) {
                            Category.insert({
                                name: temp + "-" + i,
                                parent: id,
                                level: (level),
                                class: " ",
                                order: 0,
                                style: ""
                            });
                        }
                    }
                    return Category.find({parent: id, level: level}, {limit: 30}).fetch();
                }
                else {
                    if(Category.find({level:level,name:"MC-"+(count+1),parent:id}).count()===0) {
                        for (var i = (count+1); i <= (count + 30); i++) {
                            Category.insert({
                                name: "MC-" + i,
                                parent: id,
                                level: (level),
                                class: " ",
                                order: 0,
                                style: ""
                            });
                        }
                    }
                    return Category.find({parent: id, level: level}, {limit: 30, skip: count}).fetch();

                }
            }
        });

        Meteor.publish('category-data',function(id,level){
            if (Category.find({parent: id, level: level}).count() === 0) {
                var temp = Category.findOne({_id: id});
                for (var i = 1; i <= 30; i++) {
                    Category.insert({
                        name: temp.name + "-" + i,
                        parent: id,
                        level: (level),
                        class: " ",
                        order: 0,
                        style: ""
                    });
                }
            }
            return Category.find({parent: id, level: level},{limit:30});
        });






