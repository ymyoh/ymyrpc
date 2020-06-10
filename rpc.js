const RPC = require('discord-rpc');
const clientId = '590063079988133889';
const client = new RPC.Client({ transport: 'ipc' });

// #---#---#---# ÖNEMLİ #---#---#---#
// RPC'Yİ KULLANABİLMENİZ İÇİN BİLGİSAYARINIZDA DİSCORD AÇIK OLMALIDIR
// AYRICA OAUTH2 İLE APLİKASYONA YETKİ VERMELİSİNİZ
// YETKİ VERMEK İÇİN: https://discord.com/api/oauth2/authorize?client_id=590063079988133889&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3Fclient_id%3D590063079988133889%26scope%3Dbot%26permissions%3D387136&response_type=code&scope=rpc%20identify%20rpc.notifications.read

async function setActivity() {
	// En üstteki yazı her zaman YMY olarak kalacak
	client.setActivity({
		details: `Yazılımcıların Mola Yeri`,
		state: '<3',
		largeImageKey: 'ymy_logo-1024x1024',
		largeImageText: 'https://discord.gg/KazHgb2',
		smallImageKey: 'ymy_logo-526x526',
		smallImageText: 'https://discord.gg/KazHgb2',
		instance: false,
	});
}
 
client.on('ready', () => {
	console.log("RPC Başarıyla başlatıldı.");
	
	setActivity();
	
	setInterval(() => {
		setActivity();
	}, 15e3);
	
	
});

// Client ID ile bağlan, bağlanamazsan hata ver.
client.login({ clientId })
.catch(console.error);
