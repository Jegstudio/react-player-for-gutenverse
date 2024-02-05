let scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/a1d7d0f8\/www-widgetapi.vflset\/www-widgetapi.js'; try { const ttPolicy = window.trustedTypes.createPolicy('youtube-widget-api', { createScriptURL: function (x) { return x } }); scriptUrl = ttPolicy.createScriptURL(scriptUrl) } catch (e) {} let YT; if (!window.YT)YT = { loading: 0, loaded: 0 }; let YTConfig; if (!window.YTConfig)YTConfig = { host: 'https://www.youtube.com' }
if (!YT.loading) {
  YT.loading = 1; (function () {
    const l = []; YT.ready = function (f) { if (YT.loaded)f(); else l.push(f) }; window.onYTReady = function () { YT.loaded = 1; let i = 0; for (;i < l.length; i++) try { l[i]() } catch (e) {} }; YT.setConfig = function (c) { let k; for (k in c) if (c.hasOwnProperty(k))YTConfig[k] = c[k] }; const a = document.createElement('script'); a.type = 'text/javascript'; a.id = 'www-widgetapi-script'; a.src = scriptUrl; a.async = true; const c = document.currentScript; if (c) {
      const n = c.nonce || c.getAttribute('nonce'); if (n) {
        a.setAttribute('nonce',
          n)
      }
    } const b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(a, b)
  })()
};
