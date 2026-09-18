class WorkingDirectory{
    
    constructor(){
        this.new_changes = {};
        this.files = {};
        this.file_id = 1;
    }
    
    //Command: touch <filename>
    addFile(name, location, content){
        let path_file = location+"/"+name;
        this.files[path_file] = { 
            "name": name,
            "location": location,
            "content": content
        };
        this.new_changes = this.files; //since both variables are objects, they will point to the same memory address
                                       //this.new_changes' memory address will now be equal to this.files' memory address.
    }
}

module.exports = WorkingDirectory;