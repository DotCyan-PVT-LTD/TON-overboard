import { Telegraf } from 'telegraf';

const bot = new Telegraf("6363100456:AAEFTtM__C4ZLE8-bF3ubh5wdYFaYa6JtMc")
const runBot = () => {
    bot.start((ctx) => ctx.reply('Welcomeeee!!!', {
        reply_markup: {
            keyboard: [[{ text: "TON", web_app: { url: "https://totheton.netlify.app/" } }]]
        }
    }))
    bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    bot.launch()
}

export { runBot }
