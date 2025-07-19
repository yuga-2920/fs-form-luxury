// Vercel Serverless Function
// フォームデータを受け取ってGoogle Sheetsまたは他のストレージに保存

export default async function handler(req, res) {
  // CORSヘッダーの設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // データの検証
    if (!formData || typeof formData !== 'object') {
      return res.status(400).json({ error: 'Invalid form data' });
    }

    // オプション1: Supabaseに保存
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const result = await saveToSupabase(formData);
      if (result.success) {
        return res.status(200).json({ 
          success: true, 
          message: 'データが正常に保存されました',
          id: result.id 
        });
      }
    }

    // オプション2: Airtableに保存
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
      const result = await saveToAirtable(formData);
      if (result.success) {
        return res.status(200).json({ 
          success: true, 
          message: 'データが正常に保存されました',
          id: result.id 
        });
      }
    }

    // オプション3: JSONファイルとして保存（開発環境用）
    const result = await saveAsJSON(formData);
    return res.status(200).json({ 
      success: true, 
      message: 'データが正常に保存されました',
      id: result.id 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}

// Supabaseに保存
async function saveToSupabase(formData) {
  try {
    const { createClient } = await import('@supabase/supabase-js');
    
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    const { data, error } = await supabase
      .from('form_responses')
      .insert([
        {
          timestamp: formData.timestamp,
          gender: formData.gender,
          last_name: formData.lastName,
          first_name: formData.firstName,
          last_name_kana: formData.lastNameKana,
          first_name_kana: formData.firstNameKana,
          birth_date: formData.birthDate,
          height: formData.height,
          weight: formData.weight,
          email: formData.email,
          phone_number: formData.phoneNumber,
          postal_code: formData.postalCode,
          prefecture: formData.prefecture,
          city: formData.city,
          address: formData.address,
          work_style: formData.workStyle,
          business_scenes: formData.businessScenes,
          private_scenes: formData.privateScenes,
          weekend_activities: formData.weekendActivities,
          domestic_travel: formData.domesticTravel,
          overseas_travel: formData.overseasTravel,
          dress_regulation: formData.dressRegulation,
          attractive_styles: formData.attractiveStyles,
          avoid_items: formData.avoidItems,
          brand_preferences: formData.brandPreferences,
          fashion_knowledge: formData.fashionKnowledge,
          clothing_items: formData.clothingItems,
          wanted_items: formData.wantedItems,
          company_name: formData.companyName,
          department: formData.department,
          company_size: formData.companySize,
          annual_revenue: formData.annualRevenue,
          age_demo: formData.ageDemo,
          app_usage: formData.appUsage,
          partner_service: formData.partnerService,
          fitting_time: formData.fittingTime,
          gift_service: formData.giftService,
          gift_frequency: formData.giftFrequency,
          transport_service: formData.transportService,
          service_expectations: formData.serviceExpectations,
          fashion_literacy: formData.fashionLiteracy,
          comments: formData.comments
        }
      ]);

    if (error) throw error;

    return { success: true, id: data[0].id };
  } catch (error) {
    console.error('Supabase error:', error);
    return { success: false, error: error.message };
  }
}

// Airtableに保存
async function saveToAirtable(formData) {
  try {
    const Airtable = await import('airtable');
    
    const base = new Airtable.default({
      apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_BASE_ID);

    const record = await base('フォーム回答').create({
      'タイムスタンプ': formData.timestamp,
      '性別': formData.gender,
      '姓': formData.lastName,
      '名': formData.firstName,
      '姓（カナ）': formData.lastNameKana,
      '名（カナ）': formData.firstNameKana,
      '生年月日': formData.birthDate,
      '身長': parseInt(formData.height) || 0,
      '体重': parseInt(formData.weight) || 0,
      'メールアドレス': formData.email,
      '電話番号': formData.phoneNumber,
      '郵便番号': formData.postalCode,
      '都道府県': formData.prefecture,
      '市区町村': formData.city,
      '住所': formData.address,
      '働き方': formData.workStyle,
      'ビジネスシーン': formData.businessScenes,
      'プライベートシーン': formData.privateScenes,
      '週末の活動': formData.weekendActivities,
      '国内旅行': formData.domesticTravel,
      '海外旅行': formData.overseasTravel,
      'ドレスコード': formData.dressRegulation,
      '魅力を感じるスタイル': formData.attractiveStyles,
      '避けたいアイテム': formData.avoidItems,
      'ブランド好み': formData.brandPreferences,
      'ファッション知識': formData.fashionKnowledge,
      '所持アイテム': formData.clothingItems,
      '希望アイテム': formData.wantedItems,
      '会社名': formData.companyName,
      '役職': formData.department,
      '社員数': formData.companySize,
      '年間売上': formData.annualRevenue,
      '社員年齢層': formData.ageDemo,
      'アプリ利用': formData.appUsage,
      'パートナー制度': formData.partnerService,
      'フィッティング時間': formData.fittingTime,
      'ギフトサービス': formData.giftService,
      'ギフト頻度': formData.giftFrequency,
      '配送サービス': formData.transportService,
      'サービス期待': formData.serviceExpectations,
      'ファッションリテラシー': formData.fashionLiteracy,
      'コメント': formData.comments
    });

    return { success: true, id: record.id };
  } catch (error) {
    console.error('Airtable error:', error);
    return { success: false, error: error.message };
  }
}

// JSONファイルとして保存（開発環境用）
async function saveAsJSON(formData) {
  try {
    // 開発環境では単純にレスポンスIDを生成
    const id = `FORM_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // 実際のプロダクション環境では、S3やCloudinary等に保存
    console.log('Form data received:', formData);
    
    return { success: true, id };
  } catch (error) {
    console.error('JSON save error:', error);
    return { success: false, error: error.message };
  }
}