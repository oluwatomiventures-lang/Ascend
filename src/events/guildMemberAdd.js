import { Events, EmbedBuilder } from 'discord.js';

export default {
    name: Events.GuildMemberAdd,
    async execute(member) {
        // Option to swap these placeholders with your actual channel IDs (e.g. <#123456789012345678>)
        const rulesChannel = '<#RULES_CHANNEL_ID>';
        const botCommandsChannel = '<#BOT_COMMANDS_CHANNEL_ID>';

        const welcomeEmbed = new EmbedBuilder()
            .setColor('#004BCE')
            .setTitle(`Welcome to ASCEND, ${member.user.username}! 🚀`)
            .setDescription(
                `👋 **Welcome aboard!** We’re excited to have you join our community of STEM learners. ASCEND is built to help you master concepts faster through direct practice, collaboration, and high-yield resources.\n\n` +
                `📌 **Quick Start Guide:**\n` +
                `1. **Check the Rules:** Head over to ${rulesChannel} to review the server guidelines.\n` +
                `2. **Access Formula Sheets:** type **\`/formula\`** to instantly retrieve IGCSE Physics (0625) and Add Maths (0606) reference sheets.\n` +
                `3. **Get Help & Study Resources:** We have real-time help whenever you’re stuck, dedicated STEM bots in chat, a growing library of video resources for IGCSE Mathematics, Additional Mathematics, and Physics, as well as a ticket system if you need 1-on-1 tutoring!\n\n` +
                `💡 *Tip: If you ever need assistance or have feature requests for the ASCEND bot, ping an Admin in chat!*`
            )
            .setFooter({ text: 'ASCEND STEM | Logic-First Mastery' })
            .setTimestamp();

        try {
            await member.send({ embeds: [welcomeEmbed] });
            console.log(`Successfully sent welcome DM to ${member.user.tag}`);
        } catch (error) {
            // Catches cases where user has DMs closed
            console.log(`Could not send welcome DM to ${member.user.tag}. DMs disabled.`);
        }
    },
};
