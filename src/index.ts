import inquirer from 'inquirer';

let todos: string[] = [];
let loop = true;

while(loop) {
    const answers: {
        TODO: string,
        AddMoreTodo: boolean
    } = await inquirer.prompt([
        {
            type: 'input',
            name: 'TODO',
            message: 'What do you want to add in your todo?: '
        },
        {
            type: 'confirm',
            name: 'AddMoreTodo',
            message: 'Do you want to add more TODOs?: ',
            default: false
        }
    ])
    const {TODO, AddMoreTodo} = answers;
    loop = AddMoreTodo;
    if(TODO){
        todos.push(TODO);
    } else {
        console.log('Please enter a valid input:')
    }
}
if(todos.length > 0){
    console.log('The desired Todo List is: ');
    todos.forEach(todo => {
        console.log(todo)
    })
} else {
    console.log('No TODOs found!')
}
