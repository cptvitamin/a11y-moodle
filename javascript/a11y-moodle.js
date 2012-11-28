/**
 * Moodle UX Improvements
 * A Set of YUI scripts that improve the Moodle UX for users of Assistive Technology
 *
 * @copyright       Copyright 2012, Mark Sadecki
 * @license         CC-BY 2.0 (http://creativecommons.org/licenses/by/2.0/)
 * @link            http://www.sadecki.com
 */

YUI().use("node", function(Y) 
	{
	// Initialize
		Y.on
		(
			"domready",
			function()
			{	
			// Return a list of nav elements that are "collapsed"
			var collapsedNodes = Y.all('.block_tree .collapsed');
			// Return a list of nav elements that are "expanded"
			var expandedNodes = Y.all('.block_tree .canexpand');
			collapsedNodes.each(function (thisNode)
				{	
					// Set id for focus redirection
					var liID = thisNode.get('_yuid');
					// HTML to append to child element
					var state = "&nbsp;<span class='navstate'>collapsed - press enter to expand</span>";
					// Find first span element
					var firstSpan = thisNode.one('span');
					// Wrap the node in an anchor with itself as the target and append current state to end 			
					if (firstSpan) {
						curVal = firstSpan.get('innerHTML');
						firstSpan.setHTML("<a href='#" + liID + "'>" + curVal + state + "</a>");
					}
				}
			);
			expandedNodes.each(function (thisNode)
				{	
					// Set id for focus redirection
					var liID = thisNode.get('_yuid');
					// HTML to append to child element
					var state = "&nbsp;<span class='navstate'>expanded - press enter to collapse</span>";
					// Find first span element
					var firstSpan = thisNode.one('span');
					// Wrap the node in an anchor with itself as the target and append current state to end 			
					if (firstSpan) {
						curVal = firstSpan.get('innerHTML');
						firstSpan.setHTML("<a href='#" + liID + "'>" + curVal + state + "</a>");
					}
				}
			);	
			}	
		);
	// Toggle state	
		Y.on("click", 
		function(){
			// Find first span element
			var firstSpan = this.one('.navstate');
			// Toggle the content of Node
			if (firstSpan) {
				curVal = firstSpan.get('innerHTML');
				if (curVal == 'collapsed - press enter to expand') {
					firstSpan.set('innerHTML', 'expanded - press enter to collapse');
				} else if (curVal == 'expanded - press enter to collapse') {
					firstSpan.set('innerHTML', 'collapsed - press enter to expand');
				}
			}
		},
		".tree_item");
	}
);