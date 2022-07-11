/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "git is version control. It allows users to share code, go back and forward through different versions of the code that have been written and change branches altogether. Also a good way to turn in coding assignments via gitHub.com"

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "gihHub is short for a website gitHub.com which is a remote repository for git repositories. As far as I know it works solely with git, but that does not mean git works solely with github.com"

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = "git init is a git command that initializes a repository, not to be confused with a remote repository made on github.com"

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = "The git clone command copies an existing Git repository to a different directory."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = "git status tells the condition of the repository and shows all the files being tracked, that have been modified, and are yet to be tracked. It also is helpful in showing some commands that can be used to do other functions."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = "git add is a command to be used before git commit, to tell git what to track and or make adjustments to when commiting."
let gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = 'creates a snapshot of the files Im tracking, or a save point in other words, that can be viewed with git log and moved back to with git checkout <commit hash>'
let gitCommitCode = 'git commit -m "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = 'git push is used to upload a local repository to a remote repository, in our case, github.com'