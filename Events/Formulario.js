// require('../index')

// const Discord = require('discord.js')
// const client = require('../index')
// const { QuickDB } = require("quick.db")
// const db = new QuickDB()

// client.on("interactionCreate", async(interaction) => {
//     if (interaction.isButton()) {
//       if (interaction.customId === "formulario") {
//         if (!interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`))) return interaction.reply({ content: `O sistema está desativado.`, ephemeral: true })
//         const modal = new Discord.ModalBuilder()
//         .setCustomId("modal")
//         .setTitle("Formulário");
  
//         const pergunta1 = new Discord.TextInputBuilder()
//         .setCustomId("pergunta1") // Coloque o ID da pergunta
//         .setLabel("Pergunta 1??") // Coloque a pergunta
//         .setMaxLength(30) // Máximo de caracteres para a resposta
//         .setMinLength(5) // Mínimo de caracteres para a respósta
//         .setPlaceholder("Escreva sua Resposta 1 aqui!") // Mensagem que fica antes de escrever a resposta
//         .setRequired(true) // Deixar para responder obrigatório (true | false)
//         .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
  
//         const pergunta2 = new Discord.TextInputBuilder()
//         .setCustomId("pergunta2") // Coloque o ID da pergunta
//         .setLabel("Pergunta 2??") // Coloque a pergunta
//         .setMaxLength(30) // Máximo de caracteres para a resposta
//         .setPlaceholder("Escreva sua Resposta 2 aqui!") // Mensagem que fica antes de escrever a resposta
//         .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
//         .setRequired(false)
  
//         const pergunta3 = new Discord.TextInputBuilder()
//         .setCustomId("pergunta3") // Coloque o ID da pergunta
//         .setLabel("Pergunta 3??") // Coloque a pergunta
//         .setPlaceholder("Escreva sua Resposta 3 aqui!") // Mensagem que fica antes de escrever a resposta
//         .setStyle(Discord.TextInputStyle.Paragraph) // Tipo de resposta (Short | Paragraph)
//         .setRequired(false)
  
//         modal.addComponents(
//           new Discord.ActionRowBuilder().addComponents(pergunta1),
//           new Discord.ActionRowBuilder().addComponents(pergunta2),
//           new Discord.ActionRowBuilder().addComponents(pergunta3)
//         )
  
//         await interaction.showModal(modal)
//       }
//     } else if (interaction.isModalSubmit()) {
//       if (interaction.customId === "modal") {
//         let resposta1 = interaction.fields.getTextInputValue("pergunta1")
//         let resposta2 = interaction.fields.getTextInputValue("pergunta2")
//         let resposta3 = interaction.fields.getTextInputValue("pergunta3")
  
//         if (!resposta1) resposta1 = "Não informado."
//         if (!resposta2) resposta2 = "Não informado."
//         if (!resposta3) resposta3 = "Não informado."
  
//         let embed = new Discord.EmbedBuilder()
//         .setColor("Green")
//         .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
//         .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
//         .setDescription(`O usuário ${interaction.user} enviou o formulário abaixo:`)
//         .addFields(
//           {
//             name: `Pergunta 1:`,
//             value: `*Resposta 1:* \`${resposta1}\``,
//             inline: false
//           },
//           {
//             name: `Pergunta 2:`,
//             value: `*Resposta 2:* \`${resposta2}\``,
//             inline: false
//           },
//           {
//             name: `Pergunta 3:`,
//             value: `*Resposta 3:* \`${resposta3}\``,
//             inline: false
//           }
//         );
  
//         interaction.reply({ content: `Olá **${interaction.user.username}**, seu formulário foi enviado com sucesso!`, ephemeral: true})
//         await interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`)).send({ embeds: [embed] })
//       }
//     }
//   })
// const Discord = require('discord.js')
// const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder } = require('discord.js');
// const client = require('../index');

// const { QuickDB } = require("quick.db");
// const db = new QuickDB();

// client.on("interactionCreate", async(interaction) => {
//     if (interaction.isButton()) {
//         if (interaction.customId === "formulario") {
//             if (!interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`))) return interaction.reply({ content: `O sistema está desativado.`, ephemeral: true })
//             const modal = new ModalBuilder()
//                 .setCustomId("modal")
//                 .setTitle("Formulário");

