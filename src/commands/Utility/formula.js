import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

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

        let imageUrl = '';
        let titleText = '';

        if (subject === 'physics') {
            // PASTE YOUR RAW PHYSICS IMAGE LINK BETWEEN THE QUOTES BELOW
            imageUrl = 'https://raw.githubusercontent.com/oluwatomiventures-lang/Ascend/main/src/assets/physics_formulas.png';
            titleText = '⚡ Physics (0625) Formula Sheet';
        } else if (subject === 'addmaths') {
            // PASTE YOUR RAW ADDMATHS IMAGE LINK BETWEEN THE QUOTES BELOW
            imageUrl = 'https://raw.githubusercontent.com/oluwatomiventures-lang/Ascend/main/src/assets/addmaths_formulas.png';
            titleText = '📐 Additional Mathematics (0606) Formula Sheet';
        }

        const embed = new EmbedBuilder()
            .setColor('#004BCE')
            .setTitle(titleText)
            .setDescription('Here is your quick formula sheet reference. Save this for fast revision!')
            .setImage(imageUrl)
            .setFooter({ text: 'ASCEND STEM | Logic-First Mastery' });

        await interaction.editReply({ embeds: [embed] });
    },
};
