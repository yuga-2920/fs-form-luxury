// Google Apps Script - Form Data Handler
// Deploy this script as a Web App and update the URL in google-sheets-integration.js
//
// セットアップ手順:
// 1. Google Sheetsで新しいスプレッドシートを作成
// 2. ツール > スクリプトエディタを開く
// 3. このコードを貼り付ける
// 4. デプロイ > 新しいデプロイ > ウェブアプリとして公開
// 5. アクセス権限を「全員」に設定
// 6. デプロイURLをgoogle-sheets-connector.jsのscriptUrlに設定

// Configuration
// スプレッドシートIDは指定不要（アクティブなスプレッドシートを使用）
const SHEET_NAME = 'フォーム回答'; // シート名
const IMAGE_FOLDER_NAME = 'フォーム画像'; // 画像保存用フォルダ名

function doPost(e) {
  try {
    // Parse incoming data
    const request = JSON.parse(e.postData.contents);
    
    // アクションに応じて処理
    if (request.action === 'append') {
      // アクティブなスプレッドシートを使用
      const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      
      let sheet = spreadsheet.getSheetByName(request.sheetName || SHEET_NAME);
      
      // Create sheet if it doesn't exist
      if (!sheet) {
        sheet = spreadsheet.insertSheet(request.sheetName || SHEET_NAME);
        setupHeaders(sheet);
      }
      
      // 画像を処理
      let imageUrls = {};
      if (request.images) {
        imageUrls = processImages(request.images);
      }
      
      // データに画像URLを追加
      const rowData = Array.isArray(request.data) ? request.data : [request.data];
      
      // 画像URLを追加
      if (imageUrls.face) rowData.push(imageUrls.face);
      if (imageUrls.body) rowData.push(imageUrls.body);
      if (imageUrls.other && imageUrls.other.length > 0) {
        rowData.push(imageUrls.other.join(', '));
      }
      
      sheet.appendRow(rowData);
      
      // Return success response
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'データが正常に保存されました',
        rowNumber: sheet.getLastRow()
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: '不明なアクション'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function setupHeaders(sheet) {
  const headers = [
    'タイムスタンプ', '性別', '姓', '名', '姓（カナ）', '名（カナ）', 
    '生年月日', '身長', '体重', 'メールアドレス', '電話番号', 
    '郵便番号', '都道府県', '市区町村', '住所',
    '働き方', 'ビジネスシーン', 'プライベートシーン', '週末の活動',
    '国内旅行', '海外旅行', 'ドレスコード',
    '魅力を感じるスタイル', '避けたいアイテム', 'ブランド好み',
    'ファッション知識', '所持アイテム', '希望アイテム',
    '会社名', '役職', '社員数', '年間売上', '社員年齢層',
    'アプリ利用', 'パートナー制度', 'フィッティング時間', 
    'ギフトサービス', 'ギフト頻度', '配送サービス', 
    'サービス期待', 'ファッションリテラシー', 'コメント',
    '顔写真URL', '全身写真URL', 'その他写真URL'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // ヘッダー行のスタイル設定
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4A5568');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  
  // 列幅の自動調整
  sheet.autoResizeColumns(1, headers.length);
  
  // フィルターの設定
  sheet.getRange(1, 1, sheet.getMaxRows(), headers.length).createFilter();
  
  // 凍結行の設定
  sheet.setFrozenRows(1);
}

// 画像処理関数
function processImages(images) {
  const imageUrls = {};
  
  try {
    // 画像保存用フォルダを取得または作成
    const folder = getOrCreateImageFolder();
    
    // 顔写真
    if (images.face && images.face.dataUrl) {
      imageUrls.face = saveImageToDrive(images.face.dataUrl, 'face_' + new Date().getTime(), folder);
    }
    
    // 全身写真
    if (images.body && images.body.dataUrl) {
      imageUrls.body = saveImageToDrive(images.body.dataUrl, 'body_' + new Date().getTime(), folder);
    }
    
    // その他の写真
    if (images.other && images.other.length > 0) {
      imageUrls.other = [];
      images.other.forEach((img, index) => {
        const url = saveImageToDrive(img.dataUrl, 'other_' + new Date().getTime() + '_' + index, folder);
        if (url) imageUrls.other.push(url);
      });
    }
  } catch (error) {
    console.error('画像処理エラー:', error);
  }
  
  return imageUrls;
}

// 画像フォルダを取得または作成
function getOrCreateImageFolder() {
  const folders = DriveApp.getFoldersByName(IMAGE_FOLDER_NAME);
  
  if (folders.hasNext()) {
    return folders.next();
  } else {
    // フォルダを作成
    return DriveApp.createFolder(IMAGE_FOLDER_NAME);
  }
}

// Google Driveに画像を保存
function saveImageToDrive(base64Data, fileName, folder) {
  try {
    // Data URLのプレフィックスを削除
    const base64 = base64Data.split(',')[1];
    
    // Base64をデコード
    const blob = Utilities.newBlob(Utilities.base64Decode(base64));
    
    // ファイル名とMIMEタイプを設定
    blob.setName(fileName + '.jpg');
    blob.setContentType('image/jpeg');
    
    // ファイルを作成
    const file = folder.createFile(blob);
    
    // リンク共有を設定
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // URLを返す
    return file.getUrl();
    
  } catch (error) {
    console.error('画像保存エラー:', error);
    return '';
  }
}

// For GET requests (testing)
function doGet() {
  return ContentService.createTextOutput('Form submission endpoint is working');
}