> jquery-template-web

# jQuery Template Project Website by Bilik Dev

### Getting Started

Setup new project with jquery-template-web by bilik dev

- enter terminal and clone this repo to local, just run
  ```bash
  $ git clone https://github.com/bilikmedia/jquery-template-web.git project-name-directory
  $ cd project-name-directory
  $ rm -rf .git
  ```
- create new repo for new project in your repo server
- open `package.json` and change value `name`, `description`, `repository url`, `bugs url`, and `homepage` for your new project
- back to terminal and connect repo new project, follow step on bellow
  ```bash
  $ git init .
  $ git remote add origin https://repo-new-project
  $ git checkout -b main-branch
  $ git add .
  $ git commit -m "init project"
  $ git pull origin main-branch
    if got message "fatal: refusing to merge unrelated histories"
    $ git pull origin main-branch --allow-unrelated-histories
    if got message "fatal: Not possible to fast-forward, aborting."
    $ git pull origin main-branch --rebase
    if got conflict, solve the conflict and then
    $ git add .
    $ git rebase --continue
    $ git pull origin main-branch
  $ git push origin main-branch
  ```
- run project
  ```bash
  using npm
  $ npm install
  using yarn
  $ yarn install
  wait until finished, and then start project
  $ npm run start
  or
  $ yarn start
  ```
