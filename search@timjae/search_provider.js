const Mainloop = imports.mainloop;
const Gio = imports.gi.Gio;
const St = imports.gi.St;
const Util = imports.misc.util;

function perform_search(pattern) {
	push_results(pattern);
}

function push_results(results) {
	if (!results.match(/^(((?!\-))(xn\-\-)?[a-z0-9\-_]{0,61}[a-z0-9]{1,1}\.)*(xn\-\-)?([a-z0-9\-]{1,61}|[a-z0-9\-]{1,30})\.[a-z]{2,}$/g)) {
		// Google Search
		var file = Gio.file_new_for_path('/home/timothy/.local/share/cinnamon/search_providers/search@timjae/google.png');
		var gicon = new Gio.FileIcon({ file: file });
		var myicon = new St.Icon({gicon: gicon, icon_size: 32, icon_type: St.IconType.FULLCOLOR, reactive: true, track_hover: true, style_class: 'applet-icon'});
	
		var pattern = results.replace(" ", "+");
		var googurl = "www.google.com/search?q=" + pattern;
		var pattern_array = new Array();
		pattern_array.push({
		    id: googurl,
		    label: _("Search Google for \"" + results + "\""),
		    icon: myicon
		});
		send_results(pattern_array);
	} else {
		// Domain Search
		var file = Gio.file_new_for_path('/home/timothy/.local/share/cinnamon/search_providers/search@timjae/website.png');
		var gicon = new Gio.FileIcon({ file: file });
		var myicon = new St.Icon({gicon: gicon, icon_size: 32, icon_type: St.IconType.FULLCOLOR, reactive: true, track_hover: true, style_class: 'applet-icon'});

		var pattern = results;
		var pattern_array = new Array();
		pattern_array.push({
		    id: pattern,
		    label: _("Visit website \"" + results + "\""),
		    icon: myicon
		});
		send_results(pattern_array);
	}
}

function on_result_selected(result){
	Util.spawn(['xdg-open', "https://%s".replace("%s", result.id)]);
}
