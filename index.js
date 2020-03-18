const Telegraf = require('telegraf')
const config = require('config')
const bot = new Telegraf(config.get('token'))

bot.use(Telegraf.log())

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('echo', (ctx) => ctx.reply('Echo'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()