/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditFurtherAction.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditFurtherActions"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};