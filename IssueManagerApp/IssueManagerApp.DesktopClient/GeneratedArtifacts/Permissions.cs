﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LightSwitchApplication
{
    /// <summary>
    /// Defines the names of the application permissions.
    /// </summary>
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public static class Permissions
    {
        /// <summary>
        /// Provides the ability to manage security for the application.
        /// </summary>
        public const string SecurityAdministration = global::Microsoft.LightSwitch.Security.ApplicationPermissions.SecurityAdministration;
        /// <summary>
        /// Can Edit Employees
        /// </summary>
        public const string CanEditEmployees = "LightSwitchApplication:CanEditEmployees";
        /// <summary>
        /// Can Edit Further Actions
        /// </summary>
        public const string CanEditFurtherActions = "LightSwitchApplication:CanEditFurtherActions";
        /// <summary>
        /// Can Edit Issue Comments
        /// </summary>
        public const string CanEditIssueComments = "LightSwitchApplication:CanEditIssueComments";
        /// <summary>
        /// Can Edit Issues
        /// </summary>
        public const string CanEditIssues = "LightSwitchApplication:CanEditIssues";
        /// <summary>
        /// Can Edit Issue Types
        /// </summary>
        public const string CanEditIssueTypes = "LightSwitchApplication:CanEditIssueTypes";

        /// <summary>
        /// Gets all permissions defined for the application.  This includes system and user-defined permissions.
        /// </summary>
        public static global::System.Collections.ObjectModel.ReadOnlyCollection<string> AllPermissions { get { return global::Microsoft.LightSwitch.Security.ApplicationPermissions.AllPermissions; } }
    }
}