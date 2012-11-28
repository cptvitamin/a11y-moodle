# a11y-moodle

This is a Set of [YUI](http://yuilibrary.com/) scripts that improve the [Moodle 2+](http://download.moodle.org/) UX for users of Assistive Technology.  These scripts modify the DOM, adding elements, attributes and styles that improve the Moodle experience for keyboard and screen reader users.

## Prerequisites

* Website running [Moodle 2+](http://download.moodle.org/)

## Installation

Since Moodle Core already relies on the [YUI](http://yuilibrary.com/) Library, installation is as easy as copying the javascript/ and style/ directories to your Moodle 2+ theme directory and configuring your theme to include them.  Simply edit add the following two lines to the config.php file included with your theme:

    $THEME->sheets = array('a11y-moodle');
    $THEME->javascripts_footer = array('a11y-moodle'); 
    
If those lines are already there, simply append `'a11y-moodle'` to the end of each array.

## Modules

### Navigation

#### The Issue:

* Expandable/Collapsible navigation tree nodes do not announce themselves to screen reader users as clickable links.
* Expandable/Collapsible navigation tree nodes do not announce their current state (expanded or collapsed) to screen reader users
* If a scren reader user activates one of these nodes, focus is moved to top of page, forcing them to navigate back to where the link was initially activated to explore the expanded options.

#### The Solution

* Wrap navigation tree nodes that serve only to expand and collapse nested nodes in anchor elements that link back to themselves.  This allows screen reader users to identify these elements as clickable and returns focus to them when activated.
* Append the current state of the nodes (expanded or collapsed) to the end of the anchor so that the screen reader user is informed of the current state and how to interact with the control.  Position text off screen so it doesn't confuse sighted users or compete for screen real estate.

