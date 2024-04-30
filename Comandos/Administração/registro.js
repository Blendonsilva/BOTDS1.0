const Discord = require("discord.js")
const { QuickDB } = require("quick.db")
const db = new QuickDB()

module.exports = {
  name: "registro", // Change the command name to "registro"
  description: "Open the registration panel for members.", // Change the description to reflect the new purpose
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "canal_registro",
        description: "Channel to send the registration form to members.",
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true,
    },
    {
        name: "canal_logs",
        description: "Channel to send registered entries.",
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
        interaction.reply({ content: `Você não tem permissão para esse comando.`, ephemeral: true })
    } else {
        const canal_registro = interaction.options.getChannel("canal_registro")
        const canal_logs = interaction.options.getChannel("canal_logs")

        if (canal_registro.type !== Discord.ChannelType.GuildText) {
            interaction.reply({ content: `O canal ${canal_registro} Não e um canal de texto.`, ephemeral: true })
        } else if (canal_logs.type !== Discord.ChannelType.GuildText) {
            interaction.reply({ content: `O canal ${canal_logs} Não e um canal de texto.`, ephemeral: true })
        } else {
            await db.set(`canal_registro_${interaction.guild.id}`, canal_registro.id)
            await db.set(`canal_logs_${interaction.guild.id}`, canal_logs.id)

            let embed = new Discord.EmbedBuilder()
            .setDescription("Random")
            .setTitle("Canais registrado!")
            .setDescription(`> Canal de registro: ${canal_registro}.\n> Canal de Registro Vendas: ${canal_logs}.`)

            interaction.reply({ embeds: [embed], ephemeral: true }).then( () => {
                let embed_registro = new Discord.EmbedBuilder()
                .setColor("Random")
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                .setTitle(`Registro de Membros:`)
                .setDescription(`Realize seu registro no discord clicando a baixo!`);

                let botao = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId("registro")
                    .setEmoji("🧑‍💼")
                    .setLabel("Realizar Registro!")
                    .setStyle(Discord.ButtonStyle.Primary)
                );

                canal_registro.send({ embeds: [embed_registro], components: [botao] })
            })
        } 
    }
  }
}