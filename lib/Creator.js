
class Creator {
    constructor() {
        this.featurePrompts = {
            name: 'features',
            message: 'checked the features needed for you project',
            pageSize: 10,
            type: 'checkbox',
            choices: []
        }
        this.injectedPrompts = []
    }

    // 获取最终的prompt
    getFinalPrompts() {
        this.injectedPrompts.forEach(prompt => {
            const originalWhen = prompt.when || (() => true)
            prompt.when = answers => originalWhen(answers)
        })
        const prompts = [
            this.featurePrompts,
            ...this.injectedPrompts
        ]

        return prompts
    }

}


module.exports = Creator