# search_provider
# description: "Super (Windows) Key Quick Menu Search.  Does local, Google, and Domains.  Local opens local files and applications.  Phrase search searches Google in default browser.  Typing in a domain goes directly to the domain in your default browser."

A Linux Mint search_provider

install_search_providers copies contents to ~/.local/share/cinnamon/search_providers'

cp -rf search@timjae ~/.local/share/cinnamon/search_providers/.

Runs the import command:

gsettings set org.cinnamon enabled-search-providers [\"search@timjae\"]

Then simply restart Cinnamon with Ctrl+Alt+Esc for search_provider to take effect or log out and log back in