//             const pergunta1 = new TextInputBuilder()
//                 .setCustomId("pergunta1") // Coloque o ID da pergunta
//                 .setLabel("Pergunta 1??") // Coloque a pergunta
//                 .setMaxLength(30) // Máximo de caracteres para a resposta
//                 .setMinLength(5) // Mínimo de caracteres para a respósta
//                 .setPlaceholder("Escreva sua Resposta 1 aqui!") // Mensagem que fica antes de escrever a resposta
//                 .setRequired(true) // Deixar para responder obrigatório (true | false)
//                 .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)

//             const pergunta2 = new TextInputBuilder()
//                 .setCustomId("pergunta2") // Coloque o ID da pergunta
//                 .setLabel("Pergunta 2??") // Coloque a pergunta
//                 .setMaxLength(30) // Máximo de caracteres para a resposta
//                 .setPlaceholder("Escreva sua Resposta 2 aqui!") // Mensagem que fica antes de escrever a resposta
//                 .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
//                 .setRequired(false)

//             const pergunta3 = new TextInputBuilder()
//                 .setCustomId("pergunta3") // Coloque o ID da pergunta
//                 .setLabel("Pergunta 3??") // Coloque a pergunta
//                 .setPlaceholder("Escreva sua Resposta 3 aqui!") // Mensagem que fica antes de escrever a resposta
//                 .setStyle(TextInputStyle.Paragraph) // Tipo de resposta (Short | Paragraph)
//                 .setRequired(false)

//             const fileInput = new TextInputBuilder()
//                 .setCustomId("file")
//                 .setLabel("Imagem (opcional)")
//                 .setStyle(TextInputStyle.Short)
//                 .setRequired(false);

//             modal.addComponents(
//                 new ActionRowBuilder().addComponents(pergunta1),
//                 new ActionRowBuilder().addComponents(pergunta2),
//                 new ActionRowBuilder().addComponents(pergunta3),
//                 new ActionRowBuilder().addComponents(fileInput)
//             )

//             await interaction.showModal(modal);
//         }
//     } else if (interaction.isModalSubmit()) {
//         if (interaction.customId === "modal") {
//             let resposta1 = interaction.fields.getTextInputValue("pergunta1");
//             let resposta2 = interaction.fields.getTextInputValue("pergunta2");
//             let resposta3 = interaction.fields.getTextInputValue("pergunta3");
//             let file = interaction.fields.getTextInputValue("file");

//             if (!resposta1) resposta1 = "Não informado.";
//             if (!resposta2) resposta2 = "Não informado.";
//             if (!resposta3) resposta3 = "Não informado.";

//             let embed = new EmbedBuilder()
//                 .setColor("Green")
//                 .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
//                 .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
//                 .setDescription(`O usuário ${interaction.user} enviou o formulário abaixo:`)
//                 .addFields(
//                     {
//                         name: `Pergunta 1:`,
//                         value: `*Resposta 1:* \`${resposta1}\``,
//                         inline: false
//                     },
//                     {
//                         name: `Pergunta 2:`,
//                         value: `*Resposta 2:* \`${resposta2}\``,
//                         inline: false
//                     },
//                     {
//                         name: `Pergunta 3:`,
//                         value: `*Resposta 3:* \`${resposta3}\``,
//                         inline: false
//                     }
//                 );

//             if (file) {
//                 if (file.startsWith("http")) {
//                     embed.setImage(file);
//                 } else {
//                     const attachment = new Discord.MessageAttachment(file, "image.png");
//                     embed.setImage("attachment://image.png");
//                     interaction.reply({ content: `Olá **${interaction.user.username}**, seu formulário foi enviado com sucesso!`, ephemeral: true, files: [attachment] });
//                 }
//             } else {
//                 interaction.reply({ content: `Olá **${interaction.user.username}**, seu formulário foi enviado com sucesso!`, ephemeral: true });
//             }

//             await interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`)).send({ embeds: [embed] })
//         }
//     }
// });

const Discord = require('discord.js')
const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');
const client = require('../index');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

