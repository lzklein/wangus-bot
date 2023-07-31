const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reaction-role')
		.setDescription('Get roles by clicking on the reaction'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};