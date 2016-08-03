define("src/config/namespace", [], function() {
    "use strict";
    return "ModuleLargeApp"
}), angular.module("resources.views", []).run(["$templateCache", function(e) {
    "use strict";
    e.put("src/components/contactList/phoneBook/view/_phoneBook.html", '<div class="panel panel-default">\r\n    <div class="panel-heading">\r\n        <h3 class="panel-title">PhoneBook</h3>\r\n    </div>\r\n    <div class="panel-body">\r\n        <div class="form-group">\r\n            <input type="text" class="form-control input-sm" ng-model="vm.searchText" placeholder="Search..."/>\r\n        </div>\r\n    </div>\r\n    <ul class="list-group contactList scrollable">\r\n        <li class="list-group-item" ng-repeat="item in items | filter:vm.searchText">\r\n            <strong>{{item.name}}</strong> <span class="label label-default pull-right" title="{{item.group}}">{{item.group}}</span>\r\n            <ul class="list-unstyled list-inline">\r\n                <li ng-if="item.email"><i class="glyphicon glyphicon-envelope"></i> {{item.email}}</li>\r\n                <li ng-if="item.telephone"><i class="glyphicon glyphicon-phone-alt"></i> {{item.telephone}}</li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</div>'), e.put("src/components/todo/pending/view/_pending.html", '<div class="panel panel-default">\r\n    <div class="panel-heading">\r\n        <h3 class="panel-title">Pending tasks</h3>\r\n    </div>\r\n    <div class="panel-body">\r\n        <div class="form-group">\r\n            <input type="text" class="form-control input-sm" placeholder="What you have to do?"\r\n                   ng-keyup="add(item,$event)"\r\n                   ng-model="item.description"/>\r\n        </div>\r\n    </div>\r\n    <ul class="list-group todoList scrollable">\r\n        <li class="list-group-item" ng-repeat="item in getItems()">\r\n            <input type="checkbox" ng-click="done(item)"/>\r\n            <span>{{item.description}}</span>\r\n        </li>\r\n    </ul>\r\n</div>'), e.put("src/modules/contactList/view/contacts/index.html", '<div class="page-header">\r\n    <h1>Contact List</h1>\r\n</div>\r\n\r\n<div class="form-group">\r\n    <a href="javascript:;" class="btn btn-block btn-primary" ng-show="!showForm" ng-click="showForm=true">New Contact</a>\r\n</div>\r\n<div class="panel panel-default" ng-show="showForm">\r\n    <div class="panel-heading">\r\n        <h3 class="panel-title">Add new contact</h3>\r\n    </div>\r\n    <div class="panel-body">\r\n        <form ng-submit="add(newItem)">\r\n        <div class="form-group">\r\n            <input type="text" class="form-control" ng-model="newItem.name" placeholder="Name" required/>\r\n        </div>\r\n        <div class="form-group">\r\n            <input type="text" class="form-control" ng-model="newItem.telephone" placeholder="Phone number"/>\r\n        </div>\r\n        <div class="form-group">\r\n            <input type="text" class="form-control" ng-model="newItem.email" placeholder="E-mail address"/>\r\n        </div>\r\n        <div class="form-group">\r\n            <select class="form-control" ng-model="newItem.group" ng-options="group for group in groups">\r\n                <option value="">Group</option>\r\n            </select>\r\n        </div>\r\n        <hr/>\r\n        <div class="row">\r\n            <div class="col-md-6"><button type="submit" class="btn btn-success btn-block">Save</button></div>\r\n            <div class="col-md-6"><a href="javascript:;" ng-click="showForm=false" class="btn btn-default btn-block">Cancel</a></div>\r\n        </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class="panel panel-default">\r\n    <div class="panel-body">\r\n\r\n        <div class="form-group">\r\n            <input type="text" class="form-control input-sm" ng-model="vm.searchText" placeholder="Search"/>\r\n        </div>\r\n        <ul class="list-group contactList">\r\n            <li class="list-group-item" ng-repeat="item in items | filter:vm.searchText"\r\n                ng-click="toggleSelected(item)" ng-class="{\'selected\':item.selected}">\r\n                <strong>{{item.name}}</strong> <span class="label label-default pull-right" title="{{item.group}}">{{item.group}}</span>\r\n                <ul class="list-unstyled list-inline">\r\n                    <li ng-if="item.email"><i class="glyphicon glyphicon-envelope"></i> {{item.email}}</li>\r\n                    <li ng-if="item.telephone"><i class="glyphicon glyphicon-phone-alt"></i> {{item.telephone}}</li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <div>\r\n            <a href="javascript:;" ng-click="deleteSelected(items)" ng-show="getSelected().length > 0"\r\n               class="btn btn-block btn-danger">Delete</a>\r\n        </div>\r\n    </div>\r\n</div>'), e.put("src/modules/dashboard/view/dashboard/index.html", '<div class="row">\r\n    <div class="col-md-12">\r\n        <div class="alert alert-info">\r\n            <strong>Hey!</strong> I blogged about this project <a href="http://dsalvagni.com.br/angularjs-para-aplicacoes-de-larga-escala/" target="_blank" style="color:#fff; text-decoration:underline; ">here [pt-BR]</a>.\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <todo-pending-tasks></todo-pending-tasks>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <contact-list-phone-book></contact-list-phone-book>\r\n    </div>\r\n</div>\r\n'), e.put("src/modules/todo/view/todo/index.html", '<div class="page-header">\r\n    <h1>Todo List</h1>\r\n</div>\r\n<div class="form-group">\r\n    <input type="text" class="form-control input-lg" placeholder="What you have to do?" ng-keyup="add(item,$event)"\r\n           ng-model="item.description"/>\r\n</div>\r\n<div class="todoList">\r\n    <ul class="list-group">\r\n        <li class="list-group-item" ng-repeat="item in items">\r\n            <input type="checkbox" ng-model="item.done"/>\r\n            <span ng-class="{complete: item.done}">{{item.description}}</span>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div>\r\n    <a href="javascript:;" ng-click="deleteSelected(items)" ng-show="getSelectedTasks().length > 0"\r\n       class="btn btn-block btn-danger">Delete</a>\r\n</div>')
}]), define("src/resources/views", function() {}), define("src/components/todo/pending/directives/pending", [], function() {
    "use strict";
    var e = function() {
        var e = "src/components/todo/pending/view/";
        return {
            restrict: "E",
            templateUrl: e + "_pending.html",
            controller: ["$scope", "todoSvc", function(e, n) {
                var t = [];
                e.isReady = !1, e.done = function(e) {
                    e.done = !0
                }, e.getItems = function() {
                    return t = t.filter(function(e) {
                        return !e.done
                    })
                }, e.add = function(n, o) {
                    return 13 !== o.keyCode ? !1 : (t.push(n), void(e.item = {}))
                }, n.getAllUndone().then(function(n) {
                    t = n, e.isReady = !0
                })["catch"](function() {
                    e.isReady = !0
                })
            }]
        }
    };
    return e
}), define("src/components/todo/pending/component", ["../../../config/namespace", "./directives/pending"], function(e, n) {
    "use strict";
    angular.module(e + ".components.todo.pending", [e + ".todo"]).directive("todoPendingTasks", n)
}), define("src/components/contactList/phoneBook/directives/phoneBook", [], function() {
    "use strict";
    var e = function() {
        var e = "src/components/contactList/phoneBook/view/";
        return {
            restrict: "E",
            templateUrl: e + "_phoneBook.html",
            controller: ["$scope", "contactsSvc", function(e, n) {
                e.items = [], e.isReady = !1, n.getAllContacts().then(function(n) {
                    e.items = n.items, e.isReady = !0
                })["catch"](function() {
                    e.isReady = !0
                })
            }]
        }
    };
    return e
}), define("src/components/contactList/phoneBook/component", ["../../../config/namespace", "./directives/phoneBook"], function(e, n) {
    "use strict";
    angular.module(e + ".components.contacts.phoneBook", [e + ".contacts"]).directive("contactListPhoneBook", n)
}), define("src/modules/core/config/app.bootstrap", [], function() {
    "use strict";
    var e = function() {};
    return e
}), define("src/modules/core/config/app.config", [], function() {
    "use strict";
    var e = function(e) {
        e.otherwise("/dashboard")
    };
    return e.$inject = ["$urlRouterProvider"], e
}), define("src/modules/core/module", ["../../config/namespace", "./config/app.bootstrap", "./config/app.config"], function(e, n, t) {
    "use strict";
    angular.module(e + ".core", ["ngRoute"]).config(t).run(n)
}), define("src/modules/navigation/provider/PrimaryNavigationProvider", [], function() {
    "use strict";
    var e = function() {
        var e = [];
        this.$get = function() {
            return {
                add: function(n) {
                    e.push(n)
                },
                getNavigation: function() {
                    return e
                }
            }
        }
    };
    return e
}), define("src/modules/navigation/config/module.config", [], function() {
    "use strict";
    var e = function() {};
    return e
}), define("src/modules/navigation/module", ["../../config/namespace", "./provider/PrimaryNavigationProvider", "./config/module.config"], function(e, n, t) {
    "use strict";
    angular.module(e + ".navigation", []).provider("PrimaryNavigation", n).config(t)
}), define("src/modules/app/controller/appCtrl", [], function() {
    "use strict";
    var e = function(e, n) {
        e.primaryNavigation = n.getNavigation()
    };
    return e.$inject = ["$scope", "PrimaryNavigation"], e
}), define("src/modules/app/config/module.config", [], function() {
    var e = function() {};
    return e
}), define("src/modules/app/module", ["../../config/namespace", "./controller/appCtrl", "./config/module.config"], function(e, n, t) {
    "use strict";
    angular.module(e + ".app", ["ngRoute", e + ".navigation"]).controller("appCtrl", n).config(t)
}), define("src/modules/todo/controller/todoCtrl", [], function() {
    "use strict";
    var e = function(e, n, t) {
        function o() {
            t.getAllTasks().then(function(e) {
                n.items = e.items
            })
        }
        n.items = [], n.add = function(e, t) {
            return 13 !== t.keyCode ? !1 : (n.items.push({
                description: e.description,
                done: !1
            }), void(n.item = {}))
        }, n.getSelectedTasks = function() {
            return n.items.filter(function(e) {
                return e.done
            })
        }, n.deleteSelected = function(e) {
            return confirm("Are you sure?") ? void(n.items = e.filter(function(e) {
                return !e.done
            })) : !1
        }, o()
    };
    return e.$inject = ["$rootScope", "$scope", "todoSvc"], e
}), define("src/modules/todo/service/todoSvc", [], function() {
    "use strict";
    var e = function(e, n) {
        var t = function() {
                var t = n.defer();
                return e.get("./src/modules/todo/data/tasks.json").success(function(e) {
                    t.resolve({
                        items: e
                    })
                }).error(function(e, n) {
                    t.reject({
                        data: e,
                        status: n
                    })
                }), t.promise
            },
            o = function() {
                var e = n.defer(),
                    o = [];
                return t().then(function(n) {
                    o = n.items.filter(function(e) {
                        return !e.done
                    }), e.resolve(o)
                })["catch"](function(n) {
                    e.reject(n)
                }), e.promise
            };
        return {
            getAllTasks: function() {
                return t()
            },
            getAllUndone: function() {
                return o()
            }
        }
    };
    return e.$inject = ["$http", "$q"], e
}), define("src/modules/todo/config/module.config", [], function() {
    "use strict";
    var e = function(e) {
        var n = "src/modules/todo/view/";
        e.state("todo", {
            url: "/todo",
            controller: "todoCtrl",
            templateUrl: n + "todo/index.html"
        })
    };
    return e.$inject = ["$stateProvider"], e
}), define("src/modules/todo/module", ["../../config/namespace", "./controller/todoCtrl", "./service/todoSvc", "./config/module.config"], function(e, n, t, o) {
    "use strict";
    angular.module(e + ".todo", ["ui.router", e + ".navigation"]).controller("todoCtrl", n).service("todoSvc", t).config(o).run(["PrimaryNavigation", function(e) {
        e.add({
            title: "Todo List",
            stateName: "todo",
            order: 1
        })
    }])
}), define("src/modules/dashboard/config/module.config", [], function() {
    "use strict";
    var e = function(e) {
        var n = "src/modules/dashboard/view/";
        e.state("dashboard", {
            url: "/dashboard",
            templateUrl: n + "dashboard/index.html"
        })
    };
    return e.$inject = ["$stateProvider"], e
}), define("src/modules/dashboard/module", ["../../config/namespace", "./config/module.config"], function(e, n) {
    "use strict";
    angular.module(e + ".dashboard", ["ui.router", e + ".navigation"]).config(n).run(["PrimaryNavigation", function(e) {
        e.add({
            title: "Dashboard",
            stateName: "dashboard",
            order: 0
        })
    }])
}), define("src/modules/contactList/controller/contactsCtrl", [], function() {
    "use strict";
    var e = function(e, n, t) {
        function o() {
            t.getAllContacts().then(function(e) {
                n.items = e.items
            })
        }
        n.items = [], n.groups = ["Friends", "Family", "Others"], n.toggleSelected = function(e) {
            e.selected = !e.selected
        }, n.add = function(e) {
            n.items.push(e), delete n.newItem, n.showForm = !1
        }, n.getSelected = function() {
            return n.items.filter(function(e) {
                return e.selected
            })
        }, n.deleteSelected = function(e) {
            return confirm("Are you sure?") ? void(n.items = e.filter(function(e) {
                return !e.selected
            })) : !1
        }, o()
    };
    return e.$inject = ["$rootScope", "$scope", "contactsSvc"], e
}), define("src/modules/contactList/service/contactsSvc", [], function() {
    "use strict";
    var e = function(e, n) {
        var t = function() {
            var t = n.defer();
            return e.get("./src/modules/contactList/data/contacts.json").success(function(e) {
                t.resolve({
                    items: e
                })
            }).error(function(e, n) {
                t.reject({
                    data: e,
                    status: n
                })
            }), t.promise
        };
        return {
            getAllContacts: function() {
                return t()
            }
        }
    };
    return e.$inject = ["$http", "$q"], e
}), define("src/modules/contactList/config/module.config", [], function() {
    "use strict";
    var e = function(e) {
        var n = "src/modules/contactList/view/";
        e.state("contacts", {
            url: "/contacts",
            controller: "contactsCtrl",
            templateUrl: n + "contacts/index.html"
        })
    };
    return e.$inject = ["$stateProvider"], e
}), define("src/modules/contactList/module", ["../../config/namespace", "./controller/contactsCtrl", "./service/contactsSvc", "./config/module.config"], function(e, n, t, o) {
    "use strict";
    angular.module(e + ".contacts", ["ui.router", e + ".navigation"]).controller("contactsCtrl", n).service("contactsSvc", t).config(o).run(["PrimaryNavigation", function(e) {
        e.add({
            title: "Contacts",
            stateName: "contacts",
            order: 1
        })
    }])
}), define("app", ["src/config/namespace", "src/resources/views", "src/components/todo/pending/component", "src/components/contactList/phoneBook/component", "src/modules/core/module", "src/modules/navigation/module", "src/modules/app/module", "src/modules/todo/module", "src/modules/dashboard/module", "src/modules/contactList/module"], function(e) {
    "use strict";
    return angular.module(e, ["ngRoute", "ui.router", "resources.views", e + ".core", e + ".app", e + ".todo", e + ".dashboard", e + ".contacts", e + ".components.todo.pending", e + ".components.contacts.phoneBook"]), {
        name: e
    }
});