client.on("interactionCreate", async(interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "formulario") {
            if (!interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`))) return interaction.reply({ content: `O sistema está desativado.`, ephemeral: true })
            const modal = new ModalBuilder()
                .setCustomId("modal")
                .setTitle("Vendas");

            const pergunta1 = new TextInputBuilder()
                .setCustomId("pergunta1") // Coloque o ID da pergunta
                .setLabel("Organização, Família ou Pista??") // Coloque a pergunta
                .setMaxLength(130) // Máximo de caracteres para a resposta
                .setMinLength(3) // Mínimo de caracteres para a respósta
                .setPlaceholder("Escreva sua Resposta aqui!") // Mensagem que fica antes de escrever a resposta
                .setRequired(true) // Deixar para responder obrigatório (true | false)
                .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)

            const pergunta2 = new TextInputBuilder()
                .setCustomId("pergunta2") // Coloque o ID da pergunta
                .setLabel("Quantidade e produtos vendidos??") // Coloque a pergunta
                .setMaxLength(130) // Máximo de caracteres para a resposta
                .setPlaceholder("Escreva sua Resposta aqui!") // Mensagem que fica antes de escrever a resposta
                .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
                .setRequired(false)

            const pergunta3 = new TextInputBuilder()
                .setCustomId("pergunta3") // Coloque o ID da pergunta
                .setLabel("Valor da Venda??") // Coloque a pergunta
                .setPlaceholder("Escreva sua Resposta aqui!") // Mensagem que fica antes de escrever a resposta
                .setStyle(TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
                .setRequired(false)

            const file = new TextInputBuilder()
                .setCustomId("file")
                .setLabel("Imagem (opcional)")
                .setPlaceholder("Escreva sua Resposta aqui!") // Mensagem que fica antes de escrever a resposta
                .setStyle(TextInputStyle.Short)
                .setRequired(false);

            modal.addComponents(
                new ActionRowBuilder().addComponents(pergunta1),
                new ActionRowBuilder().addComponents(pergunta2),
                new ActionRowBuilder().addComponents(pergunta3),
                new ActionRowBuilder().addComponents(file)
            )

            await interaction.showModal(modal);
        }
    } else if (interaction.isModalSubmit()) {
        if (interaction.customId === "modal") {
            let resposta1 = interaction.fields.getTextInputValue("pergunta1");
            let resposta2 = interaction.fields.getTextInputValue("pergunta2");
            let resposta3 = interaction.fields.getTextInputValue("pergunta3");
            let file = interaction.fields.getTextInputValue("file");

            if (!resposta1) resposta1 = "Não informado.";
            if (!resposta2) resposta2 = "Não informado.";
            if (!resposta3) resposta3 = "Não informado.";
            if (!file) file = "Não informado.";


            let embed = new EmbedBuilder()
                .setColor("Green")
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`O Jagunço ${interaction.user} Registrou a Venda abaixo:`)
                .addFields(
                    {
                        name: `Organização, Família ou Pista:`,
                        value: `\`${resposta1}\``,
                        inline: false
                    },
                    {
                        name: `Quantidade e produtos vendidos:`,
                        value: `\`${resposta2}\``,
                        inline: false
                    },
                    {
                        name: `Valor da Venda:`,
                        value: `*R$* \`${resposta3}\``,
                        inline: false
                    }
                );

            if (file) {
                if (file.startsWith("http")) {
                    try {
                        const response = await axios.head(file);
                        const contentType = response.headers['content-type'];
                        if (contentType.startsWith('image/')) {
                            embed.setImage(file);
                        } else {
                            interaction.reply({ content: `O link fornecido não é uma imagem válida.`, ephemeral: true });
                            return;
                        }
                    } catch (error) {
                        interaction.reply({ content: `O link fornecido não é válido.`, ephemeral: true });
                        return;
                    }
                }
            } else {
              interaction.reply({ content: `Jagunço **${interaction.user.username}**, Sua Venda foi foi enviado com sucesso!`, ephemeral: true });
            }

            await interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`)).send({ embeds: [embed] })
            interaction.reply({ content: `Jagunço **${interaction.user.username}**, Sua Venda foi foi enviado com sucesso!`, ephemeral: true });
        }
    }
});