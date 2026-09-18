import { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } from 'discord.js';
import path from 'path';

export default {
    data: new SlashCommandBuilder()
        .setName('formula')
        .setDescription('Retrieve IGCSE STEM formula sheets')
        .addStringOption(option =>
            option.setName('subject')
                .setDescription('Select the subject formula sheet')
                .setRequired(true)
                .addChoices(
                    { name: 'Physics (0625)', value: 'physics' },
                    { name: 'Additional Mathematics (0606)', value: 'addmaths' }
                )),

    async execute(interaction) {
        await interaction.deferReply();
        const subject = interaction.options.getString('subject');

        let fileName = '';
        let titleText = '';

        if (subject === 'physics') {
            fileName = 'physics_formulas.png';
            titleText = '⚡ Physics (0625) Formula Sheet';
        } else if (subject === 'addmaths') {
            fileName = 'addmaths_formulas.png';
            titleText = '📐 Additional Mathematics (0606) Formula Sheet';
        }

        const filePath = path.resolve('src/assets', fileName);
        const fileAttachment = new AttachmentBuilder(filePath, { name: fileName });

        const embed = new EmbedBuilder()
            .setColor('#004BCE')
            .setTitle(titleText)
            .setDescription('Here is your quick formula sheet reference. Save this for fast revision!')
            .setImage(`attachment://${fileName}`)
            .setFooter({ text: 'ASCEND STEM | Logic-First Mastery' });

        await interaction.editReply({ embeds: [embed], files: [fileAttachment] });
    },
};
