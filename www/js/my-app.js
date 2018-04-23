// here initialize the app  
var mmApp = new Framework7({
  //App root element
  root: '#app',
  // App Name
  name: 'mymartoapp',
  // App id
  id: 'com.mymarto.app',
  // disable cache
  cache: false,
   // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  routes: routes,
}); 
// If your using custom DOM library, then save it to $$ variable  
var $$ = Dom7;

// Add the view  
var mainView = mmApp.addView('.view-main', {  
  // enable the dynamic navbar for this view:  
  dynamicNavbar: true  
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    //console.log("Device is ready!");
});


 //use the 'pageInit' event handler for all pages  
 $$(document).on('pageInit', function (e) {  
   
    //get page data from event data  
    var page = e.detail.page;  

    if (page.name === '') {  
      
       // you will get below message in alert box when page with data-page attribute is equal to "about"  
      // mmApp.alert('Here its your About page');  
    }  
 }) 



// var homeView = mmApp.addView('#tab-home', {
//   dynamicNavbar: true,
// });
// var readyView = mmApp.addView('#tab-ready', {
//   dynamicNavbar: true,
// });
// console.log(readyView);
// var todoView = mmApp.addView('#tab-todo', {
//   dynamicNavbar: true,
// });
// var historyView = mmApp.addView('#tab-history', {
//   dynamicNavbar: true,
// });


