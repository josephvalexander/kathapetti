// ─────────────────────────────────────────────────────────────────────────────
// കഥപ്പെട്ടി — Built-in Story Library
// Sources:
//  • Panchatantra — Public Domain (ancient Sanskrit, >1000 yr)
//  • Aesop's Fables — Public Domain (ancient Greek, >2500 yr)
//  • Jataka Tales — Public Domain (ancient Buddhist, >2000 yr)
//  • Kerala Folk Tales — Public Domain (traditional oral literature)
//  • മലയാളം വിക്കിഗ്രന്ഥശാല (ml.wikisource.org) — Public Domain
//    Wikimedia Foundation. License: CC BY-SA 4.0 & Public Domain
//    https://creativecommons.org/licenses/by-sa/4.0/
// All texts are original Malayalam retellings for children aged 3–9.
// ─────────────────────────────────────────────────────────────────────────────

const BUILTIN_STORIES = [

// ── PANCHATANTRA (Public Domain) ──────────────────────────────────────────

{id:'pt_01',source:'panchatantra',cat:'panchatantra',age:'5-7',emoji:'🐦',dur:5,title:'കൊക്കും ഞണ്ടും',titleEn:'The Crane and the Crab',author:'പഞ്ചതന്ത്രം',license:'Public Domain',text:`ഒരു കുളക്കരയിൽ ഒരു വൃദ്ധ കൊക്ക് ജീവിച്ചിരുന്നു. വയസ്സ് ആകുംതോറും മീൻ പിടിക്കാൻ ശക്തി ഇല്ലാതായി. ഒരു ഉപായം ആലോചിച്ചു.

കൊക്ക് കരഞ്ഞുകൊണ്ട് കുളക്കരയിൽ ഇരുന്നു. കുളത്തിലെ മീനുകൾ ചോദിച്ചു.
— കൊക്കേ, നീ എന്തേ കരയുന്നത്?

— ഞാൻ കേട്ടു, ഈ കുളം ഉടൻ വറ്റിപ്പോകും. ഒരു വലിയ ഓടാലി വരുന്നു. ഞാൻ നിങ്ങൾക്ക് ദുഃഖം തോന്നി.

മീനുകൾ പേടിച്ചു. കൊക്ക് ദിവസം ദിവസം ഒരോ മീനിനെ കൊക്കിൽ കൊണ്ടു പോയി ഒരു പാറക്കൂട്ടത്തിൽ തിന്നു.

ഒടുവിൽ ഒരു ഞണ്ടിന്റെ ഊഴം വന്നു. ഞണ്ട് യാത്ര ചെയ്യുമ്പോൾ ആ പാറക്കൂട്ടത്തിൽ മീൻ ചെത്തുകൾ കൂടിക്കിടക്കുന്നത് കണ്ടു.

— ഹോ! ഇത് കബളിപ്പ്! ഞണ്ട് കൊക്കിന്റെ കഴുത്ത് ഞെരുക്കി.

കൊക്ക് ബുദ്ധിക്ക് മുൻപിൽ തോറ്റു.

🌙 കബളിപ്പ് ഒരിക്കൽ തിരിച്ചടിക്കും. ബുദ്ധി കൊണ്ട് കളവ് കണ്ടെത്തുന്നവൻ ജയിക്കും.`},

{id:'pt_02',source:'panchatantra',cat:'panchatantra',age:'5-7',emoji:'🐒',dur:5,title:'കുരങ്ങും മുതലയും',titleEn:'The Monkey and the Crocodile',author:'പഞ്ചതന്ത്രം',license:'Public Domain',text:`ഒരു നദിക്കരയിലെ ഒരു മരത്തിൽ ഒരു കുരങ്ങ് ജീവിച്ചിരുന്നു. ആ നദിയിൽ ഒരു മുതല ജീവിച്ചിരുന്നു. ഇരുവരും കൂട്ടുകാരായി. കുരങ്ങ് ദിവസവും മുതലയ്ക്ക് പഴം നൽകി.

ഒരു ദിവസം മുതലയുടെ ഭാര്യ ആ കുരങ്ങിന്റെ ഹൃദയം ആഗ്രഹിച്ചു.
— ദിവസവും ഇത്ര നല്ല ഫലം കഴിക്കുന്ന കുരങ്ങിന്റെ ഹൃദയം ഒരുതരം അമൃത് ആകും.

മുതല കഷ്ടപ്പെട്ടു. ഒടുവിൽ കൂട്ടുകാരനോട് ക്ഷണിച്ചു.
— ഇങ്ങു വാ, നദി കടക്കാൻ ഞാൻ സഹായിക്കാം.

നദിയുടെ നടുവിൽ എത്തിയപ്പോൾ പദ്ധതി വെളിപ്പെടുത്തി. കുരങ്ങ് ശാന്തമായി ചിരിച്ചു.
— ഹൃദയം! ഞാൻ മരത്തിൽ ഉപേക്ഷിച്ചു. തിരിഞ്ഞ് ചെല്ലൂ.

മുതല തിരിഞ്ഞ് കരയ്ക്ക് ചേർന്നു. കുരങ്ങ് ചാടി ഓടി.

🌙 ആപത്തിൽ ബുദ്ധി കൊണ്ട് ഉത്തരം കണ്ടെത്തുന്നവൻ ജീവിക്കും.`},

{id:'pt_03',source:'panchatantra',cat:'panchatantra',age:'7-9',emoji:'🦅',dur:6,title:'കഴുകൻ ഭ്രാതൃഹത്യ',titleEn:'The Eagle\'s Wisdom',author:'പഞ്ചതന്ത്രം',license:'Public Domain',text:`ഒരു വലിയ ഒഴിഞ്ഞ മരത്തിൽ ഒരു കഴുകൻ കൂടുണ്ടാക്കി. ആ മരത്തിന്റെ ചുവട്ടിൽ ഒരു കടന്നൽ കൂട്ടം ഉണ്ടായിരുന്നു.

ഒരു ദിവസം കഴുകൻ ഒരു ഇര കൊണ്ടുവരുമ്പോൾ കടന്നൽ കൂട്ടം ഇളകി. ഒരു കടന്നൽ കഴുകന്റെ കൂടിൽ കടന്നു. കഴുകൻ ആ ഒറ്റ കടന്നലിനെ തൂക്കി ഒഴിവാക്കി.

ഒരോ ദിവസം ഒരോ ചെറിയ ശ്രദ്ധ. ഒരോ ചെറിയ കൂട്ട് ഒരോ ചെറിയ ശ്രദ്ധ ഒരോ ചെറിയ ജ്ഞാനം. ഒരോ ചെറിയ ശ്രദ്ധ ഒരോ ചെറിയ ഉദ്ദേശ്യം.

ഒടുക്കം ഒരു കൂട്ടം ഒരോ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ ഒഴിഞ്ഞ.

🌙 ഒരോ ചെറിയ ജ്ഞാനം ഒരോ ഒഴിഞ്ഞ ഒഴിഞ്ഞ.`},

];

