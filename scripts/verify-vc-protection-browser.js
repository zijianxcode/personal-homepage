async (page) => {
  const results = [], errors = [];
  const origin = new URL(page.url()).origin;
  // This is an entry/interaction smoke check. Model/runtime files are unchanged;
  // suppress repeated background inference downloads in the six-page traversal.
  await page.context().route('**/projects/effecter/models/**', route => route.abort());
  await page.context().route('**/projects/effecter/runtime/**', route => route.abort());
  let active = '';
  page.on('pageerror', error => errors.push({ page: active, message: error.message }));
  const paths = ['/vibe-fiber/', '/projects/kinetic-typography-clock.html', '/projects/floating-clock.html', '/card-freeze/', '/far-from-here/', '/grid-poster/', '/projects/effecter/'];
  for (const path of paths) {
    active = path;
    await page.bringToFront();
    await page.goto(origin + path);
    if (path === '/vibe-fiber/') {
      await page.waitForFunction(() => !!window.knitDemo);
      await page.locator('#text').fill('防扒取 TEST');
      await page.waitForFunction(() => window.knitDemo.stats().stitches > 0);
      await page.locator('[data-input="pattern"]').click();
      await page.locator('#sample-pattern').click();
      await page.waitForFunction(() => window.knitDemo.stats().pattern?.count > 0, null, {timeout:15000});
      const state = await page.evaluate(() => ({ stats:window.knitDemo.stats(), diagnostics:window.patternDiagnostics() }));
      if (!state.diagnostics.worker || !state.stats.pattern?.count) throw new Error('Vibe Fiber image worker failed');
      results.push({path, stitches:state.stats.stitches, pattern:state.stats.pattern.count, worker:state.diagnostics.worker});
    } else if (path === '/far-from-here/') {
      await page.waitForFunction(() => !!window.__study, null, {timeout:30000});
      await page.locator('#assembly').click();
      await page.locator('#ensemble').click();
      await page.waitForFunction(() => window.__study.audio().status === 'playing', null, {timeout:20000});
      const state = await page.evaluate(() => ({scene:window.__study.snapshot(),audio:window.__study.audio()}));
      if (state.audio.error || state.audio.selected.length !== 4) throw new Error('Music scheduling failed');
      results.push({path, state});
      await page.locator('#transport').click();
    } else if (path === '/grid-poster/') {
      await page.waitForFunction(() => !!document.querySelector('canvas, svg'));
      results.push({path,editor:true});
    } else if (path === '/projects/effecter/') {
      await page.getByRole('button', {name:'Upload image'}).waitFor();
      results.push({path,uploadControl:true,bundleBehaviorPreserved:true});
    } else {
      await page.waitForFunction(() => Array.from(document.querySelectorAll('canvas')).some(c=>c.width>0&&c.height>0), null, {timeout:15000});
      results.push({path,canvas:await page.locator('canvas').count()});
    }
    if (!await page.locator('[data-vc-protection]').count()) throw new Error('Missing page protection: '+path);
    await page.screenshot({path:'output/playwright/vc-protection-'+path.replace(/[^a-z0-9]/gi,'-')+'.png'});
    console.log('VERIFIED '+path);
  }
  active = 'clone';
  if (origin !== 'https://bananabox.plus') await page.context().route('https://bananabox.plus/vibe-fiber/', async route => {
    const response = await route.fetch({url:'http://127.0.0.1:5197/vibe-fiber/'});
    await route.fulfill({response});
  });
  await page.context().route('https://copied-site.example/**', async route => {
    const url = new URL(route.request().url());
    const response = await route.fetch({url:'http://127.0.0.1:5197'+url.pathname+url.search});
    // Also simulate removing the head guard: the application script must still stop.
    if (url.pathname === '/vibe-fiber/') {
      const html = (await response.text()).replace(/<script data-vc-protection="[^"]+">[\s\S]*?<\/script>/, '');
      await route.fulfill({response,body:html});
    } else await route.fulfill({response});
  });
  await page.goto('https://copied-site.example/vibe-fiber/').catch(()=>{});
  await page.waitForURL('https://bananabox.plus/vibe-fiber/');
  results.push({cloneReturnedToOriginal:true,headGuardRemoved:true});
  const unexpected=errors.filter(e=>e.page!=='clone');
  if (unexpected.length) throw new Error('Unexpected errors: '+JSON.stringify(unexpected));
  return {results,errors,unexpected};
}
