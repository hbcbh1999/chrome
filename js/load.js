var getService = function(url) {
  var regexp;
  for (var service in services) {
    regexp = services[service];
    if (url.match(regexp)) {
      return service;
    }
  }
}

var services = {
    facebook: /https?:\/\/(.*)\.?facebook\.com/
  , flickr: /https?:\/\/(.*)\.?flickr\.com/
  , gplus: /https?:\/\/plus\.google\.com/
  , instagram: /https?:\/\/(.*)\.?(instagr\.am|instagram.com)\/p/
  , reddit: /https?:\/\/(.*)\.?reddit\.com/
  , twitter: /https?:\/\/(.*)\.?twitter\.com/
  , pinterest: /https?:\/\/(.*)\.?pinterest\.com/
  , youtube: /https?:\/\/(.*)\.?youtube\.com\/watch/
  , topsy: /https?:\/\/(.*)\.?topsy\.com/
};

var service = getService(window.location.href)
  , onStorify = window.location.hostname.match(/storify\.com/);

var embeds = {
  "fyre": ".fyre-widget"
}

//AM: sometimes Storify is used on embeds, life fyre
if (!service) {
  for (var key in embeds) {
    if ($(embeds[key])) {
      service = key;
      break;
    }
  }
}
console.log(service);

$('body').attr('storify-loaded', 'true');

sfy.loadCSS('css/storify-common.css');

if (!onStorify && service && service !== 'facebook') {
  sfy.fn[service]();
}