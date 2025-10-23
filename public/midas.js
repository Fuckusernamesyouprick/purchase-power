
// Replace {keyword} in affiliate links with a random keyword from a list.
// Usage: window.MIDAS_KEYWORDS = ["deal","discount","top-pick"]; (set before this runs)
(function(){
  const kws = (window.MIDAS_KEYWORDS && window.MIDAS_KEYWORDS.length) ? window.MIDAS_KEYWORDS : ["power","value","smart-buy"];
  const anchors = document.querySelectorAll('a[data-midas="1"]');
  const pick = () => kws[Math.floor(Math.random()*kws.length)];
  anchors.forEach(a => {
    try {
      const url = new URL(a.href);
      const withKw = url.toString().replace("{keyword}", pick());
      a.href = withKw;
      a.rel = "nofollow noopener noreferrer";
      a.referrerPolicy = "no-referrer";
    } catch(e){ /* ignore */ }
  });
})();
