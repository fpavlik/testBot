const Scene = require('telegraf/scenes/base')


class SceneGenerator {
    GenAgeScene () {
        const age = new Scene('age')
        age.enter(async (ctx) => {
            await ctx.reply('Привет! Ты вошел в сцену возраста. Укажи его')
        })
        age.on('text', async (ctx) => {
            const currAge = Number(ctx.message.text)
            if (currAge && currAge > 0) {
                await ctx.reply('Спасибо за возраст!!')
                ctx.scene.enter('name')
            } else {
                await ctx.reply('Меня не проведешь! Напиши пожалуйста возраст цифрами и больше нуля')
                ctx.scene.reenter()
            }
        })
        age.on('message', (ctx) => ctx.reply('Давай лучше возраст'))
        return age
    }

    GenNameScene () {
        const name = new Scene('name')
        name.enter((ctx) => ctx.reply('Теперь ты в сцене имени. Представься'))
        name.on('text', async (ctx) => {
            const name = ctx.message.text
            if (name) {
                await ctx.reply(`Привет, ${name}`)
                await ctx.scene.leave()
            } else {
                await ctx.reply('Я так и не понял, как тебя зовут')
                await ctx.scene.reenter()
            }
        })
        name.on('message', (ctx) => ctx.reply('Это явно не твое имя'))
        return name
    }
}

module.exports = SceneGenerator