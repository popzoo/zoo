const request = require("request");
module.exports = (req, res) => {
    // const { name = 'World' } = req.query;
    var referer = req.query.referer;
    console.info(referer);
    fakeCnzzRequest(encodeURIComponent(referer));
    function fakeCnzzRequest(referer) {
        let id = '1278032070';
        let p = ['https://popzoo.github.io/zoo/', 'https://popzoo.github.io/zoo/index', 'https://popzoo.github.io/zoo/index.html', 'https://popzoo.github.io/zoo/danmuManual.html', 'https://popzoo.github.io/zoo/manyOpen.html', 'https://popzoo.github.io/zoo/personal.html'];
        let showp = { pc: ['1920*1080', '1440*900', '1366X768', '1920X1200', '2560*1440'], mb: ['1136*640', '1334*750', '1920*1080', '1334*750', '2436*1125'] };//同useragent配套
        let userAgentArr = {
            pc: [
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.163 Safari/535.1',
                'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0',
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50',
                'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; Win64; x64; Trident/5.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; Tablet PC 2.0; .NET4.0E)',
                'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.3)',
                'Mozilla/5.0 (Windows; U; Windows NT 10.0; ) AppleWebKit/534.12 (KHTML, like Gecko) Maxthon/3.0 Safari/534.12',
                'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)',
                'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)',
                'Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.472.33 Safari/534.3 SE 2.X MetaSr 1.0',
                'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)',
                'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1 QQBrowser/6.9.11079.201',
                'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E) QQBrowser/6.9.11079.201',
                'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/5.0)'
            ],
            mb: [
                'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
                'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
                'Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
                'Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
                'MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
                'Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10',
                'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
                'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1+',
                'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',
                'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124',
                'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Titan)'
            ]
        }
        let rnd = Math.floor(2147483648 * Math.random());
        let ntime = Math.round(new Date().getTime() / 1000);
        let cnzz_eid = Math.floor(2147483648 * Math.random()) + "-" + ntime + "-" + encodeURIComponent('https://github.com/');
        let isPhone = parseInt(Math.random() * 2);
        let showplay = isPhone ? showp.mb[parseInt(Math.random() * showp.mb.length)] : showp.pc[parseInt(Math.random() * showp.pc.length)];
        let useragent = isPhone ? userAgentArr.mb[parseInt(Math.random() * userAgentArr.mb.length)] : userAgentArr.pc[parseInt(Math.random() * userAgentArr.pc.length)];
        let umuuid = get_umuuid(useragent, Math.round(new Date().getTime() / 1000));
        let position = encodeURIComponent(p[parseInt(Math.random() * p.length)]);
        let cnzzHeaders = {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            // "Connection":"keep-alive",
            // "Host":"www.woheyun.com",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": useragent,
            "Referer": "https://popzoo.github.io/",
        }
        let reqUrl = 'https://z6.cnzz.com/stat.htm';
        reqUrl += '?id=' + id + '&r=' + referer + '&lg=zh-cn&ntime' + ntime + '&cnzz_eid=' + cnzz_eid + '&showp=' + showplay + '&p=' + position + '&t=' + encodeURIComponent('时光轴') + '&h=1&rnd=' + rnd + '&umuuid=' + umuuid;
        // console.info(reqUrl);
        // fetch(reqUrl, {
        //     method: 'GET',
        //     headers: cnzzHeaders
        // }).then(res => {
        //     console.log('Successful!');
        //     //     return res.json();
        //     // }).then(json => {
        //     //     console.info(json);
        // }).catch(err => {
        //     // console.error('Request error!', err);
        // })
        request({
            url: reqUrl,
            method: "GET",
            // gzip: true,
            headers: cnzzHeaders,
            timeout: 6000
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('Successful!');
                return res.status(200).send(`Successful!`);
            } else {
                console.error("Request error!", error);
                return res.status(500).send(`Failed!`);
            }
        })
    }
    // get_umuuid(ua, ntime);
    function get_umuuid(ua, ts) {
        function w() {
            function c(w, v) {
                var r, y = 0;
                for (r = 0; r < v.length; r++)
                    y |= k[r] << 8 * r;
                return w ^ y
            }
            var d = ua, f, k = [], n = 0;
            for (f = 0; f < d.length; f++) {
                var u = d.charCodeAt(f);
                k.unshift(u & 255);
                4 <= k.length && (n = c(n, k),
                    k = [])
            }
            0 < k.length && (n = c(n, k));
            return n.toString(16)
        }
        function b() {
            for (var c = 1 * new Date, d = 0; c == 1 * new Date;)
                d++;
            return c.toString(16) + d.toString(16)
        }
        function q() {
            var c = (1080 * 1920).toString(16);
            return b() + "-" + Math.random().toString(16).replace(".", "") + "-" + w() + "-" + c + "-" + b()
        }
        p = {
            "Ha": "",
            "Ja": "",
            "l": "1334253443-" + toString(ts) + "-",
            "la": true
        }
        var a = p, b;
        var c = q(), d = new Date;
        d.setTime(d.getTime() + 157248E5);
        var f = "popzoo.github.io".match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i);//================= document.location.hostname
        b = c;
        return b;
    }
};