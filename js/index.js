	toggle=0;
		function hidefooter(){
			if(toggle==0){
				toggle=1;
				$('body').css('overflow-y', 'auto');
			}else{
				toggle=0;
				$('body').css('overflow-y', 'hidden');
			}
		}