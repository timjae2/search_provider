# Linux Mint search_provider
# Super (Windows) Key Menu Search.  Does local, Google, and Domains.  Local opens local files and applications.  Phrase search searches Google in default browser.  Typing in a domain goes directly to the domain in your default browser.

<code>install_search_providers</code> copies contents to <code>~/.local/share/cinnamon/search_providers</code>

Then runs the import command:

<code>gsettings set org.cinnamon enabled-search-providers [\"search@timjae\"]</code>

Then simply restart Cinnamon with Ctrl+Alt+Esc for search_provider to take effect or log out and log back in
