require('../index')

const Discord = require('discord.js')
const client = require('../index')

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "tickets_basico") {
            let membro = await interaction.guild.members.fetch(interaction.user.id);
            let nome_usuario_servidor = membro ? membro.displayName : interaction.user.username;
            let nome_canal = `🔖-${nome_usuario_servidor}`;
            let canal = interaction.guild.channels.cache.find(c => c.name === nome_canal);

            if (canal) {
                interaction.reply({ content: `Olá **${nome_usuario_servidor}**, você já possui um ticket em ${canal}.`, ephemeral: true });
            } else {
                let categoria = interaction.channel.parent;
                if (!categoria) categoria = null;

                interaction.guild.channels.create({
                    name: nome_canal,
                    parent: categoria,
                    type: Discord.ChannelType.GuildText,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [ Discord.PermissionFlagsBits.ViewChannel ]
                        },
                        {
                            id: interaction.user.id,
                            allow: [
                                Discord.PermissionFlagsBits.ViewChannel,
                                Discord.PermissionFlagsBits.AddReactions,
                                Discord.PermissionFlagsBits.SendMessages,
                                Discord.PermissionFlagsBits.AttachFiles,
                                Discord.PermissionFlagsBits.EmbedLinks
                            ]
                        },
                    ]
                }).then((chat) => {
                    interaction.reply({ content: `Olá **${nome_usuario_servidor}**, seu ticket foi aberto em ${chat}.`, ephemeral: true });

                    let embed = new Discord.EmbedBuilder()
                        .setColor("Random")
                        .setDescription(`Fala Jagunço ${nome_usuario_servidor}, Essa aqui e sua sala de registro de Farm.\nAgora e so realizar os Registro Conforme o Padrão.**\n\n\n ➡ Valor adicionado: 250$\n\n ➡ Valor total: 250/500\n\n ➡ Print**`);

                    let botao_close = new Discord.ActionRowBuilder().addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("close_ticket")
                            .setEmoji("❌")
                            .setLabel("Excluir Sala")
                            .setStyle(Discord.ButtonStyle.Danger),
                        new Discord.ButtonBuilder()
                            .setCustomId("week_goal")
                            .setEmoji("📅")
                            .setLabel("Meta da Semana")
                            .setStyle(Discord.ButtonStyle.Primary)
                    );

                    chat.send({ embeds: [embed], components: [botao_close] }).then(m => {
                        // m.pin();
                    });
                });
            }
        } else if (interaction.customId === "close_ticket") {
            if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
                interaction.reply({ content: "Você não tem permissão para excluir este ticket.", ephemeral: true });
                return;
            }

            interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos.`);
            try {
                setTimeout(() => {
                    interaction.channel.delete().catch(e => { return; });
                }, 5000);
            } catch (e) {
                return;
            }
        } else if (interaction.customId === "week_goal") {
            let embed = new Discord.EmbedBuilder()
                .setColor("#0099ff")
                .setTitle("Meta da Semana")
                .setDescription("Esta é a meta da semana para você:")
                .addFields(
                    { name: "Produto:", value: "Dineiro Sujo" },
                    { name: "Quantidade", value: "500K: " },
                    { name: "Periodo para Bater a Meta", value: "7 Dias (1 Semana)" },
                    { name: "Data", value: "29/04 ate 06/05" }

                );

            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
});
