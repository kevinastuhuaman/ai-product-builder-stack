import {chromium} from '@playwright/test';
import{mkdir,readFile,writeFile}from'node:fs/promises';import{execFileSync}from'node:child_process';
const root=process.cwd();const output=root+'/docs/reviews/logos';await mkdir(output,{recursive:true});
const versions=[{id:'before',url:'http://127.0.0.1:4176/ai-product-builder-stack/',checkout:'/workspace/ai-product-builder-stack-logos-before'},{id:'after',url:'http://127.0.0.1:4177/ai-product-builder-stack/',checkout:root}];
const browser=await chromium.launch();const receipt={capturedAt:new Date().toISOString(),browser:browser.version(),versions:versions.map(v=>({id:v.id,head:execFileSync('git',['rev-parse','HEAD'],{cwd:v.checkout,encoding:'utf8'}).trim()})),captures:[]};
try{
 for(const width of [1440,390]){
  for(const v of versions){const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});await page.emulateMedia({reducedMotion:'reduce'});await page.goto(v.url,{waitUntil:'networkidle'});
   for(const [name,selector]of[['models','.category-section:first-child'],['observability','.category-section:nth-child(5)']]){await page.locator(selector).scrollIntoViewIfNeeded();await page.locator(selector+' img').evaluateAll(async imgs=>Promise.all(imgs.map(i=>i.decode())));const file=`${v.id}-${width}-${name}.png`;await page.locator(selector).screenshot({path:output+'/'+file,animations:'disabled'});receipt.captures.push({file,width,selector});}
   await page.close();
  }
  let body='';for(const [name,title]of[['models','Models and agent systems'],['observability','Observability and analytics']]){body+=`<h2>${title}</h2><div class="pair">`;for(const v of versions){const src='data:image/png;base64,'+(await readFile(`${output}/${v.id}-${width}-${name}.png`)).toString('base64');body+=`<div><p>${v.id==='before'?'Before · current main':'After · awaiting approval'}</p><img src="${src}"></div>`;}body+='</div>';}
  const page=await browser.newPage({viewport:{width:width===1440?1600:880,height:1000}});await page.setContent(`<style>body{padding:32px;background:#f7f7f2;font-family:Arial,sans-serif;color:#161616}h1{font-size:34px}h2{margin-top:36px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:24px}p{font-size:16px}img{width:100%;border:1px solid #bbb}</style><h1>Real logos. Clear tool evidence.</h1><p>Actual ${width===1440?'desktop':'phone'} source renders of the linked AI Product Builder Stack site.</p>${body}`);await page.locator('img').evaluateAll(async imgs=>Promise.all(imgs.map(i=>i.decode())));await page.screenshot({path:output+`/${width===1440?'desktop':'phone'}-comparison.png`,fullPage:true});await page.close();
 }
 await writeFile(output+'/capture-receipt.json',JSON.stringify(receipt,null,2)+'\n');console.log(output);
}finally{await browser.close();}
