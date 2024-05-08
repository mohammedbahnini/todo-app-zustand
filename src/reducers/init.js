const tasks =  [
    {
        id : 1 , 
        text : 'Complete online JavaScript course' , 
        isFinished : true 
    } ,
    {
        id : 2 , 
        text : 'Jog around the park 3x' , 
        isFinished : false 
    } , 
    {
        id : 3 , 
        text : '10 minutes meditation' , 
        isFinished : false 
    }, 
    {
        id : 4 , 
        text : 'Read for 1 hour' , 
        isFinished : false 
    } , 
    {
        id : 5 , 
        text : 'Pick up groceries' , 
        isFinished : false 
    } , 
    {
        id : 6 , 
        text : 'Complete Todo App on Frontend Mentor' , 
        isFinished : false 
    }
] ;

export const init = {
    theme : 'dark' , 
    tasks ,
    filteredTasks : tasks, 
    filters : ['all' , 'active' , 'completed'] , 
    activeFilter : 'all'
}