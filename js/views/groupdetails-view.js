window.app = window.app || {};

(function () {
    'use strict';

    // Group Details View
    // ------------------

    window.app.GroupDetailsView = Backbone.View.extend({

        template: _.template('<h3>Group Details</h3>' +
                                '<form style="width:300px" class="form-horizontal">' +
                                  '<div class="form-group">' +
                                    '<label for="inputName" class="col-sm-2 control-label">Name</label>' +
                                    '<div class="col-sm-10">' +
                                      '<input type="text" class="form-control" id="inputName" placeholder="Group Name">' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<div class="col-sm-offset-2 col-sm-10">' +
                                      '<button id="cancel" class="btn btn-default">Cancel</button>' +
                                      '<button type="submit" class="btn btn-primary">Save</button>' +
                                    '</div>' +
                                  '</div>' +
                                '</form>'),

        // The DOM events specific to a user.
        events: {
            'click #cancel': 'goBack'
        },

        goBack: function () {
            window.app.router.navigate("userdetails", {trigger: true});
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
}());