module.exports = {
    name: "item",
    array: {
        templateUrl: "templates/item.html",
        controller: "ItemListController",
        bindings: {
            // $ctrl.which
            which: "<",
        }
    }
}; 