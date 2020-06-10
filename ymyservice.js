var Service = require('node-windows').Service;
var parametreler = process.argv.slice(2);

// Create a new service object
var svc = new Service({
  name:'YMY RPC',
  description: 'Yazılımcıların Mola Yeri RPC eklentisinin servisi.',
  script: 'rpc.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
	console.log("Servis kuruldu, başlatılıyor.");
	svc.start();
});

svc.on('alreadyinstalled',function(){
	console.log("Servis zaten yüklü, başlatılıyor.");
	svc.start();
});

svc.on('stop',function(){
	console.log("Servis durduruldu.");
});

svc.on('uninstall',function(){
	console.log("Servis kaldırıldı.");
});

switch(parametreler[0])
{
	case 'baslat':
		svc.install();
		break;
	case 'durdur':
		svc.stop();
		break;
	case 'kaldir':
		svc.uninstall();
		break;
	default:
		console.log("Parametre girilmedi.\nKullanabileceğiniz parametreler: baslat | durdur | kaldir");
}