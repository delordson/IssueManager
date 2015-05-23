/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileHome.Issues_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileIssues.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.MyIssues_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileMyIssues.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.MyFurtherActions_postRender = function (element, contentItem) {
    // Write code here.

};
myapp.MobileHome.Employees_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileMyFurtherActions.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.IssueTypes_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileIssueTypes.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.OverdueText_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "48px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "red");

    myapp.activeDataWorkspace.ApplicationData.OverDueIssues().execute().then(function (results) {
        element.textContent = CountIssues(results).toString();
    });
};
myapp.MobileHome.StatsGroup_postRender = function (element, contentItem) {
    $(element).css("margin-left", "10px");
};
myapp.MobileHome.DueTodayText_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "48px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "orange");

    myapp.activeDataWorkspace.ApplicationData.IssuesDueToday().execute().then(function (results) {
        element.textContent = CountIssues(results).toString();
    });
};
myapp.MobileHome.InProgressText_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "48px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "green");

    myapp.activeDataWorkspace.ApplicationData.InProgressIssues().execute().then(function (results) {
        element.textContent = CountIssues(results).toString();
    });
};
myapp.MobileHome.UnassignedText_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "blue");

    myapp.activeDataWorkspace.ApplicationData.UnassignedIssues().execute().then(function (results) {
        element.textContent = CountIssues(results).toString();
    });
};