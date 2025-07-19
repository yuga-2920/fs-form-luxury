// Configuration File
// Google Apps Script URLなどの設定を管理

const Config = {
    // Google Apps Script Web App URL
    // ここにデプロイしたGoogle Apps ScriptのURLを設定してください
    GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/AKfycbxxx_O2eCJvMm1kBnTXjKAoNTS01G6BpuJmeg9FgrTuZKLmb4WF_Gg5-9N7Vms-jQ7E4A/exec',

    // その他の設定
    SHEET_NAME: 'フォーム回答',
    IMAGE_FOLDER_NAME: 'フォーム画像'
};

// グローバルアクセス用
window.Config = Config;