module.exports = {
    validateProject,
    validateResource,
    validateTask
}

// middleware for puts:

function validateResource(){
    /*
    [ ] a unique Id.
    [ ] a name. This column is required.
    [ ] a description.
    */
}

function validateProject(){
    /*
    [ ] a unique Id.
    [ ] a name. This column is required.
    [ ] a description.
    [ ] a boolean that indicates if the project has been completed. 
        This column cannot be NULL, the default value should be false.
    */
}

function validateTask(){
    /*
    [ ] a unique id.
    [ ] a description of what needs to be done. This column is required.
    [ ] a notes column to add additional information.
    [ ] a boolean that indicates if the task has been completed. 
        This column cannot be NULL, the default value should be false.
    */
}