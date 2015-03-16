/**
 * Created by idris on 14/3/15.
 */


    Meteor.startup(function () {

        if (Category.find().count() === 0) {

	        //Insert seed data
	        //@TODO: find intelligent way to insert seed data. (from json or csv format)
	        Category.insert({"_id":"1","name":"movies","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"2","name":"politics","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"3","name":"sports","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"4","name":"programming","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"5","name":"news","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"6","name":"trailers","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"7","name":"comedy","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"8","name":"romantic","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"9","name":"action","parent":"1","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"10","name":"hollywood","parent":"6","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"11","name":"bollywood","parent":"6","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"12","name":"cricket","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"13","name":"football","parent":"3","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"14","name":"worldcup","parent":"12","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"15","name":"IPL","parent":"12","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"16","name":"Meteor","parent":"4","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"17","name":"Famous","parent":"4","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"18","name":"webstorm","parent":"16","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"19","name":"tutorials","parent":"16","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"20","name":"demos","parent":"17","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"21","name":"India","parent":"5","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"22","name":"world","parent":"5","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"23","name":"hyderabad","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"24","name":"mumbai","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"25","name":"delhi","parent":"21","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"26","name":"4tv","parent":"23","level" : 4,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"27","name":"etv","parent":"23","level" : 4,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"28","name":"Elections","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"29","name":"BJP","parent":"28","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"30","name":"AAP","parent":"28","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"31","name":"Kejriwal","parent":"30","level" : 4,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"32","name":"Kiran Bedi","parent":"29","level" : 4,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"33","name":"congress","parent":"2","level" : 2,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"34","name":"sonia gandhi","parent":"33","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"35","name":"scandals","parent":"33","level" : 3,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"36","name":"911","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"37","name":"Activist","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"38","name":"Archaeology","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"39","name":"Art and Artists","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"40","name":"Atheism","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"41","name":"Biographies","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"42","name":"Business","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"43","name":"Celebrity","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"44","name":"Crime","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"45","name":"Conference","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"46","name":"Conspiracy","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"47","name":"Countries","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"48","name":"Drugs","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"49","name":"Economics","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"50","name":"Educational","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"51","name":"Environment","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"52","name":"Evolution","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"53","name":"Gangs","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"54","name":"Health","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"55","name":"History","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"56","name":"Human Rights","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"57","name":"Lifestyle","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"58","name":"Movies","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"59","name":"Music","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"60","name":"Mystery","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"61","name":"Nature","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"62","name":"News & Politics","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"63","name":"Performing Arts","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"64","name":"Philosophy","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"65","name":"Preview Only","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"66","name":"Psychology","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"67","name":"Religion","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"68","name":"Science","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"69","name":"Society","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"70","name":"Space","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"71","name":"Spiritual","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"72","name":"Sport & Adventure","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"73","name":"Technology","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"74","name":"War","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});
	        Category.insert({"_id":"75","name":"Love","parent":null,"level" : 1,"class" : " ","order" : 0,"style" : ""});

	        /*   for (var i = 1; i <= 30; i++) {
			Category.insert({
				name: "C-" + i,
				parent: null,
				level: 1,
				class: " ",
				order: 0,
				style: ""
			});
		}*/
        }

    });

        Meteor.methods({
            categoryData : function(id, level, count) {
                if (count === null) {
                   /* if (Category.find({parent: id, level: level}).count() === 0) {
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
                    }*/
                    return Category.find({parent: id, level: level}, {limit: 30}).fetch();
                }
                else {
                  /*  if(Category.find({level:level,name:"MC-"+(count+1),parent:id}).count()===0) {
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
                    }*/
                    return Category.find({parent: id, level: level}, {limit: 30, skip: count}).fetch();

                }
            }
        });

        Meteor.publish('category-data',function(id,level){
           /* if (Category.find({parent: id, level: level}).count() === 0) {
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
            }*/
            return Category.find({parent: id, level: level},{limit:30});
        });






