// フォームデータをCSV形式でエクスポートする関数

function exportFormToCSV() {
    // フォームデータを収集
    const formData = collectFormData();
    
    // CSVヘッダー
    const headers = [
        // 基本情報
        'タイムスタンプ', '性別', '顔写真', '生年月日', '年齢', 'お名前', 'メールアドレス',
        '郵便番号', '都道府県', '市区町村', '番地以下', 'ご職業',
        
        // 1週間の過ごし方
        '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日',
        'オンサイト日数', 'リモート日数', 'オフ日数',
        
        // ライフスタイル
        '平日の過ごし方', '平日に会う人', '休日の過ごし方', 'デート場所',
        '週末活動_プライベート', '週末活動_ビジネス', '関わる年齢層',
        
        // シーン
        'ビジネスシーン', 'プライベートシーン',
        
        // スタイル
        '職場の服装規定', '魅力を感じるスタイル',
        
        // ブランド
        '好きなブランド', '苦手なブランド',
        
        // 予算
        'シーズンコーディネート数', 'メインコーデ数', 'サブコーデ数',
        '欲しいアイテム', 'シーズン予算', 'アイテム別予算',
        '予算をかけたくないアイテム',
        
        // サービス
        'ギフトコーディネート', '配送サービス', '送迎サービス', 'アプリ接続',
        
        // 法人情報
        '法人契約', '法人名', '年商規模',
        
        // その他
        'ファッション関心度', '学習希望', '旅行頻度', '旅行先服装', '備考'
    ];
    
    // データ行を作成
    const dataRow = createDataRow(formData);
    
    // CSV形式に変換
    const csv = [
        headers.join(','),
        dataRow
    ].join('\n');
    
    // ダウンロード
    downloadCSV(csv, `form-data-${getCurrentTimestamp()}.csv`);
}

function collectFormData() {
    const form = document.getElementById('styleForm');
    const formData = new FormData(form);
    
    return {
        // 基本情報
        timestamp: new Date().toISOString(),
        gender: formData.get('formGender'),
        facePhoto: document.getElementById('facePhotoImg')?.src || '',
        birthDate: `${formData.get('birthYear')}-${formData.get('birthMonth')}-${formData.get('birthDay')}`,
        age: calculateAge(formData.get('birthYear'), formData.get('birthMonth'), formData.get('birthDay')),
        name: formData.get('fullName'),
        email: formData.get('email'),
        postalCode: `${formData.get('postalCode1')}-${formData.get('postalCode2')}`,
        prefecture: formData.get('prefecture'),
        city: formData.get('city'),
        address: formData.get('address'),
        occupation: formData.get('occupation'),
        
        // 1週間の過ごし方
        weekSchedule: {
            monday: formData.get('monday_schedule'),
            tuesday: formData.get('tuesday_schedule'),
            wednesday: formData.get('wednesday_schedule'),
            thursday: formData.get('thursday_schedule'),
            friday: formData.get('friday_schedule'),
            saturday: formData.get('saturday_schedule'),
            sunday: formData.get('sunday_schedule')
        },
        
        // 平日・休日の過ごし方
        weekdayLifestyle: formData.getAll('weekdayLifestyle'),
        weekdayPeople: formData.getAll('weekdayPeople'),
        holidayLifestyle: formData.getAll('holidayLifestyle'),
        datePlaces: formData.getAll('datePlaces'),
        
        // シーン
        businessScenes: formData.getAll('businessScenes'),
        privateScenes: formData.getAll('privateScenes'),
        
        // スタイル
        dressRegulation: formData.get('dressRegulation'),
        attractiveStyles: formData.getAll('attractiveStyle'),
        
        // ブランド
        favoriteBrands: formData.getAll('favoriteBrand'),
        dislikedBrands: formData.getAll('dislikedBrand'),
        
        // 予算
        seasonCoordinationCount: formData.get('seasonCoordinationCount'),
        mainCoordinationCount: formData.get('mainCoordinationCount'),
        subCoordinationCount: formData.get('subCoordinationCount'),
        wantedItems: collectWantedItems(formData),
        seasonBudgets: collectSeasonBudgets(formData),
        itemBudgets: collectItemBudgets(formData),
        
        // サービス
        giftCoordination: formData.get('giftCoordination'),
        deliveryService: formData.get('deliveryService'),
        transportService: formData.get('transportService'),
        appConnection: formData.get('appConnection'),
        
        // その他
        remarks: formData.get('remarks')
    };
}

