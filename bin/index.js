#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()
const create = require('../lib/create')


program
    .version(require('../package.json').version)
    .description('create a new project')
    .command('create <name>')
    .action(name => {
        create(name)
    });

    
program.parse(process.argv);