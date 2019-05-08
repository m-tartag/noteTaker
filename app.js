"use strict";
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        tyoe: 'string'
    },
    body: {
        describe: 'Note content',
        demandOption: true,
        tyoe: 'string'
    } 
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  }
})

// Create list command

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log(chalk.green.inverse('[Saved Notes]'))
  }
})

// Create read command

yargs.command({
  command: 'read',
  describe: 'Read note',
  handler: function () {
    console.log(chalk.green.inverse('Reading note!'))
  }
})

console.log(yargs.argv)







