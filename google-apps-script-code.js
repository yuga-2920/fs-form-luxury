// Google Apps Script Code for Form Submission
// このコードをGoogle Apps Scriptにコピーしてください

function doPost(e) {
  try {
    // CORS対応
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    
    // リクエストデータを解析
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      throw new Error('No data received');
    }
    
    // スプレッドシートを取得
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // ヘッダー行を確認（なければ作成）
    if (sheet.getLastRow() === 0) {
      const headers = Object.keys(data);
      sheet.appendRow(headers);
    }
    
    // 既存のヘッダーを取得
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // データを配列に変換（ヘッダーの順序に合わせる）
    const rowData = headers.map(header => {
      // 画像データの場合は、URLのみを保存
      if ((header === 'facePhoto' || header === 'bodyPhoto') && data[header]) {
        // Base64データの場合、先頭部分のみ保存（容量制限のため）
        if (data[header].startsWith('data:image')) {
          return '[画像データ]';
        }
      }
      return data[header] || '';
    });
    
    // 新しいヘッダーがある場合は追加
    const newHeaders = Object.keys(data).filter(key => !headers.includes(key));
    if (newHeaders.length > 0) {
      // 既存のヘッダーに新しいヘッダーを追加
      const allHeaders = [...headers, ...newHeaders];
      sheet.getRange(1, 1, 1, allHeaders.length).setValues([allHeaders]);
      
      // 新しいデータも追加
      newHeaders.forEach(header => {
        if ((header === 'facePhoto' || header === 'bodyPhoto') && data[header]) {
          rowData.push('[画像データ]');
        } else {
          rowData.push(data[header] || '');
        }
      });
    }
    
    // データを追加
    sheet.appendRow(rowData);
    
    // 成功レスポンスを返す
    return output.setContent(JSON.stringify({
      'status': 'success',
      'message': 'データが正常に保存されました',
      'timestamp': new Date().toISOString()
    }));
    
  } catch (error) {
    // エラーログを記録
    console.error('Error in doPost:', error);
    
    // エラーレスポンスを返す
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GETリクエスト用（テスト用）
function doGet(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.TEXT);
  output.setContent('Form submission endpoint is working. Use POST method to submit data.');
  return output;
}

// テスト関数
function testPost() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'テストユーザー',
    email: 'test@example.com',
    message: 'これはテストデータです'
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  console.log(result.getContent());
}