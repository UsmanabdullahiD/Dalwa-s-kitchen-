function goPage(p){window.location.href=p}
// Register service worker
if('serviceWorker' in navigator){
 navigator.serviceWorker.register('sw.js').then(()=>console.log('SW registered'));
}