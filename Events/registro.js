require('../index')
const Discord = require('discord.js')
const {TextInputStyle} = require('discord.js');
const client = require('../index')
const { QuickDB } = require("quick.db");
const db = new QuickDB();

client.on("interactionCreate", async(interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "registro") {
            if (!interaction.guild.channels.cache.get(await db.get(`canal_logsregistro_${interaction.guild.id}`))) return interaction.reply({content: 'O sistema esta desativado', ephemeral: true})
            const rmodal = new Discord.ModalBuilder()
            .setCustomId("rmodal")
            .setTitle("Formulário");

            const registro1 = new Discord.TextInputBuilder()
            .setCustomId('registro1') //ID DA PERGUNTA
            .setLabel("Qual nome do Personagem ?") //PERGUNTA A SER RESPONDIDA
            .setPlaceholder('EX: Jagunço Silva ! ')
            .setRequired(true)// Deixar para responder obrigatório (true | false)
            .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)

            const registro2 = new Discord.TextInputBuilder()
            .setCustomId('registro2') //ID DA PERGUNTA
            .setLabel("Qual Id do Personagem ?") //PERGUNTA A SER RESPONDIDA
            .setPlaceholder('EX: 7777 ')
            .setRequired(true)// Deixar para responder obrigatório (true | false)
            .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)

            const registro3 = new Discord.TextInputBuilder()
            .setCustomId('registro3') //ID DA PERGUNTA
            .setLabel("Qual Numero do Personagem ?") //PERGUNTA A SER RESPONDIDA
            .setPlaceholder('EX: 999-999 ')
            .setRequired(true)// Deixar para responder obrigatório (true | false)
            .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)

            const registro4 = new Discord.TextInputBuilder()
            .setCustomId('registro4') //ID DA PERGUNTA
            .setLabel("Quem recrutou ?") //PERGUNTA A SER RESPONDIDA
            .setPlaceholder('EX: Cleitinho Como Sempre ')
            .setRequired(true)// Deixar para responder obrigatório (true | false)
            .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)

            rmodal.addComponents(
                new Discord.ActionRowBuilder().addComponents(registro1),
                new Discord.ActionRowBuilder().addComponents(registro2),
                new Discord.ActionRowBuilder().addComponents(registro3),
                new Discord.ActionRowBuilder().addComponents(registro4)
            )

            await interaction.showModal(rmodal)
        }
    }  else if (interaction.isModalSubmit()) {
        if (interaction.customId == "rmodal") {
            const registro1 = interaction.fields.getTextInputValue("registro1")
            const registro2 = interaction.fields.getTextInputValue("registro2")
            const registro3 = interaction.fields.getTextInputValue("registro3")
            const registro4 = interaction.fields.getTextInputValue("registro4")

            if (!registro1) registro1 = "Não informado."
            if (!registro2) registro2 = "Não informado."
            if (!registro3) registro3 = "Não informado."
            if (!registro4) registro4 = "Não informado."

            let newNickname = `${registro1} | ${registro2}`
            await interaction.member.setNickname(newNickname)

            let embed = new Discord.EmbedBuilder()
           .setColor("Random")
           .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true}) })
           .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
           .setDescription(`O usuário ${interaction.user} Se Registrou`)
           .addFields(
                {
                    name:"*Nome do personagem :*",
                    value:`\`${registro1}\``,
                    inline:false
                },
                {
                    name:"*Id/Passaporte :*",
                    value:`\`${registro2}\``,
                    inline:false
                },
                {
                    name:"*Numero de Telefone :*",
                    value:`\`${registro3}\``,
                    inline:false
                },
                {
                    name:"*Quem recrutou :*",
                    value:`\`${registro4}\``,
                    inline:false
                }
            );
            interaction.reply({ content: `*Jagunço* **${interaction.user.username}**, seu Registro foi enviado com sucesso`, ephemeral: true})
            await interaction.guild.channels.cache.get(await db.get(`canal_logsregistro_${interaction.guild.id}`)).send({ embeds: [embed] })
        }
    }
})