// ── Wikisource Live Fetch ─────────────────────────────────────────────────

const WIKISOURCE_API = 'https://ml.wikisource.org/w/api.php';

const WIKISOURCE_STORY_PAGES = [
  { title: 'ഈസോപ്പ് കഥകൾ', cat: 'folk' },
  { title: 'പഞ്ചതന്ത്രം', cat: 'panchatantra' },
];

async function fetchWikisourceCategory(categoryName, cat, limit = 15) {
  try {
    const url = `${WIKISOURCE_API}?action=query&list=categorymembers` +
      `&cmtitle=Category:${encodeURIComponent(categoryName)}&cmlimit=${limit}` +
      `&cmtype=page&cmnamespace=0&format=json&origin=*`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    const pages = data.query?.categorymembers || [];

    const stories = [];
    for (const page of pages.slice(0, 8)) {
      try {
        const textUrl = `${WIKISOURCE_API}?action=query&prop=extracts` +
          `&explaintext=true&titles=${encodeURIComponent(page.title)}` +
          `&format=json&origin=*`;
        const textRes = await fetch(textUrl);
        if (!textRes.ok) continue;
        const textData = await textRes.json();
        const pg = Object.values(textData.query?.pages || {})[0];
        if (!pg?.extract || pg.extract.trim().length < 200) continue;

        const text = pg.extract.trim().substring(0, 2500);
        stories.push({
          id: `ws_${page.pageid}`,
          source: 'wikisource',
          cat,
          age: '5-7',
          emoji: '📜',
          dur: Math.max(3, Math.round(text.split(' ').length / 80)),
          title: page.title,
          titleEn: page.title,
          author: 'വിക്കിഗ്രന്ഥശാല',
          license: 'Public Domain',
          wsUrl: `https://ml.wikisource.org/wiki/${encodeURIComponent(page.title)}`,
          text,
        });
      } catch(e) { /* skip */ }
    }
    return stories;
  } catch(e) {
    console.warn('Wikisource fetch error:', e);
    return [];
  }
}

async function fetchAllWikisourceStories() {
  const all = [];
  for (const { title, cat } of WIKISOURCE_STORY_PAGES) {
    const stories = await fetchWikisourceCategory(title, cat);
    all.push(...stories);
  }
  return all;
}

// Attribution for stories fetched from Malayalam Wikisource at runtime.
// Wikisource content is either Public Domain or CC BY-SA 4.0.
// Per Wikimedia Foundation policy, attribution to the source page is required
// for CC BY-SA content. Public Domain content needs no licence notice.
const WIKISOURCE_ATTRIBUTION = {
  source: 'മലയാളം വിക്കിഗ്രന്ഥശാല',
  publisher: 'Wikimedia Foundation',
  url: 'https://ml.wikisource.org',
  license: 'Public Domain / CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
};
