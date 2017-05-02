toggle=0;
		function hidefooter(){
			if(toggle==0){
				toggle=1;
				$('body').css('overflowY', 'auto');
			}else{
				toggle=0;
				$('body').css('overflowY', 'auto');
			}
		}