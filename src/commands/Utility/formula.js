const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('formula')
        .setDescription('Retrieve official ASCEND formula sheets')
        .addStringOption(option =>
            option.setName('subject')
                .setDescription('Select the subject formula sheet')
                .setRequired(true)
                .addChoices(
                    { name: 'Additional Mathematics (0606)', value: 'addmaths' },
                    { name: 'Mathematics (0580)', value: 'maths' }
                )),

    async execute(interaction) {
        await interaction.deferReply();
        const subject = interaction.options.getString('subject');

        let fileName = '';
        let titleText = '';

        if (subject === 'addmaths') {
            fileName = 'addmaths_formulas.png';
            titleText = '📐 Additional Mathematics (0606) Formula Sheet';
        } else if (subject === 'maths') {
            fileName = 'maths_formulas.png';
            titleText = '🔢 Mathematics (0580) Formula Sheet';
        }

        const filePath = path.join(__dirname, '../../assets/', fileName);
        const fileAttachment = new AttachmentBuilder(filePath, { name: fileName });

        const embed = new EmbedBuilder()
            .setColor('#004BCE')
            .setTitle(titleText)
            .setDescription('Here is your complete formula sheet. Save this for fast revision!')
            .setImage(`attachment://${fileName}`)
            .setFooter({ text: 'ASCEND STEM | Logic-First Mastery' });

        await interaction.editReply({ embeds: [embed], files: [fileAttachment] });
    },
};
