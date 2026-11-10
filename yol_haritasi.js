/* Forumdaki yol haritasının ekip tarafı. Forum konuları (durum: sirada/yapiliyor/yapildi) bunlarla
   aynı panoda birleşir. Yalnız uygulamada gerçekten olan ya da kararı verilmiş işler yazılır;
   "sırada" bir söz değildir, sıra değişebilir (sayfada da böyle yazıyor).
   Kaynak: ~/Desktop/BC_Stage_Raporlar/Site_3.0_Son_Durum.md (2026-11-05).
   YAZMA: Hızlı şarkıdaki söz getirme yolu (Barış'a sorulmadan), eşitleme jetonu / sunucu ayrıntıları.
   d: sirada | yapiliyor | yapildi · alan: site_uret.py SEKMELER anahtarı ya da 'genel'
   surum: yalnız yapildi için (Yapıldı sütunu sürüme göre gruplanır) */
window.BC_YOL = {
  guncel: '2026-11-10',
  isler: [
    // ---- yapılıyor
    {d:'yapiliyor', alan:'genel', tr:'Mac için 3.0', en:'3.0 for Mac',
     ac_tr:'Mac App Store incelemesinde. iPad’de VIP aldıysan Mac’te aynı Apple hesabıyla yeniden ödemezsin.', ac_en:'In Mac App Store review. If you bought VIP on iPad, the same Apple account unlocks it on Mac at no extra cost.'},
    {d:'yapiliyor', alan:'genel', tr:'Android için 3.0', en:'3.0 for Android',
     ac_tr:'Google Play’e hazırlanıyor.', ac_en:'Getting ready for Google Play.'},
    {d:'yapiliyor', alan:'pano', tr:'3.0.1: Canlıyım ve BC Connect', en:'3.0.1: “I’m live” and BC Connect',
     ac_tr:'Sahneye çıkınca “Canlıyım”a bas, seni takip eden dinleyicilere haber gitsin. Dinleyiciler için ayrı uygulama: BC Connect. İkisi de App Store incelemesinde.', ac_en:'Tap “I’m live” when you go on stage and your followers get notified. A separate app for listeners: BC Connect. Both are in App Store review.'},
    {d:'yapiliyor', alan:'duzenlemeler', tr:'Android: düzenleme hücrelerinin üstündeki çizgiler', en:'Android: lines above arrangement cells',
     ac_tr:'Bildirilen hata. Çizgiler Android’de görünmüyor.', ac_en:'Reported bug: the lines don’t show on Android.'},
    {d:'yapiliyor', alan:'genel', tr:'iPad bölünmüş ekranda üst çubuk', en:'Top bar in iPad Split View',
     ac_tr:'Dar pencerede simgeler üst üste binebiliyor.', ac_en:'In a narrow window the icons can overlap.'},
    {d:'yapiliyor', alan:'genel', tr:'Mac: iCloud yedeği “yükleme sürüyor”da kalıyor', en:'Mac: iCloud backup stuck on “uploading”',
     ac_tr:'Bu arada Dropbox yedeği sağlam çalışıyor.', ac_en:'Dropbox backup works fine in the meantime.'},
    {d:'yapiliyor', alan:'pano', tr:'My Gear: ara sıra “kaydedilemedi”', en:'My Gear: occasional “couldn’t save”',
     ac_tr:'Sunucu güncellemesinden sonra yeniden denenecek.', ac_en:'Being re-tested after a server update.'},

    // ---- sırada
    {d:'sirada', alan:'duzenlemeler', tr:'Noktalı nota ve triole', en:'Dotted notes and triplets'},
    {d:'sirada', alan:'karaoke', tr:'Orijinal şarkıdan kelime kelime söz zamanlaması', en:'Word-by-word lyric timing from the original song'},
    {d:'sirada', alan:'akorlar', tr:'Akor değişim anını sesten iyileştirme', en:'Better chord-change timing from the audio',
     ac_tr:'Akor tam değiştiği anda görünsün.', ac_en:'Chords appear exactly when they change.'},
    {d:'sirada', alan:'genel', tr:'Looper geri dönüyor', en:'Looper comes back',
     ac_tr:'3.0’da gizli, sonraki sürümde.', ac_en:'Hidden in 3.0, back in the next version.'},
    {d:'sirada', alan:'genel', tr:'Grup bağlantısı: Apple cihazlar arası doğrudan bağlantı ve Bluetooth yedeği', en:'Group link: direct Apple-to-Apple connection and a Bluetooth fallback',
     ac_tr:'Telsiz gecikmesi ölçülerek seçilecek.', ac_en:'Chosen after measuring talkback latency.'},
    {d:'sirada', alan:'genel', tr:'Uygulama içinde “Sahne için modem önerisi”', en:'In-app “Router tips for the stage”'},

    // ---- yapıldı · 3.0
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'BC Stage 3.0 yayında', en:'BC Stage 3.0 is out',
     ac_tr:'App Store’da, iPhone ve iPad için.', ac_en:'On the App Store, for iPhone and iPad.'},
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'Yeni görünüm', en:'New look',
     ac_tr:'Eski görünüm “BC Stage 2.0” seçeneği olarak duruyor.', ac_en:'The old look stays available as “BC Stage 2.0”.'},
    {d:'yapildi', surum:'3.0', alan:'sarkilar', tr:'Şarkı sayfası 3.0', en:'Song page 3.0',
     ac_tr:'Tek Araçlar menüsü (ilk madde Tam ekran), sanatçı resminde metronom, bölüm stilleri.', ac_en:'One Tools menu (Full screen first), metronome in the artist photo, section styles.'},
    {d:'yapildi', surum:'3.0', alan:'sarkilar', tr:'Sıradaki şarkı önerileri', en:'Up-next suggestions',
     ac_tr:'Vitrinde, playlist sonunda ve şarkı menüsünde.', ac_en:'On the home shelf, at the end of a playlist and in the song menu.'},
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'Telsiz (talkback) baştan sağlam', en:'Talkback, rebuilt',
     ac_tr:'Bas-konuş, ilk basışta gecikme yok, kelime sonları kesilmiyor; Mac ↔ Android iki yönde.', ac_en:'Push to talk, no delay on the first press, word endings aren’t cut; Mac ↔ Android both ways.'},
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'“Yalnız yakın ses” filtresi', en:'“Close voice only” filter',
     ac_tr:'Kulağa yalnız mikrofona yakından konuşanı geçirir. In-ear ile çalan gruplar için.', ac_en:'Only the person speaking close to the mic reaches your ears. For in-ear bands.'},
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'Konuşma izni', en:'Talk permission',
     ac_tr:'Üyeler dinler; kimin konuşacağını lider seçer.', ac_en:'Members listen; the leader picks who can talk.'},
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'Modemsiz grup', en:'Band without a router',
     ac_tr:'Android lider internetsiz yerel Wi-Fi açıp QR gösterir.', ac_en:'An Android leader opens an offline local Wi-Fi and shows a QR code.'},
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'Pedal grupları', en:'Pedal groups',
     ac_tr:'Aynı tuşlar gruba göre başka iş yapar; grup bir ekrana bağlanabilir. Üst çubukta “PEDAL · GRUP” rozeti.', ac_en:'The same buttons do different jobs per group; a group can be tied to a screen. “PEDAL · GROUP” badge in the top bar.'},
    {d:'yapildi', surum:'3.0', alan:'duzenlemeler', tr:'Düzenlemede pedal', en:'Pedal in arrangements',
     ac_tr:'Sonraki/önceki ölçü ve bölüm, kaydırma, kendi kaydırma adımı.', ac_en:'Next/previous bar and section, scrolling, its own scroll step.'},
    {d:'yapildi', surum:'3.0', alan:'duzenlemeler', tr:'Nota süresi', en:'Note lengths',
     ac_tr:'Vuruş başına birlikten onaltılığa, akor ve es için.', ac_en:'Per beat, whole to sixteenth, for chords and rests.'},
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'Cihazlarım arasında eşitle', en:'Sync between my devices',
     ac_tr:'Bulutsuz, aynı Wi-Fi’da Mac ↔ iPad ↔ Android. Yalnız değişen taşınır, silme taşınmaz.', ac_en:'No cloud, same Wi-Fi, Mac ↔ iPad ↔ Android. Only changes travel; deletions don’t.'},
    {d:'yapildi', surum:'3.0', alan:'genel', tr:'Kopyaları bul ve birleştir', en:'Find and merge duplicates',
     ac_tr:'Önce ne bulduğunu gösterir, onay ister, önce yedek alır.', ac_en:'Shows what it found, asks first, backs up first.'},
    {d:'yapildi', surum:'3.0', alan:'backing', tr:'Backing Track: zamanlı söz ve sade görünüm', en:'Backing Track: timed lyrics and a clean view',
     ac_tr:'Satır satır söz, dokunarak eşleme; bölümler + dalga + söz; iki parmakla yakınlaştırma.', ac_en:'Line-by-line lyrics, tap to sync; sections + waveform + lyrics; pinch to zoom.'},
    {d:'yapildi', surum:'3.0', alan:'backing', tr:'Backing Track: YouTube klasörü', en:'Backing Track: YouTube folder',
     ac_tr:'Şarkıyı yaz, vokalsiz backing gelsin; uygulama içinde, zamanlı sözle.', ac_en:'Type a song, get a vocal-free backing; plays in the app with timed lyrics.'},
    {d:'yapildi', surum:'3.0', alan:'playlistler', tr:'Akıllı playlist', en:'Smart playlists'},
    {d:'yapildi', surum:'3.0', alan:'karaoke', tr:'Karaoke’de Ton ve Hız', en:'Key and Speed in Karaoke'},
    {d:'yapildi', surum:'3.0', alan:'pano', tr:'Pano “Afiş” düzeni', en:'Board “Poster” layout',
     ac_tr:'Sıradaki konser bilet görünümünde.', ac_en:'Your next gig, shown as a ticket.'}
  ]
};
