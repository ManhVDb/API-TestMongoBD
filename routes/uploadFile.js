const express= require('express');
const routes= express.Router();
const Post =require('../models/Post')
const userController= require('../controller/userController');

<<<<<<< HEAD
var Client = require('ssh2').Client;
=======
>>>>>>> c4bff4ab625a3bb596cc72f5c0a7d73ddc3755e5

const homeController = require("../controller/home");
const uploadController = require("../controller/uploadController");


routes.get('/',homeController.getHome);

<<<<<<< HEAD
// routes.post('/upload',uploadController.uploadFile);

routes.get('/ex',function  (req,res){

    var conn = new Client();
    const encode = 'utf8';
    conn.on('ready', function() {
        // avoid the use of console.log due to it adds a new line at the end of
        // the message
        process.stdout.write('Connection :: ready');
      
        let password = '123456a@A!@#$';
        let command = '';
        let pwSent = false;
        let su = false;
        let commands = [
          `ls`,
          `sudo su`,
          `123456a@A!@#$`,
          `sh test.sh`
        ];
      
        conn.shell((err, stream) => {
          if (err) {
            console.log(err);
          }
      
          stream.on('exit', function (code) {
            process.stdout.write('Connection :: exit');
            conn.end();
          });
      
          stream.on('data', function(data) {
            process.stdout.write(data.toString(encode));
      
            // handle su password prompt
            if (command.indexOf('su') !== -1 && !pwSent) {
               /*uploadupload
               * if su has been sent a data event is triggered but the
               * first event is not the password prompt, this will ignore the
               * first event and only respond when the prompt is asking
               * for the password
               */
               if (command.indexOf('su') > -1) {
                  su = true;
               }
               if (data.indexOf(':') >= data.length - 2) {
                  pwSent = true;
                  stream.write(password + '\n');
               }
            } else {
              // detect the right condition to send the next command
              let dataLength = data.length > 2;
              let commonCommand = data.indexOf('$') >= data.length - 2;
              let suCommand = data.indexOf('#') >= data.length - 2;
      
              if (dataLength && (commonCommand || suCommand )) {
      
                if (commands.length > 0) {
                  command = commands.shift();
                  stream.write(command + '\n');
      
                } else {
                  // su requires two exit commands to close the session
                  if (su) {
                     su = false;
                     stream.write('exit\n');
                  } else {
                     stream.end('exit\n');
                  }
                }
              }
            }
          });
          // first command
          command = commands.shift();
          stream.write(command + '\n');
        });
      }).connect({
      host: '10.2.65.38',
      port: 22,
      username: 'minions2',
      password: '123456a@A!@#$'
      
    });    

});
=======
routes.post('/upload',uploadController.uploadFile);

>>>>>>> c4bff4ab625a3bb596cc72f5c0a7d73ddc3755e5
module.exports= routes;