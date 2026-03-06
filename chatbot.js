/* =====================================================
   EXPLORE EASY TOURS & TRAVELS — AI Sales Chatbot
   Persona: Arjun | Senior Travel Consultant
   ===================================================== */

(function () {
    'use strict';

    /* ── KNOWLEDGE BASE ── */
    const BOT = {
        name: 'Arjun',
        title: 'Senior Travel Consultant',
        avatar: '👨‍💼',
    };

    const QUICK_REPLIES_INITIAL = [
        { label: '🌍 Browse Packages', value: 'show me your packages' },
        { label: '✈️ Book a Flight', value: 'I want to book a flight' },
        { label: '💑 Honeymoon Trip', value: 'honeymoon packages' },
        { label: '📞 Talk to an Agent', value: 'contact agent' },
    ];

    // Keyword → response map (order matters — first match wins)
    const RESPONSES = [
        {
            keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste'],
            reply: `Namaste! 🙏 Welcome to **Explore Easy Tours & Travels**!\n\nI'm Arjun, your personal travel consultant. We've been crafting dream journeys since 2009 — over **15,000 happy travellers** trust us!\n\nHow can I help you plan your perfect trip today? 😊`,
            chips: QUICK_REPLIES_INITIAL,
        },
        {
            keys: ['package', 'tour', 'trip', 'holiday', 'vacation', 'travel'],
            reply: `We have an incredible lineup of packages! 🌟\n\n🏛 **Tamil Nadu Heritage** – from ₹8,999\n🏖 **Maldives Escape** – from ₹45,999\n🗼 **Europe Grand Tour** – from ₹1,25,000\n🐪 **Dubai & Abu Dhabi** – from ₹38,999\n🌿 **Kerala Backwaters** – from ₹12,500\n🗻 **Himalayan Adventure** – from ₹22,000\n\nThese are just a few! Want me to filter by **destination**, **budget**, or **travel style**?`,
            chips: [
                { label: '🌴 Beach & Tropical', value: 'beach packages' },
                { label: '🏔 Adventure', value: 'adventure packages' },
                { label: '💑 Honeymoon', value: 'honeymoon packages' },
                { label: '🏫 Student IV', value: 'student packages' },
                { label: '👁 View All', value: 'packages' },
            ],
        },
        {
            keys: ['honeymoon', 'romantic', 'couple', 'anniversary', 'wedding'],
            reply: `Aww, that's wonderful! 💕 Congratulations!\n\nOur **Honeymoon Collection** is truly special:\n\n🌺 **Maldives Overwater Villa** – 5N/6D from ₹89,999\n🌊 **Andaman Romance** – 4N/5D from ₹34,999\n🏔 **Kashmir Paradise** – 6N/7D from ₹42,000\n🌏 **Bali Bliss** – 5N/6D from ₹55,000\n🗺 **Europe Romantic** – 7N/8D from ₹1,40,000\n\nEvery package includes **candlelit dinners, couple spa, flower-decorated rooms** and private transfers! 🥂\n\nShall I prepare a **custom quote** for your dates?`,
            chips: [
                { label: '📅 Get Custom Quote', value: 'I need a custom quote' },
                { label: '💍 See All Romantic', value: 'honeymoon' },
                { label: '📞 Call Now', value: 'contact' },
            ],
        },
        {
            keys: ['student', 'school', 'college', 'educational', 'iv', 'industrial visit', 'study'],
            reply: `Great choice for an educational trip! 🎓\n\nOur **Student IV Packages** are super popular:\n\n🏛 **South India Heritage Circuit** – ₹3,500/student (3D/2N)\n🚀 **ISRO & Science Tour** – ₹4,200/student (4D/3N)\n🌿 **Western Ghats Eco Trail** – ₹2,800/student (2D/1N)\n\n✅ All packages include AC transport, accommodation, guide & insurance\n✅ Special group discounts for 20+ students\n✅ Teacher/chaperone complimentary above 30 students!\n\nHow many students are you planning for?`,
            chips: [
                { label: '20–50 Students', value: 'group of 30 students' },
                { label: '50–100 Students', value: 'group of 75 students' },
                { label: '📋 Get Itinerary', value: 'student itinerary' },
            ],
        },
        {
            keys: ['bachelor', 'bachelor party', 'stag', 'boys trip', 'gang', 'friends'],
            reply: `YOLO! 🎉 The ultimate boys' trip is calling!\n\nOur **Bachelor's Special Packages** are fire:\n\n🏝 **Goa Party Package** – 3N/4D from ₹12,000/person\n🐘 **Coorg & Wayanad Wild** – 3N/4D from ₹9,500/person\n🚤 **Andaman Island Hop** – 4N/5D from ₹18,000/person\n🌏 **Bangkok–Pattaya Madness** – 5N/6D from ₹28,000/person\n\n🍹 Includes party activities, adventure sports & group discounts!\n\nHow many in your squad?`,
            chips: [
                { label: '5–10 People', value: 'group of 8' },
                { label: '10–20 People', value: 'group of 15' },
                { label: '🔥 Book Bachelor', value: 'book bachelor package' },
            ],
        },
        {
            keys: ['adventure', 'trek', 'trekking', 'safari', 'camping', 'rafting', 'diving', 'scuba', 'eco', 'wildlife'],
            reply: `Thrill-seeker alert! 🧗‍♂️⚡\n\nOur **Adventure & Eco-Tourism** experiences:\n\n🗻 **Himalayan Trek** – Kedarnath, Roopkund, Triund\n🐅 **Jungle Safari** – Mudumalai, Jim Corbett, Kaziranga\n🌊 **Scuba Diving** – Andaman Islands (beginner + advanced)\n🚣 **River Rafting** – Rishikesh Grade III–V\n🦋 **Eco Trails** – Western Ghats Nature Walks\n🏔 **Spiti Valley Expedition** – 8D/9N\n\nAll adventures include **certified guides, safety gear & insurance**.\n\nWhat terrain gets your heart racing?`,
            chips: [
                { label: '🏔 Mountains', value: 'mountain trekking' },
                { label: '🌊 Water Sports', value: 'water adventures' },
                { label: '🐅 Wildlife Safari', value: 'safari' },
                { label: '📅 Check Slots', value: 'availability' },
            ],
        },
        {
            keys: ['group', 'corporate', 'team', 'office', 'company', 'bulk', 'large group'],
            reply: `Perfect for group travel! 🚌\n\nWe specialise in **Group & Corporate Tours**:\n\n✅ Groups from 10 to 500+ people\n✅ Dedicated group coordinator assigned\n✅ Bulk discounts up to **30% off** on group bookings\n✅ Custom itineraries & themed events\n✅ MICE packages (Meetings, Incentives, Conferences)\n\nPopular group destinations: **Ooty, Kodaikanal, Munnar, Goa, Rajasthan**\n\nHow many people in your group and where do you want to go?`,
            chips: [
                { label: '10–30 People', value: 'small group of 20' },
                { label: '30–100 People', value: 'large group of 50' },
                { label: '🏢 Corporate MICE', value: 'corporate travel' },
            ],
        },
        {
            keys: ['cruise', 'ship', 'ocean', 'sea cruise', 'sailing'],
            reply: `Set sail for the extraordinary! 🚢✨\n\nOur **Cruise Deals** are among the best priced:\n\n🌊 **Lakshadweep Cruise** – 4N from ₹24,999\n🌴 **Sri Lanka Cruise** – 5N from ₹32,000\n🗺 **Southeast Asia Cruise** – 7N from ₹55,000\n🌍 **Mediterranean Dream** – 10N from ₹1,85,000\n🛳 **Caribbean Adventure** – 7N from ₹95,000\n\nCabins available: **Interior, Ocean View, Balcony, Suite**\n\nAll-inclusive packages available! 🥂`,
            chips: [
                { label: '🛳 See All Cruises', value: 'show cruises' },
                { label: '💎 Luxury Cabins', value: 'luxury cruise cabin' },
                { label: '📅 Book Cruise', value: 'book a cruise' },
            ],
        },
        {
            keys: ['insurance', 'cover', 'medical', 'emergency cover', 'protection'],
            reply: `Smart thinking! Travel insurance is a **must-have**. 🛡️\n\nOur plans:\n\n| Plan | Coverage | Price |\n|------|----------|-------|\n| **Basic** | Medical ₹5L + Trip Cancel | ₹499 |\n| **Standard** | Medical ₹15L + All Risks | ₹899 |\n| **Premium** | Medical ₹50L + Full Cover | ₹1,499 |\n\n✅ COVID-19 covered\n✅ 24/7 emergency helpline\n✅ Instant policy issuance\n\nWhere are you travelling and for how many days?`,
            chips: [
                { label: 'Domestic Trip', value: 'domestic insurance' },
                { label: 'International Trip', value: 'international insurance' },
                { label: '📋 Get Policy Now', value: 'buy insurance' },
            ],
        },
        {
            keys: ['visa', 'passport', 'document', 'permit', 'embassy', 'stamping'],
            reply: `Don't let paperwork stress you! 📋 We handle it all:\n\n✅ **Visa Services** – Tourist, Business, Student, Transit\n✅ Countries covered: UAE, Singapore, Thailand, UK, USA, Schengen, Australia & 50+ more\n✅ **Passport renewal & tatkal** assistance\n✅ **Travel insurance letters** for embassies\n✅ **Hotel booking letters** for visa applications\n\n⏱ Standard processing: 5–7 days | Urgent: 2–3 days\n\nWhich country's visa do you need?`,
            chips: [
                { label: '🇦🇪 UAE / Dubai', value: 'UAE visa' },
                { label: '🇸🇬 Singapore', value: 'Singapore visa' },
                { label: '🇪🇺 Schengen', value: 'Schengen visa' },
                { label: '🌐 Other Country', value: 'visa for another country' },
            ],
        },
        {
            keys: ['business', 'corporate', 'executive', 'first class', 'business class', 'conference'],
            reply: `We take corporate travel seriously! 💼\n\nOur **Business Travel Solutions**:\n\n🎯 Dedicated corporate travel manager\n✈️ Business class & premium economy bookings\n🏨 5-star hotel preferred rates\n💳 Centralised billing & monthly invoicing\n📊 Travel expense reports\n🚗 Airport transfers with drivers\n📱 24/7 support line for executives\n\nWe currently serve **100+ corporates** across Chennai & Tamil Nadu.\n\nShall I connect you with our **corporate sales team**?`,
            chips: [
                { label: '📧 Get Corp Quote', value: 'corporate quote' },
                { label: '📞 Talk to Corp Team', value: 'contact corporate' },
                { label: '📄 Download Brochure', value: 'business brochure' },
            ],
        },
        {
            keys: ['beach', 'tropical', 'island', 'maldives', 'andaman', 'goa', 'lakshadweep'],
            reply: `Beach lover? We've got you! 🏖️🌺\n\nTop beach destinations from Chennai:\n\n🌴 **Maldives** – Overwater bungalows, crystal lagoons – 4D/3N from ₹35,000\n🐚 **Andaman Islands** – Neil, Havelock, Radhanagar beach – 5D/4N from ₹22,000\n🎉 **Goa** – North & South Goa combo – 4D/3N from ₹12,000\n🌊 **Lakshadweep** – Pristine coral reefs, restricted beauty – 4D/3N from ₹28,000\n🌏 **Bali** – Temples + beaches + rice terraces – 5D/4N from ₹42,000\n\nBest travel months: **Oct–April**\n\nWhen are you planning to go?`,
            chips: [
                { label: '🗓 Oct–Dec', value: 'planning in october' },
                { label: '🗓 Jan–Mar', value: 'planning in january' },
                { label: '🗓 Apr–Jun', value: 'planning in april' },
                { label: '💰 Under ₹20,000', value: 'beach trip under 20000' },
            ],
        },
        {
            keys: ['budget', 'cheap', 'affordable', 'low cost', 'economy', 'under', '₹'],
            reply: `Great news — we have packages for **every budget**! 💰\n\nBudget-friendly options:\n\n🏛 **Tamil Nadu Weekend Getaway** – ₹3,999/person (2D/1N)\n🌿 **Coorg Short Break** – ₹6,500/person (3D/2N)\n🌊 **Pondicherry Day Trip** – ₹1,999/person\n🏖 **Rameswaram Pilgrimage** – ₹4,500/person (2D/1N)\n🌴 **Yelagiri Hills** – ₹3,200/person (2D/1N)\n\n💡 *Pro tip: Book 60+ days in advance for up to **25% off**!*\n\nWhat's your approximate budget per person?`,
            chips: [
                { label: 'Under ₹10,000', value: 'budget under 10000' },
                { label: '₹10,000–₹30,000', value: 'budget 10000 to 30000' },
                { label: '₹30,000–₹1L', value: 'budget 30000 to 100000' },
                { label: 'Above ₹1L', value: 'luxury budget' },
            ],
        },
        {
            keys: ['price', 'cost', 'rate', 'fee', 'charge', 'how much', 'quote'],
            reply: `I'd love to give you an accurate quote! 📊\n\nTo calculate your perfect price, I need a few details:\n\n1️⃣ **Destination** – Where do you want to go?\n2️⃣ **Travel dates** – When are you planning?\n3️⃣ **No. of travellers** – Adults + children?\n4️⃣ **Budget range** – Any preference?\n5️⃣ **Accommodation** – Budget/Standard/Luxury?\n\nTell me these and I'll craft you a **personalised itinerary with the best price** — I promise we'll beat any competitor's quote! 😊`,
            chips: [
                { label: '📞 Call for Quick Quote', value: 'call now' },
                { label: '💬 WhatsApp Us', value: 'whatsapp' },
                { label: '📧 Email a Query', value: 'email query' },
            ],
        },
        {
            keys: ['book', 'booking', 'reserve', 'confirm', 'pay', 'payment'],
            reply: `Excellent! Let's get you booked! ✈️🎉\n\nOur booking process is super simple:\n\n**Step 1** – Choose your package / destination\n**Step 2** – Share travel dates & traveller details\n**Step 3** – We send a customised itinerary + invoice\n**Step 4** – Pay a **10% advance** to confirm\n**Step 5** – Relax — we handle everything! 😎\n\n💳 **Payment options:** UPI, Net Banking, Credit/Debit Card, EMI\n🔒 **100% secure** payment gateway\n\nWant to start the booking process right now?`,
            chips: [
                { label: '✈️ Go to Booking Page', value: 'booking' },
                { label: '📞 Call to Book', value: 'call now' },
                { label: '💬 Book via WhatsApp', value: 'whatsapp' },
            ],
            action: { label: 'Open Booking Page', href: 'booking.html' },
        },
        {
            keys: ['contact', 'call', 'phone', 'number', 'reach', 'speak', 'agent', 'human'],
            reply: `Our team is ready for you! 📞\n\n**Explore Easy Tours & Travels**\n📍 #12, Anna Salai, Chennai – 600002\n📞 **+91 98765 43210** (Mobile/WhatsApp)\n📞 **044-2233-4455** (Office Landline)\n✉️ **info@exploreeasy.in**\n🕐 **Mon–Sat: 9AM – 7PM** | Emergency: 24/7\n\nYou can also walk into our office — we'd love to meet you! ☕\n\nShall I connect you on **WhatsApp** right now?`,
            chips: [
                { label: '💬 WhatsApp Now', value: 'whatsapp' },
                { label: '📧 Email Us', value: 'email query' },
                { label: '🗺 Get Directions', value: 'office location' },
            ],
        },
        {
            keys: ['whatsapp', 'wa', 'chat'],
            reply: `Opening WhatsApp for you! 💬\n\nYou can also reach us at:\n📱 **+91 98765 43210**\n\nOur team typically replies within **5–10 minutes** during office hours. 🚀`,
            chips: [],
            action: { label: 'Open WhatsApp', href: 'https://wa.me/919876543210?text=Hello!%20I%20want%20to%20enquire%20about%20a%20travel%20package.' },
        },
        {
            keys: ['email', 'mail', 'send email'],
            reply: `Sure! Drop us an email at:\n\n✉️ **info@exploreeasy.in**\n\nMention your:\n✅ Name\n✅ Destination interest\n✅ Travel dates\n✅ Number of travellers\n\nWe'll reply within **2 business hours** with a detailed itinerary! 📧`,
            chips: [
                { label: '📞 Call Instead', value: 'call now' },
                { label: '💬 WhatsApp', value: 'whatsapp' },
            ],
        },
        {
            keys: ['destination', 'where', 'place', 'location', 'country', 'state'],
            reply: `We operate across **50+ destinations** worldwide! 🌍\n\n🇮🇳 **India:** Tamil Nadu, Kerala, Goa, Rajasthan, Himachal, Ladakh, Andaman, NE India\n🌏 **SE Asia:** Bali, Singapore, Thailand, Malaysia, Vietnam\n🗺 **Middle East:** Dubai, Abu Dhabi, Oman, Qatar\n🇪🇺 **Europe:** Paris, Rome, Barcelona, Switzerland, Turkey\n🌊 **Islands:** Maldives, Sri Lanka, Lakshadweep, Mauritius\n🌍 **Far East:** Japan, South Korea, China\n\nWhere are you dreaming of visiting? ✈️`,
            chips: [
                { label: '🏛 Tamil Nadu', value: 'tamil nadu trip' },
                { label: '🌴 Maldives', value: 'maldives package' },
                { label: '🗼 Europe', value: 'europe tour' },
                { label: '🌏 Southeast Asia', value: 'southeast asia' },
            ],
        },
        {
            keys: ['tamilnadu', 'tamil nadu', 'chennai', 'madurai', 'ooty', 'kodaikanal', 'rameswaram'],
            reply: `Proud Tamil Nadu specialists! 🙏\n\nTop Tamil Nadu itineraries:\n\n🏛 **Temple Circuit** – Madurai · Thanjavur · Kanyakumari (4D/3N from ₹8,500)\n🌿 **Nilgiri Hills** – Ooty · Kodaikanal · Coaker's Walk (3D/2N from ₹6,000)\n🌊 **Coastal Wonders** – Mahabalipuram · Pondicherry · Rameswaram (3D/2N from ₹5,500)\n🐘 **Wildlife** – Mudumalai · Anamalai Tiger Reserve (2D/1N from ₹7,500)\n\nBeing Tamil Nadu locals, we know the **hidden gems** no other agency will show you! 😉`,
            chips: [
                { label: '🛕 Temple Tour', value: 'temple circuit' },
                { label: '🌿 Hill Station', value: 'ooty package' },
                { label: '🌊 Coastal Tour', value: 'pondicherry trip' },
            ],
        },
        {
            keys: ['emergency', 'sos', 'help', 'stranded', 'lost', 'accident', 'urgent'],
            reply: `⚠️ **EMERGENCY ALERT** ⚠️\n\nIf you're in an emergency while travelling, contact us **immediately**:\n\n🆘 **24/7 Emergency Hotline:**\n📞 **+91 98765 43210**\n📞 **+91 98765 99999**\n\nWe can assist with:\n✅ Medical emergencies & hospital coordination\n✅ Lost passport / documents\n✅ Emergency flight rerouting\n✅ Embassy contacts\n✅ Travel insurance claims\n\n**We are with you, wherever you are!** 🤝`,
            chips: [
                { label: '🆘 Emergency Page', value: 'emergency' },
                { label: '📞 Call Now', value: 'call now' },
            ],
        },
        {
            keys: ['thank', 'thanks', 'thank you', 'great', 'awesome', 'perfect', 'superb'],
            reply: `You're so welcome! 😊🙏\n\nIt's always a pleasure helping you plan your dream trip!\n\nRemember, at **Explore Easy Tours & Travels** — we don't just book trips, we **craft memories** that last a lifetime! ✨\n\nIs there anything else I can help you with?`,
            chips: QUICK_REPLIES_INITIAL,
        },
        {
            keys: ['bye', 'goodbye', 'see you', 'later', 'exit', 'close'],
            reply: `Goodbye! 👋 Safe travels and hope to see you soon!\n\nWhenever you're ready to plan that next adventure, we're just one message away. ✈️\n\n*Have a wonderful day!* 🌟`,
            chips: [],
        },
    ];

    // Fallback response
    const FALLBACK = {
        replies: [
            `That's a great question! 🤔 Let me connect you with our expert team for a personalised response.\n\nYou can reach us at:\n📞 **+91 98765 43210**\n💬 WhatsApp us for an instant reply!\n\nOr tell me more about your travel plans and I'll do my best to help! 😊`,
            `Interesting! I'd love to help with that. 🌍 Could you give me a bit more detail?\n\nFor example — which **destination** interests you, your **travel dates**, and **number of travellers**? With that I can give you a much better answer!\n\nAlternatively, call us at 📞 **+91 98765 43210** for immediate assistance.`,
            `Great query! 😊 Our travel experts would be best placed to answer that in detail.\n\n💬 **WhatsApp:** wa.me/919876543210\n📞 **Call:** +91 98765 43210\n✉️ **Email:** info@exploreeasy.in\n\nIn the meantime, can I interest you in some of our **top-selling packages**?`,
        ],
        chips: QUICK_REPLIES_INITIAL,
        _idx: 0,
    };

    /* ── BUILD UI ── */
    function buildWidget() {
        const widget = document.createElement('div');
        widget.id = 'chatbot-widget';
        widget.innerHTML = `
      <!-- Toggle Button -->
      <button id="chatbot-toggle" aria-label="Open chat" title="Chat with us">
        <span class="chat-icon">💬</span>
        <span class="chat-close-icon" style="display:none">✕</span>
        <span id="chatbot-badge" class="chatbot-badge">1</span>
      </button>

      <!-- Chat Window -->
      <div id="chatbot-window" class="chatbot-window" aria-hidden="true">
        <!-- Header -->
        <div class="chatbot-header">
          <div class="chatbot-agent-info">
            <div class="chatbot-avatar">${BOT.avatar}</div>
            <div>
              <div class="chatbot-name">${BOT.name}</div>
              <div class="chatbot-status"><span class="status-dot"></span> Online now</div>
            </div>
          </div>
          <div class="chatbot-header-actions">
            <button id="chatbot-clear" title="Clear chat">🗑</button>
            <button id="chatbot-close-btn" title="Close">✕</button>
          </div>
        </div>

        <!-- Messages -->
        <div id="chatbot-messages" class="chatbot-messages" role="log" aria-live="polite"></div>

        <!-- Input -->
        <div class="chatbot-input-area">
          <div id="chatbot-chips" class="chatbot-chips"></div>
          <div class="chatbot-input-row">
            <input id="chatbot-input" type="text" placeholder="Ask me anything about travel…" autocomplete="off" maxlength="200" />
            <button id="chatbot-send">➤</button>
          </div>
        </div>
      </div>
    `;
        document.body.appendChild(widget);
    }

    /* ── MARKDOWN → HTML (minimal) ── */
    function md(text) {
        return text
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .replace(/\| (.+?) \|/g, (m) => m) // keep tables raw — handled separately
            ;
    }

    /* ── CHAT LOGIC ── */
    let isOpen = false;
    let badgeDismissed = false;

    function getResponse(input) {
        const lower = input.toLowerCase().trim();
        for (const rule of RESPONSES) {
            if (rule.keys.some(k => lower.includes(k))) {
                return rule;
            }
        }
        // Fallback cycling
        const reply = FALLBACK.replies[FALLBACK._idx % FALLBACK.replies.length];
        FALLBACK._idx++;
        return { reply, chips: FALLBACK.chips };
    }

    function appendMessage(text, sender, action) {
        const msgs = document.getElementById('chatbot-messages');
        const wrap = document.createElement('div');
        wrap.className = `chatbot-msg chatbot-msg-${sender}`;

        const bubble = document.createElement('div');
        bubble.className = 'chatbot-bubble';
        bubble.innerHTML = md(text);
        wrap.appendChild(bubble);

        if (action && sender === 'bot') {
            const btn = document.createElement('a');
            btn.href = action.href;
            btn.target = action.href.startsWith('http') ? '_blank' : '_self';
            btn.className = 'chatbot-action-btn';
            btn.textContent = action.label;
            wrap.appendChild(btn);
        }

        msgs.appendChild(wrap);
        msgs.scrollTop = msgs.scrollHeight;
    }

    function showTyping() {
        const msgs = document.getElementById('chatbot-messages');
        const wrap = document.createElement('div');
        wrap.className = 'chatbot-msg chatbot-msg-bot';
        wrap.id = 'chatbot-typing';
        wrap.innerHTML = `<div class="chatbot-bubble chatbot-typing-bubble">
      <span></span><span></span><span></span>
    </div>`;
        msgs.appendChild(wrap);
        msgs.scrollTop = msgs.scrollHeight;
    }

    function hideTyping() {
        const t = document.getElementById('chatbot-typing');
        if (t) t.remove();
    }

    function setChips(chips) {
        const container = document.getElementById('chatbot-chips');
        container.innerHTML = '';
        (chips || []).forEach(chip => {
            const btn = document.createElement('button');
            btn.className = 'chatbot-chip';
            btn.textContent = chip.label;
            btn.addEventListener('click', () => {
                handleUserMessage(chip.value);
            });
            container.appendChild(btn);
        });
    }

    function handleUserMessage(text) {
        if (!text.trim()) return;
        document.getElementById('chatbot-input').value = '';
        setChips([]);
        appendMessage(text, 'user');

        showTyping();
        const delay = 800 + Math.random() * 700;

        setTimeout(() => {
            hideTyping();
            const resp = getResponse(text);
            appendMessage(resp.reply || resp.replies?.[0], 'bot', resp.action);
            setChips(resp.chips || []);
        }, delay);
    }

    function openChat() {
        isOpen = true;
        const win = document.getElementById('chatbot-window');
        const toggle = document.getElementById('chatbot-toggle');
        win.classList.add('open');
        win.setAttribute('aria-hidden', 'false');
        toggle.querySelector('.chat-icon').style.display = 'none';
        toggle.querySelector('.chat-close-icon').style.display = 'block';
        if (!badgeDismissed) {
            document.getElementById('chatbot-badge').style.display = 'none';
            badgeDismissed = true;
        }
        document.getElementById('chatbot-input').focus();
    }

    function closeChat() {
        isOpen = false;
        const win = document.getElementById('chatbot-window');
        const toggle = document.getElementById('chatbot-toggle');
        win.classList.remove('open');
        win.setAttribute('aria-hidden', 'true');
        toggle.querySelector('.chat-icon').style.display = 'block';
        toggle.querySelector('.chat-close-icon').style.display = 'none';
    }

    function clearChat() {
        document.getElementById('chatbot-messages').innerHTML = '';
        setChips([]);
        setTimeout(() => greet(), 300);
    }

    function greet() {
        const resp = RESPONSES[0]; // greeting rule
        showTyping();
        setTimeout(() => {
            hideTyping();
            appendMessage(resp.reply, 'bot');
            setChips(resp.chips);
        }, 900);
    }

    /* ── INIT ── */
    function init() {
        buildWidget();

        // Events
        document.getElementById('chatbot-toggle').addEventListener('click', () => {
            isOpen ? closeChat() : openChat();
        });
        document.getElementById('chatbot-close-btn').addEventListener('click', closeChat);
        document.getElementById('chatbot-clear').addEventListener('click', clearChat);

        const input = document.getElementById('chatbot-input');
        document.getElementById('chatbot-send').addEventListener('click', () => {
            handleUserMessage(input.value);
        });
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') handleUserMessage(input.value);
        });

        // Auto-greet after 2s
        setTimeout(greet, 2000);

        // Pulse badge to draw attention
        setTimeout(() => {
            const badge = document.getElementById('chatbot-badge');
            if (!badgeDismissed) badge.classList.add('pulse');
        }, 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
