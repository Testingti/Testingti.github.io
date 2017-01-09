'use strict';

(function(){
    angular.module('busboy').controller('homeController', function(homeService){
        var vm = this;

        vm.formData = {
            username: "",
            selection: "",
            comments: ""
        }

        vm.options = [
            {
                id: 1,
                value: "This is my first time here and I come from facebook mobile app"
            }, 
            {
                id: 2,
                value: "This is my first time here and I come from facebook website"
            },
            {
                id: 3,
                value: "This is my second time here, I got here from clicking the facebook advertisement post on my wall"
            },
            {
                id: 4,
                value: "This is my third time here, I got here from clicking the the second facebook advertisement post on my wall"
            }
        ]

        //TODO: leave this here, can be trans to nganimate later
        var state = "none";

        $("button#yelp").click(function() {
            if (state != "yelp") {
                expand();
            }
            else {
                collapse();
            }
            
        });

        var expand = function(){
            state = "yelp";

            $(".overlay").animate({"opacity": "0"}, 250);
            $(".splash").delay(250).animate({"height": "50px"}, 500);
            $(".overlay-action").delay(750).animate({"opacity": "1"}, 250);

            $(".button-action").show(0);
            $(".button-action").delay(1000).animate({"opacity": "1"}, 250);
            $("button#wifi, button#menu, button#about").animate({"opacity": "0.25"}, 250);
        }

        var collapse = function(){
            state = "none";

            $(".button-action").animate({"opacity": "0"}, 250);
            $(".button-action").delay(250).hide(0);

            $(".overlay-action").animate({"opacity": "0"}, 250);
            $(".splash").delay(250).animate({"height": "300px"}, 500);
            $(".overlay").delay(750).animate({"opacity": "1"}, 250);
            
            
            $("button").animate({"opacity": "1"}, 250);
        }

    })
}());