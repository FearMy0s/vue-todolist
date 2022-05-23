const app = new Vue({
    el:`#app`,
    data:{
        todos: [

        ],
        newTodo: {
        text: ``,
        isDone:false,
        }
    },  
    methods:{
        addTodo(){
            if(this.newTodo.text!==``){
            this.todos.push(this.newTodo);
            this.newTodo = {
                text:``,
                isDone:false,
            }
        }
    },
    remove(index){
        this.todos.splice(index,1)
    },
}
})