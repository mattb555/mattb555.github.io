for (var key in allbuildings) {
    $(".buildlist").append($("<li ng-click=\"selectBuilding(\'" + key + "\')\">" + key + "</li>"));
}