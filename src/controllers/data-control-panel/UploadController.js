import PromiseFtp from 'ftp'

export default class UploadController {

  uploadImages (req, res) {
    const ftp = new PromiseFtp();
    const sizeMaxFile = 20000000;

    const { buffer: bufferFile, originalname: fileName, size } = req.file;
    const pathDestination = req.body.path;

    if (!req.file) return res.status(400).json({ error: 'Nenhum arquivo foi enviado!' });

    if (size > sizeMaxFile) return res.status(400).json({ error: 'Tamanho do arquivo enviado maior que o permitido!' });

    ftp.on('ready', function() {
      ftp.put(bufferFile, `htdocs/images/${pathDestination}/${fileName}`, function (err) {
        if (err) return res.status(400).json({ ...err, success: false });
        ftp.end();
        return res.status(200).json({ success: true });
      })
    })

    ftp.connect({
      host: process.env.FTP_HOST, 
      user: process.env.FTP_USER, 
      password: process.env.FTP_PASS
    });
  }

}