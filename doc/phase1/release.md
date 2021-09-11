## Release & Continuous Integration


For our GitHub repo, we have branch protection setup. This allows us to ensure that no team member is able to push to the master branch. Any code changes that go on the master branch must pass our CI tests & be approved by one of the team members. We will have a CI/CD pipeline setup so any PRs that are created are automatically tested. We will be using GitHub actions + GitHub webhooks to create our CI/CD pipeline. There is one exception to this though. If a PR has no actual code change (maybe some documentation changes only), the PR may be merged without another teammate’s approval as long as it passes CI/CD tests.

