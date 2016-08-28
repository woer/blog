// <!-- 使用 net 模块实现一个简单的 HTTP 客户端 -->
// #!/usr/bin/node
// net.createConnection 请求链接客户端



"use strict";

const net = require('net');
const url = require('url');
const qs = require('querystring');

function request(opts) {
  if(! /^https?:\/\//.test(opts.url)) opts.url = `http://${opts.url}`;

  let header = {};
  let urlObj = url.parse(opts.url);

  header.host = urlObj.hostname;
  header.port = urlObj.port || 80;
  header.path = urlObj.path ;

  let query = qs.stringify(opts.qs);
  if(query) header.path += `?${query}`;

  header.headers = opts.headers || {};
  header.headers['User-Agent'] = header.headers['User-Agent'] || 'Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0';

  header.method = (opts.method || 'GET').toUpperCase();

  header.form = qs.stringify(opts.form);

  return new Promise((resolve, reject) => {
    const client = net.createConnection(header.port, header.host, () => {   // ****************
      let req = '';
      req += `${header.method} ${header.path} HTTP/1.1\r\n`;
      req += `Host: ${header.host}\r\n`;
      req += `Accept: */*\r\n`;
      req += `Connection: keep-alive\r\n`;

      if(header.method === 'POST') {
        req += `Content-Type: application/x-www-form-urlencoded\r\n`;
        req += `Content-Length: ${header.form.length}\r\n`;
      }

      Object.keys(header.headers).forEach((key) => {
        req += `${key}: ${header.headers[key]}\r\n`;
      });
      req += '\r\n'

      if(header.method === 'POST') {
        req += header.form;
      }

      console.log(req);

      client.end(req);
    }).on('error', reject);

    let chunks = [], size = 0;
    let response = {headers: {}, statusText: '', statusCode: '', body: null};
    let body = '';

    client.on('close', () => {
      client.destroy();
    })
    client.on('data', (chunk) => {
      size += chunk.length;
      chunks.push(chunk);
      body += chunk.toString();
    });
    client.on('end', () => {
      if(! body) return reject(new Error('Empty response'));

      let _res = body.split('\r\n\r\n');
      _res[0].split('\r\n').forEach((e, i) => {
        let _t;
        if(i === 0) {
            // HTTP/1.0 code text
            _t = e.split(' ');
            response.statusCode = _t[1];
            response.statusText = _t.slice(2).join(' ');
          } else {
            _t = e.split(': ', 2);
            response.headers[_t[0]] = _t[1];
          }
      });
      response.body = Buffer.concat(chunks, size);
      resolve(response);
    });
  })
}



request({
url: 'http://ustc.edu.cn',

//url: 'http://mis.teach.ustc.edu.cn',

//url: 'http://mirrors.ustc.edu.cn/node/',

//method: 'HEAD',
//url: 'http://weibo.com/',

//url: 'http://www.baidu.com/s',
//qs: {wd: 'qwe', ie: 'UTF-8', tn: 'baidulocal'},

//// python -m http.server
//url: 'localhost:8000',
//method: 'POST',
//form: {a:123, b:456}
})
.then(data => {
console.log(data);
console.log(data.body);
})
.catch(console.error)
