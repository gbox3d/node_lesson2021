import http from 'http'
import { url } from 'inspector';
import {URL} from 'url'

const port = 8090

http.createServer((req,res)=> {

    const urlObj = new URL(
        req.url,
        'http://example.com'
    );

    console.log(`pathname : ${urlObj.pathname}`);
    console.log(`search : ${urlObj.search}`);
    console.log(`hostname : ${urlObj.hostname}`);

    let result = {
        r: 'ok'
    }
    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용 
    }
    res.writeHead(200,header);

    let _title = urlObj.searchParams.get('title');
    let _msg = urlObj.searchParams.get('msg');

    result.title = _title
    result.msg = _msg

    res.end(JSON.stringify(result));

}).listen(port);

console.log(`listen : ${port}`);