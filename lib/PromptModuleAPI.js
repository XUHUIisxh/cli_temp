module.exports = class PromptModuleAPI {
    constructor(create) {
        this.create = create
    }

    injectFeature(feature) {
        this.create.featurePrompts.choices.push(feature)
    }

    injectPrompt(prompt) {
        this.create.injectedPrompts.push(prompt)
    }
}