### How this blog was built and hosted on Github and Gists as a static site, using only React and Redux

As an engineer most of my activity that is blog worthy is done around github and gists and since I was tired of writing a seprate blog post and having to manage another website and its associated tools, I decided to build a static blog using React and Redux and have it hosted on github pages.

### How it works

When a user visits the website, I am making 2 calls to retreieve my Gists and Github Repos and I use the descriptions of these contents to view them as links to posts on the left hand sidebar menu.

When a user clicks on the sidebar menu item I then try to retrieve the content of the readme file associated with the repo or gist and render it on the main content pane, this way every time I create a repository or a gist it can be made visible on this blog as a post as long as it contains a README.md file. this way I can enjoy my coding and have a presence in the community with minimal effort.

You can view or copy the public repo by visisting the source link provided below.

FYI, If you are a hacker or a concerned citizen, dont worry about the auth token included in the source code as it has a very limited and strict scope(only allows public viewing of my content), as much as I hate doing this, there is no way around it atm unfortunately.
