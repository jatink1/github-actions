Github actions are a faster and better way to test and automate tasks.

It lets us build,test and deploy code right from github. You can also assign code reviews, manage branches, and triage issues the way you want with actions.
Whether you want to build a container, deploy a web service, or automate welcoming a new user to your open-source project — there’s an automated action for that.

In this repo I made a github action to build the apk everytime there is a pull request on master branch.
On every pull request request github actions will run a worklfow defined in a yaml file.

A workflow is basically a series of tasks or commands which github will run.

The workflow for this repo is defined in [this](https://github.com/jatink1/github-actions/blob/master/.github/workflows/buildApp.yml) file.

To create a workflow of your own, go to Actions tab on your repo then click on setup a workflow.
Now there is yaml file in which you can define your workflow or series of commands you want to be executed.

In this repo github actions will run a specified workflow on every pull request on master branch which can be set to commit on master branch or anything else.
