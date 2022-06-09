const inquirer = require('inquirer')
const Creator = require('./Creator')
const promptModulesAPI = require('./PromptModuleAPI')
const Generator = require('./Generator')

// const options = [
//     {
//         name: 'Router',
//         value: 'router',
//         description: 'Structure the app with dynamic pages',
//         link: 'https://router.vuejs.org/',
//     },
//     {
//         "name": "features", // 选项名称
//         "message": "Check the features needed for your project:", // 选项提示语
//         "pageSize": 10,
//         "type": "checkbox", // 选项类型 另外还有 confirm list 等
//         "choices": [ // 具体的选项
//             {
//                 "name": "Babel",
//                 "value": "babel",
//                 "short": "Babel",
//                 "description": "Transpile modern JavaScript to older versions (for compatibility)",
//                 "link": "https://babeljs.io/",
//                 "checked": true
//             },
//             {
//                 "name": "Router",
//                 "value": "router",
//                 "description": "Structure the app with dynamic pages",
//                 "link": "https://router.vuejs.org/"
//             },
//         ],
//         when: (answer) => {
//             console.log('answer', answer)
//             return true
//         }
//     }
// ]
// inquirer.prompt(options)


async function create(name) {
    
    const creator = new Creator()
    const promptModules = getPromptModules()
    const prompAPI = new promptModulesAPI(creator)

    promptModules.forEach(m => m(prompAPI))

    const answers = await inquirer.prompt(creator.getFinalPrompts())

    console.log(answers);

    const pkg = {
        name,
        version: '0.1.0',
        dependencies: {},
        devDependenecies: {}
    }

    const generator = new Generator(pkg)

    answers.feature.forEach(f => f(generator))


}

function getPromptModules() {
    return [
        'babel',
        'router',
        'vuex',
        'linter'
    ].map(file => require(`./propmtModules/${file}`))
}


module.exports = create