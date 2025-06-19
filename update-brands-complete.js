// Complete brand list update based on form.md
const brandSectionHTML = `
    <div class="brand-selection-grid">
        <!-- ハイエンド・ラグジュアリーブランド -->
        <div class="brand-category-header">ハイエンド・ラグジュアリーブランド</div>
        
        <!-- HERMÈS -->
        <div class="brand-selection-item" data-brand="HERMES">
            <div class="brand-logo-container" data-brand-initial="H">
                <img src="images/brand-hermes.jpg" alt="HERMÈS" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">HERMÈS</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="HERMES" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="HERMES" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_HERMES" value="">
        </div>
        
        <!-- LOUIS VUITTON -->
        <div class="brand-selection-item" data-brand="LOUIS_VUITTON">
            <div class="brand-logo-container" data-brand-initial="LV">
                <img src="images/brand-lv.jpg" alt="LOUIS VUITTON" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">LOUIS VUITTON</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="LOUIS_VUITTON" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="LOUIS_VUITTON" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_LOUIS_VUITTON" value="">
        </div>
        
        <!-- CHANEL -->
        <div class="brand-selection-item" data-brand="CHANEL">
            <div class="brand-logo-container" data-brand-initial="C">
                <img src="images/brand-chanel.jpg" alt="CHANEL" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">CHANEL</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="CHANEL" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="CHANEL" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_CHANEL" value="">
        </div>
        
        <!-- ラグジュアリーブランド（クラシック & エレガント） -->
        <div class="brand-category-header">ラグジュアリーブランド（クラシック & エレガント）</div>
        
        <!-- Dior -->
        <div class="brand-selection-item" data-brand="DIOR">
            <div class="brand-logo-container" data-brand-initial="D">
                <img src="images/brand-dior.jpg" alt="Dior" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Dior</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="DIOR" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="DIOR" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_DIOR" value="">
        </div>
        
        <!-- Saint Laurent -->
        <div class="brand-selection-item" data-brand="SAINT_LAURENT">
            <div class="brand-logo-container" data-brand-initial="SL">
                <img src="images/brand-sl.jpg" alt="Saint Laurent" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Saint Laurent</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="SAINT_LAURENT" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="SAINT_LAURENT" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_SAINT_LAURENT" value="">
        </div>
        
        <!-- Fendi -->
        <div class="brand-selection-item" data-brand="FENDI">
            <div class="brand-logo-container" data-brand-initial="F">
                <img src="images/brand-fendi.jpg" alt="Fendi" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Fendi</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="FENDI" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="FENDI" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_FENDI" value="">
        </div>
        
        <!-- Valentino -->
        <div class="brand-selection-item" data-brand="VALENTINO">
            <div class="brand-logo-container" data-brand-initial="V">
                <img src="images/brand-valentino.jpg" alt="Valentino" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Valentino</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="VALENTINO" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="VALENTINO" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_VALENTINO" value="">
        </div>
        
        <!-- ラグジュアリーブランド（ミニマル & モダン） -->
        <div class="brand-category-header">ラグジュアリーブランド（ミニマル & モダン）</div>
        
        <!-- Celine -->
        <div class="brand-selection-item" data-brand="CELINE">
            <div class="brand-logo-container" data-brand-initial="C">
                <img src="images/brand-celine.jpg" alt="Celine" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Celine</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="CELINE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="CELINE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_CELINE" value="">
        </div>
        
        <!-- Loewe -->
        <div class="brand-selection-item" data-brand="LOEWE">
            <div class="brand-logo-container" data-brand-initial="L">
                <img src="images/brand-loewe.jpg" alt="Loewe" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Loewe</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="LOEWE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="LOEWE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_LOEWE" value="">
        </div>
        
        <!-- Prada -->
        <div class="brand-selection-item" data-brand="PRADA">
            <div class="brand-logo-container" data-brand-initial="P">
                <img src="images/brand-prada.jpg" alt="Prada" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Prada</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="PRADA" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="PRADA" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_PRADA" value="">
        </div>
        
        <!-- Jil Sander -->
        <div class="brand-selection-item" data-brand="JIL_SANDER">
            <div class="brand-logo-container" data-brand-initial="JS">
                <img src="images/brand-jilsander.jpg" alt="Jil Sander" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Jil Sander</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="JIL_SANDER" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="JIL_SANDER" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_JIL_SANDER" value="">
        </div>
        
        <!-- Bottega Veneta -->
        <div class="brand-selection-item" data-brand="BOTTEGA_VENETA">
            <div class="brand-logo-container" data-brand-initial="BV">
                <img src="images/brand-bottega.jpg" alt="Bottega Veneta" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Bottega Veneta</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="BOTTEGA_VENETA" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="BOTTEGA_VENETA" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_BOTTEGA_VENETA" value="">
        </div>
        
        <!-- ラグジュアリーブランド（個性/華やか） -->
        <div class="brand-category-header">ラグジュアリーブランド（個性/華やか）</div>
        
        <!-- Gucci -->
        <div class="brand-selection-item" data-brand="GUCCI">
            <div class="brand-logo-container" data-brand-initial="G">
                <img src="images/brand-gucci.jpg" alt="Gucci" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Gucci</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="GUCCI" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="GUCCI" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_GUCCI" value="">
        </div>
        
        <!-- Balenciaga -->
        <div class="brand-selection-item" data-brand="BALENCIAGA">
            <div class="brand-logo-container" data-brand-initial="B">
                <img src="images/brand-balenciaga.jpg" alt="Balenciaga" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Balenciaga</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="BALENCIAGA" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="BALENCIAGA" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_BALENCIAGA" value="">
        </div>
        
        <!-- Versace -->
        <div class="brand-selection-item" data-brand="VERSACE">
            <div class="brand-logo-container" data-brand-initial="V">
                <img src="images/brand-versace.jpg" alt="Versace" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Versace</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="VERSACE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="VERSACE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_VERSACE" value="">
        </div>
        
        <!-- ラグジュアリーブランド（個性/アバンギャルド） -->
        <div class="brand-category-header">ラグジュアリーブランド（個性/アバンギャルド）</div>
        
        <!-- Comme des Garçons -->
        <div class="brand-selection-item" data-brand="CDG">
            <div class="brand-logo-container" data-brand-initial="CDG">
                <img src="images/brand-cdg.jpg" alt="Comme des Garçons" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Comme des Garçons</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="CDG" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="CDG" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_CDG" value="">
        </div>
        
        <!-- Yohji Yamamoto -->
        <div class="brand-selection-item" data-brand="YOHJI">
            <div class="brand-logo-container" data-brand-initial="YY">
                <img src="images/brand-yohji.jpg" alt="Yohji Yamamoto" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Yohji Yamamoto</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="YOHJI" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="YOHJI" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_YOHJI" value="">
        </div>
        
        <!-- Maison Margiela -->
        <div class="brand-selection-item" data-brand="MARGIELA">
            <div class="brand-logo-container" data-brand-initial="MM">
                <img src="images/brand-margiela.jpg" alt="Maison Margiela" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Maison Margiela</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="MARGIELA" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="MARGIELA" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_MARGIELA" value="">
        </div>
        
        <!-- Rick Owens -->
        <div class="brand-selection-item" data-brand="RICK_OWENS">
            <div class="brand-logo-container" data-brand-initial="RO">
                <img src="images/brand-rickowens.jpg" alt="Rick Owens" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Rick Owens</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="RICK_OWENS" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="RICK_OWENS" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_RICK_OWENS" value="">
        </div>
        
        <!-- ラグジュアリーブランド（スポーツ & カジュアル ラグジュアリー） -->
        <div class="brand-category-header">ラグジュアリーブランド（スポーツ & カジュアル ラグジュアリー）</div>
        
        <!-- Moncler -->
        <div class="brand-selection-item" data-brand="MONCLER">
            <div class="brand-logo-container" data-brand-initial="M">
                <img src="images/brand-moncler.jpg" alt="Moncler" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Moncler</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="MONCLER" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="MONCLER" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_MONCLER" value="">
        </div>
        
        <!-- Canada Goose -->
        <div class="brand-selection-item" data-brand="CANADA_GOOSE">
            <div class="brand-logo-container" data-brand-initial="CG">
                <img src="images/brand-canadagoose.jpg" alt="Canada Goose" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Canada Goose</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="CANADA_GOOSE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="CANADA_GOOSE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_CANADA_GOOSE" value="">
        </div>
        
        <!-- Loro Piana -->
        <div class="brand-selection-item" data-brand="LORO_PIANA">
            <div class="brand-logo-container" data-brand-initial="LP">
                <img src="images/brand-loropiana.jpg" alt="Loro Piana" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Loro Piana</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="LORO_PIANA" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="LORO_PIANA" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_LORO_PIANA" value="">
        </div>
        
        <!-- Brunello Cucinelli -->
        <div class="brand-selection-item" data-brand="BRUNELLO">
            <div class="brand-logo-container" data-brand-initial="BC">
                <img src="images/brand-brunello.jpg" alt="Brunello Cucinelli" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Brunello Cucinelli</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="BRUNELLO" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="BRUNELLO" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_BRUNELLO" value="">
        </div>
        
        <!-- ラグジュアリーブランド（ストリート・ハイプ） -->
        <div class="brand-category-header">ラグジュアリーブランド（ストリート・ハイプ）</div>
        
        <!-- Off-White -->
        <div class="brand-selection-item" data-brand="OFF_WHITE">
            <div class="brand-logo-container" data-brand-initial="OW">
                <img src="images/brand-offwhite.jpg" alt="Off-White™" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Off-White™</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="OFF_WHITE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="OFF_WHITE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_OFF_WHITE" value="">
        </div>
        
        <!-- Supreme -->
        <div class="brand-selection-item" data-brand="SUPREME">
            <div class="brand-logo-container" data-brand-initial="S">
                <img src="images/brand-supreme.jpg" alt="Supreme" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Supreme</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="SUPREME" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="SUPREME" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_SUPREME" value="">
        </div>
        
        <!-- Palm Angels -->
        <div class="brand-selection-item" data-brand="PALM_ANGELS">
            <div class="brand-logo-container" data-brand-initial="PA">
                <img src="images/brand-palmangels.jpg" alt="Palm Angels" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Palm Angels</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="PALM_ANGELS" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="PALM_ANGELS" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_PALM_ANGELS" value="">
        </div>
        
        <!-- AMIRI -->
        <div class="brand-selection-item" data-brand="AMIRI">
            <div class="brand-logo-container" data-brand-initial="A">
                <img src="images/brand-amiri.jpg" alt="AMIRI" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">AMIRI</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="AMIRI" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="AMIRI" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_AMIRI" value="">
        </div>
        
        <!-- ミドルブランド（セレクトショップ系） -->
        <div class="brand-category-header">ミドルブランド（セレクトショップ系）</div>
        
        <!-- UNITED ARROWS -->
        <div class="brand-selection-item" data-brand="UNITED_ARROWS">
            <div class="brand-logo-container" data-brand-initial="UA">
                <img src="images/brand-unitedarrows.jpg" alt="UNITED ARROWS" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">UNITED ARROWS</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="UNITED_ARROWS" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="UNITED_ARROWS" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_UNITED_ARROWS" value="">
        </div>
        
        <!-- BEAMS -->
        <div class="brand-selection-item" data-brand="BEAMS">
            <div class="brand-logo-container" data-brand-initial="B">
                <img src="images/brand-beams.jpg" alt="BEAMS" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">BEAMS</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="BEAMS" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="BEAMS" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_BEAMS" value="">
        </div>
        
        <!-- SHIPS -->
        <div class="brand-selection-item" data-brand="SHIPS">
            <div class="brand-logo-container" data-brand-initial="S">
                <img src="images/brand-ships.jpg" alt="SHIPS" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">SHIPS</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="SHIPS" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="SHIPS" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_SHIPS" value="">
        </div>
        
        <!-- TOMORROWLAND -->
        <div class="brand-selection-item" data-brand="TOMORROWLAND">
            <div class="brand-logo-container" data-brand-initial="TL">
                <img src="images/brand-tomorrowland.jpg" alt="TOMORROWLAND" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">TOMORROWLAND</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="TOMORROWLAND" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="TOMORROWLAND" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_TOMORROWLAND" value="">
        </div>
        
        <!-- nano・universe -->
        <div class="brand-selection-item" data-brand="NANO_UNIVERSE">
            <div class="brand-logo-container" data-brand-initial="NU">
                <img src="images/brand-nanouniverse.jpg" alt="nano・universe" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">nano・universe</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="NANO_UNIVERSE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="NANO_UNIVERSE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_NANO_UNIVERSE" value="">
        </div>
        
        <!-- STUDIOUS -->
        <div class="brand-selection-item" data-brand="STUDIOUS">
            <div class="brand-logo-container" data-brand-initial="ST">
                <img src="images/brand-studious.jpg" alt="STUDIOUS" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">STUDIOUS</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="STUDIOUS" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="STUDIOUS" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_STUDIOUS" value="">
        </div>
        
        <!-- ミドルブランド（フレンチ・ブリティッシュカジュアル系） -->
        <div class="brand-category-header">ミドルブランド（フレンチ・ブリティッシュカジュアル系）</div>
        
        <!-- agnes b. -->
        <div class="brand-selection-item" data-brand="AGNES_B">
            <div class="brand-logo-container" data-brand-initial="AB">
                <img src="images/brand-agnesb.jpg" alt="agnes b." onerror="this.style.display='none'">
            </div>
            <div class="brand-name">agnes b.</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="AGNES_B" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="AGNES_B" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_AGNES_B" value="">
        </div>
        
        <!-- LACOSTE -->
        <div class="brand-selection-item" data-brand="LACOSTE">
            <div class="brand-logo-container" data-brand-initial="L">
                <img src="images/brand-lacoste.jpg" alt="LACOSTE" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">LACOSTE</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="LACOSTE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="LACOSTE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_LACOSTE" value="">
        </div>
        
        <!-- FRED PERRY -->
        <div class="brand-selection-item" data-brand="FRED_PERRY">
            <div class="brand-logo-container" data-brand-initial="FP">
                <img src="images/brand-fredperry.jpg" alt="FRED PERRY" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">FRED PERRY</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="FRED_PERRY" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="FRED_PERRY" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_FRED_PERRY" value="">
        </div>
        
        <!-- アウトドア・スポーツファッション -->
        <div class="brand-category-header">アウトドア・スポーツファッション</div>
        
        <!-- THE NORTH FACE -->
        <div class="brand-selection-item" data-brand="NORTH_FACE">
            <div class="brand-logo-container" data-brand-initial="NF">
                <img src="images/brand-northface.jpg" alt="THE NORTH FACE" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">THE NORTH FACE</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="NORTH_FACE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="NORTH_FACE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_NORTH_FACE" value="">
        </div>
        
        <!-- patagonia -->
        <div class="brand-selection-item" data-brand="PATAGONIA">
            <div class="brand-logo-container" data-brand-initial="P">
                <img src="images/brand-patagonia.jpg" alt="patagonia" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">patagonia</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="PATAGONIA" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="PATAGONIA" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_PATAGONIA" value="">
        </div>
        
        <!-- ARC'TERYX -->
        <div class="brand-selection-item" data-brand="ARCTERYX">
            <div class="brand-logo-container" data-brand-initial="A">
                <img src="images/brand-arcteryx.jpg" alt="ARC'TERYX" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">ARC'TERYX</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="ARCTERYX" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="ARCTERYX" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_ARCTERYX" value="">
        </div>
        
        <!-- Snow Peak -->
        <div class="brand-selection-item" data-brand="SNOW_PEAK">
            <div class="brand-logo-container" data-brand-initial="SP">
                <img src="images/brand-snowpeak.jpg" alt="Snow Peak" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Snow Peak</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="SNOW_PEAK" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="SNOW_PEAK" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_SNOW_PEAK" value="">
        </div>
        
        <!-- adidas -->
        <div class="brand-selection-item" data-brand="ADIDAS">
            <div class="brand-logo-container" data-brand-initial="A">
                <img src="images/brand-adidas.jpg" alt="adidas" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">adidas</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="ADIDAS" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="ADIDAS" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_ADIDAS" value="">
        </div>
        
        <!-- Nike -->
        <div class="brand-selection-item" data-brand="NIKE">
            <div class="brand-logo-container" data-brand-initial="N">
                <img src="images/brand-nike.jpg" alt="Nike" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">Nike</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="NIKE" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="NIKE" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_NIKE" value="">
        </div>
        
        <!-- PUMA -->
        <div class="brand-selection-item" data-brand="PUMA">
            <div class="brand-logo-container" data-brand-initial="P">
                <img src="images/brand-puma.jpg" alt="PUMA" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">PUMA</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="PUMA" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="PUMA" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_PUMA" value="">
        </div>
        
        <!-- アフォーダブルブランド・ファストファッション -->
        <div class="brand-category-header">アフォーダブルブランド・ファストファッション</div>
        
        <!-- ZARA -->
        <div class="brand-selection-item" data-brand="ZARA">
            <div class="brand-logo-container" data-brand-initial="Z">
                <img src="images/brand-zara.jpg" alt="ZARA" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">ZARA</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="ZARA" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="ZARA" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_ZARA" value="">
        </div>
        
        <!-- UNIQLO -->
        <div class="brand-selection-item" data-brand="UNIQLO">
            <div class="brand-logo-container" data-brand-initial="U">
                <img src="images/brand-uniqlo.jpg" alt="UNIQLO" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">UNIQLO</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="UNIQLO" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="UNIQLO" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_UNIQLO" value="">
        </div>
        
        <!-- H&M -->
        <div class="brand-selection-item" data-brand="HM">
            <div class="brand-logo-container" data-brand-initial="HM">
                <img src="images/brand-hm.jpg" alt="H&M" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">H&M</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="HM" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="HM" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_HM" value="">
        </div>
        
        <!-- GU -->
        <div class="brand-selection-item" data-brand="GU">
            <div class="brand-logo-container" data-brand-initial="GU">
                <img src="images/brand-gu.jpg" alt="GU" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">GU</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="GU" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="GU" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_GU" value="">
        </div>
        
        <!-- GAP -->
        <div class="brand-selection-item" data-brand="GAP">
            <div class="brand-logo-container" data-brand-initial="G">
                <img src="images/brand-gap.jpg" alt="GAP" onerror="this.style.display='none'">
            </div>
            <div class="brand-name">GAP</div>
            <div class="brand-selection-buttons">
                <button type="button" class="brand-select-btn like" data-brand="GAP" data-preference="like">
                    <span class="btn-icon">○</span>
                </button>
                <button type="button" class="brand-select-btn dislike" data-brand="GAP" data-preference="dislike">
                    <span class="btn-icon">×</span>
                </button>
            </div>
            <input type="hidden" name="brandPreference_GAP" value="">
        </div>
    </div>
    
    <!-- その他のブランド入力欄 -->
    <div class="form-group" style="margin-top: 24px;">
        <label>その他の好きなブランド</label>
        <input type="text" name="otherFavoriteBrands" class="form-input" placeholder="上記以外の好きなブランドがあればご記入ください">
    </div>
    
    <div class="form-group">
        <label>苦手な（避けたい）ブランド</label>
        <input type="text" name="avoidBrands" class="form-input" placeholder="避けたいブランドがあれば具体的にご記入ください">
    </div>
`;

// Copy the HTML to clipboard or save it
console.log('Complete brand section HTML has been generated based on form.md');
console.log('Total brands: 48');
console.log('Categories: 11');

// Output file path
const outputPath = 'brand-section-complete.html';
console.log(`Please save the output to: ${outputPath}`);