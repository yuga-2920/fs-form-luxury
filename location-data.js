// 地域データ定義
const locationData = {
    'kanto': {
        name: '関東',
        prefectures: {
            'tokyo': {
                name: '東京都',
                cities: [
                    '千代田区', '中央区', '港区', '新宿区', '文京区', '台東区',
                    '墨田区', '江東区', '品川区', '目黒区', '大田区', '世田谷区',
                    '渋谷区', '中野区', '杉並区', '豊島区', '北区', '荒川区',
                    '板橋区', '練馬区', '足立区', '葛飾区', '江戸川区',
                    'その他東京23区外'
                ]
            },
            'kanagawa': {
                name: '神奈川県',
                cities: ['横浜市', '川崎市', 'その他神奈川県']
            },
            'chiba': {
                name: '千葉県',
                cities: ['千葉市', 'その他千葉県']
            },
            'saitama': {
                name: '埼玉県',
                cities: ['さいたま市', 'その他埼玉県']
            },
            'ibaraki': {
                name: '茨城県',
                cities: ['つくば市', '水戸市', 'その他茨城県']
            },
            'tochigi': {
                name: '栃木県',
                cities: ['宇都宮市', 'その他栃木県']
            },
            'gunma': {
                name: '群馬県',
                cities: ['前橋市', '高崎市', 'その他群馬県']
            }
        }
    },
    'hokkaido-tohoku': {
        name: '北海道・東北',
        prefectures: {
            'hokkaido': {
                name: '北海道',
                cities: ['札幌市', '函館市', '旭川市', 'その他北海道']
            },
            'aomori': { name: '青森県', cities: ['青森市', 'その他青森県'] },
            'iwate': { name: '岩手県', cities: ['盛岡市', 'その他岩手県'] },
            'miyagi': { name: '宮城県', cities: ['仙台市', 'その他宮城県'] },
            'akita': { name: '秋田県', cities: ['秋田市', 'その他秋田県'] },
            'yamagata': { name: '山形県', cities: ['山形市', 'その他山形県'] },
            'fukushima': { name: '福島県', cities: ['福島市', '郡山市', 'その他福島県'] }
        }
    },
    'chubu': {
        name: '中部',
        prefectures: {
            'niigata': { name: '新潟県', cities: ['新潟市', 'その他新潟県'] },
            'toyama': { name: '富山県', cities: ['富山市', 'その他富山県'] },
            'ishikawa': { name: '石川県', cities: ['金沢市', 'その他石川県'] },
            'fukui': { name: '福井県', cities: ['福井市', 'その他福井県'] },
            'yamanashi': { name: '山梨県', cities: ['甲府市', 'その他山梨県'] },
            'nagano': { name: '長野県', cities: ['長野市', '松本市', 'その他長野県'] },
            'gifu': { name: '岐阜県', cities: ['岐阜市', 'その他岐阜県'] },
            'shizuoka': { name: '静岡県', cities: ['静岡市', '浜松市', 'その他静岡県'] },
            'aichi': { name: '愛知県', cities: ['名古屋市', '豊田市', 'その他愛知県'] }
        }
    },
    'kinki': {
        name: '近畿',
        prefectures: {
            'mie': { name: '三重県', cities: ['津市', 'その他三重県'] },
            'shiga': { name: '滋賀県', cities: ['大津市', 'その他滋賀県'] },
            'kyoto': { name: '京都府', cities: ['京都市', 'その他京都府'] },
            'osaka': { name: '大阪府', cities: ['大阪市', '堺市', 'その他大阪府'] },
            'hyogo': { name: '兵庫県', cities: ['神戸市', '姫路市', 'その他兵庫県'] },
            'nara': { name: '奈良県', cities: ['奈良市', 'その他奈良県'] },
            'wakayama': { name: '和歌山県', cities: ['和歌山市', 'その他和歌山県'] }
        }
    },
    'chugoku-shikoku': {
        name: '中国・四国',
        prefectures: {
            'tottori': { name: '鳥取県', cities: ['鳥取市', 'その他鳥取県'] },
            'shimane': { name: '島根県', cities: ['松江市', 'その他島根県'] },
            'okayama': { name: '岡山県', cities: ['岡山市', '倉敷市', 'その他岡山県'] },
            'hiroshima': { name: '広島県', cities: ['広島市', '福山市', 'その他広島県'] },
            'yamaguchi': { name: '山口県', cities: ['山口市', '下関市', 'その他山口県'] },
            'tokushima': { name: '徳島県', cities: ['徳島市', 'その他徳島県'] },
            'kagawa': { name: '香川県', cities: ['高松市', 'その他香川県'] },
            'ehime': { name: '愛媛県', cities: ['松山市', 'その他愛媛県'] },
            'kochi': { name: '高知県', cities: ['高知市', 'その他高知県'] }
        }
    },
    'kyushu-okinawa': {
        name: '九州・沖縄',
        prefectures: {
            'fukuoka': { name: '福岡県', cities: ['福岡市', '北九州市', 'その他福岡県'] },
            'saga': { name: '佐賀県', cities: ['佐賀市', 'その他佐賀県'] },
            'nagasaki': { name: '長崎県', cities: ['長崎市', '佐世保市', 'その他長崎県'] },
            'kumamoto': { name: '熊本県', cities: ['熊本市', 'その他熊本県'] },
            'oita': { name: '大分県', cities: ['大分市', '別府市', 'その他大分県'] },
            'miyazaki': { name: '宮崎県', cities: ['宮崎市', 'その他宮崎県'] },
            'kagoshima': { name: '鹿児島県', cities: ['鹿児島市', 'その他鹿児島県'] },
            'okinawa': { name: '沖縄県', cities: ['那覇市', 'その他沖縄県'] }
        }
    }
};