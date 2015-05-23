/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Home.Issues_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Issues.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.Employees_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Employees.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.IssueTypes_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/IssueTypes.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.OverdueText_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "red");

    myapp.activeDataWorkspace.ApplicationData.OverDueIssues().execute().then(function (results) {
        element.textContent = CountIssues(results).toString();
    });
};
myapp.Home.DueTodayText_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "orange");

    myapp.activeDataWorkspace.ApplicationData.IssuesDueToday().execute().then(function (results) {
        element.textContent = CountIssues(results).toString();
    });
};
myapp.Home.InProgressText_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "green");

    myapp.activeDataWorkspace.ApplicationData.InProgressIssues().execute().then(function (results) {
        element.textContent = CountIssues(results).toString();
    });
};
myapp.Home.UnassignedText_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "blue");

    myapp.activeDataWorkspace.ApplicationData.UnassignedIssues().execute().then(function (results) {
        element.textContent = CountIssues(results).toString();
    });
};
myapp.Home.StatsGroup_postRender = function (element, contentItem) {
    $(element).css("margin-left", "30px");
};

function CountIssues(Issues) {
    var TotalIssues = 0;

    var issues = Issues.results;

    issues.forEach(function (order) {
        TotalIssues = TotalIssues + 1;
    });
    return TotalIssues;
}

myapp.Home.created = function (screen) {
    // Write code here.
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};