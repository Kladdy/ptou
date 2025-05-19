# Local setup of project

The following can be used to get a local setup of the project up and running. It assumes you...

- are running Linux/macOS
- have [`git`](https://git-scm.com/downloads/linux) installed 
- have [`yarn`](https://yarnpkg.com/getting-started/install) installed (you might need [`Node.js`](https://nodejs.org/en/download) as well in order to install [`yarn`](https://yarnpkg.com/getting-started/install))



## Steps

1. `git clone https://github.com/Kladdy/ptou.git`
1. `cd ptou`
1. `yarn` - this installs the dependencies
1. `yarn dev` - this runs the webserver and the website can be reached via [http://localhost:3000](http://localhost:3000)


> [!NOTE]  
> Some adjustments to the website are done when it is built by the [GitHub Workflow](.github/workflows/pages.yml), such as changing the language of the search bar to Swedish. This will not be visible in the local version. 
