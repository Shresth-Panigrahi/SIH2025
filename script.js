 /* ----------------- Preferences & i18n (expanded languages) ----------------- */
    const themeToggle = document.getElementById('themeToggle');
    const langSel = document.getElementById('lang');
    const textSizeSel = document.getElementById('textSize');
    const dataSaverBtn = document.getElementById('dataSaver');

    function applyTheme(t){ document.body.classList.toggle('dark', t==='dark'); themeToggle.setAttribute('aria-pressed', t==='dark'); localStorage.setItem('theme', t); }
    function applyLang(l){ i18nApply(l); localStorage.setItem('lang', l); }
    function applySize(px){ document.body.style.fontSize = px+'px'; localStorage.setItem('textSize', px); }
    function applyDataSaver(on){ document.querySelectorAll('.carousel-slide img, .svg-wrap svg').forEach(el=>el.style.display = on ? 'none' : 'block'); dataSaverBtn.setAttribute('aria-pressed', on); localStorage.setItem('dataSaver', on ? '1':'0'); }

    themeToggle.onclick=()=>applyTheme(document.body.classList.contains('dark')?'light':'dark');
    langSel.onchange=e=>applyLang(e.target.value);
    textSizeSel.onchange=e=>applySize(e.target.value);
    dataSaverBtn.onclick=()=>applyDataSaver(!(localStorage.getItem('dataSaver')==='1'));

    applyTheme(localStorage.getItem('theme')|| (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
    applyLang(localStorage.getItem('lang')||'en');
    applySize(localStorage.getItem('textSize')||16);
    const savedSaver = localStorage.getItem('dataSaver')==='1'; applyDataSaver(savedSaver);

    const i18n = {
      en:{
        tag:"Community Health",
        hero_title:"Medi Mitr — Rural Health Assistant",
        hero_sub:"Simple, fast and offline-friendly guidance for villages — with a built-in chatbot, reminders, and SOS alerts.",
        about_title:"About This Project",
        about_p1:"Gramin Sehat is designed for rural communities where internet can be slow and smartphones are shared. It keeps the interface simple, supports many Indian languages, and stores important tips on your device so you can read them even with poor connectivity.",
        about_p2:"The built-in chatbot answers common health questions and can hand off to a human helper if needed. You can set medicine reminders, doctor-visit schedules, and quick SOS alerts for emergencies.",
        kpi1:"Works with slow internet",
        kpi2:"Multiple Indian languages",
        kpi3:"Core info cached",
        kpi4:"No account required",
        abt1:"Images are vector (SVG) and data saver mode reduces bandwidth.",
        abt2:"Comfortable reading in sunlight or at night.",
        abt3:"Set medicine & visit reminders; on-page alerts if notifications are blocked.",
        abt4:"Multiple Indian language support for UI and assistant.",
        abt5:"Key info can be cached; chatbot requires internet.",
        feat_title:"Key Features for Rural Users",
        gallery_title: "Health Awareness Gallery"
      },
      hi:{
        tag:"समुदाय स्वास्थ्य",
        hero_title:"मेडी मित्र — ग्राम स्वास्थ्य सहायक",
        hero_sub:"गाँवों के लिए सरल और तेज़ मार्गदर्शन — चैटबॉट, रिमाइंडर और SOS अलर्ट के साथ।",
        about_title:"परियोजना के बारे में",
        about_p1:"ग्रामीण क्षेत्रों के लिए बनाया गया, जहाँ इंटरनेट धीमा हो सकता है और फोन साझा होते हैं। इंटरफ़ेस सरल है और मुख्य जानकारी आपके फ़ोन में सहेज़ी जाती है।",
        about_p2:"अंतर्निहित चैटबॉट सामान्य स्वास्थ्य प्रश्नों का उत्तर देता है और ज़रूरत पर मानव मदद से जोड़ सकता है।",
        kpi1:"धीमे इंटरनेट पर भी काम करता है",
        kpi2:"कई भारतीय भाषाएँ",
        kpi3:"मुख्य जानकारी सहेजी जाती है",
        kpi4:"खाता आवश्यक नहीं",
        abt1:"चित्र SVG हैं और डेटा-सेवर मोड डाटा बचाता है।",
        abt2:"धूप/रात में पढ़ने के लिए आरामदायक।",
        abt3:"दवा व विजिट रिमाइंडर; नोटिफिकेशन बंद होने पर पेज अलर्ट।",
        abt4:"UI और सहायक के लिए बहुभाषी समर्थन।",
        abt5:"कुंजी जानकारी कैश की जा सकती है; चैटबॉट के लिए इंटरनेट चाहिए।",
        feat_title:"ग्रामीण उपयोगकर्ताओं के लिए मुख्य सुविधाएँ",
        gallery_title: "स्वास्थ्य जागरूकता पोस्टर"
      },
      bn:{
        hero_title:"মেডি মিত্র — গ্রামীণ স্বাস্থ্য সহায়ক",
        hero_sub:"গ্রামাঞ্চলের জন্য সহজ, দ্রুত এবং অফলাইন-বন্ধুভাবাপন্ন নির্দেশনা।",
        about_title:"প্রকল্প সম্পর্কে",
        about_p1:"গ্রামীণ সম্প্রদায়ের জন্য ডিজাইন করা, যেখানে ইন্টারনেট ধীর হতে পারে এবং স্মার্টফোন শেয়ার করা হয়।",
        about_p2:"অ্যাপটি গুরুত্বপূর্ণ টিপস ডিভাইসে সঞ্চয় করে রাখে।",
        feat_title:"গ্রামীণ ব্যবহারকারীদের জন্য বৈশিষ্ট্য"
      },
      ta:{ hero_title:"விராலூர் வணக்கம்", hero_sub:"...", about_title:"திட்டம்" },
      te:{ hero_title:"గ్రామీణ ఆరోగ్యం", hero_sub:"...", about_title:"ప్రాజెక్ట్" },
      mr:{ hero_title:"ग्रामीण आरोग्य", hero_sub:"...", about_title:"प्रकल्प" }
    };

    function i18nApply(lang){
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
        else if(i18n.en[key]) el.textContent = i18n.en[key];
      });
      langSel.value = lang;
    }

    // ---------- Schedule (unchanged) ----------
    const scheduleForm = document.getElementById('scheduleForm');
    const scheduleTable = document.querySelector('#scheduleTable tbody');
    const notifyBtn = document.getElementById('notifyBtn');
    let alarms = {}; // id -> timeout
    function loadSchedule(){
      const list = JSON.parse(localStorage.getItem('schedule')||'[]');
      scheduleTable.innerHTML='';
      list.sort((a,b)=>a.when - b.when).forEach(addRow);
    }
    function saveSchedule(list){ localStorage.setItem('schedule', JSON.stringify(list)); }
    function addRow(item){
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${new Date(item.when).toLocaleString()}</td>
                      <td>${item.title}</td>
                      <td>${item.notes||''}</td>
                      <td><button class="btn danger" data-id="${item.id}">Delete</button></td>`;
      scheduleTable.appendChild(tr);
      tr.querySelector('button').onclick = ()=>{
        const list = JSON.parse(localStorage.getItem('schedule')||'[]').filter(x=>x.id!==item.id);
        saveSchedule(list); clearAlarm(item.id); loadSchedule();
      };
      scheduleAlarm(item);
    }
    function scheduleAlarm(item){
      clearAlarm(item.id);
      const delta = item.when - Date.now();
      if(delta>0 && delta < 1000*60*60*24*7){ // schedule up to 7 days ahead in-page
        alarms[item.id] = setTimeout(()=>alertOrNotify(`⏰ Reminder: ${item.title}`), delta);
      }
    }
    function clearAlarm(id){ if(alarms[id]){clearTimeout(alarms[id]); delete alarms[id];} }
    scheduleForm.onsubmit = (e)=>{
      e.preventDefault();
      const title = document.getElementById('sch_title').value.trim();
      const date = document.getElementById('sch_date').value;
      const time = document.getElementById('sch_time').value;
      const notes = document.getElementById('sch_notes').value.trim();
      if(!title || !date || !time) return;
      const when = new Date(`${date}T${time}:00`).getTime();
      const item = {id: crypto.randomUUID(), title, notes, when};
      const list = JSON.parse(localStorage.getItem('schedule')||'[]'); list.push(item);
      saveSchedule(list); loadSchedule(); scheduleForm.reset();
    };
    notifyBtn.onclick = async ()=>{
      try{ const perm = await Notification.requestPermission(); alertOrNotify(perm==='granted' ? '✅ Notifications enabled' : 'We will show on-page alerts.'); }
      catch{ alert('We will show on-page alerts.'); }
    };
    function alertOrNotify(msg){
      if('Notification' in window && Notification.permission==='granted') new Notification('Gramin Sehat', { body: msg });
      else window.alert(msg);
    }
    loadSchedule();

    // ---------- Quick Alert ----------
    const alertBtn = document.getElementById('alert_start');
    const alertCancel = document.getElementById('alert_cancel');
    const alertStatus = document.getElementById('alert_status');
    let alertTimer = null;
    alertBtn.onclick = ()=>{
      const m = parseInt(document.getElementById('alert_min').value||'5',10);
      const msg = (document.getElementById('alert_msg').value||'Alert');
      if(alertTimer) clearTimeout(alertTimer);
      alertTimer = setTimeout(()=>alertOrNotify('🔔 '+msg), m*60*1000);
      alertStatus.textContent = `Alert set for ${m} minute(s) from now.`;
    };
    alertCancel.onclick = ()=>{ if(alertTimer){ clearTimeout(alertTimer); alertTimer=null; alertStatus.textContent='Alert cancelled.'; } };

    // ---------- Feedback ----------
    const starsWrap = document.getElementById('stars');
    let starValue = 0;
    for(let i=1;i<=5;i++){
      const b=document.createElement('button');
      b.type='button'; b.className='btn ghost'; b.textContent='★'; b.setAttribute('aria-checked','false'); b.onclick=()=>{
        starValue=i; [...starsWrap.children].forEach((c,idx)=>{ c.style.background= idx<i?'var(--accent)':'transparent'; c.style.color= idx<i?'#07210f':'inherit'; c.setAttribute('aria-checked', idx<i?'true':'false'); });
      };
      starsWrap.appendChild(b);
    }
    const fbForm = document.getElementById('feedbackForm');
    const fbList = document.getElementById('feedbackList');
    function loadFeedback(){
      const list = JSON.parse(localStorage.getItem('feedback')||'[]');
      fbList.innerHTML='';
      list.slice(-6).reverse().forEach(f=>{
        const div=document.createElement('div'); div.className='item';
        div.innerHTML=`<span class="pill">${'★'.repeat(f.stars||0)}</span>
                       <div><b>${f.place||'Anon'}</b><div class="muted">${f.msg}</div></div>`;
        fbList.appendChild(div);
      });
    }
    fbForm.onsubmit=(e)=>{
      e.preventDefault();
      const entry = {
        name: document.getElementById('fb_name').value.trim(),
        place: document.getElementById('fb_place').value.trim(),
        stars: starValue,
        msg: document.getElementById('fb_msg').value.trim(),
        ts: Date.now()
      };
      const list = JSON.parse(localStorage.getItem('feedback')||'[]'); list.push(entry);
      localStorage.setItem('feedback', JSON.stringify(list));
      fbForm.reset(); starValue=0; [...starsWrap.children].forEach(c=>{c.style.background='transparent'; c.style.color='inherit'; c.setAttribute('aria-checked','false');});
      loadFeedback(); alert('Thanks for your feedback!');
    };
    loadFeedback();

    // ---------- Chatbot (frontend only; backend hook below) ----------
    const openChat = document.getElementById('openChat');
    const chatPanel = document.getElementById('chatPanel');
    const closeChat = document.getElementById('closeChat');
    const chatBody = document.getElementById('chatBody');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const handOff = document.getElementById('handOff');
    function showChat(open=true){ chatPanel.style.display = open?'flex':'none'; chatPanel.setAttribute('aria-hidden', !open); if(open) chatInput.focus(); }
    openChat.onclick = ()=> showChat(true);
    closeChat.onclick = ()=> showChat(false);
    handOff.onclick = ()=> { window.location.href='tel:+910000000000'; };
    function addBubble(text, who='bot'){
      const div=document.createElement('div'); div.className='bubble '+who; div.textContent=text; chatBody.appendChild(div); chatBody.scrollTop=chatBody.scrollHeight;
    }
    addBubble('Namaste! Ask me about health tips and schedules.','bot');
    chatForm.onsubmit= async (e)=>{
      e.preventDefault();
      const msg = chatInput.value.trim(); if(!msg) return;
      addBubble(msg,'user'); chatInput.value='';
      addBubble('Thinking…','bot');
      try{
        // IMPORTANT: replace URL with your backend endpoint when ready
        const res = await fetch('http://localhost:5000/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg})});
        const data = await res.json();
        chatBody.lastChild.textContent = data.reply || 'Sorry, no answer.';
      }catch(err){
        chatBody.lastChild.textContent = '⚠️ Network error. Try again later.';
      }
    };

    // ---------- Tips caching ----------
    const tipsKey='healthTips';
    if(!localStorage.getItem(tipsKey)){
      localStorage.setItem(tipsKey, JSON.stringify([
        'Drink safe water: boil for 3–5 minutes.',
        'Wash hands with soap for 20 seconds.',
        'ORS: 1 litre clean water + ORS pack; sip often.',
        'Keep medicine list and allergies with you.',
      ]));
    }

    /* ------------------- Carousel logic ------------------- */
    (function setupCarousel(){
      const track = document.getElementById('carouselTrack');
      const slides = Array.from(track.children);
      const prev = document.getElementById('prevSlide');
      const next = document.getElementById('nextSlide');
      const indicatorsWrap = document.getElementById('carouselIndicators');
      let current = 0;

      slides.forEach((s, i) => {
        const dot = document.createElement('button');
        dot.className = 'indicator' + (i===0 ? ' active' : '');
        dot.onclick = ()=> goTo(i);
        indicatorsWrap.appendChild(dot);
      });

      function update(){
        track.style.transform = `translateX(-${current*100}%)`;
        Array.from(indicatorsWrap.children).forEach((d, i)=> d.classList.toggle('active', i===current));
      }
      function goTo(i){ current = (i+slides.length) % slides.length; update(); }
      prev.onclick = ()=> goTo(current-1);
      next.onclick = ()=> goTo(current+1);
      // keyboard support
      document.addEventListener('keydown', (e)=> { if(e.key==='ArrowLeft') prev.click(); if(e.key==='ArrowRight') next.click(); });
    })();

    /* ------------------- Assistant popup & options ------------------- */
    const openAssist = document.getElementById('openAssist');
    const assistantPopup = document.getElementById('assistantPopup');
    openAssist.addEventListener('click', ()=> {
      assistantPopup.style.display = assistantPopup.style.display === 'block' ? 'none' : 'block';
      assistantPopup.setAttribute('aria-hidden', assistantPopup.style.display !== 'block');
    });
    // close assistant when clicking outside
    document.addEventListener('click',(e)=>{
      if(!assistantPopup.contains(e.target) && e.target !== openAssist) {
        assistantPopup.style.display = 'none';
        assistantPopup.setAttribute('aria-hidden', 'true');
      }
    });

    // Options
    document.getElementById('optGuide').onclick = ()=> startWalkthrough();
    document.getElementById('optChat').onclick = ()=> { assistantPopup.style.display='none'; showChat(true); };
    document.getElementById('optVoice').onclick = ()=> { assistantPopup.style.display='none'; startVoiceAssistant(); };

    /* ------------------- Walkthrough (simple, library-free) ------------------- */
    const overlay = document.getElementById('overlay');
    const spotlight = document.getElementById('spotlight');
    const walkBubble = document.getElementById('walkBubble');

    const steps = [
      { el: '.tag', title: 'Welcome', text: 'This is Gramin Sehat — your village health helper.' },
      { el: '.kpi', title: 'Key Benefits', text: 'Low bandwidth, multilingual, offline basics.' },
      { el: 'a[href="#features"]', title: 'Features', text: 'Explore features like reminders, awareness, and chatbot.' },
      { el: '#schedule', title: 'Schedule', text: 'Add reminders for medicines and appointments.' },
      { el: '#feedback', title: 'Feedback', text: 'Tell us what you liked or what to improve.' },
      { el: '.fab', title: 'Chatbot', text: 'Open the chatbot to ask health questions.' }
    ];

    let stepIndex = 0;
    function startWalkthrough(){
      overlay.style.display='block'; overlay.style.pointerEvents='auto';
      document.body.style.overflow='hidden';
      stepIndex = 0;
      showStep();
    }
    function endWalkthrough(){
      overlay.style.display='none';
      spotlight.style.display='none';
      walkBubble.style.display='none';
      document.body.style.overflow='';
    }
    function showStep(){
      if(stepIndex >= steps.length){ endWalkthrough(); return; }
      const s = steps[stepIndex];
      const target = document.querySelector(s.el);
      if(!target){ stepIndex++; showStep(); return; }
      const r = target.getBoundingClientRect();
      const padding = 12;
      spotlight.style.display='block';
      spotlight.style.left = (r.left - padding) + 'px';
      spotlight.style.top = (r.top - padding) + 'px';
      spotlight.style.width = (r.width + padding*2) + 'px';
      spotlight.style.height = (r.height + padding*2) + 'px';
      // show bubble near target (try bottom right)
      walkBubble.style.display='block';
      walkBubble.style.left = Math.min(window.innerWidth - 340, r.right + 16) + 'px';
      walkBubble.style.top = Math.max(20, r.top) + 'px';
      walkBubble.innerHTML = `<strong>${s.title}</strong><div style="margin-top:8px">${s.text}</div>
                              <div style="display:flex;gap:8px;margin-top:10px;justify-content:flex-end">
                                <button id="walkPrev" class="btn ghost">Prev</button>
                                <button id="walkNext" class="btn">Next</button>
                                <button id="walkEnd" class="btn ghost">End</button>
                              </div>`;
      document.getElementById('walkPrev').onclick = ()=> { stepIndex = Math.max(0, stepIndex-1); showStep(); };
      document.getElementById('walkNext').onclick = ()=> { stepIndex++; showStep(); };
      document.getElementById('walkEnd').onclick = ()=> endWalkthrough();
      overlay.onclick = endWalkthrough;
    }

    /* ------------------- Voice Assistant (recognition + TTS) ------------------- */
    function speak(text, lang='en-IN'){
      try{
        const ut = new SpeechSynthesisUtterance(text);
        ut.lang = lang;
        speechSynthesis.cancel();
        speechSynthesis.speak(ut);
      }catch(e){ console.warn('TTS not available', e); }
    }

    function startVoiceAssistant(){
      // picks language based on current UI selection
      const uiLang = (localStorage.getItem('lang') || 'en');
      const recogLang = uiLang === 'hi' ? 'hi-IN' : (uiLang === 'bn' ? 'bn-BD' : 'en-IN');
      if(!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)){
        speak('Speech recognition is not supported on this device.', recogLang);
        alert('Voice recognition not supported in this browser.');
        return;
      }
      const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new Recognition();
      recognition.lang = recogLang;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      speak(uiLang==='hi' ? 'बोलें, मैं सुन रहा हूँ।' : 'Speak now, I am listening.', recogLang);
      recognition.start();
      recognition.onresult = (ev)=>{
        const phrase = ev.results[0][0].transcript.toLowerCase();
        // simple commands
        if(phrase.includes('reminder') || phrase.includes('रिमाइंड') || phrase.includes('रिमाइंडर')) {
          document.getElementById('schedule').scrollIntoView({behavior:'smooth'});
          speak(uiLang==='hi' ? 'आपको रिमाइंडर अनुभाग दिखा रहा हूँ।' : 'Opening the reminders section.', recogLang);
        } else if(phrase.includes('chat') || phrase.includes('चैट')) {
          showChat(true); speak(uiLang==='hi' ? 'चैट खोल रहा हूँ।' : 'Opening chat now.', recogLang);
        } else if(phrase.includes('features') || phrase.includes('विशेष')) {
          document.getElementById('features').scrollIntoView({behavior:'smooth'}); speak(uiLang==='hi' ? 'विशेषताएँ यहाँ हैं।' : 'Showing features.', recogLang);
        } else {
          // fallback
          speak(uiLang==='hi' ? 'माफ़ कीजिये, समझ नहीं पाया। कृपया दोहराएँ।' : 'Sorry, I did not understand. Please try again.', recogLang);
        }
      };
      recognition.onerror = (err) => { console.warn('Voice error', err); speak('Voice recognition error.', recogLang); };
    }

    /* ------------------- Multilingual UI switching ------------------- */
    // on initial load, set language from localStorage
    (function initLang(){
      const saved = localStorage.getItem('lang') || 'en';
      i18nApply(saved);
    })();
    langSel.addEventListener('change', (e)=> {
      const chosen = e.target.value;
      applyLang(chosen);
      // speak a short confirmation
      const confirm = chosen === 'hi' ? 'भाषा हिंदी चुनी गई' : chosen === 'bn' ? 'ভাষা বাংলা' : 'Language set';
      speak(confirm, chosen==='hi' ? 'hi-IN' : 'en-IN');
    });

    /* ------------------- Small helper: close assistant on escape ------------------- */
    document.addEventListener('keydown', (e)=> {
      if(e.key === 'Escape') { document.getElementById('assistantPopup').style.display='none'; assistantPopup.setAttribute('aria-hidden','true'); endWalkthrough(); showChat(false); }
    });
    // Toggle Assistant Popup
    function toggleAssistant() {
    const popup = document.getElementById("assistant-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
    }

    // Close Assistant
    function closeAssistant() {
    document.getElementById("assistant-popup").style.display = "none";
    }

    // Scroll to Schedule Section
    function scrollToSchedule() {
    document.querySelector(".schedule").scrollIntoView({ behavior: "smooth" });
    closeAssistant();
    }

    // Scroll to Feedback Section
    function scrollToFeedback() {
    document.querySelector(".feedback").scrollIntoView({ behavior: "smooth" });
    closeAssistant();
    }

    // Show Health Alerts
    function showAlerts() {
    alert("🚨 Free Vaccination Camp on 10th September at Rural Health Center.\n💊 Free Checkups on 15th September.\n👩‍⚕️ Helpline: 1800-123-456");
    }

    // Placeholder Chatbot
    function startChat() {
    alert("💬 AI Chatbot integration coming soon!");
    }

    // Change Language
    function changeLanguage() {
    const lang = document.getElementById("language-selector").value;
    const greeting = document.getElementById("assistant-greeting");
    const translations = {
        en: "Hi! How can I help you today?",
        hi: "नमस्ते! मैं आपकी कैसे मदद कर सकती हूँ?",
        bn: "হ্যালো! আমি কীভাবে আপনাকে সাহায্য করতে পারি?",
        ta: "வணக்கம்! நான் உங்களுக்கு எப்படி உதவலாம்?",
        te: "హలో! నేను మీకు ఎలా సహాయపడగలను?",
        mr: "नमस्कार! मी तुम्हाला कशी मदत करू शकते?"
    };
    greeting.textContent = translations[lang] || translations.en;
    }
    // Show FAQs in an alert (you can later make a modal if needed)
function showFAQ() {
  alert(
    "📌 Frequently Asked Questions:\n\n" +
    "1️⃣ How do I book an appointment?\n" +
    "   → Go to the Book Appointment section.\n\n" +
    "2️⃣ How do I give feedback?\n" +
    "   → Scroll to the Feedback section.\n\n" +
    "3️⃣ How can I contact support?\n" +
    "   → Use the Contact Us button or email us at support.medimitra@gmail.com"
  );
}
function scrollToSchedule() {
  document.querySelector(".schedule").scrollIntoView({ behavior: "smooth" });
}

function scrollToFeedback() {
  document.querySelector(".feedback").scrollIntoView({ behavior: "smooth" });
}

function showAlerts() {
  alert("🚨 Free Vaccination Camp on 10th September at Rural Health Center.\n💊 Free Checkups on 15th September.\n👩‍⚕️ Helpline: 1800-123-456");
}

function startChat() {
  document.getElementById("openChat").click();
}