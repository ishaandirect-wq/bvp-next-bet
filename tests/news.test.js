import test from 'node:test';
import assert from 'node:assert/strict';
import {terms,parseRss,selectNews,capitalSignals} from '../api/capital-news.js';
const rss=`<rss><channel><item><title>Indian healthtech startup raises $20m - Example News</title><link>https://news.google.com/rss/articles/abc</link><pubDate>${new Date().toUTCString()}</pubDate></item><item><title>Indian healthtech startup cuts funding for operations</title><link>https://news.google.com/rss/articles/xyz</link><pubDate>${new Date().toUTCString()}</pubDate></item></channel></rss>`;
test('extracts meaningful keywords',()=>assert.deepEqual(terms('Indian healthtech startups will expand in India'),['healthtech','expand']));
test('parses RSS and separates funding from exits',()=>{const parsed=parseRss(rss);assert.equal(parsed.length,2);assert.equal(selectNews(parsed,'in',['healthtech']).length,1);assert.equal(selectNews(parsed,'out',['healthtech']).length,1)});
test('rejects irrelevant and outdated items',()=>assert.equal(selectNews([{title:'A biotech company raises funding',url:'https://x.com',date:'2020-01-01'}],'in',['healthtech']).length,0));
test('news search works with mocked feeds',async()=>{const mock=async()=>({ok:true,text:async()=>rss});const out=await capitalSignals('Healthtech investing returns',mock);assert.equal(out.backing.length,1);assert.equal(out.pulling_back.length,1);assert.ok(out.backing[0].sourceUrl.startsWith('https://'));assert.equal(out.sources.length,2)});
test('provider failure gracefully returns empty signals',async()=>{const mock=async()=>{throw Error('offline')};const out=await capitalSignals('Healthtech investing returns',mock);assert.equal(out.newsStatus,'unavailable');assert.equal(out.sources.length,0)});
test('API combines Gemini result with headline-based capital signals', async()=>{
 const {default:handler}=await import('../api/analyze.js');
 const original=globalThis.fetch, oldKey=process.env.GEMINI_API_KEY;
 process.env.GEMINI_API_KEY='test-key';
 const fake={headline:'Test',take:'A nuanced view',scope:'India',for:[{point:'Pro',evidence:'A hypothesis'}],against:[{point:'Con',evidence:'Another hypothesis'}],backing:[],pulling_back:[],assumptions:[],companies:[],what_to_watch:[],one_question:'What next?'};
 globalThis.fetch=async(url)=>String(url).includes('generativelanguage')?{ok:true,json:async()=>({candidates:[{content:{parts:[{text:JSON.stringify(fake)}]}}]})}:{ok:true,text:async()=>rss};
 let code=0,payload;const res={setHeader(){},status(n){code=n;return this},json(o){payload=o;return this}};
 try{await handler({method:'POST',headers:{host:'localhost'},body:{mode:'analyze',thesis:'Healthtech investing returns'}},res);assert.equal(code,200);assert.equal(payload.analysis.backing.length,1);assert.equal(payload.analysis.pulling_back.length,1);assert.equal(payload.sources.length,2);assert.equal(payload.grounded,false);}finally{globalThis.fetch=original;if(oldKey===undefined)delete process.env.GEMINI_API_KEY;else process.env.GEMINI_API_KEY=oldKey}
});
