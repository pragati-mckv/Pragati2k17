var app = new Vue({
  el: '#app',
  data: {
	form_url:{
		robowar:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		roboranger:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		robofifa:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		chasethemaze:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		linefollower:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		dota:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		cs:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		fifa:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		nfs:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		milimitia:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		chess:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		enigma:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		treasurehunt:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		bigshow:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		circuitdesign:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		catia:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		mathemania:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec',
		codefiesta:'https://script.google.com/macros/s/AKfycbzjdTOgw1w_1Vi1j1VY2akBIIL0p5xXuguopeH5MEaLQwxpUeY/exec'
	},
	members:{
		robowar:4,
		roboranger:4,
		robofifa:4,
		chasethemaze:2,
		linefollower:2,
		dota:5,
		cs:5,
		fifa:1,
		nfs:1,
		milimitia:2,
		chess:1,
		enigma:3,
		treasurehunt:3,
		bigshow:3,
		circuitdesign:3,
		catia:2,
		mathemania:2,
		codefiesta:2	
	},
	member_count:4,
	current_event:'robowar',
  },
  methods:{
  	load:function(eventName){
  		app.member_count=this.members[eventName]
  		app.current_event=eventName
  	}
  }
})