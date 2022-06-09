
const { Command } = require('commander');
const program = new Command()


// program
//     .option('-d, --debug', 'output extra debugging')
//     .option('-s, --small', 'small pizza size')
//     .option('-p, --pizza-type <type>', 'flavour of pizza')

// program.parse(program.argv)

// console.log('---program.argv---', program.argv)

// const options = program.opts();

// console.log('---options---', options)

// if (options.debug) console.log(options);

// console.log('pizza details:');

// if (options.small) console.log('- small pizza size');

// if (options.pizzaType) console.log(`- ${options.pizzaType}`);

// program
//     .name("my-command")
//     .usage('<command> [options]')
//     .command('clone <source> [destination]')
//     .description('clone a repository into a newly created directory')
// // .action((source, destination) => {
// //     console.log('---clone---', source, destination)
// //     console.log('clone command called');
// // });

// program.parse(program.argv);

const inquirer = require('inquirer')
const prompts = [
    {
        "name": "features", // 选项名称
        "message": "Check the features needed for your project:", // 选项提示语
        "pageSize": 10,
        "type": "checkbox", // 选项类型 另外还有 confirm list 等
        "choices": [ // 具体的选项
            {
                "name": "Babel",
                "value": "babel",
                "short": "Babel",
                "description": "Transpile modern JavaScript to older versions (for compatibility)",
                "link": "https://babeljs.io/",
                "checked": true
            },
            {
                "name": "Router",
                "value": "router",
                "description": "Structure the app with dynamic pages",
                "link": "https://router.vuejs.org/"
            },
        ]
    }
]

inquirer.prompt(prompts)
    .then(res => {
        console.log('res', res)
    })
