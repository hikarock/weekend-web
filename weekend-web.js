Click = new Mongo.Collection('clicks');

if (Meteor.isClient) {

  Template.logo.events({
    'click h1': function() {
      Click.insert({});
    }
  });

  Template.logo.helpers({
    'count': function() {
      return Click.find().count();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    //
  });
}
