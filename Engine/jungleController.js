(function () {
    angular
        .module('app')
        .controller('Main', ["$scope", "$sce", function ($scope, $sce) {
            $scope.goal = 3;
            $scope.selectedBuilding = null;
            $scope.scoreRow = function (i) {
                if ($scope.score[i] > 0) {
                    return ($scope.score[i] * $scope.score[i]);
                }
                return 0;
            }
            $scope.totalScore = function () {
                var total = 0;
                for (i = 0; i < $scope.score.length - 1; i++) {
                    total += $scope.scoreRow(i);
                }
                return total;
            }
            $scope.finalScore = function () {
                var totalScore = 0;
                for (i = $scope.height - 1; i >= 0; i--) {
                    if ($scope.score[i] >= $scope.goal) {
                        totalScore += $scope.scoreRow(i);
                        totalScore += $scope.bonus[($scope.height - 1) - i];
                    } else {
                        break;
                    }
                }
                return totalScore;
            }
            $scope.tableSet = function () {
                if ($scope.width > 0 && $scope.height > 0) {
                    let blankelement = {
                        points: 0,
                        collecting: false,
                        occupied: false,
                        multiplier: 1
                    }
                    $scope.grid = [];
                    $scope.score = [];
                    $scope.bonus = [];
                    var newTable = '<table><div id=\'table\'><tr><th class=\'blank\'></th></tr>';
                    var newScoreTable = "<table><tr><th>Row Points</th><th>Score</th><th>Bonus</th></tr>";
                    for (i = -1; i < $scope.height + 1; i++) {
                        $scope.grid[i] = [];
                        $scope.score[i] = 0;
                        $scope.bonus[i] = (Math.pow(2, i) * 10) * Math.min(1, i);
                        if (i >= 0 && i < $scope.height) {
                            var newRow = "<tr id=\"row" + ($scope.height - i) + "\">";
                            var newScoreRow = "<tr>";
                        }
                        for (j = 0; j < $scope.width; j++) {
                            $scope.grid[i][j] = JSON.parse(JSON.stringify(blankelement));
                            if (i >= 0 && i < $scope.height) {
                                var newCol = '<td ng-class=\'{occupied : grid[' + i + '][' + j + '].occupied === true, collecting : grid[' + i + '][' + j + '].collecting === true}\'' +
                                    'ng-model=\'grid[' + i + '][' + j + ']\' ng-click=\'applyBuilding(' + i + ', ' + j + ')\'>' +
                                    '{{grid[' + i + '][' + j + '].points * grid[' + i + '][' + j + '].multiplier}}</td>';
                                newRow += newCol;

                            }
                        }
                        newScoreRow += "<td class=\"scoretable\">{{ score["+ i + "] }}</td>";
                        newScoreRow += "<td class=\"scoretable\">{{ scoreRow(" + i + ") }}</td>";
                        newScoreRow += "<td class=\"scoretable\">{{ bonus[" + (($scope.height - 1) - i) + "] }}</td>";
                        $scope.grid[i][$scope.grid[i].length] = JSON.parse(JSON.stringify(blankelement));
                        $scope.grid[i][-1] = JSON.parse(JSON.stringify(blankelement));
                        if (i >=0 && i < $scope.height) {
                            newTable += (newRow + "</tr>");
                            newScoreTable += (newScoreRow + "</tr>");
                        }
                    }
                    $scope.table = (newTable + '</div></table>');
                    $scope.scoretable = (newScoreTable + "</table>" + "Total score = {{ finalScore() }}");
                }
            }

            $scope.selectBuilding = function (buildingID) {
                $scope.selectedBuilding = allbuildings[buildingID];
                console.log($scope.selectedBuilding);
            }

            $scope.getSelectedBuilding = function () {
                var ans = "";
                var selected = $scope.selectedBuilding
                if (selected != null) {
                    ans += selected.name + "\n";
                    for (i = 0; i < selected.effect.length; i++) {
                        ans += "|\t";
                        for (j = 0; j < selected.effect[i].length; j++) {
                            ans += selected.effect[i][j] + "\t";
                        }
                        ans += "|\n";
                    }
                    if (selected.hasOwnProperty("multiplier")) {
                        ans += "Multiplier: " + selected.multiplier + "x\n";
                    }
                }
                return ans;
            }

            $scope.applyBuilding = function (x, y) {
                if ($scope.selectedBuilding["effect"][1][1] === "x" || $scope.selectedBuilding["effect"][1][1] === "c") {
                    if ($scope.grid[x][y].occupied === false) {
                        if ($scope.selectedBuilding["effect"][1][1] === "c") {
                            $scope.grid[x][y].collecting = true;
                        }
                        if ($scope.selectedBuilding.hasOwnProperty("multiplier")) {
                            $scope.grid[x][y].multiplier = $scope.selectedBuilding.multiplier;
                        }
                        $scope.grid[x][y].occupied = true;
                        $scope.grid[x - 1][y - 1].points += $scope.selectedBuilding["effect"][0][0];
                        $scope.grid[x - 1][y].points += $scope.selectedBuilding["effect"][0][1];
                        $scope.grid[x - 1][y + 1].points += $scope.selectedBuilding["effect"][0][2];
                        $scope.grid[x][y - 1].points += $scope.selectedBuilding["effect"][1][0];
                        $scope.grid[x][y + 1].points += $scope.selectedBuilding["effect"][1][2];
                        $scope.grid[x + 1][y - 1].points += $scope.selectedBuilding["effect"][2][0];
                        $scope.grid[x + 1][y].points += $scope.selectedBuilding["effect"][2][1];
                        $scope.grid[x + 1][y + 1].points += $scope.selectedBuilding["effect"][2][2];
                        //Recalculate Scores
                        $scope.score[x - 1] = $scope.score[x] = $scope.score[x + 1] = 0;
                        for (i = 0; i < $scope.grid[x].length - 1; i++) {
                            if ($scope.grid[x - 1][i].collecting === true) {  
                                $scope.score[x - 1] += $scope.grid[x - 1][i].points * $scope.grid[x - 1][i].multiplier;
                            }
                            if ($scope.grid[x][i].collecting === true) {
                                $scope.score[x] += $scope.grid[x][i].points * $scope.grid[x][i].multiplier;
                            }
                            if ($scope.grid[x + 1][i].collecting === true) {
                                $scope.score[x + 1] += $scope.grid[x + 1][i].points * $scope.grid[x + 1][i].multiplier;
                            }
                        }
                        if ($scope.score[$scope.height - 1] >= $scope.goal) {
                            console.log("Total score = " + $scope.finalScore());
                        }
                    }
                }
            }
        }])
        .directive('dir', function ($compile, $parse) {
            return {
                restrict: 'E',
                link: function (scope, element, attr) {
                    scope.$watch(attr.content, function () {
                        element.html($parse(attr.content)(scope));
                        $compile(element.contents())(scope);
                    }, true);
                }
            }
        })
})();