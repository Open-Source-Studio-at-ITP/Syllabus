# Open Source Data Assignment

**due Tuesday, September 25**

## Pick one of the below (just one! not all!)

1. Contribute to Corpora (see instructions below).
2. Create your own open source dataset in a new repository on GitHub.
3. Make a contribution to another Open Source repository focused on data.

## Link to your pull request (or repo) below:

* name -- [title of pull request](url)
* emma rae -- [Add list of fictional colors](https://github.com/dariusk/corpora/pull/325)
* jinzhong yu -- [Add list of country calling codes](https://github.com/Open-Source-Studio-at-ITP/corpora/pull/3)
* alice -- [adding and updating fictional religions](https://github.com/Open-Source-Studio-at-ITP/corpora/pull/4)
* Wenhe Li -- [add description && add Persona file into game](https://github.com/Open-Source-Studio-at-ITP/corpora/pull/5)

# Instructions for Corpora Contribution

Note that this assignment can be completed any number of ways. The instructions below are for submitting a pull request using git and the command line. You are also welcome to the GitHub web interface or any other tool that you want to experiment with.

In addition to the instructions below, you might also find this egghead course useful background: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) 


## Install Git

1. Download and install [git](https://git-scm.com/).
2. Open your shell (see [shell workflow video](https://youtu.be/FnkkzgYuXUM?list=PLRqwX-V7Uu6Zu_uqEA6NqhLzKLACwU74X)). Configure your git username using the following commands

```
git config --global user.name "Your Name" 
git config --global user.email "email@example.com"
```

You can find [more details at GitHub help](https://help.github.com/articles/setting-your-username-in-git/) as well as [this video walkthrough](https://youtu.be/_sLgRBrZh6o?list=PLRqwX-V7Uu6Zu_uqEA6NqhLzKLACwU74X).

## Fork Repo

You have two options here. You can fork [Corpora repo directly](https://github.com/dariusk/corpora) or the ["Open Source Studio" fork of Corpora](https://github.com/Open-Source-Studio-at-ITP/corpora). The latter option allows you to experiment with making a pull request that flows through our class before heading "upstream" to Corpora itself. [Instructions for how to fork are on the GitHub guide](https://guides.github.com/activities/forking/).

![Fork Button on Github](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

## Clone the Repo

1. Now you'll want to clone your fork of the repo. Open to your shell, navigate to a directory where you'd like to store the files locally, and type:

```
git clone https://github.com/yourgithubname/corpora.git
```

[This video has more details about cloning a repo](https://youtu.be/yXT1ElMEkW8?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV).

2. `cd` (change directory) into the repo.

```
cd corpora
```


## Write your contribution

Now you can open the "corpora" project in any text editor, add a new file, edit files, etc.

## Commit your changes

Now it's time to "add" and "commit" the work you've done. [This video tutorial has some more details about `git add` and `git commit`](https://youtu.be/9p2d-CuVlgc?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV).

###  `git add` to stage your changes. 

You can choose the files you want to add or just use `.` to add all of your changes.

For a specific file:
```
git add path/to/files/file.json
```

For a specific directory:
```
git add path/to/files/ 
```

For all files:
```
git add . 
```

###  `git commit` to commit your changes.

For small / trivial fixes, you can use the `-m` argument to add a message.

```
git commit -m "message about this commit"
```

It's good practice, however, to use `git commit` only and launch a text editor for writing a more detailed message.

```
git commit
```

[Here are details for how to associate text editors with git](https://help.github.com/articles/associating-text-editors-with-git/). For Visual Studio Code the command is:

```
git config --global core.editor "code --wait"
```

### Push your code to GitHub.

Now that you've finished your work, you can push the code to your fork of Corpora. One way to do this is:

```
git push origin master
```

While the above is adequate I sometimes prefer to push it to a new branch on GitHub with a name related to my changes.

```
git push origin master:name-of-my-branch
```

This takes the local `master` branch and pushes it to `name-of-my-branch` on GitHub.

## Make a pull request

1. Open your fork on GitHub in your browser.
2. You should see a new button "Compare and Pull Request" referencing your branch name.
3. Select "Compare and Pull Request"
4. Write comments about your changes.
5. Select "Create Pull Request"