function createDataRow(data) {
    const row = [
        data.timestamp,
        data.gender,
        data.facePhoto ? 'あり' : 'なし',
        data.birthDate,
        data.age,
        data.name,
        data.email,
        data.postalCode,
        data.prefecture,
        data.city,
        data.address,
        data.occupation,
        
        // 週間スケジュール
        data.weekSchedule.monday,
        data.weekSchedule.tuesday,
        data.weekSchedule.wednesday,
        data.weekSchedule.thursday,
        data.weekSchedule.friday,
        data.weekSchedule.saturday,
        data.weekSchedule.sunday,
        
        // 日数カウント
        countScheduleType(data.weekSchedule, 'work'),
        countScheduleType(data.weekSchedule, 'rest'),
        countScheduleType(data.weekSchedule, 'no-boundary'),
        
        // ライフスタイル
        data.weekdayLifestyle.join(';'),
        data.weekdayPeople.join(';'),
        data.holidayLifestyle.join(';'),
        data.datePlaces.join(';'),
        
        // シーン
        data.businessScenes.join(';'),
        data.privateScenes.join(';'),
        
        // スタイル
        data.dressRegulation,
        data.attractiveStyles.join(';'),
        
        // ブランド
        data.favoriteBrands.join(';'),
        data.dislikedBrands.join(';'),
        
        // 予算
        data.seasonCoordinationCount,
        data.mainCoordinationCount,
        data.subCoordinationCount,
        formatWantedItems(data.wantedItems),
        formatSeasonBudgets(data.seasonBudgets),
        formatItemBudgets(data.itemBudgets),
        
        // サービス
        data.giftCoordination,
        data.deliveryService,
        data.transportService,
        data.appConnection,
        
        // その他
        data.remarks
    ];
    
    // CSV用にエスケープ処理
    return row.map(cell => {
        if (typeof cell === 'string' && (cell.includes(',') || cell.includes('"') || cell.includes('\n'))) {
            return `"${cell.replace(/"/g, '""')}"`;
        }
        return cell || '';
    }).join(',');
}

function downloadCSV(csv, filename) {
    // BOMを追加（Excel対応）
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const blob = new Blob([bom, csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
}

function getCurrentTimestamp() {
    const now = new Date();
    return now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
}

function calculateAge(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

function countScheduleType(schedule, type) {
    return Object.values(schedule).filter(value => value === type).length;
}

function collectWantedItems(formData) {
    const items = [];
    const itemTypes = ['shirt', 'jacket', 'pants', 'shoes', 'bag', 'belt'];
    
    itemTypes.forEach(type => {
        const quantity = formData.get(`wantedItem_${type}_qty`);
        if (quantity && quantity > 0) {
            items.push(`${type}:${quantity}`);
        }
    });
    
    return items;
}

function formatWantedItems(items) {
    return items.join(';');
}

function collectSeasonBudgets(formData) {
    return {
        spring: formData.get('springBudget'),
        summer: formData.get('summerBudget'),
        fall: formData.get('fallBudget'),
        winter: formData.get('winterBudget')
    };
}

function formatSeasonBudgets(budgets) {
    return `春:${budgets.spring || 0},夏:${budgets.summer || 0},秋:${budgets.fall || 0},冬:${budgets.winter || 0}`;
}

function collectItemBudgets(formData) {
    const items = ['shirt', 'jacket', 'pants', 'shoes', 'bag'];
    const budgets = {};
    
    items.forEach(item => {
        budgets[item] = formData.getAll(`budget_${item}`).join('-');
    });
    
    return budgets;
}

function formatItemBudgets(budgets) {
    return Object.entries(budgets)
        .map(([item, budget]) => `${item}:${budget}`)
        .join(';');
}

// エクスポートボタンをフォームに追加
function addExportButton() {
    const submitButton = document.querySelector('.submit-button-container');
    if (submitButton) {
        const exportButton = document.createElement('button');
        exportButton.type = 'button';
        exportButton.className = 'btn-secondary';
        exportButton.textContent = 'CSVでエクスポート';
        exportButton.onclick = exportFormToCSV;
        exportButton.style.marginLeft = '20px';
        
        submitButton.appendChild(exportButton);
    }
}

// ページ読み込み時にエクスポートボタンを追加
document.addEventListener('DOMContentLoaded', addExportButton);