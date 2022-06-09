
class Generator {
    constructor(pkg) {
        this.pkg = pkg
        this.entryFile = 'src/main.js'
        this.imports = {}
        this.rootOptions = {}
    }

    // babel: {
    //     presets: ['@babel/preset-env'],
    // },
    // dependencies: {
    //     'core-js': '^3.8.3',
    // },
    // devDependencies: {
    //     '@babel/core': '^7.12.13',
    //     '@babel/preset-env': '^7.12.13',
    //     'babel-loader': '^8.2.2',
    // },


    extendPackage(fields) {
        const pkg = this.pkg

        for (const key in fields) {
            const value = fields[key]
            const existing = pkg[key]

            if (isObject(value) && (key === 'dependencies' || key === 'devDependenecies' || key === 'script')) {
                pkg[key] = Object.assign(existing || {}, value)
            } else {
                pkg[key] = value
            }

        }

    }

    // {
    //     generator.injectImports(generator.entryFile, `import store from './store'`)
    // }
    // 这里将路径作为key 属性为set属性去重 添加属性
    // 向入口文件 `src/main.js` 注入代码 import store from './store'
    injectImports(file, imports) {
        const _imports = (this.imports[file] || (this.imports[file] = new Set()));
        (Array.isArray(imports) ? imports : [imports]).forEach(imp => {
            _imports.add(imp)
        });
    }
    
    // 向入口文件 `src/main.js` 的 new Vue() 注入选项 store
    injectRootOptions(file, options) {
        const _options = (this.rootOptions[file] || (this.rootOptions[file] = new Set()));
        (Array.isArray(options) ? options : [options]).forEach(opt => {
            _options.add(opt)
        })
    }


}