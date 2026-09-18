import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('countdown')
        .setDescription('Check live time remaining until the IGCSE exam series'),

    async execute(interaction) {
        // Unix Timestamp for Oct/Nov 2026 Exam Series
        const octNovTimestamp = 1790812800; 

        const embed = new EmbedBuilder()
            .setColor('#00E5FF')
            .setTitle('⏳ IGCSE Exam Countdown Timer')
            .setDescription('Stay focused! Time remaining until the next major exam series:')
            .addFields(
                { name: '📅 Oct/Nov 2026 Series Starts:', value: `<t:${octNovTimestamp}:R> (<t:${octNovTimestamp}:D>)`, inline: false }
            )
            .setFooter({ text: 'ASCEND STEM | Every Second Counts' });

        await interaction.reply({ embeds: [embed] });
    },
};
