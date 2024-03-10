class BookModel {
    constructor() {
        this.Name = '';
        this.Vol = [];
        this.Lang = 'en';
        this.OneShot = false;
        this.Title = '';
        this.Favorite = '5';
    }
}
var DB = [
    {
        "Name": "you-jitsu-year-2",
        "Vol": [
            "01",
            "02",
            "03",
            "04.5",
            "04",
            "05",
            "06",
            "07"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "0"
    },
    {
        "Name": "you-jitsu",
        "Vol": [
            "01",
            "02",
            "03",
            "04.5",
            "04",
            "05",
            "06",
            "07.5",
            "07",
            "08",
            "09",
            "10",
            "11.5",
            "11"
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "youjo-senki",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "spy-classroom",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "sao",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "86-eighty-six",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "all-you-need-is-kill",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "amagi-brilliant-park",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "ame-no-hi-no-iris",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "angel-note",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "battle-royale",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "belka-why-dont-you-bark",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "black-bullet",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "bokura-wa-dokonimo-hirakanai",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "boku-to-kimi-dake-ni",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "brave-story",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "bungo-stray-dogs",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "danmachi",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "danmachi-familia-chronicle",
        "Vol": [
            "01",
            "02"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "date-a-live",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11.5",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "demon-city-shinjuku",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "durarara",
        "Vol": [
            "0",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "gekkou",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "gimai-seikatsu",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "harmony",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hello-hello-and-hello",
        "Vol": [
            "",
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hello-world",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hensuki",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "04",
            "05",
            "05",
            "06",
            "06",
            "07",
            "07",
            "08",
            "08",
            "09",
            "09",
            "10",
            "10",
            "11",
            "11",
            "12",
            "13",
            "14",
            "Special"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "himote-na-ore-ga",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hoshizora-no-shita",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hyouka",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06"
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "ichigo-doumei",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "isekai-maou",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "itai-no-itai-no",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "joze-to-tora-to-sakana-tachi",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "juni-taisen",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kakushigoto",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kimi-boku-ga-denwa",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kimi-no-hanashi",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kimi-no-suizou-wo-tabetai",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kimi-to-boku-no-uta-worlds-end",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "koisuru-kiseichuu",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kono-suba",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17"
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "kori-no-kuni-no-amaryillis",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kotonoha-no-niwa",
        "Vol": [
            "",
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kumo-no-mukou",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kuzu-to-kinka-no-qualidea",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "macaron",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mahouka-koukou",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32"
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "mardock-scramble",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mata-onaji-yume",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mikkakan-no-koufuku",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mimizuku-to-yoru-no-ou",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mirai",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "nier-automata",
        "Vol": [
            "01",
            "02"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "no-game-no-life",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "otogi-no-mori",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "overlord",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "phenomeno",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "pygmalion-wa-tane",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "riku-and-chise",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "saijaku-muhai-no-bahamut",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "sekaiichi-kantan",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "shiki",
        "Vol": [
            "01",
            "02"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "side-by-side-dreamers",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "starting-over",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "sugar-dark",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "tabi-ni-deyou",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "tsuki-no-sango",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "uchi-musume",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "utsuro-no-hako",
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "yokohama-station-sf",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "yume-nikki",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "ashita-boku-wa-shinu",
        "Vol": [
            "01",
            "02",
            "03",
            "04"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    }
];



function pageRender() {
    if (window.location.href.includes('public.html')) DB = DB.filter(x => x.Public == '1');
    var host = "https://null-library.github.io/lib/";
    var content_wrap = document.getElementById("content-wrap");
    let htmlOneShot = "";
    DB.sort((x, y) => x.Favorite - y.Favorite).forEach(data => {
        if (data.Title == '') {
            let arrName = data.Name.split('-');
            arrName.forEach(char => {
                data.Title += char.charAt(0).toUpperCase() + char.slice(1) + ' ';
            })
            data.Title = data.Title.trim(' ');
        }
        if (data.OneShot) {
            let volUrl = 'one-shot/' + data.Name + '.html';
            let thumbnail = data.Name + '_1.jpg';
            data.Public = '1';
            htmlOneShot += `<div class="item-container"><a class="item-border" style="text-decoration:none" href="` +
                host + data.Lang + '/' + volUrl + `" ><div class="item"><div class="item-thumbnail"><div class="item-img" style="background-image:url('https://null-library.github.io/assets/thumbs/` +
                thumbnail + `')"></div><span class="item-rate">` +
                data.Lang.toUpperCase() + `</span></div><div class="title-wrap"><div class="item-title">` +
                data.Title + `</div></div></div></a></div>`;

        }
        else if (data?.Vol?.length > 0) {
            let htmlItem = "";
            data?.Vol.forEach(vol => {
                let volUrl = data.Name + '/' + data.Name + '_vol_' + vol + '.html';
                let volName = data.Title + ' - Vol ' + vol;
                let thumbnail = !data.OneShot ? data.Name + '_vol_' + vol + '_1.jpg' : data.Name + '_1.jpg';

                htmlItem += `<div class="item-container"><a class="item-border" style="text-decoration:none" href="` +
                    host + data.Lang + '/' + volUrl + `" ><div class="item"><div class="item-thumbnail"><div class="item-img" style="background-image:url('https://null-library.github.io/assets/thumbs/` +
                    thumbnail + `')"></div><span class="item-rate">` +
                    data.Lang.toUpperCase() + `</span></div><div class="title-wrap"><div class="item-title">` +
                    volName + `</div></div></div></a></div>`

            })
            content_wrap.innerHTML += `<div class="content__container"><div class="container__header"><div>` +
                data.Title + `</div></div><hr class="separate"><div class="container__body">` + htmlItem + `</div></div>`
        }

    });
    content_wrap.innerHTML += `<div class="content__container"><div class="container__header"><div>One-shot</div></div><hr class="separate"><div class="container__body">` + htmlOneShot + `</div></div>`

}
pageRender();